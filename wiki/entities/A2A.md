---
tags: [A2A, Agent2Agent, Protocol, Google, Linux-Foundation, Multi-Agent]
created: 2026-06-29
updated: 2026-06-29
sources:
  - wiki/sources/2026-06-29-a2a-protocol-github.md
  - wiki/sources/2026-06-29-a2a-protocol-homepage.md
  - wiki/sources/2026-06-29-a2a-python-sdk.md
  - wiki/sources/2026-06-29-a2a-key-concepts.md
---

# A2A Protocol

> Google 发布的 Agent 间通信开放协议，实现不同框架构建的 AI Agent 之间的互操作性与协作

## 一句话概括

A2A（Agent-to-Agent）Protocol 是 Google 于 2025 年 4 月发布的开放协议，现已捐赠给 Linux Foundation，旨在建立"智能体互联网"，使不同框架（LangGraph、CrewAI、Semantic Kernel 等）构建的 AI Agent 能够互相通信和协作。

## 核心特性

| 特性 | 描述 |
|------|------|
| **标准化通信** | JSON-RPC 2.0 over HTTP(S) |
| **Agent 发现** | 通过 Agent Card 机制发现可用 Agent |
| **交互模式** | 支持同步请求/响应、SSE 流式传输、异步推送通知 |
| **数据交换** | 支持 text、file（raw/url）、structured data |
| **企业级** | OAuth、API Key、端到端加密可选 |

## 与 MCP 的互补关系

```
┌─────────────────────────────────────────────────────────────┐
│                    AI Agent System                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   MCP: Agent-to-Tool Communication                          │
│   - 标准化 Agent 如何连接工具、API 和资源                     │
│   - "我亲自干活，工具辅助"                                   │
│                                                              │
│   A2A: Agent-to-Agent Communication                        │
│   - 作为通用去中心化标准，充当 Agent 的"公共互联网"          │
│   - "我指挥你干活"                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 核心组件

| 组件 | 作用 |
|------|------|
| **Agent Card** | JSON 元数据文档，描述 Agent 的身份、能力、端点、技能和认证要求 |
| **Task** | 有状态工作单元，具有唯一 ID 和定义的生命周期 |
| **Message** | 单轮通信，包含内容和角色（"user" 或 "agent"） |
| **Part** | 基本内容容器，支持 text/raw/url/data |
| **Artifact** | tangible 输出（文档、图像等） |

## 协议版本

| 版本 | 发布日期 | 主要特性 |
|------|----------|----------|
| v0.3 | 2025-04-09 | 初始版本，JSON-RPC + HTTP |
| v1.0 | 2026-01 | 新增 gRPC 传输、丰富错误详情 |
| v1.1 | 2026-05-29 | SDK 改进 |

## SDK 支持

| SDK | 语言 | 状态 |
|-----|------|------|
| **a2a-python** | Python | v1.1.0，官方主 SDK |
| **a2a-js** | JavaScript | 官方 |
| **a2a-java** | Java | 官方 |
| **a2a-dotnet** | C#/.NET | 官方 |
| **a2a-go** | Golang | 官方 |

## 技术定位

A2A Protocol 位于 Agent 集成层的**协议层**，与以下组件协作：

- **上层**：Agent 框架（LangGraph、CrewAI、ADK）
- **下层**：工具协议（MCP）
- **同层**：AG-UI Protocol（用户交互协议）

## 相关页面

- [[MCP]] — Model Context Protocol，Agent 到工具的连接协议
- [[AG-UI-Protocol]] — Agent-User Interaction Protocol，用户交互协议
- [[Multi-Agent协作]] — 多 Agent 协同工作的系统架构
- [[Agent集成层]] — Agent 与外部工具和系统集成的技术与协议
