---
tags: [OpenAI, Agents SDK, multi-agent, 框架, Agent集成层]
created: 2026-07-01
updated: 2026-07-01
sources:
  - wiki/sources/2026-07-01-openai-agents-sdk-github-readme.md
  - wiki/sources/2026-07-01-openai-agents-sdk-major-update.md
  - wiki/sources/2026-07-01-openai-agents-sdk-runtime-architecture.md
  - wiki/sources/2026-07-01-langgraph-vs-openai-agents-vs-google-adk.md
---

# OpenAI Agents SDK

> 一句话摘要：OpenAI 官方轻量级多 Agent 工作流构建框架，极简设计，原生支持 MCP 和沙箱执行，2026年最受关注的 Agent 框架之一。

## 定义

<!-- confidence: EXTRACTED -->

OpenAI Agents SDK 是 OpenAI 官方推出的轻量级多 Agent 工作流构建框架，于 2025 年 3 月首次发布，2026 年 4 月 15 日发布重大更新，正式从"实验工具"进化为"生产级 AI Agent 基础设施"。

核心设计哲学是**极简主义**：足够的抽象，不过度封装，几十行代码就能跑起一个有工具调用能力的 Agent。

## 核心架构

### 七层运行时模型

```
┌─────────────────────────────────────────────────────────┐
│                  Work Surfaces 工作表面                  │
│  ┌─────────────────┐     ┌─────────────────────────┐    │
│  │ Sandbox Agents  │     │    Realtime Agents      │    │
│  │  (工作区执行)    │     │     (低延迟语音)        │    │
│  └─────────────────┘     └─────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│                    Memory 记忆层                         │
│  ┌─────────────────┐     ┌─────────────────────────┐    │
│  │    Sessions     │     │   Sandbox Memory        │    │
│  │  (对话历史管理)  │     │   (workspace 经验)      │    │
│  └─────────────────┘     └─────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│                   Control 控制层                         │
│  Guardrails │ HITL │ Approvals │ Handoffs │ Tracing    │
├─────────────────────────────────────────────────────────┤
│                    Tools 工具层                          │
│  Function Tools │ Hosted Tools │ MCP │ Agents as Tools │
├─────────────────────────────────────────────────────────┤
│                  Runtime 运行时层                        │
│  Agent │ Runner │ Run State │ Streaming │ Results      │
└─────────────────────────────────────────────────────────┘
```

### Harness 与 Compute 分离

2026年4月重大更新的核心架构理念：
- **Harness（控制层）**：Agent loop、model call、tool routing、handoff、approval、trace、run state
- **Compute（计算层）**：文件、命令、包、挂载、端口、快照
- 两者解耦，可独立部署

## 核心能力

### Agent 定义与执行
- **Agent**：可运行角色定义（instructions、model、tools、handoffs、guardrails）
- **Runner**：Agent 循环执行引擎（run()、run_sync()、run_streamed()）
- **结构化输出**：Output Type 支持
- **自定义 Hooks**：扩展点

### 工具体系
- **Function Tools**：本地函数包装
- **Hosted Tools**：web search、file search、code interpreter 等（OpenAI 模型）
- **MCP 原生支持**：Streamable HTTP、SSE、stdio 传输
- **Agents as Tools**：把 Agent 当受限工具调用

### 多 Agent 协作
- **Handoff**：任务移交机制，LLM 自动路由
- **Agents as Tools**：manager + specialist 模式
- 上下文自动传递，状态切换与恢复

### 安全与控制
- **Guardrails**：input/output/tool 三级安全检查
- **Human-in-the-Loop**：人工审批机制
- **Manifest 权限清单**：Sandbox 细粒度权限控制
- **沙箱隔离执行**：Native Sandbox（beta）

### 持久化与可观测性
- **Sessions**：对话历史持久化（SQLite、Redis、SQLAlchemy、MongoDB、Dapr）
- **Tracing**：默认启用，结构化事件追踪
- **Usage**：token 消耗统计
- **Eval**：评估框架
- **上下文压缩**：Compaction 防止溢出

### 扩展能力
- **Sandbox Agents**：工作区执行（beta）
- **Realtime Agents**：低延迟语音交互
- **Skills**：技能学习与复用
- **Durable Execution**：持久化执行，断点恢复

## 发展历程

| 阶段 | 时间 | 特点 |
|------|------|------|
| Swarm | 2024 | 实验玩具 |
| Agents SDK 初版 | 2025.3 | 轻量框架 |
| 重大更新 | 2026.4.15 | 企业级 Agent 基础设施 |
| 当前版本 | v0.17.7 / v0.12.0 | 2026.6.24 |

## 与同类框架对比

| 维度 | OpenAI Agents SDK | LangGraph | Google ADK |
|------|-------------------|-----------|------------|
| 上手难度 | 容易 | 中等 | 中等 |
| 状态控制 | 基础 | 最强 | 较强 |
| 多Agent支持 | 优雅 | 成熟 | 原生 |
| 可观测性 | 有限 | LangSmith（最强） | Cloud监控 |
| 生态集成 | OpenAI生态 | LangChain生态 | 企业级 |
| 模型绑定 | OpenAI优先 | 相对自由 | Gemini优先 |

## 适用场景

✅ **最适合**：
1. 快速原型与 MVP 验证
2. OpenAI 生态重度用户
3. 多 Agent 任务路由（客服、技术支持）
4. MCP 工具集成
5. 轻量级生产应用
6. 语音交互应用

❌ **不适合**：
1. 复杂业务流程（多级审批、复杂条件分支）
2. Google Cloud 重度用户
3. 高合规性要求（金融、医疗、法律）
4. 完全避免厂商锁定
5. 企业级平台需求（租户、权限、计费）

## 技术指标

- **语言**：Python（主）、JavaScript/TypeScript
- **许可证**：MIT
- **最新版本**：v0.17.7（Python）/ v0.12.0（JS/TS）
- **GitHub Stars**：20k+（2026年4月数据 21,925，估算值）
- **模型支持**：100+ LLM（通过 LiteLLM/any-llm 兼容层）
- **Sandbox 状态**：beta

## 与 Agent PC 控制的关系

OpenAI Agents SDK 为 Agent PC 控制提供了编排层基础设施：

1. **多 Agent 协作**：Handoff 机制可用于不同控制对象间的任务路由
2. **工具集成**：MCP 原生支持，可接入各类 PC 控制 MCP Server
3. **沙箱执行**：Sandbox 为代码执行和文件操作提供安全隔离
4. **人工介入**：HITL 机制用于 PC 控制的高风险操作确认

## 相关页面

- [[Agent集成层]]
- [[Multi-Agent协作]]
- [[MCP]]
- [[Function Calling]]
- [[Tool Use]]
- [[Microsoft-Agent-Framework]]
- [[Human-in-the-Loop]]
- [[Guardrails]]
- [[Sandbox]]
- [[Tracing]]
