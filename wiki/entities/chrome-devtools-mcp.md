---
tags: [实体, 浏览器控制, Agent集成层, Google官方]
created: 2026-06-29
updated: 2026-06-29
sources:
  - wiki/sources/2026-06-29-chrome-devtools-mcp-official.md
  - wiki/sources/2026-06-29-chrome-devtools-mcp-analysis.md
---

# chrome-devtools-mcp

> 一句话摘要：Google Chrome DevTools 团队官方发布的 MCP Server，将 Chrome DevTools 全部能力以 44 个工具的形式暴露给 AI Agent。

## 定义

<!-- confidence: EXTRACTED -->

chrome-devtools-mcp 是 Google Chrome DevTools 团队于 2025 年 9 月发布的官方 MCP (Model Context Protocol) 服务器。与传统浏览器自动化工具不同，它的核心设计目标是**让 Agent 自己决定要做什么**，而非执行预定义脚本。

**关键定位**：不是给开发者写的，是给 Agent 写的。

## 核心数据

| 数据项 | 值 |
|--------|-----|
| **GitHub Stars** | 43,000+（持续增长） |
| **GitHub Forks** | 2,459+ |
| **MCP 工具数** | 44 个 |
| **底层技术** | Puppeteer |
| **发布方** | Google Chrome DevTools 团队 |

## 技术架构

```
AI Agent (Claude/Cursor/Gemini)
         │
         ▼
MCP (44 个工具)
         │
         ▼
chrome-devtools-mcp
         │
         ▼
Puppeteer
         │
         ▼
Chrome DevTools Protocol (CDP)
         │
         ▼
Chrome Browser
```

## 44 个工具分类

### 导航与交互类
- `navigate` — 页面导航
- `click` — 点击元素
- `input` — 输入文本
- `scroll` — 滚动页面

### 内容获取类
- `get_document` — 获取完整 DOM 快照
- `query_selector` — CSS 选择器查询
- `evaluate` — 执行 JavaScript
- `get_cookies` — 获取 Cookie

### 网络监控类
- `network_events` — 监听网络请求
- `get_response_body` — 获取响应内容
- `get_request_post_data` — 获取请求数据

### 性能分析类
- `performance_metrics` — 性能指标
- `start_profiling` — 开始性能分析
- `screenshot` — 页面截图

## 核心能力

| 能力 | 说明 |
|------|------|
| 浏览器控制 | 导航、点击、输入、截图 |
| DOM 操作 | 完整 DOM 快照、选择器查询、JS 执行 |
| 网络监控 | 请求/响应监听、数据获取 |
| 性能分析 | 指标收集、性能分析 |
| 登录态保持 | 支持指定 Chrome Data 目录 |

## 与同类工具对比

| 工具 | 发布方 | Stars | 目标用户 | 核心优势 |
|------|--------|-------|----------|----------|
| **chrome-devtools-mcp** | Google Chrome 团队 | 43,000+ | AI Agent | 官方支持、MCP 协议 |
| **browser-use** | Browser Use 团队 | 17,000+ | AI Agent | 视觉模型驱动 |
| **agent-browser** | Vercel Labs | 37,000+ | AI Agent | Vercel 官方、CLI 工具 |
| **Playwright** | Microsoft | 65,000+ | 测试工程师 | 跨浏览器 |

## 安装配置

### 基本安装
```bash
npm install -g chrome-devtools-mcp
```

### Claude Code 配置
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp"]
    }
  }
}
```

### 指定用户数据目录
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp", "--chrome-data-dir=/path/to/profile"]
    }
  }
}
```

## 局限性

| 局限性 | 说明 |
|--------|------|
| 仅支持 Chrome/Chromium | 不支持 Firefox、Safari |
| Headless 默认 | 默认无头模式，需配置才能显示 UI |
| 登录态限制 | 默认看不到已登录账号，需指定 Data 目录 |
| 无插件支持 | 不支持浏览器扩展 |

## 相关页面

- [[浏览器控制]]（主题页）
- [[MCP]]（实体页）
- [[Puppeteer]]（实体页）
- [[Playwright]]（实体页）
- [[browser-use]]（实体页）
- [[agent-browser]]（实体页）
