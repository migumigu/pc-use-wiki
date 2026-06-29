---
tags: [素材, 浏览器控制, 协议层]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-playwright-cdp-websocket.md
---

# Playwright CDP/WebSocket 对比分析

> 解析 Playwright 与 CDP 的三层架构关系。

## 一句话摘要

Playwright 通过 `browser_playwright = p.chromium.launch` 直接启动浏览器，或通过 `browser_ws = p.chromium.connect_over_cdp` 使用 CDP 连接到已运行的浏览器。

## 核心内容

### Playwright 启动浏览器

```python
browser = p.chromium.launch(
    headless=False,
    args=["--remote-debugging-port=9222"]
)
```

### WebSocket 连接方式

**HTTP 方式**：`browser_ws = p.chromium.connect_over_cdp("http://localhost:9222")`

**WebSocket 方式**：
```python
resp = requests.get("http://localhost:9222/json/version")
ws_url = resp.json()["webSocketDebuggerUrl"]
browser_ws = p.chromium.connect_over_cdp(ws_url)
```

### 三层架构

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

### 关键认知

1. **即使使用 WebSocket 连接，背后也必须有 Playwright 在运行**
2. **Playwright 是对 CDP 的高层抽象**
3. **connect_over_cdp 允许连接到已运行的浏览器**

## 相关页面

- [[浏览器控制]]（主题页）
- [[Playwright]]（实体页）
- [[chrome-devtools-mcp]]（实体页）
