---
tags: [实体, 工具]
created: 2026-06-27
updated: 2026-06-29
sources:
  - wiki/sources/2026-06-27-browser-use-vs-playwright-mcp.md
  - wiki/sources/2026-06-27-browser-use-architecture-analysis.md
  - wiki/sources/2026-06-28-playwright-test-agents-official-docs.md
  - wiki/sources/2026-06-28-playwright-test-agents-analysis.md
  - wiki/sources/2026-06-28-playwright-test-agents-healer.md
  - wiki/sources/2026-06-29-playwright-github-readme.md
  - wiki/sources/2026-06-29-chrome-devtools-protocol.md
  - wiki/sources/2026-06-29-playwright-library-docs.md
  - wiki/sources/2026-06-29-playwright-cdp-websocket.md
---

# Playwright

> 微软开源的浏览器自动化框架，是 browser-use 的底层依赖

## 简介

Playwright 是微软开源的浏览器自动化框架，提供了跨浏览器（Chromium、Firefox、WebKit）的自动化能力。它是 browser-use 等 AI 浏览器自动化工具的底层引擎。

## 关键信息

- **类型**：工具（浏览器自动化框架）
- **领域**：浏览器自动化 / Web 测试
- **开发者**：Microsoft
- **编程语言**：Python、JavaScript、TypeScript、Java、C#

## 在 browser-use 中的角色

Playwright 在 browser-use 架构中处于第三层（协议层）：
- 负责与浏览器的实际通信
- 执行点击、输入、滚动等操作
- 提供 DOM 元素查询和操作接口

## 与 browser-use 的关系

- Playwright 是 browser-use 的底层依赖
- browser-use 在 Playwright 基础上添加了 LLM 理解层
- browser-use 用户不需要直接编写 Playwright 代码

## Playwright Test Agents（新增）

Playwright 官方于 2025 年推出了 Test Agents 功能，这是 Playwright 在 AI 测试智能化方向的重要升级：

### 三 Agent 协作

1. **🎭 Planner** - 探索应用并生成 Markdown 测试计划
2. **🎭 Generator** - 将 Markdown 计划转换为 Playwright 测试文件
3. **🎭 Healer** - 执行测试套件并自动修复失败的测试

### 技术基础

Test Agents 基于 Playwright Model Context Protocol (MCP) Server 构建，支持 VS Code、Claude Code、Codex、OpenCode 等多种 AI 工具。

### 核心价值

- **先规划再执行** - Planner 生成人类可读的测试计划
- **自动化修复** - Healer 自动修复因 UI 变化导致的测试失败
- **降低维护成本** - 减少人工干预，提高测试稳定性

## 实现原理（新增 2026-06-29）

### 架构分层

Playwright 的架构分为三层：

**顶层：用户 API 层**
- Playwright Library：统一 API
- Playwright Test：端到端测试运行器
- Playwright CLI：命令行工具
- Playwright MCP：Model Context Protocol 服务器

**中层：协议转换层**
- 对 Chromium 使用 CDP（Chrome DevTools Protocol）
- 对 Firefox/WebKit 使用各自协议实现

**底层：浏览器通信层**
- WebSocket 连接
- HTTP 调试端点
- Named Pipe（命名管道）

### 核心对象模型

```
Playwright (入口)
├── chromium/firefox/webkit (BrowserType)
│   └── launch() → Browser
├── devices (设备定义字典)
└── selectors (选择器引擎)

Browser
├── newContext() → BrowserContext
└── contexts[] → BrowserContext[]

BrowserContext
├── newPage() → Page
└── pages[] → Page[]

Page
├── goto() → 导航
├── click() → 点击
├── fill() → 填写
└── screenshot() → 截图
```

### CDP 协议结构

Chrome DevTools Protocol 按域（Domain）划分：
- Browser：浏览器控制
- Page：页面操作
- DOM：文档对象模型
- CSS：样式操作
- Debugger：调试功能
- Input：输入模拟
- Network：网络请求

### 与 Selenium 的核心区别

| 特性 | Playwright | Selenium |
|------|------------|----------|
| 通信协议 | WebSocket (双向) | HTTP (单向) |
| 浏览器控制 | 直接 CDP | WebDriver 中间层 |
| 等待机制 | 自动等待 | 手动等待 |
| 启动速度 | 快 | 慢 |

## 相关页面

- [[browser-use]]
- [[浏览器自动化]]
- [[浏览器控制]]
- [[Playwright-Test-Agents]]