---
tags: [素材, 技术博客]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-playwright-cdp-websocket.md
---

# Playwright CDP/WebSocket/PlayWright 对比分析

> 深入解析 Playwright 与 CDP、WebSocket 的关系

## 一句话摘要

Playwright 启动浏览器使用 `p.chromium.launch()`，而 `p.chromium.connect_over_cdp()` 允许通过 WebSocket/HTTP 连接到已运行的 Chrome 浏览器。

## 关键信息

- **来源**：[博客园技术博客](https://www.cnblogs.com/yangykaifa/p/19486203)
- **类型**：tech_blog
- **Tier**：2（权威技术博客）
- **控制对象**：browser_control
- **技术层级**：protocol
- **收集日期**：2026-06-29

## 核心关系总结

1. `browser_playwright = p.chromium.launch`
   - Playwright 直接启动和控制浏览器
   - 返回 Browser 对象

2. `browser_ws = p.chromium.connect_over_cdp`
   - 通过 CDP 连接到已运行的浏览器
   - 支持 HTTP 或 WebSocket 方式

## 三层架构

```
┌──────────────────────────────────────┐
│         Playwright API               │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│      WebSocket / HTTP                │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│      Chrome DevTools Protocol        │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│         Chrome Browser               │
└──────────────────────────────────────┘
```

## 关键认知

1. 即使使用 WebSocket 连接，背后也必须有 Playwright 在运行
2. Playwright 是对 CDP 的高层抽象
3. connect_over_cdp 允许连接到已运行的浏览器

## 相关页面

- [[Playwright]] — 主实体页
- [[浏览器控制]] — 主题页
