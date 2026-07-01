---
report_id: 2026-07-01-trycua-cua-v1.0
title: trycua/cua 技术分析报告 v1.0
version: 1.0
created_date: 2026-07-01
updated_date: 2026-07-01
source_count: 3
source_breakdown: Tier1: 3, Tier2: 0, Tier3: 0
---

# trycua/cua 技术分析报告 v1.0

> 生成日期：2026-07-01
> 来源：3 个（Tier1: 3, Tier2: 0, Tier3: 0）
> 报告版本：v1.0

## 1. 执行摘要

trycua/cua 是一个完整的 Computer-Use Agent 基础设施，提供四大组件：Cua Drivers（后台桌面控制）、Cua Sandbox（跨平台沙箱）、Cua Bench（基准测试）、Lume（macOS 虚拟化）。核心定位：Build、benchmark、deploy agents that use computers。项目采用 MIT 许可证，主语言为 Python + Rust。

**核心价值**：
- Cua Drivers：后台桌面控制（不抢占焦点），macOS/Windows/Linux 跨平台
- Cua Sandbox：统一 API 跨 Linux/macOS/Windows/Android 沙箱
- Cua Bench：OSWorld、ScreenSpot、Windows Arena 基准测试
- Lume：macOS 虚拟化（Apple Silicon，Virtualization.Framework）

**关键创新**：no-foreground contract（后台桌面操作不抢占焦点），三模态捕获（som/ax/vision），MCP 协议集成。

## 2. 技术全景

### 2.1 核心架构

```
┌─────────────────────────────────────────────────────────────────┐
│                    trycua/cua 基础设施                            │
│                                                                  │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐     │
│  │  Cua Drivers   │  │  Cua Sandbox   │  │  Cua Bench     │     │
│  │                │  │                │  │                │     │
│  │  后台桌面控制   │  │  Agent沙箱      │  │  基准测试       │     │
│  │  no-foreground │  │  Linux/macOS/  │  │  OSWorld/      │     │
│  │  macOS/Win/Lin │  │  Win/Android   │  │  ScreenSpot    │     │
│  └────────────────┘  └────────────────┘  └────────────────┘     │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Lume — macOS 虚拟化（Apple Silicon，Virtualization.Framework） │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  MCP Server: cua-driver mcp（stdio transport）                   │
│  CLI: cua-driver（跨平台桌面控制）                                │
└─────────────────────────────────────────────────────────────────┘
        │
        ▼
   LLM Agent (Claude Code / Cursor / Codex / OpenClaw / Custom...)
```

### 2.2 技术栈分层

**驱动层**：
- macOS：Accessibility API + CoreGraphics
- Windows：UI Automation
- Linux（pre-release）：AT-SPI + X11
- 三模态捕获：som（accessibility+截图）、ax（纯 accessibility）、vision（纯视觉）

**沙箱层（Sandbox SDK + Agent SDK）**：
- 统一 API：`Sandbox.ephemeral(Image.linux())` / `.macos()` / `.windows()` / `.android()`
- Cloud + Local：cua.ai 云端 + QEMU 本地
- BYOI：支持自定义 .qcow2 / .iso 镜像

**基准测试层**：
- OSWorld：标准 computer-use 基准
- ScreenSpot：屏幕定位测试
- Windows Arena：Windows 专属测试
- 自定义任务：datasets/cua-bench-basic

**虚拟化层**：
- Apple Virtualization.Framework
- near-native 性能
- macOS/Linux VM 管理

### 2.3 关键组件

1. **Cua Driver**：后台桌面控制核心（no-foreground contract）
2. **Sandbox SDK**：跨平台沙箱统一 API
3. **Agent SDK**：computer-use agent 框架
4. **cua-computer-server**：沙箱内 UI 交互驱动
5. **Lume**：macOS 虚拟化管理器

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 来源置信度 | 说明 |
|------|------------|------|
| 后台桌面控制 | EXTRACTED | no-foreground contract，不抢占焦点 |
| 跨平台 macOS/Windows/Linux | EXTRACTED | macOS/Windows 正式支持，Linux pre-release |
| 三模态捕获 | EXTRACTED | som/ax/vision 三种模式 |
| MCP 协议集成 | EXTRACTED | stdio MCP server + CLI 双入口 |
| 跨 OS 沙箱 | EXTRACTED | Linux/macOS/Windows/Android 统一 API |
| 基准测试 | EXTRACTED | OSWorld、ScreenSpot、Windows Arena |
| macOS 虚拟化 | EXTRACTED | Apple Silicon，Virtualization.Framework |

### 3.2 局限性

| 局限 | 来源 | 说明 |
|------|------|------|
| Linux pre-release | EXTRACTED | 平台测试仍在进行中 |
| 需要安装脚本 | EXTRACTED | macOS/Linux 需要 curl 安装脚本 |
| cua-driver 独立安装 | EXTRACTED | 不在 cua 主包中，需单独安装 |
| OmniParser AGPL-3.0 | EXTRACTED | 可选组件，许可证限制 |

### 3.3 已知问题

- Linux 后端仍在测试中（pre-release）
- 建议验证：`cua-driver doctor`（如果有）

## 4. 生态位

### 4.1 与同类工具对比

| 维度 | trycua/cua | Hermes cua-driver | OpenCUA | Anthropic Computer Use |
|------|------------|-------------------|---------|------------------------|
| 后台控制 | ✅ no-foreground | ✅ | ❌ | ❌ |
| 跨平台 | macOS/Win/Lin | macOS/Win/Lin | macOS/Win | macOS（官方） |
| MCP 集成 | ✅ stdio | ❌ | ❌ | ❌ |
| 沙箱 SDK | ✅ Sandbox SDK | ❌ | ✅ | ❌ |
| 基准测试 | ✅ Cua Bench | ❌ | ✅ OSWorld | ❌ |
| License | MIT | MIT | Apache-2.0 | 商业 |

### 4.2 适用场景

- ✅ 需要后台桌面控制（不抢占焦点）
- ✅ 跨平台 macOS/Windows/Linux
- ✅ MCP 协议集成
- ✅ computer-use agent 基准测试
- ✅ macOS 虚拟化（Apple Silicon）

### 4.3 不适用场景

- ❌ 仅需单一平台桌面控制
- ❌ 不需要后台操作（允许抢占焦点）
- ❌ 不需要基准测试

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-20260701-ghread01]] | Tier 1 | EXTRACTED | 核心架构、四大组件 |
| [[auto-20260701-cua-architecture-docs]] | Tier 1 | EXTRACTED | Sandbox/Agent SDK 架构 |
| [[auto-20260701-cua-driver-technical-docs]] | Tier 1 | EXTRACTED | 后台桌面控制、三模态捕获 |

## 6. 待验证问题

| 优先级 | 声明 | 验证方式 |
|--------|------|----------|
| P1 高 | "后台桌面控制 no-foreground" | 官方文档 cua-driver README |
| P1 高 | "macOS/Windows/Linux 跨平台" | GitHub README |
| P2 中 | "MCP stdio server" | 官方文档 MCP 章节 |
| P2 中 | "OSWorld 基准测试" | Cua Bench 文档 |

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-07-01 | 初始版本（补充已有 cua-driver 研究） |