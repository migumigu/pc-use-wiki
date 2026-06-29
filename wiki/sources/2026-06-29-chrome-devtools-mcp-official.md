---
tags: [素材, 浏览器控制, Agent集成层]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-chrome-devtools-mcp-official.md
---

# Chrome DevTools MCP 官方介绍

> Google 官方 MCP Server，将 Chrome DevTools 的全部能力以 44 个工具的形式暴露给 AI Agent。

## 一句话摘要

chrome-devtools-mcp 是 Google Chrome DevTools 团队发布的 MCP 服务器，让 AI Agent 能够直接控制浏览器、获取页面内容、监控网络请求。

## 核心内容

### 核心定位

**不是给开发者写的，是给 Agent 写的。**

传统工具的目标是「给我脚本，我帮你执行」。chrome-devtools-mcp 的目标是「Agent 自己决定要做什么，我帮它看懂浏览器的状态，然后执行它的指令，再帮它看懂结果」。

### 核心能力

| 能力 | 说明 |
|------|------|
| 浏览器控制 | 导航、点击、输入、截图 |
| 页面内容获取 | 完整的 DOM 快照，包括动态渲染的内容 |
| 调试能力 | 访问网络请求、分析性能瓶颈、操作页面元素 |

### 技术架构

- **底层**：基于 Puppeteer
- **协议**：MCP (Model Context Protocol)
- **工具数**：44 个 MCP 工具

### GitHub 数据

- **Stars**: 43,000+（持续增长）
- **Forks**: 2,459+

### 支持的 AI 助手

- Claude (Claude Code)
- Cursor
- Gemini CLI
- 其他支持 MCP 的 AI 助手

## 相关页面

- [[浏览器控制]]（主题页）
- [[chrome-devtools-mcp]]（实体页）
- [[MCP]]（实体页）
- [[Puppeteer]]（实体页）
