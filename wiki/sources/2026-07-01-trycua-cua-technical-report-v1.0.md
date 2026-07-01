---
tags: [trycua/cua, 技术报告, CUA, Computer-Use]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# trycua/cua 技术分析报告 v1.0

> 综合自 3 个素材 | 生成日期：2026-07-01

## 执行摘要

trycua/cua 是完整 Computer-Use Agent 基础设施，提供四大组件：Cua Drivers（后台桌面控制）、Cua Sandbox（跨平台沙箱）、Cua Bench（基准测试）、Lume（macOS 虚拟化）。核心定位：Build、benchmark、deploy agents that use computers。MIT 许可证。

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文执行摘要 -->

**核心价值**：
- Cua Drivers：后台桌面控制（no-foreground contract）
- Cua Sandbox：统一 API 跨 Linux/macOS/Windows/Android 沙箱
- Cua Bench：OSWorld、ScreenSpot 基准测试
- Lume：macOS 虚拟化（Apple Silicon）

**关键创新**：no-foreground contract、三模态捕获、MCP 协议集成。

## 核心架构

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
│  └────────────────┘  └───────────────┘  └────────────────┘     │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Lume — macOS 虚拟化（Apple Silicon，Virtualization.Framework） │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  MCP Server: cua-driver mcp（stdio transport）                   │
└─────────────────────────────────────────────────────────────────┘
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文架构图 -->

## 四大组件

### 1. Cua Drivers

后台桌面控制，no-foreground contract：
- macOS/Windows 正式支持，Linux pre-release
- 三模态捕获：som（accessibility+截图）、ax（纯 accessibility）、vision（纯视觉）

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Cua Drivers -->

### 2. Cua Sandbox

统一 API 跨平台沙箱：
- Linux/macOS/Windows/Android
- Cloud + Local（cua.ai 云端 + QEMU 本地）
- BYOI 支持 .qcow2/.iso

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Cua Sandbox -->

### 3. Cua Bench

基准测试环境：
- OSWorld、ScreenSpot、Windows Arena
- 自定义任务：datasets/cua-bench-basic

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Cua Bench -->

### 4. Lume

macOS 虚拟化：
- Apple Silicon + Virtualization.Framework
- near-native 性能

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Lume -->

## Platform Backends

- **macOS**：Accessibility API + CoreGraphics + ScreenCaptureKit
- **Windows**：UI Automation + Win32 APIs + Named pipes
- **Linux（pre-release）**：AT-SPI + X11/XWayland + XTest

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Platform Backends -->

## MCP 集成

```bash
claude mcp add --transport stdio cua-driver -- cua-driver mcp
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 MCP 集成 -->

## 生态位对比

| 维度 | trycua/cua | Hermes cua-driver | OpenCUA | Anthropic Computer Use |
|------|------------|-------------------|---------|------------------------|
| 后台控制 | ✅ no-foreground | ✅ | ❌ | ❌ |
| 跨平台 | macOS/Win/Lin | macOS/Win/Lin | macOS/Win | macOS（官方） |
| MCP 集成 | ✅ stdio | ❌ | ❌ | ❌ |
| 沙箱 SDK | ✅ | ❌ | ✅ | ❌ |
| 基准测试 | ✅ | ❌ | ✅ | ❌ |
| License | MIT | MIT | Apache-2.0 | 商业 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文对比表 -->

## 适用场景

**适合**：后台桌面控制、跨平台 macOS/Windows/Linux、MCP 协议集成、computer-use 基准测试、macOS 虚拟化

**不适合**：仅需单一平台、允许抢占焦点、不需要基准测试

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文适用场景 -->

## 待验证问题

| 优先级 | 声明 | 验证方式 |
|--------|------|----------|
| P1 | 后台桌面控制 no-foreground | cua-driver README |
| P1 | macOS/Windows/Linux 跨平台 | GitHub README |
| P2 | MCP stdio server | 官方文档 MCP 章节 |
| P2 | OSWorld 基准测试 | Cua Bench 文档 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文待验证问题 -->

## 信息来源

- [[2026-07-01-trycua-cua-github-readme]]
- [[2026-07-01-cua-architecture-docs]]
- [[2026-07-01-cua-driver-technical-docs]]

## 相关实体

- [[CUA]] — 已有实体页（补充）
- [[Lume]] — 已有实体页
- [[no-foreground-contract]] — 新增概念

## 相关主题

- [[桌面应用控制]] — 所属控制对象
- [[Agent集成层]] — MCP 集成