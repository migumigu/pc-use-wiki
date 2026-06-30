---
tags: [cua-driver, computer-use, desktop-automation, cross-platform]
created: 2026-06-30
updated: 2026-06-30
sources:
  - "[[2026-06-30-hermes-agent-computer-use-tech]]"
---

# cua-driver

> 开源跨平台桌面控制驱动，Hermes Agent Computer Use 的底层实现

## 一句话摘要

cua-driver 是 trycua 开发的开源后台计算机控制驱动，通过 MCP 协议为 AI Agent 提供跨平台桌面操作能力。

## 核心信息

- **类型**：开源桌面控制驱动
- **协议**：MCP over stdio
- **支持平台**：macOS, Windows, Linux
- **开源地址**：https://github.com/trycua/cua

## 技术实现

| 平台 | Accessibility | Input Method |
|------|--------------|--------------|
| macOS | AX (SkyLight) | SLPSPostEventRecordTo |
| Windows | UIAutomation | SendInput + PostMessage |
| Linux | AT-SPI | XTest / virtual-keyboard |

## 核心特性

- **后台模式**：不抢占焦点，不移动真实 cursor
- **跨平台统一接口**：一致的 MCP 接口
- **与多 Agent 兼容**：Claude Code, Codex, OpenCode, OpenClaw, Antigravity

## 相关页面

- [[hermes-agent]] — 使用 cua-driver 的 Agent
- [[Computer-Use]] — 核心概念
- [[desktop-app]] — 控制对象
