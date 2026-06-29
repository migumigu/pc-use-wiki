---
tags: [素材, 浏览器控制, 工具实现层]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-playwright-github-readme.md
---

# Playwright GitHub README

> Microsoft 出品的 Web 自动化和测试框架，支持跨浏览器、多语言。

## 一句话摘要

Playwright 是微软出品的 Web 自动化框架，提供统一 API 控制 Chromium、Firefox、WebKit，并支持 Node.js、Python、.NET、Java 等多种语言。

## 核心内容

### 关键信息

- **开发者**：Microsoft
- **GitHub**：https://github.com/microsoft/playwright
- **Commit 数**：17,298+

### 核心特性

| 特性 | 说明 |
|------|------|
| 跨浏览器 | 统一 API 控制 Chromium、Firefox、WebKit |
| 多语言 | Node.js、Python、.NET、Java |
| Auto-wait | 自动等待元素可操作 |
| Web-first assertions | 网页优先断言，自动重试 |
| Locators | 弹性定位器 |
| Test isolation | 独立浏览器上下文 |
| Tracing | 捕获执行 trace、截图、视频 |

### 多种使用模式

- **Playwright Test**：端到端测试框架
- **Playwright CLI**：编码 Agent 用 CLI 工具
- **Playwright MCP**：AI Agent 和 LLM 驱动自动化的 MCP 服务器
- **Playwright Library**：浏览器自动化脚本库

### Playwright MCP

MCP 服务器通过 Model Context Protocol 给予 AI Agent 完全的浏览器控制能力。Agent 使用结构化的无障碍性快照（accessibility snapshots）与页面交互，无需视觉模型或截图。

## 相关页面

- [[浏览器控制]]（主题页）
- [[Playwright]]（实体页）
- [[chrome-devtools-mcp]]（实体页）
