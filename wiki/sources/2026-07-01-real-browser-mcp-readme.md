---
tags: [素材摘要]
created: 2026-07-01
updated: 2026-07-01
sources: []
source_type: GitHub README
source_path: raw/notes/2026-07-01-real-browser-mcp-analysis.md
images: 0
image_paths: []
---

# real-browser-mcp GitHub README

> MCP服务器，让AI直接操作用户已有Chrome浏览器，18个工具覆盖感知/交互/导航/调试，最大优势是会话状态复用（天然继承登录态）

## 基本信息

- **来源类型**：GitHub README（Tier 1）
- **原文位置**：raw/notes/2026-07-01-real-browser-mcp-analysis.md
- **消化日期**：2026-07-01

## 核心观点

1. **会话状态复用核心优势**：直接连接用户已有Chrome，天然继承登录态、cookies、localStorage，无需重新认证
2. **18个MCP工具**：browser_snapshot/screenshot/text/find/click/click_text/type/press_key/scroll/hover/select/wait/navigate/tabs/console/network/evaluate/handle_dialog
3. **browser_click_text创新**：通过可见文本直接点击，穿透React portals和overlay层
4. **Chrome Extension + MCP Server架构**：WebSocket本地通信，完全本地化，隐私性强

## 关键概念

- [[real-browser-mcp]]
- [[会话状态复用]]
- [[MCP]]
- [[Chrome DevTools Protocol]]
- [[浏览器控制]]

## 与其他素材的关联

- 与 [[chrome-devtools-mcp]] 对比：chrome-devtools-mcp性能诊断优势，real-browser-mcp会话穿透优势
- 与 [[Playwright MCP]] 对比：Playwright MCP跨浏览器/CI优势，real-browser-mcp企业SSO优势
- 与 [[bb-browser]] 对比：同为MCP浏览器控制，但real-browser-mcp连接用户已有浏览器

## 原文精彩摘录

> "Your agent can now see your REAL browser" — 核心理念

> 最大差异化优势：会话状态复用 — 用户已登录的网站无需重新认证

> browser_click_text创新工具：通过可见文本直接点击，穿透React portals和overlay层

## 相关页面

- [[浏览器控制]]
- [[real-browser-mcp]]
- [[MCP]]