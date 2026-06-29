---
source_id: auto-2026-06-29-a2a-protocol-homepage
title: A2A Protocol Official Documentation Site
url: https://a2a-protocol.org/
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# A2A Protocol Official Documentation

## 官方定位

A2A（Agent2Agent）是一个开放标准，由 Google 开发，现已捐赠给 Linux Foundation。A2A 为构建由不同框架和供应商开发的 Agent 应用程序提供通用通信语言。

## Agent 技术栈

```
ADK（或任何框架）+ MCP（或任何工具）+ A2A（与远程/本地 Agent 和人类通信）
```

## 核心价值

### 1. 互操作性（Interoperability）
连接在不同平台上构建的 Agent（LangGraph、CrewAI、Semantic Kernel、自定义解决方案），创建强大的复合 AI 系统。

### 2. 复杂工作流（Complex Workflows）
使 Agent 能够委托子任务、交换信息、协调行动，解决单一 Agent 无法处理的复杂问题。

### 3. 安全与不透明（Secure & Opaque）
Agent 交互无需共享内部内存、工具或专有逻辑，确保安全性并保护知识产权。

## A2A 与 MCP 的协作

```
┌─────────────────────────────────────────────────────────┐
│                    AI Agent System                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   MCP: Agent-to-Tool Communication                       │
│   - 标准化 Agent 如何连接工具、API 和资源                 │
│                                                          │
│   A2A: Agent-to-Agent Communication                     │
│   - 作为通用去中心化标准，充当 Agent 的"公共互联网"       │
│   - 允许 AI Agent（包括使用 MCP 的 Agent）互操作          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 入门资源

- **视频**：8 分钟入门
- **课程**：DeepLearning.AI - A2A 入门
- **规范**：完整协议规范
- **教程**：Python 快速开始
- **SDK**：Python、JavaScript、Java、C#/.NET、Golang

## 官方示例仓库

- GitHub Samples：https://github.com/a2aproject/a2a-samples
