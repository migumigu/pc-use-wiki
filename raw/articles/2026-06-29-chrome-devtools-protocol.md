---
source_id: auto-2026-06-29-chrome-devtools-protocol
title: Chrome DevTools Protocol 官方文档
url: https://chromedevtools.github.io/devtools-protocol/
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Chrome DevTools Protocol (CDP) 官方文档

## 协议概述

Chrome DevTools Protocol 允许工具 instrument、inspect、debug 和 profile Chromium、Chrome 及其他基于 Blink 的浏览器。

## 协议版本

1. **Tip-of-tree (tot)**：最新协议，频繁变化，可能随时破坏，无向后兼容性保证
2. **v8-inspector**：Node.js 应用调试和性能分析
3. **stable 1.3**：稳定版本，Chrome 64 标记，包含完整协议的功能子集

## 协议结构

Instrumentation 按多个域（Domain）划分：DOM、Debugger、Network 等。每个域定义支持的命令和生成的事件。命令和事件都序列化为固定结构的 JSON 对象。

## 主要域

- Accessibility、Animation、Audits、Autofill
- Browser、CacheStorage、Cast、Console
- CSS、Debugger、DeviceAccess、DeviceOrientation
- DOM、DOMDebugger、DOMSnapshot、DOMStorage
- Emulation、Extensions、FedCm、Input、IO
- LayerTree、Log、Media、Memory
- Page、ServiceWorker、SystemInfo、WebMCP

## HTTP 端点

当用 remote-debugging-port 启动时，同一端口提供 HTTP 端点：
- `GET /json/version`：浏览器版本元数据
- `GET /json` 或 `/json/list`：所有 websocket targets 列表
- `GET /json/protocol/`：当前 devtools 协议 JSON
- `PUT /json/new?{url}`：打开新标签页
- `GET /json/activate/{targetId}`：激活目标页面
- `GET /json/close/{targetId}`：关闭目标页面
- `WebSocket /devtools/page/{targetId}`：协议的 WebSocket 端点

## Playwright 与 CDP

Playwright 使用 Chrome DevTools Protocol 与 Chromium 通信。对于 Firefox 和 WebKit，Playwright 实现了自己的协议。

## 协议定义

规范定义位于 Chromium 源码树：
- browser_protocol.pdl
- js_protocol.pdl

## WebSocket 连接

通过 `webSocketDebuggerUrl` 在 `/json/version` 中暴露端点。协议支持 Chrome 63 引入的多客户端同时连接。

## 与 Playwright 的关系

Playwright 是建立在 CDP 之上的高层 API，提供了更易用的接口。CDP 是底层协议，提供了对浏览器的细粒度控制能力。
