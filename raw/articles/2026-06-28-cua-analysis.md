---
source_id: auto-2026-06-28-cua-analysis
title: CUA 深度解析 - AI Agent 的沙盒操作系统
url: https://blog.csdn.net/mymessageone/article/details/160603219
source_type: tech_blog
tier: 2
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: medium
---

# CUA 深度解析

## 概述

CUA (Computer Use Agent) 是 AI Agent 的沙盒操作系统，提供构建、基准测试和部署计算机使用 Agent 的开源基础设施。GitHub 14.8k+ Stars，MIT 开源，YC 支持。

## 解决的问题

1. **安全风险**：AI Agent 在隔离环境中运行，不会影响真实系统
2. **环境混乱**：后台运行，不占用用户光标和焦点
3. **重复造轮子**：提供统一的基础设施
4. **评测困难**：提供统一的 Benchmark

## 四大组件

### 1. Cua Driver

后台 computer-use agent，支持 macOS、Windows，Linux 预发布。

- Agents 可点击、输入、验证而不占用光标或焦点
- 提供 CLI 和 MCP Server
- 支持 Claude Code, Cursor, Codex, OpenClaw 等

### 2. Cua (Sandbox)

适用于任何 OS 的 Agent 就绪沙箱。

- 支持 Linux container/VM, macOS, Windows, Android, BYOI
- 统一 API，跨平台一致体验

### 3. Cua-Bench

基准测试和 RL 环境。

- OSWorld, ScreenSpot, Windows Arena 等
- 导出轨迹用于训练

### 4. Lume

macOS 虚拟化。

- Apple Silicon 上使用 Apple Virtualization.Framework
- 近原生性能

## 技术栈

| Package | Description |
|---------|-------------|
| cua-driver | 后台 computer-use agent |
| cua-agent | AI agent framework |
| cua-sandbox | 沙箱 SDK |
| cua-computer-server | UI 交互驱动 |
| cua-bench | 基准测试和 RL 环境 |
| lume | macOS/Linux VM 管理 |

## 依赖技术

- Kasm (MIT)
- OmniParser (CC-BY-4.0)
- ultralytics (AGPL-3.0, 可选)
