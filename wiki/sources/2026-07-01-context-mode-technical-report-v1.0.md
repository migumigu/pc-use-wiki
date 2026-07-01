---
tags: [Context-mode, 技术报告, MCP, Token压缩]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Context-mode 技术分析报告 v1.0

> 综合自 3 个素材 | 生成日期：2026-07-01

## 执行摘要

Context-mode 是 MCP 服务器，解决 AI Agent 上下文问题的"另一半"。核心定位：通过沙箱隔离工具输出、Session Continuity、Think in Code 范式，实现 98% Token 压缩（315KB → 5.4KB）。项目 GitHub 16,044+ Stars，Elastic License 2.0。

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文执行摘要 -->

**核心价值**：
- 沙箱隔离工具输出，防止上下文污染
- Session Continuity：SQLite + FTS5 实现跨会话状态恢复
- Think in Code 范式：700KB → 3.6KB
- 16 平台支持：Claude Code、Gemini CLI 等

**企业采用**：Microsoft、Google、Meta、NVIDIA、ByteDance 等 18+ 公司。

## 核心架构

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
└─────────────────────────────────────────────────────────────────┘
```

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文架构图 -->

## 四项机制

### 1. Context Saving（98% Token 减少）

工具输出不进入上下文，只保留引用：
- 315KB → 5.4KB

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Context Saving -->

### 2. Session Continuity

所有事件索引到 SQLite + FTS5，BM25 检索恢复状态。

不使用 `--continue` 时立即删除历史数据。

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Session Continuity -->

### 3. Think in Code

LLM 从数据处理器转变为代码生成器：
- 47 × Read() = 700 KB → 1 × ctx_execute() = 3.6 KB

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 Think in Code -->

### 4. 输出压缩（65-75%）

模型输出后处理，删除填充词、客套话，保留技术实质。

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文输出压缩 -->

## 11 MCP Tools

**沙箱工具（6）**：
- ctx_execute、ctx_execute_file、ctx_batch_execute
- ctx_index、ctx_search、ctx_fetch_and_index

**管理工具（5）**：
- ctx_stats、ctx_doctor、ctx_upgrade、ctx_purge、ctx_insight

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文 11 MCP Tools -->

## 平台覆盖（16）

Hook 平台（自动路由）vs MCP-only 平台（模型主动选择）。

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文平台覆盖 -->

## 技术实现

- SQLite（本地文件）
- FTS5（BM25 排序）
- MCP 标准

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文技术实现 -->

## 生态位对比

| 维度 | Context-mode | Headroom | Provider 原生压缩 |
|------|--------------|----------|-------------------|
| 压缩率 | 98% | 60-95% | 各异 |
| Think in Code | ✅ 强制范式 | ❌ | ❌ |
| Session Continuity | ✅ SQLite | ❌ | ❌ |
| Hooks 层数 | 4层 | 无 | Provider 内置 |
| License | ELv2（受限） | Apache-2.0 | 商业 |

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文对比表 -->

## 适用场景

**适合**：Claude Code/Gemini CLI 用户、多 Tool calls 导致上下文污染、企业团队

**不适合**：需要完全开源许可证、不使用 Claude Code/Gemini CLI、无 Node.js 22.5+ 环境

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文适用场景 -->

## 待验证问题

| 优先级 | 声明 | 验证方式 |
|--------|------|----------|
| P1 | 16,044 Stars | GitHub API |
| P1 | 98% Token 压缩 | 官方 benchmarks |
| P2 | 企业采用 18+ 公司 | 官方文档 enterprise adoption |
| P2 | Think in Code 700KB → 3.6KB | 官方 examples |

<!-- confidence: EXTRACTED -->
<!-- evidence: 报告原文待验证问题 -->

## 信息来源

- [[2026-07-01-context-mode-github-readme]]
- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]]
- [[2026-07-01-context-mode-claude-code-usage-guide]]

## 相关实体

- [[Context-mode]] — 项目实体
- [[Think in Code]] — 核心范式
- [[Session Continuity]] — 会话连续性

## 相关主题

- [[Agent集成层]] — 所属技术层