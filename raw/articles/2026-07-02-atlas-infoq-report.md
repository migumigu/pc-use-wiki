---
source_id: auto-2026-07-02-atlas-infoq
title: Elastic 开源 Atlas Agent 记忆系统 — 基于认知科学
url: https://www.infoq.com/news/2026/06/elastic-atlas-agent-memory/
source_type: tech_blog
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Elastic 开源 Atlas Agent 记忆系统 — InfoQ 报道

> Elastic 开源基于 Elasticsearch 的 Agent 记忆系统 Atlas，通过 MCP 集成 Agent，维护每用户隔离的记忆。问答能力评估 Recall@10 = 0.89。

## 核心问题

Agent 长期交互时如何识别正确的上下文数据加入 LLM prompt？加载完整交互历史不可扩展——1M token 的上下文窗口是草稿板，不是记忆系统。

## 认知科学三重分类

Atlas 基于认知科学论文（Cognitive Psychology, 1985）识别的三种记忆类型：

1. **Episodic（情景记忆）**：捕获"发生了什么"——事件+时间戳
2. **Semantic（语义记忆）**：记录"什么是真的"——事实+偏好
3. **Procedural（程序记忆）**：记录"什么方法有效"——Playbook+步骤

每种类型有独立的 Elasticsearch 索引和生命周期。

## 合并（Consolidation）机制

1. 每个用户输入存储为情景记忆事件
2. 情景事件大多会衰减消失，部分"成为持久事实的证据"
3. LLM 合并将情景事件提炼为：
   - 新的语义事实（短句+情景证据+替代旧事实）
   - 程序 Playbook（新步骤创建 + 成功/失败计数更新）
4. 成功计数可偏置检索结果，提升更成功的 Playbook

## 检索机制

- 单一混合查询跨所有索引
- RRF（Reciprocal Rank Fusion）融合 BM25 词汇搜索 + Jina v5 语义搜索
- Cross-encoder reranker 重排序
- Document-level Security (DLS) 确保只搜索该用户的记忆

## Hacker News 讨论

- 质疑：Elasticsearch 是否"过于重量级"？是否可用 SQLite 等替代？
- 回应：需要脚本化评分、ANN 性能时，其他方案会"崩溃"，Elasticsearch 虽维护成本不低，但选错数据库再迁移更耗时

## 来源

- InfoQ: https://www.infoq.com/news/2026/06/elastic-atlas-agent-memory/
- GitHub: https://github.com/noamschwartz/atlas-memory-demo
- Elastic 官方博客: https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch
