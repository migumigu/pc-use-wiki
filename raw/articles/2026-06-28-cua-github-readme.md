---
source_id: auto-2026-06-28-cua-github-readme
title: CUA - Computer Use Agent Infrastructure
url: https://github.com/trycua/cua
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# CUA - GitHub README

## 项目概览

- **开发者**: trycua
- **GitHub**: https://github.com/trycua/cua
- **Stars**: 14.8k+
- **协议**: MIT License
- **Commits**: 3,379
- **平台**: macOS, Windows, Linux

## 核心定位

CUA (Computer Use Agent) 是构建、基准测试和部署计算机使用 Agent 的开源基础设施。

## 四大组件

### 1. Cua Drivers

后台计算机使用，支持 macOS、Windows，Linux 预发布。

- Agents 可点击、输入、验证而不占用光标或焦点
- 提供 CLI 和 MCP Server
- 支持 Claude Code, Cursor, Codex, OpenClaw 等

### 2. Cua (Sandbox)

适用于任何 OS 的 Agent 就绪沙箱。

```python
from cua import Sandbox, Image

async with Sandbox.ephemeral(Image.linux()) as sb:
    result = await sb.shell.run("echo hello")
    screenshot = await sb.screenshot()
    await sb.mouse.click(100, 200)
    await sb.keyboard.type("Hello from Cua!")
```

支持的平台：Linux container/VM, macOS, Windows, Android, BYOI

### 3. Cua-Bench

基准测试和 RL 环境。

评估 computer-use agents 在 OSWorld, ScreenSpot, Windows Arena 等基准上的表现。

### 4. Lume

macOS 虚拟化。

在 Apple Silicon 上使用 Apple Virtualization.Framework 创建和管理 macOS/Linux VM。

## 技术栈

| Package | Description |
|---------|-------------|
| cua-driver | 后台 computer-use agent for macOS, Windows, Linux |
| cua-agent | AI agent framework for computer-use tasks |
| cua-sandbox | SDK for creating and controlling sandboxes |
| cua-computer-server | Driver for UI interactions in sandboxes |
| cua-bench | Benchmarks and RL environments |
| lume | macOS/Linux VM management |
| lumier | Docker-compatible interface for Lume VMs |

## 依赖技术

- Kasm (MIT)
- OmniParser (CC-BY-4.0)
- 可选 cua-agent[omni] 包含 ultralytics (AGPL-3.0)
