---
tags: [browser_control, chrome_extension, multi_agent, web_automation]
created: 2026-07-02
updated: 2026-07-02
sources: ["raw/articles/2026-07-02-nanobrowser-github-readme.md", "raw/articles/2026-07-02-nanobrowser-technical-analysis.md", "raw/articles/2026-07-02-nanobrowser-use-cases.md", "raw/articles/2026-07-02-nanobrowser-comparison.md"]
---

# Nanobrowser

> 开源AI网页自动化工具，Chrome扩展形式运行，Planner+Navigator双智能体协作系统，OpenAI Operator免费替代方案

## 概述

Nanobrowser 是一款开源的 AI 网页自动化工具，以 Chrome 浏览器扩展形式运行，提供多智能体协作系统。其核心创新在于将 AI Agent 能力直接集成到浏览器中，通过 Planner（规划器）和 Navigator（导航者）双智能体协作实现复杂网页任务自动化。

## 核心架构

```
用户输入 → Planner（推理规划）→ Navigator（执行操作）→ 结果反馈 → 迭代优化
```

### Planner（规划器）

- 负责任务策略制定和调整
- 进行深度推理和规划
- 处理复杂逻辑决策
- 智能自我修正，遇到障碍时动态调整方案

### Navigator（导航者）

- 负责具体的网页导航操作
- 执行 Planner 下达的指令
- 处理页面交互（点击、输入、滚动等）
- 实时反馈执行状态

## 技术栈

- **前端语言**：TypeScript (89.5%), JavaScript (9.4%)
- **构建工具**：pnpm + Turbo
- **框架**：React + Vite
- **扩展架构**：Chrome Extension Manifest V3

## 关键特性

- **多智能体系统**：Planner + Navigator 分工协作
- **自然语言驱动**：用户通过自然语言描述任务
- **多 LLM 支持**：OpenAI、Anthropic、Gemini、Ollama、Groq、Cerebras、Llama、自定义 OpenAI-Compatible
- **实时状态反馈**：侧边栏显示执行进度
- **上下文跟进**：支持后续问题追问
- **会话历史**：访问和管理交互历史
- **浏览器内执行**：操作逻辑在浏览器本地完成

## 浏览器支持

- ✅ Chrome（完全支持）
- ✅ Edge（完全支持）
- ❌ Firefox（不支持）
- ❌ Safari（不支持）

## 适用场景

- **非开发者用户**：需要简单易用的网页自动化工具
- **信息提取任务**：新闻摘要、数据收集、价格监控
- **表单自动化**：重复表单填写
- **网页测试**：功能验证和交互测试

## 局限性

- 仅支持 Chrome/Edge，不支持 Firefox/Safari
- LLM 调用需通过外部 API，数据会离开本地浏览器
- 复杂登录网站操作支持有限
- 不支持验证码处理
- 受浏览器限制，不支持大量并发请求
- 浏览器关闭后任务停止

## 许可证

Apache-2.0

## 相关页面

- [[浏览器控制]]
- [[browser-use]]
- [[agent-browser]]
- [[Playwright]]
- [[Multi-Agent协作]]