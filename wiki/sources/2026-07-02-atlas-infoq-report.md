---
tags: [agent-memory, elasticsearch, cognitive-science, MCP, infoq]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-atlas-infoq-report]
---

# Atlas InfoQ 报道 — Elastic 开源基于认知科学的 Agent 记忆系统

> InfoQ 报道 Elastic 开源 Atlas，基于认知科学三重记忆分类，MCP 集成，Recall@10 = 0.89

## 关键信息

- Atlas 解决 Agent 长期交互的上下文选择问题
- 1M token 上下文窗口是草稿板，不是记忆系统
- 三重记忆基于认知科学论文（Cognitive Psychology, 1985）：
  - Episodic：捕获"发生了什么"
  - Semantic：记录"什么是真的"
  - Procedural：记录"什么方法有效"
- 合并机制：LLM 将情景事件提炼为语义事实，更新程序 Playbook 成功/失败计数
- 检索：RRF 融合 BM25 + Jina v5 + Cross-encoder reranker
- DLS 确保每用户隔离
- Hacker News 讨论：ES 是否过于重量级 vs 其他方案选错更耗时

## 来源

- InfoQ: https://www.infoq.com/news/2026/06/elastic-atlas-agent-memory/

## 相关页面

- [[Atlas]]
- [[Mem0]]
- [[Memora]]
- [[agentmemory]]
