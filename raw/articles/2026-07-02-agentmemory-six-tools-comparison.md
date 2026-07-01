# Agent 六款开源记忆工具大横评——全都能本地跑，全都不花钱

> 来源：今日头条技术博客
> 收集日期：2026-07-02
> 原文链接：http://m.toutiao.com/group/7652659795845071402/

---

## 核心问题

每次打开 Hermes 或 OpenClaw 新建会话，你都得重新解释一遍项目用了什么框架、上次修 MCP 断线用的什么命令、为什么选 jose 而不是 jsonwebtoken。

不是模型不够聪明，是上下文窗口本质上是「一次性」的——会话结束，记忆也跟着清零。

开源社区早就盯上了这个问题。过去一年里，至少有六款专门针对 Agent 记忆扩展的开源工具冒了出来——全都开源免费、全都可以本地部署。

---

## 先搞清你需要哪种「记忆」

| 类型 | 问的问题 | 举例 |
|------|----------|------|
| **行为/情节记忆** | 「我（Agent）上次怎么操作的？」 | 「上次修复 MCP 断线用了什么命令？」 |
| **知识/文档记忆** | 「我知道什么资料？」 | 「GEO 写作规范第三条怎么说的？」 |

前者记录 Agent 的操作历史，后者检索已有的文档知识库。两类需求适合不同的工具，最好的方案是搭配使用。

---

## 一、行为记忆类：让 Agent 记住「我做过什么」

### 1. agentmemory

**GitHub**: rohitg00/agentmemory（23,000+ Stars，MIT 协议）

agentmemory 是目前关注度最高的 AI 编程 Agent 持久记忆方案。核心卖点：**零干预**。

#### 工作原理

每次 Agent（Hermes、Claude Code 等）调用工具时，agentmemory 捕获一条 Observation 记录，这些记录经过 iii-engine 压缩后存入本地 SQLite。下次新建会话时，agentmemory 自动检索相关历史上下文并注入进去。

#### 检索机制：三流融合

同时跑三路：
1. **BM25 全文检索**
2. **向量语义检索**
3. **知识图谱遍历**

最后通过 **RRF（Reciprocal Rank Fusion）** 融合排序。

LongMemEval-S 基准测试召回率：**95.2%**

对比：
- mem0: 68.5%
- Letta/MemGPT: 83.2%

#### ✅ 优点

- 零干预，完全自动捕获
- 零外部依赖，纯 SQLite，不需要 Docker 或额外服务
- 多 Agent 共享，一个服务同时服务多个 Agent 实例
- MIT 协议，完全本地运行，不连任何外部 LLM
- 召回精度在同类工具中最高（95.2% R@5）

#### ❌ 缺点

- 仅对接 Coding Agent，不适合通用 LLM 应用的用户画像场景
- 默认 Embedding 模型（all-MiniLM-L6-v2，80MB）对中文支持一般，中文项目建议替换为 Qwen3-Embedding
- 依赖 iii-engine 版本锁定（v0.11.2），升级需谨慎

---

### 2. mem0

**GitHub**: mem0ai/mem0（41,000+ Stars，Apache 2.0）

mem0 定位不同：面向 LLM 应用（聊天机器人、个性化助手），从对话内容中自动提取结构化用户事实——偏好、习惯、身份信息。

#### 工作原理

每次对话结束后，mem0 调用 LLM 分析对话内容，提取事实写入向量数据库。下次对话时检索注入，实现个性化。

#### ✅ 优点

- 自动从对话提取事实，无需手动总结
- 支持 MCP 接入，可集成到 Hermes/OpenClaw
- 生态最成熟（YC 投资，14M+ 下载）

#### ❌ 缺点

- 部署较重：需要 Qdrant 或 Chroma 等向量数据库（额外 Docker 服务）
- 每次写入记忆时必须调用 LLM 提取事实
- 与 agentmemory 定位不同，不适合替代后者

---

## 二、知识检索类：让 Agent 找到「我存了什么」

### 3. QMD

**GitHub**: Shopify CEO Tobi Lütke 发起，OpenClaw 生态核心工具（MIT 协议）

