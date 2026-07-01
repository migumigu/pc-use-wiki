---
tags: [素材摘要, Agent记忆, 工具对比]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# Agent 六款开源记忆工具大横评

> 全都能本地跑，全都不花钱

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **来源** | 今日头条技术博客 |
| **收集日期** | 2026-07-02 |
| **原文链接** | http://m.toutiao.com/group/7652659795845071402/ |

## 记忆类型分类

| 类型 | 问的问题 | 举例 |
|------|----------|------|
| **行为/情节记忆** | 「我上次怎么操作的？」 | 上次修 MCP 断线用了什么命令 |
| **知识/文档记忆** | 「我知道什么资料？」 | GEO 写作规范第三条 |

<!-- confidence: EXTRACTED -->

## 一、行为记忆类

### 1. agentmemory（23,000+ Stars）

**工作原理**：每次 Agent 调用工具时捕获 Observation，经 iii-engine 压缩存入 SQLite。

**检索机制**：BM25 + 向量 + 知识图谱，RRF 融合。

**R@5：95.2%**

**优点**：
- 零干预，完全自动捕获
- 零外部依赖，纯 SQLite
- MIT 协议，完全本地运行

**缺点**：
- 仅对接 Coding Agent
- 默认嵌入模型对中文支持一般

### 2. mem0（41,000+ Stars）

**定位**：面向 LLM 应用，从对话提取结构化用户事实。

**优点**：
- 自动从对话提取事实
- 支持 MCP 接入
- 生态最成熟（YC 投资）

**缺点**：
- 需要 Qdrant/Chroma 等向量数据库
- 每次写入需调用 LLM

## 二、知识检索类

### 3. QMD（OpenClaw 生态）

**定位**：本地 Markdown 知识库搜索引擎。

**本地模型**：jina-embeddings-v3 (330MB) + jina-reranker (640MB)

**优点**：
- 专为 Markdown 优化
- 完全离线

**缺点**：
- 需手动维护 Markdown 文件
- 首次下载约 2.3GB 模型

### 4. Cognee

**定位**：从文档提取知识图谱，回答关系推理问题。

**ECL 三阶段**：Extract → Cognify → Load

**优点**：
- 独特的关系推理能力
- 答案相关性 92.5%

**缺点**：
- 素引速度慢（约比 QMD 慢 5-10 倍）

## 三、时序与用户画像类

### 5. Zep（Community Edition）

**定位**：时序感知记忆——记住「什么时候说的、是否已被更新覆盖」。

**优点**：
- 时序追踪是独特能力
- LangGraph 官方集成

**缺点**：
- 需要 Postgres + pgvector

### 6. TencentDB Agent Memory

**定位**：四层渐进式记忆架构，纯 SQLite。

**优点**：
- 零外部依赖
- 中文针对性优化

**缺点**：
- 生态较新，MCP 工具数量少

## 对比总览

| 工具 | 检索精度 | 本地依赖 | 需要 LLM |
|------|----------|----------|----------|
| agentmemory | 95.2% R@5 | SQLite | 不需要 |
| mem0 | 68.5% | Qdrant | 需要 |
| QMD | — | GGUF 模型 | Query Expansion |
| Cognee | 92.5% | 本地 | 必须 |
| Zep | 75.14% | Postgres | 需要 |
| TencentDB AM | — | SQLite | L1 层需要 |

## 推荐组合方案

对于 OpenClaw/Hermes 个人开发者：
- **第一层**：agentmemory（自动捕获行为）
- **第二层**：QMD（文档检索）
- **第三层**：Cognee（复杂项目加图谱推理）

## 相关页面

- [[agentmemory]] — 实体页
- [[Mem0]] — 实体页
- [[Agent集成层]] — 主题页