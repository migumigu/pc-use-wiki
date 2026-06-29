---
tags: [实体, 概念]
created: 2026-06-27
updated: 2026-06-27
sources:
  - wiki/sources/2026-06-27-browser-use-research-report.md
  - wiki/sources/2026-06-27-browser-use-github-readme.md
---

# LLM（Large Language Model）

> 大语言模型，是 browser-use 等 AI Agent 系统的智能核心

## 简介

LLM（Large Language Model，大语言模型）是 browser-use 等 AI Agent 系统的智能核心，负责理解自然语言指令、规划操作序列、评估执行结果。

## 关键信息

- **类型**：概念（AI 技术）
- **领域**：人工智能 / 大语言模型
- **全称**：Large Language Model（大语言模型）

## browser-use 中的 LLM

在 browser-use 中，LLM 负责：
- **任务理解**：理解用户提供的自然语言任务描述
- **操作规划**：决定需要执行哪些浏览器操作
- **元素决策**：选择要交互的 DOM 元素
- **结果评估**：判断任务是否完成

## LLM 选择

browser-use 支持多种 LLM：
- **ChatBrowserUse()**：专门优化的模型
- **ChatGoogle()**：Google Gemini 系列
- **ChatAnthropic()**：Claude 系列
- **本地模型**：通过 Ollama 支持

## 相关页面

- [[browser-use]]
- [[Agent]]
- [[视觉模型]]