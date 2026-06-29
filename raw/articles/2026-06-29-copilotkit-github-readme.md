---
source_id: auto-2026-06-29-copilotkit-github-readme
title: CopilotKit GitHub README
url: https://github.com/CopilotKit/CopilotKit
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# CopilotKit GitHub README

> AI Agent 前端基础设施，让 Agent 能直接在你的应用界面里渲染按钮、表单、图表

## 核心定位

CopilotKit 是一个 best-in-class SDK，用于构建全栈 agentic 应用、生成式 UI 和聊天应用。

**核心价值**：What started as a React library is now a multi-platform agentic framework — the same agent can power your web app, your mobile app, and your team's Slack workspace.

## 关键特性

### 1. Chat UI
- 完全可定制的聊天界面
- 支持消息流、工具调用和 Agent 响应

### 2. Backend Tool Rendering
- 支持 Agent 调用后端工具
- 返回的 UI 组件直接在客户端渲染

### 3. Generative UI
- 允许 Agent 在运行时动态生成和更新 UI 组件
- 基于用户意图和 Agent 状态

### 4. Shared State
- 同步状态层
- Agent 和 UI 组件都能实时读写

### 5. Human-in-the-Loop
- 允许 Agent 暂停执行
- 请求用户输入、确认或编辑后再继续

### 6. Self-Learning Agents (early access)
- 通过上下文强化学习（CLHF）持续改进
- 从用户反馈中自动学习
- 无需模型微调

## 平台支持

| 平台 | 状态 |
|------|------|
| React / Next.js | ✅ GA |
| Angular | ✅ Supported |
| Vue | ✅ Supported |
| React Native | ✅ Supported |
| Slack / MS Teams / Discord / Google Chat | 🟡 Beta |

## AG-UI Protocol

CopilotKit 是 AG-UI 协议的发起方，该协议已被：
- Google
- LangChain
- AWS
- Microsoft
- Mastra
- PydanticAI

采用。

架构原则：**One agent backend. Every frontend.** — AG-UI 处理 wire protocol，CopilotKit 处理各框架的 UI 层。

## 技术栈

- TypeScript: 78.2%
- MDX: 7.8%
- Python: 6.9%
- Shell: 1.3%
- C#: 1.3%
- CSS: 1.2%

## 使用统计

- Used by 1.7k+ 项目
- 1,386 releases
- 12,236 commits
- 287 branches

## 快速开始

```bash
npx copilotkit@latest create
```

安装 Agent Skills：
```bash
npx copilotkit@latest skills install
```

## 许可

MIT License
