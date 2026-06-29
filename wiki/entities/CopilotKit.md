---
tags: [CopilotKit, frontend, agentic-application, Generative-UI, AG-UI]
created: 2026-06-29
updated: 2026-06-29
sources: [2026-06-29-copilotkit-github-readme]
---

# CopilotKit

> 一句话摘要：AI Agent 前端基础设施框架，让 Agent 能直接在应用界面中渲染 UI、共享状态、实现人机协作。

## 定义

<!-- confidence: EXTRACTED -->

CopilotKit 是 best-in-class SDK，用于构建全栈 agentic 应用、生成式 UI 和聊天应用。核心贡献是 **AG-UI 协议**，已被 Google、Microsoft、AWS 等主流厂商采纳。

**定位**：Build agent-native applications — on any framework, on any surface.

## 核心架构

### 技术栈

```
Frontends (React/Angular/Vue/React Native)
         │
         ▼
   CopilotKit SDK
(Chat UI / Generative UI / Shared State / Human-in-Loop)
         │
         ▼
   AG-UI Protocol
(Event-based / 16 Event Types / Transport Flexible)
         │
         ▼
Agent Backends (LangGraph/CrewAI/Mastra/PydanticAI/...)
```

### 关键组件

1. **Chat UI** — 可定制聊天界面，支持消息流和工具调用
2. **Backend Tool Rendering** — Agent 调用后端工具，UI 直接在前端渲染
3. **Generative UI** — Agent 运行时动态生成和更新 UI 组件
4. **Shared State** — Agent 和 UI 双向同步状态
5. **Human-in-the-Loop** — Agent 暂停等待用户输入/确认
6. **Self-Learning** — 通过用户反馈持续强化学习（CLHF）

## 平台支持

| 平台 | 状态 |
|------|------|
| React / Next.js | ✅ GA |
| Angular | ✅ Supported |
| Vue | ✅ Supported |
| React Native | ✅ Supported |
| Slack / MS Teams / Discord / Google Chat | 🟡 Beta |

## 生态集成

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

## 技术指标

- TypeScript: 78.2%
- MDX: 7.8%
- Python: 6.9%
- 12,236 commits
- 1,386 releases
- Used by 1.7k+ 项目

## 与 Agent PC 控制的关系

CopilotKit 为 Agent PC 控制提供了用户交互层基础设施：

1. **界面抽象**：统一 Agent 与用户界面的交互方式
2. **状态管理**：Shared State 机制可用于跨 Agent 状态同步
3. **工具调用**：Backend Tool Rendering 机制可扩展为 PC 控制工具
4. **Human-in-the-Loop**：PC 控制场景下的人类确认机制

## 相关页面

- [[AG-UI Protocol]]
- [[Agent集成层]]
- [[MCP]]
- [[Generative UI]]
- [[Human-in-the-Loop]]
