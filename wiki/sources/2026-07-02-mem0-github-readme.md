---
tags: [素材摘要, agent_integration, 2026-07-02]
created: 2026-07-02
updated: 2026-07-02
sources: [2026-07-02-mem0-github-readme.md]
---

# Mem0 GitHub README — Agent 事实提取记忆系统

> Mem0 是目前最广为人知的独立 Agent Memory 产品，采用"事实提取 + 向量检索"范式，2026 年 4 月发布新算法后性能大幅提升。

## 关键信息

Mem0（"mem-zero"）是为 AI 助手和 Agent 提供智能记忆层的开源系统，使 AI 能够记住用户偏好、适应个体需求并持续学习。项目拥有约 41K-60K+ GitHub Stars，采用 Apache-2.0 许可证，主要使用 Python（53.6%）和 TypeScript（42.8%）开发，最新版本为 Python SDK v2.0.10、Node SDK v3.0.12。

2026 年 4 月，Mem0 发布了全新算法，核心变化包括：从 UPDATE/DELETE 机制改为 Single-pass ADD-only 提取（仅需一次 LLM 调用）、Agent 确认事实作为一等公民存储、实体链接增强跨记忆检索、以及语义 + BM25 + 实体匹配三路并行融合检索。新算法在 LoCoMo 基准上从 71.4 提升至 91.6，LongMemEval 从 67.8 提升至 94.8，延迟 p50 低于 1 秒。

Mem0 支持三级记忆层级（User / Session / Agent），提供三种部署模式（Library、Self-Hosted Server、Cloud Platform），并通过 CLI 工具、Agent Skills 和插件生态（Claude Plugin、Codex Plugin、Cursor Plugin、浏览器扩展）覆盖多种集成场景。技术架构包括记忆提取引擎、实体链接、多信号检索和时间推理模块，底层存储使用 Qdrant 向量数据库与图存储。

Mem0 的主要局限性在于碎片化问题（旧算法下 651 条/对话）、叙事连贯性不足（事实级别存储无法保持决策因果链）、检索深度有限（单次检索无法处理多跳推理）以及缺少自动遗忘机制。

## 提取的实体

- [[Mem0]] — 开源 Agent 记忆中间件，事实提取 + 向量检索范式，生产就绪度最高
- [[Qdrant]] — Mem0 默认使用的向量数据库
- [[Mem0g]] — Mem0 图增强记忆系统，在事实提取基础上增加图结构

## 提取的主题

- [[Agent集成层]] — AI Agent 与外部工具和系统集成的技术与协议
- [[事实提取记忆]] — 通过 LLM 提取事实条目并嵌入向量空间的记忆范式
- [[多信号检索]] — 语义搜索 + BM25 关键词 + 实体匹配三路并行融合检索

## 相关页面

- [[Mem0]]
- [[Mem0g]]
- [[Qdrant]]
- [[Agent集成层]]
- [[事实提取记忆]]
- [[多信号检索]]