QMD（Quick Markdown Database）专为 OpenClaw / Hermes 设计的本地 Markdown 知识库搜索引擎。

#### 工作原理

QMD 对 workspace 目录下所有 Markdown 文件建立双索引：BM25 倒排索引 + 向量索引，查询时两路打分，再经 Reranker 融合排序。

#### 本地模型（约 2.3GB）

| 模型角色 | 默认模型 | 大小 |
|----------|----------|------|
| Embedding | jina-embeddings-v3 (GGUF) | 330 MB |
| Reranker | jina-reranker-v2-base-multilingual (GGUF) | 640 MB |
| Query Expansion | 内置小 LLM | 1.3 GB |

中文项目可替换为 Qwen3-Embedding GGUF。

#### ✅ 优点

- 专为 Markdown 优化，OpenClaw 生态原生支持
- 三模型管线检索质量高
- 完全离线，模型下载一次后永久缓存
- 支持多 Collection，不同项目知识库互相隔离

#### ❌ 缺点

- 需要手动维护 Markdown 文件，不自动捕获 Agent 行为
- 首次 qmd embed 下载约 2.3GB 模型
- 对代码库和非 Markdown 文件支持有限

---

### 4. Cognee

**GitHub**: topoteretes/cognee（Apache 2.0）

Cognee 不做文档相似度检索，而是从文档中提取知识图谱，回答「A 和 B 有什么关系」这类推理性问题。

#### 工作原理：ECL 三阶段

1. **Extract**: 识别文档中的实体（模块、人员、概念、技术名词）
2. **Cognify**: 用 LLM 推断实体间关系（依赖/影响/属于），构建三元组
3. **Load**: 写入本地图数据库（默认 NetworkX 内存图，可换 Neo4j）

查询时通过图遍历而非向量相似度，能实现多跳推理。

#### ✅ 优点

- 独特的关系推理能力，是 QMD 做不到的
- 内置图谱可视化 UI
- 支持 PDF、DOCX、音频、图片等多种格式
- 答案相关性在关系推理类问题上达到 92.5%

#### ❌ 缺点

- 索引速度慢，每篇文档都要跑 LLM 提取实体，约比 QMD 慢 5–10 倍
- 查询延迟较高（图遍历 200ms–2s）
- 对简单的文档检索需求属于「杀鸡用牛刀」

---

## 三、时序与用户画像类

### 5. Zep（Community Edition）

**GitHub**: getzep/zep（Apache 2.0）

Zep 专注于**时序感知记忆**——不仅记住「说了什么」，还记住「什么时候说的、这条信息是否已被更新覆盖」。

#### 典型使用场景

- 「上周我说用 Redis，这周改成了 SQLite，以最新的为准」
- 追踪项目决策的演化历史
- 需要时间线推理的复杂对话系统

#### ✅ 优点

- 时序追踪是独特能力，其他工具都没有
- 2026 年 LangGraph 官方集成，生态好
- 企业级设计，支持大规模部署

#### ❌ 缺点

- 需要 Postgres + pgvector，部署比较重
- 对纯 Coding Agent 场景价值有限

---

### 6. TencentDB Agent Memory

**GitHub**: Tencent/TencentDB-Agent-Memory（Apache 2.0，2026 年 4 月开源）

腾讯开源的四层渐进式记忆架构，完全 SQLite 本地运行，对中文内容和国内部署环境针对性优化。

#### 四层架构

| 层级 | 内容 |
|------|------|
| L0 原始对话 | 全量保存 |
| L1 原子记忆 | 自动提取事实、偏好、关键约束 |
| L2 场景分块 | 按项目聚类，上下文精准召回 |
| L3 用户画像 | 稳定个性化认知 |

#### ✅ 优点

- 零外部依赖，纯 SQLite
- 中文分词和语义理解针对性优化
- Apache 2.0，国内社区维护活跃

#### ❌ 缺点

- 生态相对较新，MCP 工具数量少于 agentmemory
- 文档和社区资源主要为中文
- L1 层提取事实需要连接 LLM（可配置本地 Qwen3）

