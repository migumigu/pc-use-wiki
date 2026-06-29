---
source_id: auto-2026-06-29-playwright-cdp-websocket
title: Playwright CDP/WebSocket/PlayWright 对比分析
url: https://www.cnblogs.com/yangykaifa/p/19486203
source_type: tech_blog
tier: 2
control_object: browser_control
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: medium
---

# Playwright CDP/WebSocket/PlayWright 对比分析

## 核心关系总结

1. `browser_playwright = p.chromium.launch`
   - Playwright 直接启动和控制浏览器
   - 返回 Browser 对象

2. `browser_ws = p.chromium.connect_over_cdp`
   - 通过 CDP (Chrome DevTools Protocol) 连接到已运行的浏览器
   - 可以使用 HTTP 或 WebSocket 方式

## Playwright 启动浏览器

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=False,
        args=["--remote-debugging-port=9222"]
    )
    page = browser.new_page()
    page.goto("https://www.baidu.com/")
    browser.close()
```

关键点：
- `sync_playwright()` 是真正的浏览器操作对象
- 默认 headless=True，可设置为 False 查看浏览器 UI
- `--remote-debugging-port=9222` 开启 CDP 端口

## WebSocket 连接方式

### HTTP 方式连接

```python
browser_ws = p.chromium.connect_over_cdp("http://localhost:9222")
```

### WebSocket 方式连接

```python
import requests

resp = requests.get("http://localhost:9222/json/version")
ws_url = resp.json()["webSocketDebuggerUrl"]
browser_ws = p.chromium.connect_over_cdp(ws_url)
```

两种方式返回结果相同，但 WebSocket 方式更通用。

## 三层架构

```
┌──────────────────────────────────────┐
│         Playwright API               │
│   (p.chromium.launch / connect)      │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│      WebSocket / HTTP                │
│   (connect_over_cdp)                 │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│      Chrome DevTools Protocol        │
│      (CDP)                           │
└──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────┐
│         Chrome Browser               │
└──────────────────────────────────────┘
```

## CDP 命令示例

通过 WebSocket 直接发送 CDP 命令：

```python
# 获取浏览器版本
ws_util.send_command("Browser.getVersion")

# 获取所有目标
ws_util.send_command("Target.getTargets")

# 创建新页面
ws_util.send_command("Target.createTarget", {"url": "https://www.baidu.com"})

# 导航
ws_util.send_command("Page.navigate", {"url": url})
```

## 混合使用模式

可以同时使用 WebSocket 命令行操作和 Playwright 对象操作：

```python
with PlaywrightCDPConnector(debug_port=9222) as cdp_util:
    # 通过 WebSocket 命令行操作
    ws_util = cdp_util.ws_util
    targets = ws_util.get_targets()
    
    # 通过 Playwright 对象操作
    browser = cdp_util.connect_via_playwright()
    new_page = browser.new_page()
    new_page.goto("https://www.json.cn/")
```

## 关键认知

1. **即使使用 WebSocket 连接，背后也必须有 Playwright 在运行**
   - WebSocket 无法凭空连接，必须先有浏览器实例

2. **Playwright 是对 CDP 的高层抽象**
   - CDP 提供了底层协议能力
   - Playwright 封装了更易用的 API

3. **connect_over_cdp 允许连接到已运行的浏览器**
   - 可以实现浏览器复用
   - 支持多客户端同时控制
