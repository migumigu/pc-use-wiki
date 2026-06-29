---
tags: [素材, 官方文档]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-chrome-devtools-protocol.md
---

# Chrome DevTools Protocol 官方文档

> Chrome 官方调试协议，是 Playwright 控制 Chromium 的底层协议

## 一句话摘要

Chrome DevTools Protocol (CDP) 允许工具 instrument、inspect、debug 和 profile Chromium、Chrome 及其他基于 Blink 的浏览器。

## 关键信息

- **来源**：[chromedevtools.github.io/devtools-protocol/](https://chromedevtools.github.io/devtools-protocol/)
- **类型**：official_docs
- **Tier**：1（官方来源）
- **控制对象**：browser_control
- **技术层级**：protocol
- **收集日期**：2026-06-29

## 协议结构

Instrumentation 按多个域（Domain）划分，每个域定义支持的命令和生成的事件。

### 主要域

- **Browser**：浏览器控制
- **Page**：页面操作
- **DOM**：文档对象模型
- **CSS**：样式操作
- **Debugger**：调试功能
- **Input**：输入模拟
- **Network**：网络请求
- **Emulation**：设备模拟

## HTTP 端点

| 端点 | 用途 |
|------|------|
| `GET /json/version` | 获取浏览器版本和 WebSocket URL |
| `GET /json/list` | 列出所有 targets |
| `PUT /json/new?{url}` | 打开新标签页 |
| `WebSocket /devtools/page/{targetId}` | 双向通信端点 |

## 与 Playwright 的关系

Playwright 使用 Chrome DevTools Protocol 与 Chromium 通信。对于 Firefox 和 WebKit，Playwright 实现了自己的协议。

## 相关页面

- [[Playwright]] — 主实体页
- [[浏览器控制]] — 主题页
