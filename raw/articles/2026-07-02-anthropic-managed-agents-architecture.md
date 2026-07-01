---
source_id: auto-2026-07-02-anthropic-managed-agents
title: Anthropic Managed Agents Architecture 深度分析
url: https://www.anthropic.com/engineering/managed-agents
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Anthropic Managed Agents Architecture

> 完整的托管式 Agent 运行平台 — 从模型供应商到 Agent 基础设施平台公司

## 发布背景

- **发布日期**: 2026年4月8日，公开测试
- **定位**: 不是新模型、不是轻量 SDK，而是完整的托管式 Agent 运行平台
- **核心转变**: Anthropic 从单纯的模型供应商，转型为 Agent 基础设施平台公司

## 演进路径

| 阶段 | 时期 | 核心思路 |
|------|------|----------|
| 阶段一 | 早期 | 长上下文（Long Context）被当成主要抓手 |
| 阶段二 | 2024-2025 | Agent 拆分为 workflow 和 autonomous loop |
| 阶段三 | 2025 | 工具、上下文、安全成为主战场 |
| 阶段四 | 2026 | Agent Runtime 的稳定接口 |

## 核心架构：Brain-Hands-Session 三组件

| 组件 | 职责 | 接口定义 |
|------|------|----------|
| **Brain** | Claude + Harness（推理决策循环） | 调用 Hands 的唯一入口 |
| **Hands** | Sandbox + Tools（执行环境） | `execute(name, input) → string` |
| **Session** | 持久化的 Event Log（状态记录） | append-only，独立于模型进程 |

### Session 层（Session-as-Event-Log）

- 不是存在 Redis 里的 JSON blob，而是结构化的、带全局唯一 trace_id 的事件流
- append-only，独立于任何模型推理过程
- 恢复机制：harness 崩溃后 `awake(sessionId)` 自动从最后一条成功事件处恢复
- 审计能力：每个事件条目嵌入 caller_ip、user_id、tool_name、credential_scope

### Harness 层（Harness-as-Stateless-Executor）

- 极简调度器：接收 `execute(tool_name, input)` 请求，调用对应容器，返回字符串输出
- 不存任何中间状态，不解析工具返回的 JSON 结构
- 只做一件事：可靠地把 input 交给 container，把 output 拿回来
- 代码量可能不到 300 行

### Sandbox 层（Cattle, not pets）

- 每个 tool call 启动一个全新 microVM（基于 Firecracker），执行完立即销毁
- 凭证通过安全 Vault 注入，永远不以环境变量形式暴露给 agent 进程
- 文件系统和网络隔离：模型生成代码必须按不可信代码处理

## 三个资源抽象

| 资源 | 定义 | 特性 |
|------|------|------|
| **Agent** | 配置：模型、系统 prompt、工具、MCP servers | 定义一次，多次复用 |
| **Environment** | 执行环境：云沙箱或自托管沙箱 | 定义一次，多次复用 |
| **Session** | 一次运行：Agent + Environment 绑定 | 承载每次真实运行 |

## 关键架构决策

### Pet → Cattle 转变

旧架构问题：
1. Session 脆弱性：容器死亡 → Session 丢失
2. 安全边界固化：不可信代码能访问同一容器内的凭据
3. VPC 耦合：客户要接自己 VPC，只能 peering 网络

### Context Anxiety 案例

- Claude Sonnet 4.5 在接近上下文窗口上限时会过早完成任务
- Harness 加了 context reset 机制
- 到 Claude Opus 4.5，这个行为消失了，reset 逻辑变成额外开销
- **核心教训**: Harnesses encode assumptions that go stale as models improve.

### 凭证安全设计

- Vault + Proxy 模式：凭据放进独立 Vault，由 proxy 按需取用
- 零信任凭证注入：执行环境无法直接读取长期凭证

### 延迟优化

- Claude 先开始推理，沙箱并行拉起
- 首 token 延迟 p50 降低约 60%，p95 降低超过 90%

## 竞品对比

| 维度 | Anthropic Managed Agents | OpenAI Agents SDK | Google ADK | AWS AgentCore |
|------|-------------------------|-------------------|------------|---------------|
| 类型 | 托管运行时 | 开发框架 | 开发框架+平台 | 托管运行时 |
| 核心抽象 | Brain/Hands/Session | Agent/Handoff | Seq/Parallel/Loop | Request-Response |
| 状态管理 | Session-as-Event-Log | 基础 | 较强 | 超长 Session |
| 沙箱隔离 | microVM (Firecracker) | Code Interpreter | 云沙箱 | microVM |
| 凭证安全 | Vault + Proxy | 基础 | Google IAM | AWS IAM |
| 模型绑定 | Claude | OpenAI 优先 | Gemini 优先 | 多模型 |
