---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: github_readme
source_path: raw/articles/2026-06-28-page-agent-github-readme.md
images: 0
image_paths: []
---

# Page Agent - GitHub README

> 阿里巴巴开源的页面内 GUI Agent，让任意 Web 应用通过自然语言被 AI 控制

## 基本信息

- **来源类型**：GitHub README（文章）
- **原文位置**：raw/articles/2026-06-28-page-agent-github-readme.md
- **消化日期**：2026-06-28

## 核心观点

1. **页面内运行**：Page Agent 是一款运行在网页内部的 GUI Agent，无需浏览器扩展、Python 或无头浏览器，仅需页面内 JavaScript 即可完成所有操作

2. **基于文本的 DOM 操作**：不依赖截图和多模态 LLM，通过文本和语义结构理解 Web 页面，降低了技术门槛

3. **自带 LLM 支持**：支持用户自带大语言模型，可接入 OpenAI-compatible API、Ollama 等

4. **多扩展支持**：可选 Chrome 扩展支持多标签页任务，提供 MCP Server (Beta) 用于外部控制

5. **构建于 browser-use 之上**：DOM 处理组件和 prompt 来自 browser-use 项目（Gregor Zunic 开发，MIT License）

## 关键概念

- [[page-agent]] — 阿里巴巴开源的页面内 GUI Agent
- [[browser-use]] — Page Agent 的底层 DOM 处理依赖
- [[MCP]] — 页面控制的协议标准化
- [[阿里巴巴]] — page-agent 开发团队

## 与其他素材的关联

- 与 [[browser-use GitHub README]] 的关系：page-agent 构建于 browser-use 之上，DOM 处理组件和 prompt 来自 browser-use
- 与 [[browser-use 技术架构分析]] 的关系：两者都涉及浏览器自动化技术栈
- 与 [[page-agent MCP Server 文档]] 的关系：MCP Server 是 page-agent 的外部扩展能力

## 原文精彩摘录

> Page Agent 是一款**运行在网页内部的 GUI Agent**，让任意 Web 应用通过自然语言被 AI 控制。

> 无需浏览器扩展 / Python / 无头浏览器，仅需页面内 JavaScript，所有操作在网页内完成。

> PageAgent 专为**客户端 Web 增强**设计，而非服务端自动化。

## 相关页面

- [[browser-use]]（实体页）
- [[browser-use GitHub README]]（素材摘要）
- [[浏览器控制]]（主题页）
