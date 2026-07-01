---
tags: [实体, MCP, 浏览器控制]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-real-browser-mcp-readme]
---

# real-browser-mcp

> MCP服务器，让AI直接操作用户已有Chrome浏览器，18个工具覆盖感知/交互/导航/调试，最大优势是会话状态复用（天然继承登录态）

## 简介

real-browser-mcp是由Ofer Shapira开发的MCP服务器，通过Chrome Extension + MCP Server架构，让AI Agent能够直接连接用户日常使用的Chrome浏览器，天然继承登录态、cookies、localStorage，无需重新认证。

## 关键信息

- **类型**：MCP Server
- **领域**：浏览器控制、MCP生态
- **开发者**：Ofer Shapira（个人开发者）
- **GitHub**：https://github.com/ofershap/real-browser-mcp
- **架构**：Chrome Extension (Manifest V3) + MCP Server (TypeScript)

## 详细内容

### MCP工具列表（18个）

| 类别 | 工具名 | 功能 |
|------|--------|------|
| 页面感知 | browser_snapshot | Accessibility tree快照 |
| | browser_screenshot | 屏幕截图 |
| | browser_text | 提取文本 |
| | browser_find | CSS选择器查询 |
| 交互操作 | browser_click | 点击元素 |
| | **browser_click_text** | 通过可见文本点击（创新工具） |
| | browser_type | 输入文本 |
| | browser_press_key | 组合键 |
| | browser_scroll | 滚动 |
| | browser_hover | 悬停 |
| | browser_select | 下拉菜单 |
| | browser_wait | 等待元素 |
| 导航控制 | browser_navigate | 导航URL |
| | browser_tabs | 标签页管理 |
| 调试诊断 | browser_console | 控制台输出 |
| | browser_network | XHR/fetch监控 |
| | browser_evaluate | 执行JavaScript |
| | browser_handle_dialog | 处理对话框 |

### 核心差异化优势

**会话状态复用**：直接连接用户已有Chrome，天然继承登录态、cookies、localStorage。

### 对比定位

| 维度 | real-browser-mcp | chrome-devtools-mcp | playwright-mcp |
|------|-------------------|---------------------|----------------|
| 核心优势 | 会话状态复用 | 性能诊断 | 跨浏览器/CI |
| 企业SSO | ✅ 天然穿透 | ❌ 需手动登录 | ❌ 需手动登录 |

## 相关页面

- [[浏览器控制]]
- [[MCP]]
- [[chrome-devtools-mcp]]
- [[Playwright MCP]]