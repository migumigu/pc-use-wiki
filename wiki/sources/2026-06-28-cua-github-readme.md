---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: github_readme
source_path: raw/articles/2026-06-28-cua-github-readme.md
images: 0
image_paths: []
---

# CUA - GitHub README

> CUA (Computer Use Agent) 是构建、基准测试和部署计算机使用 Agent 的开源基础设施，GitHub 14.8k+ Stars，MIT 开源协议。

## 基本信息

- **来源类型**：github_readme（文章）
- **原文位置**：raw/articles/2026-06-28-cua-github-readme.md
- **消化日期**：2026-06-28
- **来源URL**：https://github.com/trycua/cua
- **Stars**：14.8k+
- **协议**：MIT License
- **Commits**：3,379

## 核心观点

1. **开源基础设施定位**：CUA 提供构建、基准测试和部署计算机使用 Agent 的完整开源工具链，降低开发门槛

2. **四大核心组件**：
   - **Cua Drivers**：后台 computer-use agent，支持 macOS/Windows/Linux，Agent 可点击、输入、验证而不占用光标或焦点
   - **Cua (Sandbox)**：适用于任何 OS 的 Agent 就绪沙箱，支持 Linux/macOS/Windows/Android/BYOI
   - **Cua-Bench**：基准测试和 RL 环境，评估 OSWorld、ScreenSpot、Windows Arena 等基准
   - **Lume**：macOS 虚拟化，使用 Apple Virtualization.Framework 在 Apple Silicon 上创建和管理 VM

3. **多 Agent 支持**：Cua Drivers 提供 CLI 和 MCP Server，支持 Claude Code、Cursor、Codex、OpenClaw 等主流 Agent

4. **跨平台覆盖**：支持 macOS、Windows、Linux 三大桌面操作系统

## 关键概念

- [[Computer-Use]] — AI 通过屏幕截图和输入模拟控制桌面的技术模式
- [[Sandbox]] — 隔离环境，AI Agent 在其中操作不影响真实系统
- [[MCP]] — 模型上下文协议，CUA Drivers 支持 MCP Server 模式
- [[Lume]] — macOS 虚拟化工具（本文档首次出现）
- [[Kasm]] — 沙箱技术依赖（MIT）
- [[OmniParser]] — 屏幕解析技术依赖（CC-BY-4.0）

## 与其他素材的关联

- 与 [[Computer-Use-深度报告]] 的关系：CUA 是 Computer Use 的一种具体开源实现，提供了 Drivers 和 Sandbox 两大基础设施
- 与 [[CUA Sandbox 设置文档]] 的关系：CUA Sandbox 组件的详细配置指南
- 与 [[CUA 深度解析]] 的关系：GitHub README 提供官方项目信息，深度解析提供分析视角

## 原文精彩摘录

> CUA (Computer Use Agent) is open source infrastructure for building, benchmarking, and deploying computer-using agents.

```python
from cua import Sandbox, Image

async with Sandbox.ephemeral(Image.linux()) as sb:
    result = await sb.shell.run("echo hello")
    screenshot = await sb.screenshot()
    await sb.mouse.click(100, 200)
    await sb.keyboard.type("Hello from Cua!")
```

>后台计算机使用，支持 macOS、Windows，Linux 预发布。Agents 可点击、输入、验证而不占用光标或焦点。

## 相关页面

- [[Computer-Use]]
- [[Sandbox]]
- [[MCP]]
- [[CUA Sandbox 设置文档]]
- [[CUA 深度解析]]
