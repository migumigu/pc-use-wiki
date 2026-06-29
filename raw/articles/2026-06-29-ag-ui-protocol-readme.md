---
source_id: auto-2026-06-29-ag-ui-protocol
title: AG-UI Protocol GitHub README
url: https://github.com/ag-ui-protocol/ag-ui
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# AG-UI Protocol GitHub README

> Agent-User Interaction Protocol — 将 AI Agent 接入用户面向应用的标准协议

## 核心定位

AG-UI is an open, lightweight, event-based protocol that standardizes how AI agents connect to user-facing applications.

## 协议栈位置

AG-UI 是三大 Agent 协议之一：

| 协议 | 作用 |
|------|------|
| **MCP** | 给 Agent 提供工具（Model Context Protocol） |
| **A2A** | Agent 与 Agent 之间的通信（Agent to Agent） |
| **AG-UI** | 将 Agent 接入用户面向应用（Agent-User Interaction） |

## 核心特性

1. **Real-time agentic chat with streaming** — 实时聊天与流式响应
2. **Bi-directional state synchronization** — 双向状态同步
3. **Generative UI and structured messages** — 生成式 UI 与结构化消息
4. **Real-time context enrichment** — 实时上下文增强
5. **Frontend tool integration** — 前端工具集成
6. **Human-in-the-loop collaboration** — 人类在环协作

## 技术特点

- **轻量级**：轻量级传输，支持 SSE、WebSockets、webhooks 等
- **事件驱动**：16 种标准事件类型
- **灵活中间件**：兼容多种传输协议和事件格式
- **参考实现**：提供 HTTP 实现和默认连接器

## 生态支持

### 合作伙伴 (Partnerships)
- LangGraph ✅
- CrewAI ✅

### 一级集成 (1st Party)
- Microsoft Agent Framework ✅
- Google ADK ✅
- AWS Strands Agents ✅
- Mastra ✅
- PydanticAI ✅
- Agno ✅
- LlamaIndex ✅
- AG2 ✅
- AWS Bedrock Agents 🛠️ In Progress

### 社区集成 (Community)
- Claude Agent SDK ✅
- Langroid ✅
- OpenAI Agent SDK 🛠️ In Progress
- Cloudflare Agents 🛠️ In Progress

## SDK 支持

| 语言 | 状态 |
|------|------|
| TypeScript | ✅ 1st Party |
| Python | ✅ 1st Party |
| Kotlin | ✅ Community |
| Golang | ✅ Community |
| Dart | ✅ Community |
| Java | ✅ Community |
| Rust | ✅ Community |
| Ruby | ✅ Community |
| C++ | ✅ Community |
| .NET | 🛠️ In Progress |
| Nim | 🛠️ In Progress |

## 使用统计

- 2,547 commits
- 129 branches
- 113 tags
- 29 releases
- Used by 110+ 项目

## 许可

MIT License
