---
tags: [实体, 概念]
created: 2026-06-27
updated: 2026-06-27
sources:
  - wiki/sources/2026-06-27-browser-use-research-report.md
  - wiki/sources/2026-06-27-browser-use-docs-index.md
---

# Agent（AI Agent）

> 能够自主理解任务、执行操作、评估结果的智能代理

## 简介

AI Agent 是能够自主理解自然语言任务、规划执行步骤、与外部世界交互并评估执行结果的智能代理系统。在 browser-use 中，Agent 负责将自然语言指令转换为浏览器操作序列。

## 关键信息

- **类型**：概念（AI 系统架构）
- **领域**：人工智能 / Agent 系统

## Agent 的核心能力

1. **任务理解**：理解自然语言任务描述
2. **任务规划**：分解为可执行的步骤序列
3. **执行控制**：调用工具执行操作
4. **结果评估**：判断是否达到目标
5. **错误恢复**：处理异常并重试

## Agent 工作流程

```
1. 接收自然语言任务
2. LLM 理解任务意图
3. 规划操作步骤
4. 执行操作（调用工具）
5. 评估执行结果
6. 决定下一步或结束
```

## browser-use 中的 Agent

在 browser-use 中，Agent 组件包括：
- **Agent Controller**：负责任务分解、执行控制、错误处理
- **LLM Core**：理解用户意图、规划操作序列、评估执行结果
- **DOM Extractor**：提取可交互元素供 LLM 分析

## 相关页面

- [[browser-use]]
- [[LLM]]
- [[Agent集成层]]