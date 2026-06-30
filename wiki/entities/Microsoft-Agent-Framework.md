---
tags: [microsoft, agent-framework, maf, dotnet, python, multi-agent, workflow, orchestration]
created: 2026-07-01
updated: 2026-07-01
sources: [auto-2026-07-01-maf-github-readme, auto-2026-07-01-maf-architecture-analysis, auto-2026-07-01-windows-agent-strategy]
---

# Microsoft Agent Framework (MAF)

> 微软的企业级 AI Agent 开发框架，统一 Semantic Kernel 和 AutoGen，提供五层架构、Agent/Workflow 职责分离、原生 MCP + A2A 协议支持

## 基本信息

| 属性 | 值 |
|------|-----|
| **发布** | 2026 年 4 月 3 日（MAF 1.0 GA） |
| **继承者** | Semantic Kernel + AutoGen |
| **语言** | Python 51.3%, C# 45.6% |
| **Commits** | 2,435 |
| **Releases** | 97 |
| **官方链接** | https://github.com/microsoft/agent-framework |

## 核心定位

Microsoft Agent Framework (MAF) 是一个开放的、多语言的框架，用于在 .NET 和 Python 中构建**生产级 AI Agent 和多 Agent 工作流**。它是 Semantic Kernel 和 AutoGen 这两个累计 75,000+ Stars 的项目的统一继承者。

## 五层架构

| 层级 | 组件 | 核心职责 |
|------|------|----------|
| L5 | Orchestration & Workflow Layer | 图结构工作流引擎，可检查点多智能体编排 |
| L4 | Agent Layer (AIAgent) | 厂商中立的统一智能体抽象 |
| L3 | Kernel Layer (Semantic Kernel) | 基础能力支撑层 |
| L2 | Abstractions Interface (MEAI) | 标准抽象层（IChatClient 等） |
| L1 | Service Connectors | 服务连接器（Azure OpenAI、OpenAI、Anthropic 等） |

## Agent/Workflow 职责分离

| 维度 | 职责定位 | 实现方式 |
|------|----------|----------|
| Agent（智能体） | 推理与理解 | 利用 LLM 解释输入，自主决定调用哪些工具 |
| Workflow（工作流） | 执行策略与控制流 | 通过代码级有向图定义执行边界 |

**本质**：Agent 只负责"想"，Workflow 只负责"走"。

## 核心能力

### 编排模式

- Sequential（顺序）
- Concurrent（并发）
- Handoff（交接）
- Group Collaboration（群组协作）

### 内置特性

- 检查点持久化（Checkpointing）
- 水合恢复（Hydration）
- 流式处理
- 人在循环
- 时间旅行
- OpenTelemetry 集成

### BUILD 2026 新能力

- **Agent Harness**：自动 context compaction、FileMemory、Todo
- **CodeAct**：-52.4% 时间，-63.9% Token
- **Foundry Hosted Agents**：scale-to-zero 计费
- **Handoff 编排 1.0**：路由 → 专家 → 回退/转接

## 与同类框架对比

| 维度 | MAF | LangGraph | AutoGen (旧) |
|------|-----|-----------|--------------|
| 多语言 | ✅ .NET + Python | ❌ Python | ✅ Python |
| 生产就绪 | ✅ 1.0 GA | ⚠️ 部分 | ⚠️ 维护模式 |
| 协议集成 | MCP + A2A 原生 | ❌ | ❌ |
| 工作流持久化 | ✅ DurableTask | ⚠️ 有限 | ❌ |

## 适用场景

✅ **最适合**：
1. 企业级多 Agent 系统
2. 需要长运行流程的编排
3. .NET 团队的 AI 转型
4. 需要 MCP/A2A 协议集成的场景

❌ **不适合**：
1. 非 .NET/Python 项目
2. 简单单 Agent 任务
3. 需要完全厂商中立的项目

## 相关页面

- [[Agent集成层]] — Agent 集成层主题
- [[A2A]] — Agent-to-Agent Protocol
- [[MCP]] — Model Context Protocol
- [[Semantic-Kernel]] — MAF 的基础能力层
- [[AutoGen]] — MAF 的前身之一
- [[Multi-Agent协作]] — 多 Agent 协作主题
