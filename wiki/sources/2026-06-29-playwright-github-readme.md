---
tags: [素材, 官方文档]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-playwright-github-readme.md
---

# Playwright GitHub README

> 微软开源的 Web 自动化框架 GitHub 官方介绍

## 一句话摘要

Playwright 是微软开发的框架，用于驱动 Chromium、Firefox、WebKit 浏览器进行自动化操作和测试。

## 关键信息

- **来源**：[GitHub microsoft/playwright](https://github.com/microsoft/playwright)
- **类型**：github_readme
- **Tier**：1（官方来源）
- **控制对象**：browser_control
- **技术层级**：tool_implementation
- **收集日期**：2026-06-29

## 核心功能

### 多种使用模式

| 模式 | 用途 | 安装命令 |
|------|------|----------|
| Playwright Test | 端到端测试 | `npm init playwright@latest` |
| Playwright CLI | 编码 Agent | `npm i -g @playwright/cli@latest` |
| Playwright MCP | AI Agent 自动化 | `npx @playwright/mcp@latest` |
| Playwright Library | 浏览器自动化脚本 | `npm i playwright` |

### 关键能力

- **Auto-wait**：自动等待元素可操作，无需人工 timeout
- **Web-first assertions**：网页优先断言，自动重试直到条件满足
- **Locators**：弹性定位器，模拟用户视角
- **Test isolation**：每个测试在独立浏览器上下文运行
- **Tracing**：捕获执行 trace、截图、视频
- **Parallelism**：默认跨所有配置浏览器并行运行

### Playwright MCP

通过 Model Context Protocol 给予 AI Agent 完全的浏览器控制能力。Agent 使用结构化的无障碍性快照与页面交互，无需视觉模型或截图。

## 相关页面

- [[Playwright]] — 主实体页
- [[浏览器控制]] — 主题页
