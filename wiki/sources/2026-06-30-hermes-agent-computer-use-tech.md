---
tags: [hermes-agent, computer-use, cua-driver, desktop-automation]
created: 2026-06-30
updated: 2026-06-30
sources:
  - "[[2026-06-30-hermes-agent-computer-use-tech]]"
---

# Hermes Agent Computer Use 技术文档

> 跨平台桌面控制方案，通过 cua-driver 实现 macOS/Windows/Linux 后台操作

## 素材摘要

本素材是 Hermes Agent Computer Use 功能的官方技术文档，详细说明了跨平台桌面控制的技术实现。

## 核心要点

### 技术架构

**cua-driver** 是核心后台驱动：
- 通过 MCP over stdio 与 Hermes 通信
- 各平台使用原生 accessibility + input 堆栈

### 平台支持矩阵

| 平台 | Accessibility Tree | Input Dispatch |
|------|-------------------|----------------|
| macOS | AX (SkyLight SPIs) | SLPSPostEventRecordTo |
| Windows | UIAutomation | SendInput + PostMessage |
| Linux | AT-SPI (X11 + Wayland) | XTest / virtual-keyboard |

### 后台模式特性

- **虚拟 overlay cursor**：标识 Agent 操作位置
- **真实 cursor 不动**：OS cursor 保持原位
- **不抢占焦点**：窗口不会被激活到前台
- **不切换虚拟桌面**

### Token 效率优化

4 层优化：
1. Screenshot eviction — 仅保留最近 3 张截图
2. Client-side compression pruning
3. Image-aware token estimation — 每图 ~1500 tokens
4. Server-side context editing (Anthropic)

### 安全机制

- 破坏性操作需审批
- 硬拦截危险组合键和 type patterns

### 局限性

1. 后台事件 3-20ms 延迟
2. 不支持键盘密码输入
3. 部分应用无 accessibility tree
4. Windows UIPI 限制

## 相关页面

- [[hermes-agent]] — 实体页
- [[Computer-Use]] — 核心能力
- [[cua-driver]] — 底层驱动（待创建）