---

## 对比总览

### 功能与技术对比

| 工具 | 定位 | 写入方式 | 检索方式 | 本地依赖 | 需要 LLM | 协议 |
|------|------|----------|----------|----------|----------|------|
| agentmemory | Coding Agent 行为记忆 | 自动 Hook | BM25+向量+图谱 | SQLite（零依赖） | 不需要 | MIT |
| mem0 | 用户画像/个性化 | 自动提取 | 向量检索 | 需要 Qdrant | 需要 | Apache 2.0 |
| QMD | Markdown 文档检索 | 手动写文件 | BM25+向量+Reranker | 本地 GGUF | Query Expansion | MIT |
| Cognee | 知识图谱/关系推理 | 自动提取三元组 | 图遍历 | 本地（需 LLM） | 必须 | Apache 2.0 |
| Zep CE | 时序感知记忆 | 自动提取 | 向量+时序索引 | Postgres+pgvector | 需要 | Apache 2.0 |
| TencentDB AM | 中文用户画像 | 自动提取 | 向量检索 | SQLite（零依赖） | L1 层需要 | Apache 2.0 |

### 本地部署友好度

| 工具 | 磁盘占用 | 额外服务 | 部署难度 |
|------|----------|----------|----------|
| agentmemory | ~80–600 MB | 无 | 极简 |
| QMD | ~2.3 GB | 无 | 极简 |
| TencentDB AM | 极小（SQLite） | 无 | 极简 |
| Cognee | ~500 MB SDK + LLM | 已有 Ollama/oMLX | 简单 |
| mem0 | ~1 GB | Qdrant（Docker） | 中等 |
| Zep CE | ~2 GB | Postgres + pgvector（Docker） | 较复杂 |

### 检索精度对比

| 工具 | 评测得分 | 备注 |
|------|----------|------|
| agentmemory | 95.2%（LongMemEval-S R@5） | 三流融合检索 |
| Letta/MemGPT | 83.2% | 供参考 |
| mem0 | 68.5% | 不同场景设计 |
| Zep | 75.14%（LOCOMO） | 不同基准，侧重时序推理 |

---

## 推荐的组合方案

对于 OpenClaw / Hermes 的个人开发者，推荐三层搭配：

### 第一层：agentmemory

自动捕获 Agent 行为历史，零干预。关掉不管它，它默默在后台记录所有的技术决策和操作。

### 第二层：QMD

把重要的技术笔记、项目规范写成 Markdown，Agent 就能随时检索这些知识库。

两个工具都作为 MCP Server 挂载，互不干扰：
- 一个管「做过什么」
- 一个管「知道什么」

### 第三层：Cognee

项目复杂度上去之后——代码库有好几个微服务、模块之间依赖关系复杂——加 Cognee，引入图谱推理能力。

**三层就齐了：行为记忆 + 文档检索 + 关系推理。**

```yaml
# ~/.hermes/config.yaml
mcp_servers:
  agentmemory:
    command: "npx"
    args: ["@agentmemory/mcp"]
  qmd_search:
    command: "qmd"
    args: ["serve", "--port", "7333"]
```

---

## 关键术语

| 术语 | 解释 |
|------|------|
| **MCP** | Model Context Protocol，Anthropic 推出的开放协议 |
| **BM25** | 经典全文检索算法，基于词频和逆文档频率打分 |
| **向量检索** | 将文本转化为高维数字向量，基于语义相似度检索 |
| **Reranker** | 对初步检索结果重新打分排序的模型 |
| **知识图谱** | 以节点（实体）和边（关系）表示知识的图结构，支持多跳推理 |
| **LongMemEval-S** | 专门评测 AI Agent 跨会话长期记忆能力的标准基准测试集 |

---

## 总结

Agent 的「失忆症」不是技术做不到，而是缺少一个中间层——一个能在会话之外持久化知识、跨会话注入上下文的记忆系统。

开源社区给的这六款工具，就是在补这一层。它们全部开源免费、全都可以本地运行、数据留在自己的机器上。