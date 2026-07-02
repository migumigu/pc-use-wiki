---
tags: [agent-integration, orchestration, worktree, desktop-gui]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-orca-readme]
---

# Orca

> 7K+ Stars AI Agent 编排器，并行多 Agent 工作树架构，跨厂商中立

## 核心定位

**Orca** 是一个 AI Agent 集成开发环境（Agent IDE），核心定位为"并行运行多个 CLI Agent 并统一追踪管理"。每个 Agent 在独立 git worktree 中工作，避免代码冲突。

## 核心特性

### 1. 并行 Agent 编排
- 单个 prompt 分发到多个 Agent 并行执行
- Agent 协调处理复杂任务（示例：3 agents coordinating checkout subtasks）
- 自动任务分解和子任务追踪

### 2. Git Worktree 隔离
- 每个 Agent 在独立 worktree 中工作
- SSH Worktrees 支持远程服务器运行
- 自动重连和端口转发

### 3. 桌面 GUI
- Ghostty 终端架构 + WebGL 渲染
- 无限分屏，滚动缓冲区持久化
- 内置文件编辑器 + Git 集成 + Diff 注释

### 4. 跨厂商中立
支持 30+ CLI Agent：
- Claude Code、Codex、Grok、Cursor、Copilot、OpenCode
- Hermes Agent、Devin、Goose、Auggie
- Kimi、Qwen Code、MiMo Code
- 任何 CLI Agent

## 技术架构

### Orchestration 系统
- 自动分解大型任务为子任务
- 创建多个 workspace 并行处理
- 追踪子任务完成状态
- 支持任务依赖关系

### Computer Use
- Agent 可操作桌面应用
- 支持可见 UI 交互
- Design Mode：点击 UI 元素获取 HTML/CSS

### GitHub & Linear 集成
- 原生浏览 PR、Issue、项目看板
- 从任务打开 worktree，无需切换上下文

## CLI 工具

```bash
orca worktree create  # 创建 worktree
orca snapshot         # 快照
orca click            # 点击
orca fill             # 填充
```

Agent 可通过 CLI 驱动 Orca，实现工作流脚本化。

## 技术价值

- **并行编排**：多 Agent 并行执行范式
- **Worktree 隔离**：Git 工作树隔离机制
- **跨厂商**：不绑定特定 AI 厂商
- **桌面+移动**：全平台 GUI 支持

## 与同类对比

| 工具 | 定位 | 特点 |
|------|------|------|
| **Orca** | Agent 编排器 | 并行 worktree + 跨厂商 |
| **OpenHands** | Coding Agent | 75.9K Stars + SWEBench 77.6% |
| **DeerFlow** | SuperAgent Harness | 72K Stars + 14层 Middleware |

## 相关页面

- [[Agent集成层]]
- [[Multi-Agent协作]]
- [[桌面应用控制]]
- [[OpenHands]]

## 来源

- [[2026-07-02-orca-readme]]