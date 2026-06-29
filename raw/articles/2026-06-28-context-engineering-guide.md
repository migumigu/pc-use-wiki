---
source_id: auto-2026-06-28-context-engineering-guide
title: 上下文工程终极指南：从提示工程到Claude Code
url: https://blog.csdn.net/Python_cocola/article/details/153876922
source_type: tech_blog
tier: 2
control_object: file_system
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# 上下文工程终极指南：从提示工程到Claude Code

## 核心概念

**上下文工程**（Context Engineering）是指在 AI Agent 开发中，对上下文进行精心设计和管理的工程实践。

### 与提示词工程的区别

| 维度 | 提示词工程 | 上下文工程 |
|------|-----------|------------|
| 关注点 | 单次 Prompt | 整个对话上下文 |
| 粒度 | 粗粒度 | 细粒度 |
| 方法 | 优化 Prompt 本身 | 管理信息来源和流动 |

## 为什么需要上下文工程

1. **多数 AI Agent 的失败，并非模型能力的失败，而是上下文工程的失败**
2. 上下文长度影响 AI 注意力分散
3. 信息质量比信息数量更重要

## 核心原则

### 1. 上下文窗口极简主义

只喂给 AI 当前步骤必要的信息：
- 信息拆分到不同文件
- 按需加载
- 保持注意力集中

### 2. 文件即单一真理来源

- 文件是经过整理的、当前的「最新状态」
- 对话历史包含大量过时的纠错信息
- AI 每次行动前应该读取文件而非回溯聊天记录

### 3. 状态显式化

通过 ToDo 文件等外部化记忆：
- 即使重启也能恢复状态
- 实现完美的可恢复性

### 4. 思考与行动分离

1. 先在 Notes 上写下调研结果、架构思路
2. 确认无误后，再去修改正式代码文件

### 5. 围绕 KV-Cache 设计

所有 Prompt 设计都要为缓存命中率让路：
- 保持前缀稳定
- 只追加不修改
- 确定性序列化

## Claude Code 的实践

Claude Code 采用「分而治之」和「按需加载」的策略。

## 演进方向

上下文工程正在代替提示词工程成为 AI Agent 开发的主流方法。
