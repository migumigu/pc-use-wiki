---
report_id: 2026-07-01-context-mode-v1.0
title: Context-mode 技术分析报告 v1.0
version: 1.0
created_date: 2026-07-01
updated_date: 2026-07-01
source_count: 3
source_breakdown: Tier1: 3, Tier2: 0, Tier3: 0
---

# Context-mode 技术分析报告 v1.0

> 生成日期：2026-07-01
> 来源：3 个（Tier1: 3, Tier2: 0, Tier3: 0）
> 报告版本：v1.0

## 1. 执行摘要

Context-mode 是一个 MCP 服务器，解决 AI Agent 上下文问题的"另一半"。核心定位：通过沙箱隔离工具输出、Session Continuity（跨会话连续性）、Think in Code 范式，实现 98% Token 压缩（315KB → 5.4KB）。项目在 GitHub 上获得 16,044+ Stars（截至 2026-07-01），采用 Elastic License 2.0（ELv2），主语言为 JavaScript/TypeScript。

**核心价值**：
- 沙箱隔离工具输出，防止原始数据污染上下文窗口
- Session Continuity：SQLite + FTS5 实现跨会话状态恢复，对话压缩后自动恢复上下文
- Think in Code 范式：LLM 生成分析脚本而非读取文件（700KB → 3.6KB）
- 16 平台支持：Claude Code、Gemini CLI、VS Code Copilot、Cursor 等

**企业采用**：Microsoft、Google、Meta、Amazon、IBM、NVIDIA、ByteDance、Stripe、Datadog、Salesforce 等 18+ 公司生产环境使用。

## 2. 技术全景

### 2.1 核心架构

```
┌─────────────────────────────────────────────────────────────────┐
│                    Context-mode MCP Server                       │
│                                                                  │
│  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐    │
│  │  Sandbox      │    │  Session      │    │  Think in     │    │
│  │  Execution    │    │  Continuity   │    │  Code Engine  │    │
│  │               │    │               │    │               │    │
│  │  ctx_execute  │    │  SQLite+FTS5  │    │  Script Gen   │    │
│  │  ctx_batch    │    │  BM25 Search  │    │               │    │
│  └───────────────┘    └───────────────┘    └───────────────┘    │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Hooks Layer (PreToolUse/PostToolUse/PreCompact/SessionStart) │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  11 MCP Tools: ctx_execute, ctx_batch_execute, ctx_execute_file,│
│                ctx_index, ctx_search, ctx_fetch_and_index,      │
│                ctx_stats, ctx_doctor, ctx_upgrade, ctx_purge,   │
│                ctx_insight                                       │
└─────────────────────────────────────────────────────────────────┘
        │
        ▼
   LLM Agent (Claude Code / Gemini CLI / Cursor / VS Code Copilot...)
```

### 2.2 技术栈分层

**存储层**：
- SQLite：本地数据库，无外部依赖
- FTS5：SQLite 内置全文检索，BM25 排序
- Session 状态跟踪：文件编辑、git 操作、任务、错误、用户决策

**执行层**：
- Sandbox Execution：`ctx_execute()` 在隔离环境执行脚本
- Think in Code：LLM 生成分析脚本，`console.log()` 输出结果
- 100x context savings：1 个脚本替代 10 个 tool calls

**接入层**：
- MCP Server：`context-mode` 命令
- Hooks：PreToolUse、PostToolUse、PreCompact、SessionStart
- Plugin Marketplace：Claude Code 一键安装

**平台层**：
- 16 平台：Claude Code、Gemini CLI、VS Code Copilot、JetBrains Copilot、Cursor、Windsurf、OpenCode、KiloCode、OpenClaw 等

### 2.3 关键组件

1. **Sandbox Execution**：隔离工具输出，防止原始数据进入上下文
2. **Session Continuity**：SQLite + FTS5 索引所有事件，对话压缩后自动恢复
3. **Think in Code Engine**：强制 LLM 生成脚本而非读取文件
4. **ctx_insight**：个人分析仪表盘（90 指标、37 模式、4 复合分数）

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 来源置信度 | 说明 |
|------|------------|------|
| Token 压缩 98% | EXTRACTED | 315KB → 5.4KB实测 |
| Session Continuity | EXTRACTED | SQLite + FTS5，BM25 检索恢复上下文 |
| Think in Code | EXTRACTED | 700KB → 3.6KB（47 个 Read → 1 个 ctx_execute） |
| 16 平台支持 | EXTRACTED | Claude Code、Gemini CLI、VS Code Copilot 等 |
| 企业采用 18+ 公司 | EXTRACTED | Microsoft、Google、NVIDIA、ByteDance 等 |
| Hooks 四层 | EXTRACTED | PreToolUse、PostToolUse、PreCompact、SessionStart |
| 11 MCP Tools | EXTRACTED | 6 sandbox + 5 meta |

### 3.2 局限性

| 局限 | 来源 | 说明 |
|------|------|------|
| Elastic License 2.0 | EXTRACTED | 商业使用受限（非 Apache/MIT） |
| Claude Code 版本依赖 | EXTRACTED | 需要 Claude Code v1.0.33+ |
| Node.js 22.5+ 依赖 | EXTRACTED | 需要 Node.js 22.5 或 Bun |
| Session 数据清理 | EXTRACTED | 不使用 `--continue` 时立即删除会话数据 |

### 3.3 已知问题

- License 限制：ELv2 不允许商业化再分发
- 需要验证：`/context-mode:ctx-doctor` 确认所有检查通过

## 4. 生态位

### 4.1 与同类工具对比

| 维度 | Context-mode | Headroom | Provider 原生压缩 |
|------|--------------|----------|-------------------|
| 压缩率 | 98% | 60-95% | 各异 |
| 可逆性 | ✅ FTS5 检索 | ✅ CCR | ❌ |
| Think in Code | ✅ 强制范式 | ❌ | ❌ |
| Session Continuity | ✅ SQLite | ❌ | ❌ |
| Hooks 层数 | 4层 | 无 | Provider 内置 |
| License | ELv2（受限） | Apache-2.0 | 商业 |

### 4.2 适用场景

- ✅ Claude Code/Gemini CLI 用户，需要跨会话连续性
- ✅ 多 Tool calls 导致上下文污染（Playwright snapshot 56KB）
- ✅ 需要 Think in Code 范式（LLM 生成脚本而非读取文件）
- ✅ 企业团队（18+ 公司已采用）

### 4.3 不适用场景

- ❌ 需要完全开源（Apache/MIT）许可证
- ❌ 不使用 Claude Code/Gemini CLI
- ❌ 无 Node.js 22.5+ 环境

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-20260701-a1b2c3d]] | Tier 1 | EXTRACTED | 核心架构、四层机制、平台支持 |
| [[auto-20260701-context-mode-98-percent-compression-tech-analysis]] | Tier 1 | EXTRACTED | 98% 压缩机制、Think in Code |
| [[auto-20260701-context-mode-claude-code-usage-guide]] | Tier 1 | EXTRACTED | Claude Code 集成、企业采用 |

## 6. 待验证问题

| 优先级 | 声明 | 验证方式 |
|--------|------|----------|
| P1 高 | "16,044 Stars" | GitHub API 实时查询 |
| P1 高 | "98% Token 压缩（315KB → 5.4KB）" | 官方文档 benchmarks |
| P2 中 | "企业采用 18+ 公司" | 官方文档 enterprise adoption |
| P2 中 | "Think in Code 700KB → 3.6KB" | 官方文档 examples |

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-07-01 | 初始版本 |