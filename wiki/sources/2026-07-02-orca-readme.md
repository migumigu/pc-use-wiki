---
tags: [agent-integration, orchestration, worktree, desktop-gui]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-orca-readme]
---

# Orca GitHub README

> 7K+ Stars AI Agent 编排器，并行多 Agent 工作树架构，跨厂商中立

## 概要

**Orca** 是一个 AI Agent 集成开发环境（Agent IDE），核心定位为"并行运行多个 CLI Agent 并统一追踪管理"。每个 Agent 在独立 git worktree 中工作，避免代码冲突，支持跨厂商中立。

## 核心数据

| 维度 | 数据 |
|------|------|
| **Stars** | 7,000+ |
| **License** | MIT |
| **支持 Agent** | 30+ CLI Agent |
| **发布版本** | 700+ |
| **更新频率** | 每日发布 |
| **平台** | macOS/Windows/Linux + iOS/Android |

## 核心特性

### 1. 并行 Agent 编排
- 单个 prompt 分发到多个 Agent 并行执行
- Agent 协调处理复杂任务
- 自动任务分解和子任务追踪

### 2. Git Worktree 隔离
- 每个 Agent 在独立 worktree 中工作
- SSH Worktrees 支持远程运行
- 避免不同 Agent 代码冲突

### 3. 桌面 GUI
- Ghostty 终端架构 + WebGL 渲染
- 无限分屏，滚动缓冲区持久化
- 内置文件编辑器和 Git 集成

### 4. 跨厂商中立
支持 30+ CLI Agent：Claude Code、Codex、Grok、Cursor、Copilot、OpenCode、Hermes、Devin、Goose 等

## 技术架构

### Orchestration 系统
- 自动分解大型任务
- 创建多个 workspace 并行处理
- 追踪子任务完成状态

### Computer Use
- Agent 可操作桌面应用
- 支持可见 UI 交互
- Design Mode 自动截图

## 产品定位

与传统单一 Agent 工具不同，Orca 定位为 **Agent 编排平台**，解决：
- 多 Agent 协作
- 代码隔离
- 进度追踪

## 技术价值

- **并行编排**：多 Agent 并行执行范式
- **Worktree 隔离**：Git 工作树隔离机制
- **跨厂商**：不绑定特定 AI 厂商

## 相关页面

- [[Orca]]
- [[Agent集成层]]
- [[Multi-Agent协作]]
- [[桌面应用控制]]

## 来源

- GitHub README: https://github.com/stablyai/orca
- 官网: https://onorca.dev