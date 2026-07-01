---
tags: [agent-memory, elasticsearch, MCP, cognitive-science]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-atlas-agent-memory-github-readme, 2026-07-02-atlas-infoq-report]
---

# Atlas

> Elastic 开源的 Agent 记忆系统，基于认知科学三重索引（Episodic/Semantic/Procedural），通过 Elasticsearch 实现，集成 MCP 协议

## 概述

Atlas 是 Elastic 团队成员 Noam Schwartz 开发的 Agent 记忆系统（代码仓库在个人账号 noamschwartz/atlas-memory-demo），由 Elastic 官方博客推广。它将认知科学的三重记忆分类引入 Agent 领域，通过 Elasticsearch 实现企业级记忆管理。

## 核心架构

- **三重记忆索引**：
  - Episodic（情景记忆）：事件+时间戳，记录"发生了什么"，大多衰减
  - Semantic（语义记忆）：事实+偏好，记录"什么是真的"，持久存储
  - Procedural（程序记忆）：Playbook+步骤，记录"什么方法有效"，成功/失败计数偏置检索
- **混合检索**：BM25 + Jina v5 + RRF + Cross-encoder reranker
- **合并引擎**：LLM 将情景事件提炼为去重语义事实+更新程序 Playbook
- **冲突解决**：自动检测矛盾，forget → write
- **MCP 集成**：3 个工具（recall_memory, write_memory, forget_memory）
- **多租户隔离**：DLS API Key + user_id 过滤

## 技术栈

- 后端：Python FastAPI
- 前端：Vite + React + EUI
- 存储：Elasticsearch + Jina v5 嵌入 + Elastic Inference Service
- LLM：Claude via EIS

## 评估

- Recall@10 ≥ 0.85（InfoQ 报道 0.89）
- Recall@5 ≥ 0.75
- 跨租户泄漏 = 0

## 局限性

- 需要完整 Elastic Cloud 或自托管 ES 集群
- DLS 依赖项目级管理密钥
- 未配置滚动删除（ILM）
- 嵌入模型锁定 Jina v5

## 生态位

- vs [[Mem0]]（事实提取）：Atlas 基于认知科学三重分类，企业级
- vs [[Memora]]（Harmonic Memory）：Atlas 依赖 ES 基础设施，Memora 更轻量
- vs [[agentmemory]]（零数据库）：Atlas 适合企业级，agentmemory 适合个人开发者

## 来源

- GitHub: https://github.com/noamschwartz/atlas-memory-demo
- InfoQ: https://www.infoq.com/news/2026/06/elastic-atlas-agent-memory/
- Elastic 官方: https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch

## 相关页面

- [[Mem0]]
- [[Memora]]
- [[agentmemory]]
- [[MCP]]
- [[Agent集成层]]
