---
tags: [AG-UI, protocol, event-driven, agent-user-interaction, standard]
created: 2026-06-29
updated: 2026-06-29
sources: [2026-06-29-ag-ui-protocol-readme]
---

# AG-UI Protocol

> 一句话摘要：Agent-User Interaction Protocol，将 AI Agent 接入用户面向应用的标准协议，实现 Agent 与用户界面的实时交互。

## 定义

<!-- confidence: EXTRACTED -->

AG-UI is an open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications.

**核心特点**：Built for simplicity and flexibility, it enables seamless integration between AI agents, real time user context, and user interfaces.

## 协议栈位置

AG-UI 是三大 Agent 协议之一：

| 协议 | 作用 | 代表 |
|------|------|------|
| **MCP** | 给 Agent 提供工具 | Anthropic |
| **A2A** | Agent 与 Agent 之间的通信 | 多个厂商 |
| **AG-UI** | 将 Agent 接入用户面向应用 | CopilotKit |

## 核心功能

1. **Real-time agentic chat with streaming** — 实时聊天与流式响应
2. **Bi-directional state synchronization** — 双向状态同步
3. **Generative UI and structured messages** — 生成式 UI 与结构化消息
4. **Real-time context enrichment** — 实时上下文增强
5. **Frontend tool integration** — 前端工具集成
6. **Human-in-the-loop collaboration** — 人类在环协作

## 技术架构

### 事件模型

During agent executions, agent backends **emit events compatible with one of AG-UI's ~16 standard event types**.

Agent backends can **accept one of a few simple AG-UI compatible inputs** as arguments.

### 传输层

- Works with **any event transport** (SSE, WebSockets, webhooks, etc.)
- Allows for **loose event format matching**, enabling broad agent and app interoperability
- Ships with a **reference HTTP implementation** and **default connector**

## 生态支持

### 合作伙伴 (Partnerships)
- LangGraph
- CrewAI

### 一级集成 (1st Party)
- Microsoft Agent Framework
- Google ADK
- AWS Strands Agents
- Mastra
- PydanticAI
- Agno
- LlamaIndex
- AG2
- AWS Bedrock AgentCore

### 社区集成 (Community)
- Claude Agent SDK
- Langroid
- OpenAI Agent SDK (In Progress)
- Cloudflare Agents (In Progress)

## 多语言 SDK

| 语言 | 状态 |
|------|------|
| TypeScript | 1st Party |
| Python | 1st Party |
| Kotlin | Community |
| Golang | Community |
| Dart | Community |
| Java | Community |
| Rust | Community |
| Ruby | Community |
| C++ | Community |
| .NET | In Progress |
| Nim | In Progress |

## 技术指标

- Python: 30.9%
- TypeScript: 30.6%
- C#: 9.0%
- Dart: 6.8%
- Kotlin: 6.6%
- Java: 3.9%
- 2,547 commits
- 129 branches
- 113 tags
- 29 releases
- Used by 110+ 项目

## 相关页面

- [[CopilotKit]]
- [[MCP]]
- [[A2A]]
- [[Agent集成层]]
