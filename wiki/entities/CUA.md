---
tags: [CUA, Computer-Use, Agent基础设施, 开源]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-cua-github-readme.md
  - wiki/sources/2026-06-28-cua-sandbox-setup.md
  - wiki/sources/2026-06-28-cua-analysis.md
---

# CUA (Computer Use Agent)

> CUA 是构建、基准测试和部署计算机使用 Agent 的开源基础设施，GitHub 14.8k+ Stars，MIT 开源协议，YC 支持。

## 简介

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "CUA (Computer Use Agent) is open source infrastructure for building, benchmarking, and deploying computer-using agents." -->

CUA (Computer Use Agent) 是由 trycua 开发的开源基础设施项目，为 AI Agent 提供构建、基准测试和部署计算机使用能力的一站式解决方案。与 Anthropic Computer Use 官方功能不同，CUA 更侧重于提供底层工具和平台支持。

## 关键信息

- **类型**：工具 / 开源基础设施
- **领域**：AI Agent 桌面控制 / Computer Use
- **开发者**：trycua
- **GitHub**：https://github.com/trycua/cua
- **Stars**：14.8k+
- **协议**：MIT License
- **支持平台**：macOS、Windows、Linux

## 四大核心组件

### 1. Cua Drivers

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "后台计算机使用，支持 macOS、Windows，Linux 预发布。Agents 可点击、输入、验证而不占用光标或焦点" -->

后台 computer-use agent，支持 macOS、Windows，Linux 预发布。核心特性：
- Agents 可点击、输入、验证而不占用光标或焦点
- 提供 CLI 和 MCP Server
- 支持 Claude Code、Cursor、Codex、OpenClaw 等主流 Agent

### 2. Cua (Sandbox)

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "适用于任何 OS 的 Agent 就绪沙箱" -->

适用于任何 OS 的 Agent 就绪沙箱，支持平台：
- Linux container/VM
- macOS
- Windows
- Android
- BYOI (Bring Your Own Image)

### 3. Cua-Bench

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "基准测试和 RL 环境" -->

基准测试和 RL 环境，评估 computer-use agents 在以下基准上的表现：
- OSWorld
- ScreenSpot
- Windows Arena

### 4. Lume

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "macOS 虚拟化。在 Apple Silicon 上使用 Apple Virtualization.Framework 创建和管理 macOS/Linux VM" -->

macOS 虚拟化工具，在 Apple Silicon 上使用 Apple Virtualization.Framework 创建和管理 macOS/Linux VM，近原生性能。

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

## 解决的问题

<!-- confidence: EXTRACTED -->
<!-- evidence: CUA 深度解析原文 -->

1. **安全风险**：AI Agent 在隔离环境中运行，不会影响真实系统
2. **环境混乱**：后台运行，不占用用户光标和焦点
3. **重复造轮子**：提供统一的基础设施
4. **评测困难**：提供统一的 Benchmark

## 依赖技术

- **Kasm** (MIT) — 沙箱技术
- **OmniParser** (CC-BY-4.0) — 屏幕解析
- **ultralytics** (AGPL-3.0, 可选) — 视觉模型

## 不同素材中的观点

### [[CUA GitHub README]]
- 官方项目介绍，四大组件完整说明
- 强调开源基础设施定位
- 14.8k+ Stars 社区认可

### [[CUA Sandbox 设置文档]]
- 详细描述 5 种沙箱部署方式
- Cloud Sandbox、Docker、QEMU VM、macOS Sandbox、Windows Sandbox
- CLI 安装指南覆盖全平台

### [[CUA 深度解析]]
- 从用户需求角度分析 CUA 解决的 4 个核心问题
- 强调沙箱隔离和安全价值
- YC 支持反映商业认可

## 与其他工具的关系

| 工具 | 定位 | 关系 |
|------|------|------|
| Anthropic Computer Use | 官方桌面控制能力 | 功能相似但实现不同 |
| Open Interpreter | 代码执行框架 | 可集成 CUA |
| UI-TARS | 视觉 GUI Agent | 目标场景重叠 |
| Playwright | 浏览器自动化 | 技术栈互补 |

## 相关页面

- [[Computer-Use]] — AI 桌面控制技术模式
- [[Sandbox]] — 隔离环境概念
- [[Lume]] — macOS 虚拟化工具
- [[Docker]] — 容器化隔离
- [[MCP]] — 模型上下文协议
- [[桌面应用控制]] — 控制对象主题
