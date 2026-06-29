---
report_id: auto-2026-06-28-file-system-agent-context-v1
title: File System as Agent Context 技术分析报告
version: v1
created_date: 2026-06-28
updated_date: 2026-06-28
source_count: 5
source_breakdown: Tier1: 2, Tier2: 3
---

# File System as Agent Context 技术分析报告 v1

> 生成日期：2026-06-28
> 来源：5 个（Tier1: 2, Tier2: 3）
> 报告版本：v1

## 1. 执行摘要

**File System as Agent Context** 是 AI Agent 基础设施的新兴范式，核心思想是将文件系统作为 Agent 的长期记忆和状态管理载体，替代传统的对话历史依赖。

这一范式在 2025-2026 年获得广泛关注，典型案例包括：
- **Manus** 提出的 "Using File System as a Context"
- **Claude Code** 用文件系统 + bash 击败复杂 embedding 索引路线
- **planning-with-files** 项目（23K+ stars，5 个月内达成）
- **Anthropic Skill 系统** 也基于文件概念

**为什么重要**：传统 Agent 依赖对话历史存在致命缺陷——对话历史是线性的、嘈杂的、包含大量过时纠错信息。文件系统作为「单一真理来源」能解决这些问题。

**核心价值**：
1. 可恢复性：重启后读取文件即可恢复状态
2. 上下文极简：只加载当前步骤必要信息
3. 原子性：操作具有原子性，易于版本控制
4. KV-Cache 友好：固定前缀设计提升缓存效率

## 2. 技术全景

### 2.1 核心架构

```
┌─────────────────────────────────────────────────────────────┐
│                      AI Agent                               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│  │ task_plan   │    │   notes     │    │ deliverable │     │
│  │    .md      │    │    .md      │    │    .md      │     │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘     │
│         │                   │                   │             │
│         └───────────────────┼───────────────────┘             │
│                             │                                 │
│                    ┌────────▼────────┐                       │
│                    │  File System    │                       │
│                    │  (Context)      │                       │
│                    └─────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 技术栈分层

**系统基础层**：
- 文件系统 API（read/write/list/search）
- 进程管理（bash/命令行执行）

**协议/接口层**：
- Markdown 文件格式（结构化输出）
- 目录结构约定（组织方式）

**工具实现层**：
- planning-with-files（Claude Code Skill）
- Manus 工作流（ToDo 文件模式）
- Claude Code（文件系统 + bash）

**Agent 集成层**：
- 外部化记忆（Externalized Memory）
- 状态显式化（State Externalization）
- 思考/行动分离（Think-Act Separation）

### 2.3 关键组件

| 组件 | 作用 | 示例 |
|------|------|------|
| task_plan.md | 记录目标、步骤、进度 | planning-with-files |
| notes.md | 存放调研资料、中间想法 | planning-with-files |
| deliverable.md | 纯净输出结果 | planning-with-files |
| ToDo 文件 | 外部化记忆 | Manus |
| KV-Cache | 缓存前缀稳定 | 所有实现 |

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 描述 | 来源置信度 |
|------|------|------------|
| 长期记忆 | 文件系统存储长期状态 | Tier 1（Manus 官方） |
| 状态恢复 | 重启后读取文件恢复进度 | Tier 1（Manus 官方） |
| 上下文极简 | 按需加载减少 Token 消耗 | Tier 1（Manus 官方） |
| 目标追踪 | ToDo 文件记录步骤进度 | Tier 1（Manus 官方） |
| 思考/行动分离 | 先想再做避免代码污染 | Tier 1（Manus 官方） |
| 多 Agent 协作 | 文件作为 Agent 间通信载体 | Tier 2（推断） |

### 3.2 局限性

| 局限性 | 描述 | 来源 |
|--------|------|------|
| 文件 I/O 开销 | 频繁读写文件可能影响性能 | Tier 2（分析） |
| 结构化程度低 | 纯文本格式缺乏强类型约束 | Tier 2（分析） |
| 并发控制 | 多 Agent 同时写文件需要协调 | Tier 2（推断） |
| 跨平台差异 | 文件系统行为在不同 OS 有差异 | Tier 2（推断） |

### 3.3 已知问题

| 问题 | 描述 | 来源 |
|------|------|------|
| 上下文丢失 | 传统 Chat 模式的致命缺陷 | Manus 官方博客 |
| 目标漂移 | 长对话中 AI 忘记原始目标 | planning-with-files |
| Token 爆炸 | 上下文过长导致注意力分散 | Manus 官方博客 |

## 4. 生态位

### 4.1 与同类方案对比

| 方案 | 记忆方式 | 状态恢复 | Token 效率 | 复杂度 |
|------|----------|----------|------------|--------|
| 纯 Chat | 对话历史 | 差 | 低 | 低 |
| 向量数据库 | Embedding 检索 | 一般 | 中 | 高 |
| **文件系统** | 文件读写 | **强** | **高** | **中** |

### 4.2 适用场景

- **复杂多步骤任务**：需要长期记忆和状态恢复
- **可中断任务**：需要中途保存进度
- **长周期开发**：代码生成、文档编写
- **多 Agent 协作**：文件作为通信载体

### 4.3 不适用场景

- **简单一次性指令**：不需要状态管理
- **实时性要求极高**：文件 I/O 延迟不可接受
- **结构化数据管理**：需要强类型和事务

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-2026-06-28-manus-context-engineering]] | Tier 1 | EXTRACTED | 六大原则、核心概念 |
| [[auto-2026-06-28-planning-with-files]] | Tier 1 | EXTRACTED | 项目详情、工作流 |
| [[auto-2026-06-28-file-system-as-meta-tool]] | Tier 2 | INFERRED | 理论背景、分析 |
| [[auto-2026-06-28-claude-code-agent-design]] | Tier 2 | INFERRED | Claude Code 架构 |
| [[auto-2026-06-28-context-engineering-guide]] | Tier 2 | INFERRED | 上下文工程概念 |

## 6. 待验证问题

| 问题 | 状态 |
|------|------|
| planning-with-files 在生产环境的稳定性 | 待验证 |
| 跨平台文件系统行为差异的具体影响 | 待验证 |
| 与向量数据库结合的最佳实践 | 待验证 |

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1 | 2026-06-28 | 初始版本 |
