---
tags: [Cua-driver, 后台桌面控制, no-foreground, MCP]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Cua Driver Technical Docs — Background Computer-Use Driver

> 后台桌面控制驱动，macOS/Windows/Linux pre-release

## 基本信息

- **名称**：Cua Driver
- **协议**：MCP over stdio + CLI
- **许可证**：MIT License
- **支持平台**：macOS、Windows、Linux（pre-release）

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "MIT License" -->

## 核心特性

后台 computer-use driver，Agents 可点击、输入、验证而不抢占焦点。

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "Background computer-use driver for any agent" -->

```bash
cua-driver launch_app '{"bundle_id":"com.apple.calculator"}'
cua-driver get_window_state '{"pid":844,"window_id":10725}'
cua-driver click '{"pid":844,"window_id":10725,"element_index":14}'
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 CLI 示例 -->

## The no-foreground contract

用户前台应用不改变：

- 真实光标停留原位，不 warp
- 目标窗口保持当前 z-rank
- 用户桌面/Space 不跟随目标

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "The no-foreground contract" -->

## 三种模态

`capture_mode` 控制 `get_window_state` 返回内容：

| 模式 | 说明 |
|------|------|
| `som`（默认） | Accessibility 树 + 截图 |
| `ax` | 纯 Accessibility 树（无截图成本） |
| `vision` | 纯窗口图像（无 Accessibility） |

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档三种模态表 -->

## Platform Backends

### macOS

- Accessibility API
- ScreenCaptureKit
- LaunchServices
- Signed `CuaDriver.app` bundle（TCC 权限）

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "macOS uses Accessibility, ScreenCaptureKit..." -->

### Windows

- UI Automation
- Win32 window APIs
- Named pipes
- Optional logon Scheduled Task（Session 0 bypass）

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "Windows uses UI Automation..." -->

### Linux（pre-release）

- AT-SPI
- X11/XWayland
- XTest-style input
- Wayland-only apps 是已知限制

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "Linux pre-release uses AT-SPI..." -->

## Claude Code Computer-Use 兼容

标准 MCP 注册：

```bash
claude mcp add --transport stdio cua-driver -- cua-driver mcp
```

兼容模式（screenshot 用 window_id）：

```bash
claude mcp add --transport stdio cua-computer-use -- cua-driver mcp --claude-code-computer-use-compat
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 Claude Code 集成命令 -->

## Who it's for

- **Agent builders** — 本地桌面驱动
- **Dev-loop automation** — Agent 驱动 app，编辑源码，重建，验证
- **Remote Windows workflows** — Daemon 在交互会话，SSH MCP 客户端代理
- **Trajectory capture** — 回放、检查、训练数据

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "Who it's for" -->

## What it doesn't do

- Not a VM or sandbox（操作真实主机）
- Not a Wayland security bypass
- Canvas/game-engine/GPU-heavy apps 可能需要 foreground-only fallback
- macOS off-Space SwiftUI windows 可能丢失 Accessibility 树

<!-- confidence: EXTRACTED -->
<!-- evidence: 官方文档 "What it doesn't do" -->

## 相关实体

- [[CUA]] — 已有实体页
- [[Cua-driver]] — 已有实体页（补充）
- [[no-foreground-contract]] — 新增概念

## 相关主题

- [[桌面应用控制]] — 所属控制对象
- [[Agent集成层]] — MCP 集成

## 相关页面

- [[2026-07-01-trycua-cua-github-readme]] — GitHub README
- [[2026-07-01-cua-architecture-docs]] — 架构文档