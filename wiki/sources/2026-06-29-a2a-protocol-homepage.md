---
tags: [A2A, Documentation, Protocol, source]
created: 2026-06-29
updated: 2026-06-29
sources: []
---

# A2A Protocol Official Documentation Site

> 官方文档站点，完整描述 A2A Protocol 的定位、价值和与 MCP 的互补关系

## 素材摘要

**官方定位**：A2A 是 Google 开发的开放标准，现已捐赠给 Linux Foundation，为构建由不同框架和供应商开发的 Agent 应用程序提供通用通信语言。

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

A2A 和 MCP 是互补标准，共同构建健壮的 Agent 应用：

- **MCP**：提供 Agent 到工具的通信，标准化 Agent 如何连接工具、API 和资源
- **A2A**：提供 Agent 到 Agent 的通信，作为通用去中心化标准，充当 Agent 的"公共互联网"

## 入门资源

- **视频**：8 分钟入门
- **课程**：DeepLearning.AI - A2A 入门
- **规范**：完整协议规范
- **教程**：Python 快速开始
- **SDK**：Python、JavaScript、Java、C#/.NET、Golang

## 相关页面

- [[A2A]] — A2A Protocol 实体页
