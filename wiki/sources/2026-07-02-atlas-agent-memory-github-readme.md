---
tags: [agent-memory, elasticsearch, MCP, cognitive-science, episodic, semantic, procedural]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-atlas-agent-memory-github-readme, 2026-07-02-atlas-infoq-report]
---

# Atlas Agent Memory GitHub README

> Elastic 开源的 Agent 记忆系统，基于认知科学三重索引（Episodic/Semantic/Procedural），通过 Elasticsearch 实现，集成 MCP 协议

## 核心特性

- **三重记忆索引**：Episodic（情景）、Semantic（语义）、Procedural（程序），每类独立 Elasticsearch 索引
- **混合检索**：BM25 + Jina v5 密集向量，通过 RRF 融合 + Cross-encoder 重排序
- **合并（Consolidation）**：单次 LLM 调用将情景事件提炼为去重语义事实+更新程序 Playbook
- **冲突解决**：检测矛盾 → forget_memory 删除旧事实 → write_memory 写入修正事实
- **MCP 服务器**：3 个工具（recall_memory, write_memory, forget_memory）
- **多租户隔离**：DLS API Key + user_id 过滤
- **评估**：Recall@10 ≥ 0.85, Recall@5 ≥ 0.75, 跨租户泄漏 = 0

## 技术架构

- 后端：Python FastAPI
- 前端：Vite + React + EUI
- 存储：Elasticsearch（三索引 + Jina v5 嵌入）
- LLM：Claude via Elastic Inference Service

## 来源

- GitHub: https://github.com/noamschwartz/atlas-memory-demo
- Elastic 官方博客: https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch

## 相关页面

- [[Atlas]]
- [[Mem0]]
- [[Memora]]
- [[agentmemory]]
- [[MCP]]
