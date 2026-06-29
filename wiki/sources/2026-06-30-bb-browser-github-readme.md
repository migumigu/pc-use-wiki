---
tags: [素材, GitHub, 浏览器自动化, MCP]
created: 2026-06-30
updated: 2026-06-30
sources:
  - raw/articles/2026-06-30-bb-browser-github-readme.md
---

# bb-browser GitHub README

> 让 AI Agent 直接使用已有浏览器登录态的 MCP 工具

## 摘要

bb-browser (BadBoy Browser) 是一款 AI Agent 浏览器自动化工具，核心特点是"你的浏览器就是 API"。通过 MCP 协议和 CDP (Chrome DevTools Protocol)，让 AI Agent 直接控制用户已登录的真实 Chrome 浏览器，访问 36 个平台、103 个命令。与传统 Playwright/Selenium 不同，它复用已有登录态，反爬检测隐形。

## 关键信息

- **Stars**: 5,376+（第三方数据，待验证）
- **许可证**: MIT
- **语言**: TypeScript (83.7%)
- **最新版本**: v0.11.6 (2026-05-11)
- **Commit 数**: 263

## 核心架构

```
AI Agent (Claude Code, Cursor, etc.)
 │ CLI or MCP (stdio)
 ▼
bb-browser CLI ──HTTP──▶ Daemon ──CDP WebSocket──▶ Your Real Browser
```

## 平台覆盖

36 个平台，103 个命令，涵盖：
- 社交：Twitter/X, Reddit, 微博, 小红书, LinkedIn
- 开发者：GitHub, StackOverflow, HackerNews, npm, PyPI, arXiv
- 视频：YouTube, B站
- 金融：雪球, 东方财富
- 知识：Wikipedia, 知乎

## 技术特点

1. **复用登录态**：使用已有 Chrome 的 cookies，无需重新登录
2. **MCP 协议**：标准化 AI 工具调用
3. **社区驱动**：bb-sites 适配器生态
4. **三种集成**：CLI / MCP / OpenClaw Skill

## 相关页面

- [[浏览器控制]]（主题页）
- [[browser-use]]（对比）
- [[MCP]]（协议）
- [[chrome-devtools-mcp]]（相关技术）
