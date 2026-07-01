---
tags: [浏览器自动化, AI-Agent, 计算机视觉, Playwright]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-skyvern-github-readme.md
---

# Skyvern GitHub README

> 基于 LLM 和计算机视觉的浏览器自动化工具，提供 Playwright 兼容 SDK 和无代码工作流构建器

## 核心信息

- **项目地址**: https://github.com/Skyvern-AI/skyvern
- **Stars**: 约 17.6K+（第三方报道）
- **License**: AGPL-3.0（开源核心），云服务含商业功能
- **语言**: Python 3.11-3.13
- **最新版本**: v1.0.43（2026-06-19）
- **WebVoyager 评估**: 85.85%（SOTA）

## 技术亮点

1. **视觉+LLM 驱动**：使用截图+视觉模型理解网页，而非 DOM 解析，布局变化不影响自动化
2. **Playwright 兼容 SDK**：在 Playwright 之上添加 AI 能力，支持三种交互模式（传统选择器/AI驱动/AI回退）
3. **四项核心 AI 命令**：`page.act()`、`page.extract()`、`page.validate()`、`page.prompt()`
4. **Agent 群体架构**：理解Agent → 规划Agent → 执行Agent 的 swarm 协作
5. **零适配**：可在从未见过的网站上操作，无需定制代码

## 架构

- **后端**: Python (FastAPI)
- **浏览器自动化**: Playwright
- **LLM 集成**: LiteLLM（支持 OpenAI、Anthropic、Ollama 等）
- **数据库**: SQLite（默认）/ PostgreSQL
- **部署**: Docker / Kubernetes (Helm)
- **凭证管理**: Bitwarden / Vaultwarden / 1Password

## 与知识库其他项目的关系

- 扩展了 [[Playwright]] 的能力，添加 AI 驱动交互
- 与 [[browser-use]] 同为 AI 浏览器自动化方案，但采用视觉+LLM 而非 DOM 解析
- 与 [[Stagehand]] 类似，都提供 Playwright 扩展的 AI 功能
- SDK 模式与 [[Agent-Reach]] 的 MCP 方式不同

## 相关页面

- [[Skyvern]]
- [[Playwright]]
- [[browser-use]]
- [[Stagehand]]
- [[浏览器控制]]
- [[浏览器自动化]]
