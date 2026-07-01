---
tags: [实体, agent_integration, 2026-07-02]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-mem0-github-readme, 2026-07-02-mem0-technical-analysis]
---

# Mem0

> 为 AI Agent 提供智能记忆层的开源系统，采用事实提取+向量检索范式，是目前最广为人知的独立 Agent Memory 产品

## 概述

Mem0（"mem-zero"）是为 AI 助手和 Agent 提供智能记忆层的开源系统，使 AI 能够记住用户偏好、适应个体需求并持续学习。项目在 GitHub 上拥有约 59.8K Stars <!-- confidence: INFERRED -->，以 Apache-2.0 协议开源，是 2026 年最火的 Agent 记忆中间件。

2026 年 4 月，Mem0 发布了全新的 Single-pass ADD-only 提取算法，将提取管道从多次 LLM 调用简化为单次调用，记忆只增不减，避免了旧算法中 UPDATE/DELETE 逻辑的复杂边界情况。新算法在 LoCoMo 基准上从 71.4 提升至 91.6，LongMemEval 从 67.8 提升至 94.8，延迟降至 1 秒以内。

Mem0 支持 User/Session/Agent 三级状态记忆，提供 Library（pip/npm）、Self-Hosted Server（Docker）、Cloud Platform 三种部署模式，并通过 Agent Skills 和插件生态与 Claude Code、Codex、Cursor 等编码助手深度集成。但其事实级别存储的碎片化和叙事连贯性不足仍是根本性挑战。

## 核心能力

| 能力 | 说明 |
|------|------|
| Single-pass ADD-only 提取 | 单次 LLM 调用完成事实提取，记忆只增不减，延迟 <1s |
| 多层级记忆 | User / Session / Agent 三级状态记忆，支持自适应个性化 |
| 实体链接 | 从记忆中提取命名实体、嵌入表示、跨记忆链接以增强检索 |
| 多信号检索融合 | 语义搜索 + BM25 关键词 + 实体匹配三路并行融合排序 |
| 时间推理 | 时间感知检索排序，正确处理当前状态、过去事件、未来计划 |
| Agent 事实一等公民 | Agent 确认的操作信息与用户输入同等权重存储 |
| 丰富集成生态 | CLI 工具、Browser Extension、Claude/Codex/Cursor Plugin、Agent Skills |

## 技术架构

Mem0 采用分层架构，自上而下为：应用层（CLI / Browser Extension / Agent Skills/Plugins）→ SDK 层（Python SDK `mem0ai` / TypeScript SDK）→ 核心引擎（Memory.add() / Memory.search() / Memory.delete()）→ 存储与检索层（Qdrant 向量数据库 + 图存储 + 元数据存储）→ LLM 层（默认 OpenAI gpt-5-mini + text-embedding-3-small）。

核心引擎内部包含四个关键子系统：Single-pass ADD-only 记忆提取、实体提取与链接、多信号检索融合（语义 + BM25 + 实体）、时间感知排序。数据流方面，写入路径为"用户/Agent 消息 → LLM 提取事实 → 实体链接 → 存入向量数据库"，检索路径为"查询 → 语义/BM25/实体三路并行 → 融合排序 → 时间推理 → 返回 top-k"。

Mem0 还推出了图增强版本 Mem0g，在事实提取基础上增加图结构（命名实体为节点、事实关系为边），但仍以内容本身检索，未解决"解耦存储与检索"问题。

## 适用场景

- 客户支持聊天机器人（记住用户历史和偏好）
- AI 助手跨会话一致性对话
- 编码助手记忆（通过 Agent Skills/Plugins 集成）
- 医疗健康（跟踪患者偏好和病史）
- 生产力工具和游戏（根据用户行为适应）

## 局限性

- 碎片化问题：ADD-only 累积式存储仍产生大量孤立事实（旧算法 651 条/对话），新算法虽有改善但未从根本上解决
- 叙事连贯性缺失：事实级别存储无法捕捉决策之间的因果联系
- 检索深度有限：单次检索无法处理多跳推理，需额外 Agentic 循环
- 长期使用退化：随着记忆条目增长，检索精度可能下降
- 缺少遗忘机制：ADD-only 意味着记忆永不过期，需手动管理
- 依赖 LLM 调用成本：每次 add 和 search 均需 LLM 调用

## 相关素材

- [[2026-07-02-mem0-github-readme]]
- [[2026-07-02-mem0-technical-analysis]]

## 相关页面

- [[Memora]]
- [[Eigent]]
- [[MCP]]
- [[Agent]]
- [[上下文压缩]]
- [[Agent集成层]]
