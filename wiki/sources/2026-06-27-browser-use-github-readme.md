---
tags: [素材摘要, 官方文档]
created: 2026-06-27
updated: 2026-06-27
sources: []
source_type: 文章
source_path: raw/articles/2026-06-27-browser-use-github-readme.md
images: 0
image_paths: []
---

# browser-use GitHub README

> browser-use 是让 AI Agent 理解自然语言指令并自主完成浏览器操作的核心开源项目

## 基本信息

- **来源类型**：文章（GitHub 官方 README）
- **原文位置**：raw/articles/2026-06-27-browser-use-github-readme.md
- **消化日期**：2026-06-27
- **控制对象分类**：浏览器控制
- **技术层级**：工具实现层

## 核心观点

1. **AI 驱动的浏览器自动化**：browser-use 通过集成大语言模型（LLM），让 AI Agent 能够理解自然语言指令并自主完成浏览器操作任务
2. **降低使用门槛**：相比传统 Playwright/Puppeteer 需要编写代码，browser-use 实现了"会说话就能控制浏览器"的愿景
3. **开源免费**：项目采用 MIT 许可证，GitHub 获得 95K+ Stars
4. **多 LLM 支持**：支持 OpenAI、Google（Gemini）、Anthropic（Claude）以及本地模型（Ollama）
5. **商业云服务可选**：提供 Browser Use Cloud 服务，支持隐身浏览器、CAPTCHA 解决、代理轮换

## 关键概念

- [[browser-use]]
- [[LLM]]
- [[Playwright]]
- [[浏览器自动化]]
- [[Agent]]

## 与其他素材的关联

- 与 [[browser-use-技术架构分析]] 的关系：本文提供官方 README 层面的介绍，后者提供深度技术分析
- 与 [[browser-use vs Playwright MCP]] 的关系：本文展示官方定位，后者提供与其他工具的对比视角

## 原文精彩摘录

> browser-use enables AI agents to use websites like a human would - by looking at the page and clicking, typing, and scrolling just like a person would. The agent is given a task in natural language and then:
> 1. Takes screenshots
> 2. Extracts interactive elements
> 3. Decides which elements to interact with
> 4. Performs actions
> 5. Evaluates if the task is done

> Tell your computer what to do, and it gets it done.

## 相关页面

- [[browser-use]]（实体页）
- [[浏览器控制]]（主题页）
- [[browser-use-技术架构分析]]
- [[browser-use vs Playwright MCP]]