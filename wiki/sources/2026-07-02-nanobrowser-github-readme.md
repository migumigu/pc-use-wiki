---
tags: [Nanobrowser, browser_control, chrome_extension, multi_agent]
created: 2026-07-02
updated: 2026-07-02
sources: ["raw/articles/2026-07-02-nanobrowser-github-readme.md"]
---

# Nanobrowser GitHub README

> 开源AI网页自动化工具，Chrome扩展形式运行，多智能体系统，OpenAI Operator免费替代方案

## 核心信息

- **项目名称**：Nanobrowser
- **开源协议**：Apache-2.0
- **浏览器支持**：Chrome、Edge（完全支持）；Firefox、Safari（不支持）
- **LLM支持**：OpenAI、Anthropic、Gemini、Ollama、Groq、Cerebras、Llama、自定义OpenAI-Compatible

## 关键特性

- **多智能体系统**：Planner（推理规划）+ Navigator（网页导航）协作
- **交互式侧边栏**：实时状态更新的聊天界面
- **任务自动化**：重复网页任务自动化
- **上下文跟进**：支持后续问题追问
- **会话历史**：访问和管理交互历史

## 架构设计

```
用户输入 → Planner（推理规划）→ Navigator（执行操作）→ 结果反馈 → 迭代优化
```

## 定位

- OpenAI Operator 的免费替代方案
- 强调隐私保护，所有操作在本地浏览器完成
- 完全开源，透明可审计

## 相关页面

- [[Nanobrowser]]
- [[浏览器控制]]
- [[browser-use]]
- [[agent-browser]]