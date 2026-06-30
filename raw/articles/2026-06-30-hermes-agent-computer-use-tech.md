---
source_id: auto-2026-06-30-hermes-agent-computer-use
title: Hermes Agent Computer Use 技术文档
url: https://hermes-agent.nousresearch.com/docs/user-guide/features/computer-use
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-30
collected_by: auto_research
confidence: high
---

# Hermes Agent Computer Use 技术分析

> Nous Research 自进化 AI Agent，跨平台桌面控制方案

## 技术架构

### 核心组件

**cua-driver** (trycua) 是核心后台驱动：
- 通过 MCP over stdio 与 Hermes 通信
- 各平台使用原生 accessibility + input 堆栈

### 平台支持矩阵

| 平台 | Accessibility Tree | Input Dispatch |
|------|-------------------|----------------|
| macOS | AX (私有 SkyLight SPIs) | SLPSPostEventRecordTo — pid-scoped, 无 cursor warp |
| Windows | UIAutomation | SendInput + PostMessage — 无 focus steal |
| Linux | AT-SPI (X11 + Wayland) | XTest (X11) / virtual-keyboard (Wayland) |

### 核心特性

**后台模式（Background Mode）**：
- Agent acting 时显示 tinted overlay cursor
- 真实 OS cursor 保持不动
- 不会切换虚拟桌面 / Spaces
- 不抢占窗口焦点

**无焦点抢占Invariant**：
- 可读取任何可见窗口的 accessibility tree
- 可发送合成事件但不激活窗口

### Provider 兼容性

| Provider | Vision | Works | Notes |
|----------|--------|-------|-------|
| Anthropic (Claude 3+) | ✅ | ✅ | 最佳；SOM + raw coordinates |
| OpenRouter (any vision) | ✅ | ✅ | 支持 multi-part tool messages |
| OpenAI (GPT-4+) | ✅ | ✅ | 同上 |
| Google (Gemini 2+) | ✅ | ✅ | Tool calling + vision |
| Local (vLLM/Ollama) | ✅ | ✅ | 如果支持 multi-part tool content |
| Text-only models | ❌ | ✅ (degraded) | 使用 mode="ax" |

### Token 效率优化

Hermes 应用 4 层优化：
1. **Screenshot eviction** — 仅保留最近 3 张截图
2. **Client-side compression pruning** — 剥离旧 multimodal 内容
3. **Image-aware token estimation** — 每图 ~1500 tokens
4. **Server-side context editing** (Anthropic) — clear_tool_uses API

典型：20-action session 在 1568×900 显示约 30K tokens（而非 600K）

## 安全机制

- 破坏性操作需审批（interactive 或 messaging-platform buttons）
- 硬拦截组合键：清空回收站、强删、锁屏、登出
- 硬拦截 type patterns：curl | bash, sudo rm -rf /, fork bombs
- Agent system prompt 明确告知：不点击权限对话框、不输入密码

## 局限性

1. **性能**：后台模式慢于前台（event 路由 3-20ms 延迟）
2. **密码输入**：不支持键盘密码输入，使用系统 autofill
3. **无 accessibility tree 的应用**：UWP apps, Electron < 28, macOS 自定义绘制
4. **Windows 管理员窗口**：UIPI 限制，Medium-integrity 无法控制 High-integrity 窗口
5. **平台特定问题**：
   - macOS: 私有 SkyLight SPIs 可能被 OS 更新破坏
   - Windows SSH: Session 0 无交互桌面
   - Linux: 需要 Xvfb 用于 headless 服务器

## Skills 系统

安装 cua-driver skill pack：
```
cua-driver skills install
```

包含：
- SKILL.md — 跨平台核心
- MACOS.md — macOS 细节
- WINDOWS.md — Windows 细节
- LINUX.md — Linux 细节
- RECORDING.md — 轨迹录制
- WEB_APPS.md — 浏览器交互
- TESTS.md — 轨迹回放测试

## 相关信息

- computer-use-linux MCP server — Linux 桌面控制
- 与 Claude Code, Codex, OpenCode, OpenClaw, Antigravity 兼容
- 计划支持 Hermes autodetection
