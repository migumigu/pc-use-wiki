---
source_id: auto-2026-06-29-chrome-devtools-mcp-official
title: Chrome DevTools MCP 官方介绍
url: https://developer.chrome.com/blog/chrome-devtools-mcp
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Chrome DevTools MCP 官方介绍

## 项目概述

chrome-devtools-mcp 是 Google Chrome DevTools 团队官方发布的 MCP (Model Context Protocol) 服务器，于 2025 年 9 月发布公开预览版。

## 核心定位

**不是给开发者写的，是给 Agent 写的。**

它将整个 Chrome DevTools 的能力拆成了 44 个 MCP 工具，直接暴露给 AI Agent。

## 核心能力

1. **浏览器控制**：导航、点击、输入、截图
2. **页面内容获取**：完整的 DOM 快照，包括动态渲染的内容
3. **调试能力**：访问网络请求、分析性能瓶颈、操作页面元素

## 技术架构

- **底层**：基于 Puppeteer
- **协议**：MCP (Model Context Protocol)
- **目标**：让 Agent 自己决定要做什么，帮助它看懂浏览器的状态，然后执行指令

## 与传统浏览器自动化的区别

| 维度 | 传统工具 (Selenium/Puppeteer) | chrome-devtools-mcp |
|------|------------------------------|---------------------|
| 目标用户 | 开发者 | Agent |
| 交互方式 | "给我脚本，我帮你执行" | "Agent 自己决定要做什么" |
| 状态理解 | 无 | 完整 DOM 快照 |
| 登录态 | 需手动处理 | 可指定 Data 目录 |

## 数据

- GitHub Stars: 38,866+ (8个月)
- Forks: 2,459+
- MCP Tools: 44 个

## 支持的 AI 编码助手

- Claude (Claude Code)
- Cursor
- Gemini CLI
- 其他支持 MCP 的 AI 助手

## 安装方式

通过 npm 安装：
```bash
npm install -g chrome-devtools-mcp
```

## 参考链接

- GitHub: https://github.com/GoogleChromeLabs/chrome-devtools-mcp
- 官方博客: https://developer.chrome.com/blog/chrome-devtools-mcp
