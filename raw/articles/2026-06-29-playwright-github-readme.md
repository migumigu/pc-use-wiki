---
source_id: auto-2026-06-29-playwright-github-readme
title: Playwright GitHub README
url: https://github.com/microsoft/playwright
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Playwright GitHub README

## 核心信息

- **开发者**：Microsoft
- **GitHub**：https://github.com/microsoft/playwright
- **Commit 数**：17,298+
- **定位**：Web 自动化和测试框架

## 核心特性

1. **跨浏览器支持**：统一 API 控制 Chromium、Firefox、WebKit
2. **多语言支持**：Node.js、Python、.NET、Java
3. **多种使用模式**：
   - Playwright Test：端到端测试框架
   - Playwright CLI：编码 Agent 用 CLI 工具
   - Playwright MCP：AI Agent 和 LLM 驱动自动化的 MCP 服务器
   - Playwright Library：浏览器自动化脚本库

## 关键能力

- **Auto-wait**：自动等待元素可操作，无需人工 timeout
- **Web-first assertions**：网页优先断言，自动重试直到条件满足
- **Locators**：弹性定位器，模拟用户视角
- **Test isolation**：每个测试在独立浏览器上下文运行
- **Tracing**：捕获执行 trace、截图、视频
- **Parallelism**：默认跨所有配置浏览器并行运行

## Playwright MCP

MCP 服务器通过 Model Context Protocol 给予 AI Agent 完全的浏览器控制能力。Agent 使用结构化的无障碍性快照（accessibility snapshots）与页面交互，无需视觉模型或截图。

## 跨平台支持

| 平台 | Chromium | WebKit | Firefox |
|------|-----------|--------|---------|
| Linux | ✅ | ✅ | ✅ |
| macOS | ✅ | ✅ | ✅ |
| Windows | ✅ | ✅ | ✅ |
