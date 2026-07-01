---
source_id: auto-2026-07-02-a7f3
title: Mem0 GitHub README — Agent 事实提取记忆系统
url: https://github.com/mem0ai/mem0
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Mem0 GitHub README — Agent 事实提取记忆系统

## 项目概述

Mem0（"mem-zero"）是为 AI 助手和 Agent 提供智能记忆层的开源系统，使 AI 能够记住用户偏好、适应个体需求并持续学习，是目前最广为人知的独立 Agent Memory 产品。

## 核心数据

| 指标 | 值 |
|------|-----|
| GitHub Stars | ~59.8K |
| 许可证 | Apache-2.0 |
| 主要语言 | Python 53.6%, TypeScript 42.8% |
| 最新版本 | Python SDK v2.0.10, Node SDK v3.0.12 |
| 提交数 | 2,407 Commits |
| 分支数 | 103 Branches, 352 Tags |
| 最新更新 | 2026-06-28 |
| arXiv 论文 | arXiv:2504.19413 |

## 核心功能列表

1. **多层级记忆**：User / Session / Agent 三级状态记忆，支持自适应个性化
2. **2026 年 4 月新算法**：Single-pass ADD-only extraction（单次 LLM 调用，无 UPDATE/DELETE）
3. **Agent 生成事实一等公民**：Agent 确认的操作信息与用户输入同等权重存储
4. **实体链接**：实体提取、嵌入、跨记忆链接以增强检索
5. **多信号检索**：语义 + BM25 关键词 + 实体匹配三路并行融合
6. **时间推理**：时间感知检索，对当前状态、过去事件、未来计划进行正确排序
7. **三种部署模式**：Library（pip/npm）、Self-Hosted Server（Docker）、Cloud Platform
8. **CLI 工具**：终端管理记忆，支持 Agent 自助注册（`mem0 init --agent`）
9. **Agent Skills**：为 Claude Code、Codex、Cursor 等编码助手提供 Mem0 集成技能
10. **插件生态**：Claude Plugin、Codex Plugin、Cursor Plugin、浏览器扩展

## 新算法基准测试（2026年4月）

| Benchmark | 旧分数 | 新分数 | Tokens | Latency p50 |
|-----------|--------|--------|--------|-------------|
| LoCoMo | 71.4 | **91.6** | 7.0K | 0.88s |
| LongMemEval | 67.8 | **94.8** | 6.8K | 1.09s |
| BEAM (1M) | — | **64.1** | 6.7K | 1.00s |
| BEAM (10M) | — | **48.6** | 6.9K | 1.05s |

关键变化：
- 单次 ADD-only 提取（不再覆盖）
- Agent 确认事实一等公民
- 实体链接 + 多信号检索融合
- 时间感知检索

## 技术架构

### 组件关系

```
┌──────────────────────────────────────────────────┐
│                  应用层                           │
│  CLI │ Browser Extension │ Agent Skills/Plugins  │
├──────────────────────────────────────────────────┤
│                 SDK 层                           │
│  Python SDK (mem0ai) │ TypeScript SDK (mem0ai)   │
├──────────────────────────────────────────────────┤
│               核心引擎                            │
│  Memory.add() │ Memory.search() │ Memory.delete()│
│  ┌─────────────────────────────────────────┐     │
│  │ 记忆提取：Single-pass ADD-only          │     │
│  │ 实体链接：Entity extraction + linking    │     │
│  │ 多信号检索：Semantic + BM25 + Entity     │     │
│  │ 时间推理：Temporal-aware ranking         │     │
│  └─────────────────────────────────────────┘     │
├──────────────────────────────────────────────────┤
│              存储与检索层                          │
│  向量数据库（Qdrant） │ 图存储 │ 元数据存储        │
├──────────────────────────────────────────────────┤
│              LLM 层                              │
│  OpenAI gpt-5-mini（默认）│ 可配置其他 LLM        │
│  text-embedding-3-small（默认嵌入）               │
└──────────────────────────────────────────────────┘
```

### 数据流

1. **写入**：用户/Agent 消息 → LLM 提取事实 → 实体链接 → 存入向量数据库
2. **检索**：查询 → 语义/BM25/实体三路并行 → 融合排序 → 时间推理 → 返回 top-k

## 与其他工具的对比/关系

| 维度 | Mem0 | Memora | Zep/Graphiti | Cognee |
|------|------|--------|-------------|--------|
| 设计哲学 | 事实提取 + 向量检索 | 解耦存储与检索 | 知识图谱 + 向量 | 知识图谱 + 语义管道 |
| 索引结构 | 单层事实嵌入 | 三重索引（抽象+值+锚点） | 图结构 | 图 + 向量双索引 |
| 检索方式 | 多信号融合 | 策略驱动 MDP | 图遍历 + 语义 | 语义管道 |
| 部署复杂度 | 低（pip install） | 中（研究代码） | 中 | 中-高 |
| 生产就绪度 | 高 | 低（研究阶段） | 中 | 低-中 |
| LoCoMo 分数 | 91.6（新）/ 65.3（旧） | 86.3 | — | — |
| LongMemEval | 94.8（新）/ 65.3（旧） | 87.4 | — | — |

## 适用场景

- 客户支持聊天机器人（记住用户历史和偏好）
- AI 助手（跨会话一致性对话）
- 医疗健康（跟踪患者偏好和病史）
- 生产力工具和游戏（根据用户行为适应）
- 编码助手记忆（通过 Agent Skills 集成）

## 局限性

1. **碎片化问题**：旧算法下记忆条目碎片化严重（651 条/对话），新算法虽有改善但仍以事实提取为核心
2. **叙事连贯性不足**：事实级别存储无法保持决策之间的因果联系
3. **检索深度有限**：单次检索无法处理多跳推理，需额外 Agentic 循环
4. **依赖 LLM**：提取和检索均需 LLM 调用，成本与延迟受模型影响
5. **知识更新处理**：旧算法的 UPDATE/DELETE 机制复杂，新算法改为 ADD-only 但缺少自动过期

## 信息来源标注

- GitHub README: https://github.com/mem0ai/mem0 — 直接抓取 2026-06-28 版本
- arXiv 论文: arXiv:2504.19413
- 基准数据来自 README 中的 Benchmarking Mem0's token-efficient memory algorithm 部分
- Stars 数据来自多个中文技术文章交叉验证（~59.8K）
