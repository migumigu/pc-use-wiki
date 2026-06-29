---
tags: [素材, 浏览器控制, 协议层]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-chrome-devtools-protocol.md
---

# Chrome DevTools Protocol 官方文档

> CDP 是 Chrome 浏览器与外部工具通信的底层协议，Playwright 和 chrome-devtools-mcp 都建立在其之上。

## 一句话摘要

Chrome DevTools Protocol (CDP) 是用于与 Chromium、Chrome 及基于 Blink 的浏览器进行 instrument、inspect、debug 和 profile 的协议。

## 核心内容

### 协议版本

| 版本 | 说明 |
|------|------|
| **Tip-of-tree** | 最新协议，频繁变化，无向后兼容性保证 |
| **v8-inspector** | Node.js 应用调试和性能分析 |
| **stable 1.3** | 稳定版本，Chrome 64 标记 |

### 协议结构

协议按多个域（Domain）划分：DOM、Debugger、Network 等。每个域定义支持的命令和生成的事件，命令和事件都序列化为固定结构的 JSON 对象。

### 主要域

- DOM、Debugger、Network、Page、Console
- CSS、Input、Performance、Memory
- Storage、ServiceWorker、WebMCP

### HTTP 端点

当用 `remote-debugging-port` 启动时，提供 HTTP 端点：
- `GET /json/version` — 浏览器版本元数据
- `GET /json` — 所有 WebSocket targets 列表
- `GET /json/protocol/` — 当前协议 JSON
- `PUT /json/new?{url}` — 打开新标签页

### WebSocket 连接

通过 `webSocketDebuggerUrl` 在 `/json/version` 中暴露端点。协议支持 Chrome 63 引入的多客户端同时连接。

## 与 Playwright 的关系

Playwright 使用 Chrome DevTools Protocol 与 Chromium 通信。对于 Firefox 和 WebKit，Playwright 实现了自己的协议。**Playwright 是建立在 CDP 之上的高层 API**，提供了更易用的接口。

## 相关页面

- [[浏览器控制]]（主题页）
- [[Playwright]]（实体页）
- [[chrome-devtools-mcp]]（实体页）
