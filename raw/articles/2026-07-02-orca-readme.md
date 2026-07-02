---
source_id: auto-20260702-orca-readme
title: Orca GitHub README
url: https://github.com/stablyai/orca
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Orca - AI Agent 编排器

## 项目概览

- **GitHub**: https://github.com/stablyai/orca
- **Stars**: 7K+
- **官网**: https://onorca.dev
- **License**: MIT
- **主页定位**: The AI Orchestrator for 100x builders

**核心定位**: Run Codex, ClaudeCode, OpenCode or Pi side-by-side — each in its own worktree, tracked in one place.

## 核心特性

### 1. 并行 Agent 编排架构

**Parallel Worktrees** - 核心能力：
- 单个 prompt 可分发到多个 agent 并行执行
- 每个 agent 运行在独立的 git worktree 中
- 可比较不同 agent 的结果并合并最优方案
- 支持多个 agent 协调处理复杂任务

官网展示的工作流：
```
Tasks → Automations
Projects
├── acme-web
│   ├── checkout-flow-v2 (3 agents coordinating)
│   ├── checkout-baseline
│   └── auth-session-refresh
└── acme-internal
    ├── eu-promo-checkout
    └── cart-recovery-email
```

### 2. Git Worktree 隔离机制

**隔离能力**：
- 每个 agent 在独立的 git worktree 中工作
- 避免不同 agent 之间的代码冲突
- 支持同一项目的多分支并行开发
- 可追踪每个 agent 的工作进度

**SSH Worktrees**：
- 支持远程服务器的 agent 运行
- 自动重连和端口转发
- 完整的文件编辑、git 操作和终端访问

### 3. 桌面 GUI (Desktop Application)

**跨平台支持**：
- macOS (Apple Silicon & Intel)
- Windows
- Linux (AppImage)

**核心功能**：
- Ghostty 启发的终端，WebGL 渲染
- 无限分屏，滚动缓冲区在重启后保留
- 内置文件编辑器（VS Code 编辑器组件）
- Git 集成和 diff 注释
- Quick Open: 跨 worktree、文件、agent、命令搜索

**移动端伴侣**：
- iOS App Store / TestFlight
- Android APK
- 监控和引导 agent
- 任务完成通知
- 远程发送后续指令

### 4. 跨厂商中立 (Vendor-Agnostic)

**支持的 Agent CLI** (30+):
- Claude Code (Anthropic)
- Codex (OpenAI)
- Grok (xAI)
- Cursor
- GitHub Copilot
- OpenCode
- MiMo Code (小米)
- Amp
- OpenClaude
- Antigravity (Google)
- Pi / oh-my-pi
- Hermes Agent (Nous Research)
- Devin
- Goose (Block)
- Auggie (Augment)
- Autohand Code
- Charm
- Cline
- Codebuff
- Command Code
- Continue
- Droid (Factory)
- Kilocode
- Kimi (月之暗面)
- Kiro
- Mistral Vibe
- Qwen Code
- Rovo Dev (Atlassian)
- 任何 CLI agent

**设计理念**: Works with **any CLI agent** — if it runs in a terminal, it runs in Orca.

## 技术架构亮点

### Orchestration (编排系统)

Agent 可以管理和协调 workspace：
- 自动分解大型任务为子任务
- 创建多个 workspace 并行处理
- 追踪子任务完成状态
- 支持任务依赖关系

示例场景：
```
redesign auth flow
├── Splitting auth rewrite into 2 PRs…
│   ├── PR 1/2: migrate users.sql
│   │   └── Adding the email_verified column…
│   └── PR 2/2: withSession middleware
│       └── Wiring withSession middleware…
```

### Terminal System

- 基于 Ghostty 的终端架构
- WebGL 渲染引擎
- 支持无限分屏
- 滚动缓冲区持久化
- 2x/3x 缩放支持

### Design Mode

- 点击 UI 元素获取 HTML/CSS
- 自动截图发送到 agent prompt
- 实时 Chromium 窗口
- 用于 UI 调试和交互

### Computer Use

- Agent 可操作桌面应用
- 支持可见 UI 交互
- 适合需要真实交互的工作流

### GitHub & Linear 集成

- 原生浏览 PR、Issue 和项目看板
- 从任何任务打开 worktree
- 无需切换上下文即可 review

## CLI 工具

Orca 提供完整的 CLI：
```bash
orca worktree create  # 创建 worktree
orca snapshot         # 快照
orca click            # 点击
orca fill             # 填充
```

Agent 可以通过 CLI 驱动 Orca，实现工作流脚本化。

## 安装方式

### 桌面端
- 官网下载: https://onorca.dev/download
- macOS Homebrew: `brew install --cask stablyai/orca/orca`
- Arch Linux AUR: `yay -S stably-orca-bin`
- 支持 headless Linux server 模式

### 移动端
- iOS: App Store / TestFlight
- Android: APK 直接下载

## 社区与支持

- **Discord**: https://discord.gg/fzjDKHxv8Q
- **Twitter**: @orca_build
- **WeChat**: 扫码加入
- **反馈渠道**: GitHub Issues
- **隐私政策**: https://www.onorca.dev/docs/telemetry

## 技术栈

根据仓库文件结构：
- TypeScript 97.2%
- JavaScript 1.6%
- CSS 0.4%
- Swift 0.4% (移动端)
- HTML 0.2%
- PowerShell 0.1%

**框架/工具**:
- Electron (桌面应用)
- React (UI 组件，基于 components.json)
- oxlint/oxfmt (代码格式化)
- Vite (构建工具)

## 产品定位总结

Orca 是一个**AI Agent 集成开发环境 (Agent IDE)**，核心价值：

1. **统一编排**: 在一个界面中并行运行多个不同的 AI agent
2. **隔离执行**: 每个 agent 在独立 git worktree 中工作，避免冲突
3. **跨厂商**: 不绑定特定 AI 厂商，支持所有 CLI agent
4. **桌面+移动**: 全平台 GUI，支持远程监控和控制
5. **工作流集成**: 内置 Git、Issue、PR、Linear 等 DevOps 工具集成

与传统的单一 agent 工具不同，Orca 定位为 **agent 编排平台**，解决多 agent 协作、隔离、追踪的问题。

## 更新频率

- 每日发布 (根据 README: "we ship daily")
- 截止 2026-07-01 已发布 700 个版本
- 活跃开发中，最新版本 v1.4.115-rc.4