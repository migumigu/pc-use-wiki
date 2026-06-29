---
report_id: auto-2026-06-28-cua-report-v1
title: CUA 技术分析报告
version: v1
created_date: 2026-06-28
updated_date: 2026-06-28
source_count: 3
source_breakdown: Tier1: 2, Tier2: 1
---

# CUA 技术分析报告 v1

> 生成日期：2026-06-28
> 来源：3 个（Tier1: 2, Tier2: 1）
> 报告版本：v1

## 1. 执行摘要

**CUA** (Computer Use Agent) 是由 trycua 开发的开源基础设施项目，旨在为 AI Agent 提供构建、基准测试和部署计算机使用能力的能力。截至2026年，GitHub 获得 **14.8k+ Stars**，MIT 协议，YC 支持，被 50,000+ 工程师信赖。

核心价值：**解决 AI Agent "操控电脑"时的四大障碍**——安全风险、环境混乱、重复造轮子、评测困难。

**重要性**：CUA 提供了统一的沙箱环境、MCP 集成和基准测试框架，让开发者可以快速构建安全、可靠的 Computer Use Agent。

## 2. 技术全景

### 2.1 核心架构

CUA 由四大组件构成，形成完整的 Computer Use Agent 基础设施：

```
CUA 基础设施
├── Cua Driver (后台驱动层)
│   └── 支持 macOS/Windows/Linux 后台运行
├── Cua Sandbox (隔离执行环境)
│   ├── Cloud / Docker / QEMU / macOS / Windows
│   └── 统一 API
├── Cua-Bench (基准测试)
│   └── OSWorld / ScreenSpot / Windows Arena
└── Lume (macOS 虚拟化)
```

### 2.2 技术栈分层

| 层级 | 技术组件 |
|------|----------|
| 系统基础层 | macOS DriverKit, Windows UIA, Linux (预发布) |
| 协议/接口层 | MCP Server, CLI, 统一 Sandboxes API |
| 工具实现层 | cua-driver, cua-agent, cua-sandbox |
| Agent 集成层 | Claude Code, Cursor, Codex, OpenClaw 支持 |

### 2.3 四大组件详解

#### 2.3.1 Cua Driver

后台 computer-use agent，支持：
- **macOS / Linux / Windows** 后台运行
- Agents 可点击、输入、验证而不占用光标或焦点
- 提供 CLI 和 MCP Server
- 兼容 Claude Code, Cursor, Codex, OpenClaw

```bash
# 安装 (macOS/Linux)
curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.sh | bash

# 安装 (Windows)
irm https://raw.githubusercontent.com/trycua/cua/main/libs/cua-driver/scripts/install.ps1 | iex
```

#### 2.3.2 Cua Sandbox

适用于任何 OS 的 Agent 就绪沙箱，统一的 API：

```python
from cua import Sandbox, Image

async with Sandbox.ephemeral(Image.linux()) as sb:
    result = await sb.shell.run("echo hello")
    screenshot = await sb.screenshot()
    await sb.mouse.click(100, 200)
    await sb.keyboard.type("Hello from Cua!")
```

**支持的平台**：

| 平台 | Cloud | Local |
|------|-------|-------|
| Linux Container | ✅ | Docker |
| Linux VM | ✅ | QEMU |
| macOS | ✅ | Lume |
| Windows | ✅ | Windows Sandbox |
| Android | ✅ | - |
| BYOI | 🔜 | QEMU |

#### 2.3.3 Cua-Bench

基准测试和 RL 环境：

- **OSWorld**: 通用计算机任务
- **ScreenSpot**: GUI 定位基准
- **Windows Arena**: Windows 特定任务
- 导出轨迹用于强化学习训练

```bash
git clone https://github.com/trycua/cua && cd cua/cua-bench
uv tool install -e . && cb image create linux-docker
cb run dataset datasets/cua-bench-basic --agent cua-agent --max-parallel 4
```

#### 2.3.4 Lume

macOS 虚拟化解决方案：

- 使用 Apple Virtualization.Framework
- Apple Silicon 上的近原生性能
- 支持 macOS/Linux VM

```bash
curl -fsSL https://raw.githubusercontent.com/trycua/cua/main/libs/lume/scripts/install.sh | bash
lume run macos-sequoia-vanilla:latest
```

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 说明 | 置信度 |
|------|------|--------|
| 后台运行 | 不占用用户光标和焦点 | EXTRACTED |
| 跨平台 | macOS/Windows/Linux 统一 API | EXTRACTED |
| 沙箱隔离 | 安全隔离环境 | EXTRACTED |
| 截图 | 屏幕截图能力 | EXTRACTED |
| 鼠标操作 | 点击、移动、拖拽 | EXTRACTED |
| 键盘操作 | 文本输入、快捷键 | EXTRACTED |
| Shell 执行 | 命令行操作 | EXTRACTED |
| 移动端支持 | Android 多点触控手势 | EXTRACTED |
| MCP Server | 模型上下文协议支持 | EXTRACTED |

### 3.2 局限性

| 局限性 | 来源 | 说明 |
|--------|------|------|
| Linux 预发布 | GitHub README | Linux 后台支持仍在测试 |
| 云端依赖 | cua.ai | Cloud Sandbox 需要 API Key |
| 平台限制 | Lume | 仅 macOS (Apple Silicon) |
| Windows Sandbox | Windows | 仅 Pro/Enterprise 版本 |

### 3.3 已知问题

- Windows Sandbox 仅支持 Windows 10 Pro/Enterprise 或 Windows 11
- macOS Driver 需要 macOS 主机运行

## 4. 生态位

### 4.1 与同类工具对比

| 对比点 | CUA | Open Interpreter | Anthropic Computer Use |
|--------|-----|------------------|------------------------|
| 定位 | 基础设施平台 | 终端编程环境 | 云端 API 服务 |
| 运行环境 | 沙箱隔离 | 本地终端 | 云端浏览器 |
| 后台运行 | ✅ 支持 | ❌ 不支持 | ❌ 不支持 |
| MCP 支持 | ✅ 原生 | ❌ | ❌ |
| 基准测试 | ✅ 集成 | ❌ | ❌ |
| 多平台 | ✅ 统一 API | 跨平台 | 仅云端 |

### 4.2 适用场景

- **构建 Computer Use Agent**: 需要安全隔离环境
- **模型评测**: 使用标准基准测试评估 Agent 性能
- **跨平台开发**: 需要统一 API 跨 macOS/Windows/Linux
- **RL 训练**: 导出轨迹用于强化学习

### 4.3 不适用场景

- 简单脚本自动化（用 PyAutoGUI 更轻量）
- 需要本地 GUI 直接操作（非沙箱）
- 资源受限环境

## 5. 技术依赖

| 依赖 | 许可证 | 用途 |
|------|--------|------|
| Kasm | MIT | 沙箱技术 |
| OmniParser | CC-BY-4.0 | UI 解析 |
| ultralytics | AGPL-3.0 | 可选 OCR/检测 |

## 6. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-2026-06-28-cua-github-readme]] | Tier 1 | EXTRACTED | 核心架构、API |
| [[auto-2026-06-28-cua-sandbox-setup]] | Tier 1 | EXTRACTED | 沙箱配置 |
| [[auto-2026-06-28-cua-analysis]] | Tier 2 | INFERRED | 问题分析 |

## 7. 待验证问题

1. **性能数据**: 具体操作延迟、成功率
2. **安全机制**: 沙箱隔离的具体实现细节
3. **云端成本**: Cloud Sandbox 定价模式

## 8. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-06-28 | 初始版本 |
