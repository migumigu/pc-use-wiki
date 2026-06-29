---
tags: [AG-UI, protocol, event-driven, agent-user-interaction]
created: 2026-06-29
updated: 2026-06-29
sources: []
---

# AG-UI Protocol GitHub README

> 一句话摘要：Agent-User Interaction Protocol，将 AI Agent 接入用户面向应用的标准协议，实现 Agent 与用户界面的实时交互。

## 基本信息

- **来源**：https://github.com/ag-ui-protocol/ag-ui
- **作者**：AG-UI Protocol 团队（CopilotKit 发起）
- **素材类型**：GitHub README
- **控制对象**：Agent集成层
- **技术层级**：协议层

## 核心观点

1. **协议定位**：AG-UI is an open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications.

2. **协议栈位置**：
   - MCP — 给 Agent 提供工具
   - A2A — Agent 与 Agent 之间的通信
   - AG-UI — 将 Agent 接入用户面向应用

3. **核心特性**：
   - Real-time agentic chat with streaming
   - Bi-directional state synchronization
   - Generative UI and structured messages
   - Real-time context enrichment
   - Frontend tool integration
   - Human-in-the-loop collaboration

4. **技术特点**：
   - 16+ 标准事件类型
   - 支持 SSE、WebSockets、webhooks 等传输协议
   - 灵活中间件层
   - 提供 HTTP 参考实现

5. **生态支持**：
   - 合作伙伴：LangGraph, CrewAI
   - 一级集成：Microsoft Agent Framework, Google ADK, AWS Strands, Mastra, PydanticAI, Agno, LlamaIndex, AG2
   - 社区：Claude Agent SDK, Langroid

## 技术指标

- Python: 30.9%
- TypeScript: 30.6%
- C#: 9.0%
- Dart: 6.8%
- Kotlin: 6.6%
- Java: 3.9%
- 2,547 commits
- Used by 110+ 项目

## SDK 支持

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

## 关键概念

- [[AG-UI Protocol]] — 自身
- [[MCP]] — 工具层协议
- [[A2A]] — Agent 间通信协议
- [[Event-Driven]] — 事件驱动架构

## 相关页面

- [[CopilotKit]]
- [[Agent集成层]]
- [[MCP]]
