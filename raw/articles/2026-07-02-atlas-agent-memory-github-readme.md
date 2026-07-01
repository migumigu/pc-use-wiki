---
source_id: auto-2026-07-02-atlas
title: Atlas Agent Memory — 基于认知科学的三重索引记忆系统
url: https://github.com/noamschwartz/atlas-memory-demo
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Atlas — Agent Memory on Elasticsearch

> Elastic 开源的 Agent 记忆系统，基于认知科学三重索引（Episodic/Semantic/Procedural），通过 Elasticsearch 实现，集成 MCP 协议

## 核心特性

- **三重记忆索引**：
  - Episodic（情景记忆）：事件+时间戳，记录"发生了什么"
  - Semantic（语义记忆）：事实+偏好，记录"什么是真的"
  - Procedural（程序记忆）：Playbook+How-tos，记录"什么方法有效"
- **混合检索**：BM25 + Jina v5 密集向量，通过 RRF（Reciprocal Rank Fusion）融合
- **LLM 整合**：通过 Elastic Inference Service 调用 Claude，无需额外 API Key
- **合并（Consolidation）**：单次 LLM 调用将情景事件提炼为去重语义事实，更新程序记忆
- **冲突解决**：Agent 检测矛盾信息，自动调用 forget_memory 删除旧事实，写入修正后的新事实
- **多租户隔离**：DLS API Key 或应用层 user_id 过滤
- **MCP 服务器**：原生 MCP 端点 `/api/atlas/mcp/{user_id}`，支持 Claude Desktop/Cursor 连接
- **自带数据联邦**：可联邦查询共享 atlas_catalog 索引或客户自有索引

## 技术架构

```
Frontend (React + EUI) ↔ Backend (FastAPI) ↔ Elastic Stack
 :3000                   :8001               (ES + Kibana + EIS)
```

- 后端：Python FastAPI，Elasticsearch 作为统一认知层
- 前端：Vite + React + EUI，实时记忆检查器
- 嵌入：Jina v5（服务端 semantic_text，无需客户端嵌入调用）
- LLM：Claude via EIS（无需提供商 API Key）

## MCP 工具

| 工具 | 功能 |
|------|------|
| `recall_memory(query, memory_types?, k?, include_catalog?)` | 混合 BM25+Jina v5 搜索，返回 top-10 |
| `write_memory(memory_type, text, fact_type?, confidence?)` | 写入新语义事实或程序 Playbook |
| `forget_memory(memory_id, memory_type)` | 删除特定记忆 |

## 评估结果

- Recall@10 ≥ 0.85
- Recall@5 ≥ 0.75
- 跨租户泄漏 = 0
- InfoQ 报道 Recall@10 = 0.89

## 与同类对比

- vs Mem0（事实提取范式）：Atlas 基于认知科学三重分类，而非简单事实提取
- vs Memora（Harmonic Memory）：Atlas 依赖 Elasticsearch 基础设施，Memora 更轻量
- vs agentmemory（零数据库）：Atlas 需要完整 Elastic Stack，适合企业级场景

## 限制

- 需要完整的 Elastic Cloud 或自托管 ES 集群
- DLS API Key 需要项目级管理密钥
- forget_memory 仅删除单文档，未配置滚动窗口删除
- 未集成 LangGraph checkpointer

## 来源

- GitHub: https://github.com/noamschwartz/atlas-memory-demo
- InfoQ 报道: https://www.infoq.com/news/2026/06/elastic-atlas-agent-memory/
- Elastic 官方博客: https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch
