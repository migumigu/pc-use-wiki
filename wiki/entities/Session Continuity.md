---
tags: [Session Continuity, Context-mode, 会话恢复]
created: 2026-07-01
updated: 2026-07-01
type: entity
category: 概念
---

# Session Continuity

> 会话连续性，压缩后状态恢复

## 定义

Session Continuity 是 Context-mode 提出的概念：所有事件（文件编辑、git 操作、任务、错误）索引到 SQLite + FTS5，对话压缩后，FTS5 BM25 检索恢复相关状态。

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 核心流程

```
用户：继续上次的工作
ctx_mode：
  1. 查询 FTS5：查找"上次编辑的文件"
  2. 返回：文件路径、编辑位置、最后状态
  3. Agent 精确恢复工作状态
```

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode 技术分析 -->

## 关键特性

- 所有事件被索引到 SQLite
- FTS5 提供 BM25 排序检索
- 不使用 `--continue` 时立即删除历史数据

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 解决的问题

压缩时丢失：
- 文件编辑进度
- 进行中子任务
- 用户最后请求

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode 技术分析 -->

Session Continuity 让 Agent 原地"想起来"。

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode 使用指南 -->

## 技术实现

- **数据库**：SQLite（本地文件，无外部依赖）
- **全文检索**：SQLite FTS5（BM25 排序）
- **索引内容**：文件编辑、git 操作、任务状态、错误日志

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode GitHub README -->

## 与 Anthropic 原则关联

Anthropic "Effective Context Engineering for AI Agents"：

| Anthropic 原则 | Session Continuity 实现 |
|----------------|------------------------|
| 上下文是有限资源 | 工具输出沙箱隔离 |
| 压缩是首要杠杆 | FTS5 索引，不重新注入 |
| 结构化笔记 | SQLite + BM25 检索 |

<!-- confidence: EXTRACTED -->
<!-- evidence: Context-mode 技术分析 -->

## 适用场景

- 长时间 Agent 会话（超过 30 分钟）
- 多次压缩后恢复工作状态
- 跨会话连续性需求

## 不适用场景

- 单次短会话（无需恢复）
- 不需要保留工作状态

## 相关实体

- [[Context-mode]] — 提出 Session Continuity 的项目
- [[FTS5]] — 全文检索技术
- [[上下文压缩]] — 所属技术领域

## 相关主题

- [[Agent集成层]] — 所属技术层

## 相关页面

- [[2026-07-01-context-mode-github-readme]] — GitHub README
- [[2026-07-01-context-mode-98-percent-compression-tech-analysis]] — 技术分析
- [[2026-07-01-context-mode-claude-code-usage-guide]] — Claude Code 使用指南

## 不同素材中的观点

| 素材来源 | 核心观点 |
|----------|----------|
| Context-mode GitHub README | SQLite + FTS5，BM25 检索恢复 |
| Context-mode 技术分析 | 解决压缩时丢失进度问题 |
| Context-mode 使用指南 | 模型原地"想起来" |

<!-- confidence: EXTRACTED -->
<!-- evidence: 综合多篇素材 -->