---
report_id: 2026-07-02-agentmemory-v1.0
title: agentmemory 技术分析报告 v1.0
version: v1.0
created_date: 2026-07-02
updated_date: 2026-07-02
source_count: 5
source_breakdown: Tier1: 5 (GitHub README + iii engine + 技术分析 + 六工具对比 + 零数据库架构)
control_object: Agent集成层
tech_layer: Agent集成层
---

# agentmemory 技术分析报告 v1.0

> 生成日期：2026-07-02
> 来源：5 个（Tier1: 5）
> 报告版本：v1.0
> Stars：23K+

## 1. 执行摘要

agentmemory 是一个**AI Agent 持久记忆引擎**，基于 Karpathy LLM Wiki 模式扩展实现，提供四层记忆架构（Working → Episodic → Semantic → Procedural）和三层检索融合（BM25 + Vector + Graph）。核心理念是"零干预自动捕获"——12 hooks 自动记录 Agent 工具调用，无需手动 add()。支持 16+ Agent（Claude Code、Codex CLI、Cursor、OpenClaw 等），一个记忆服务器所有 Agent 共享。

**核心价值**：
- 95.2% 检索准确率（R@5），2.2× 精度优于 grep
- 零外部数据库依赖（SQLite + iii-engine），无需 Qdrant/pgvector
- Token 成本 $10/年 vs $500/年（LLM-summarized 方案）

## 2. 技术全景

### 2.1 核心架构

```
┌─────────────────────────────────────────────────────────┐
│            AI Agents (Claude Code, Codex, Cursor...)     │
│  • Tier 1: Native Plugin + 12 Hooks + MCP               │
│  • Tier 2: MCP Server                                    │
│  • Tier 3: REST API                                      │
└────────────────────┬────────────────────────────────────┘
                     │ MCP / REST / Hooks
                     ↓
┌─────────────────────────────────────────────────────────┐
│              agentmemory 记忆服务器 (:3111)               │
│  • 53 MCP tools                                          │
│  • 12 auto hooks（PostToolUse 捕获）                      │
│  • Viewer (:3113 实时查看)                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│                iii-engine 运行时                          │
│  • Worker/Function/Trigger 三原语                        │
│  • 118 源文件 / 21800 行代码 / 123 functions              │
│  • in-memory vector index                                │
└────────────────────┬────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│                    SQLite + KV Store                     │
│  • 零外部数据库依赖                                        │
│  • all-MiniLM-L6-v2 本地 embedding（无 API key）          │
└─────────────────────────────────────────────────────────┘
```

### 2.2 技术栈分层

| 层级 | 内容 | 关键技术 |
|------|------|----------|
| **系统基础层** | iii-engine 运行时 | Worker/Function/Trigger、SQLite、KV Store |
| **协议接口层** | MCP 协议 + REST API | MCP Server 配置、REST endpoint (:3111) |
| **工具实现层** | agentmemory 核心 | 53 MCP tools、12 hooks、三层检索 |
| **Agent 集成层** | 多 Agent 共享 | Native Plugin、MCP Server、REST API |

### 2.3 关键组件

1. **iii-engine**：零依赖运行时，提供 BM25 + Vector + Graph 混合检索
2. **12 auto hooks**：PostToolUse 自动捕获工具调用，零干预
3. **四层记忆架构**：Working → Episodic → Semantic → Procedural
4. **三层检索融合**：BM25 + Vector + Graph，RRF (k=60) 排序
5. **Viewer (:3113)**：实时查看记忆图谱，支持 1000+ nodes

## 3. 能力分析

### 3.1 支持的能力

**记忆层级**：

| 层级 | 名称 | 功能 | 自动化 |
|------|------|------|--------|
| L1 | Working Memory | 当前 session tool call 原始记录 | PostToolUse hook 自动捕获 |
| L2 | Episodic Memory | Session 结束后自动压缩 | 抽取结构化事实 |
| L3 | Semantic Memory | 跨 session 事实沉淀 | 置信度上升 |
| L4 | Procedural Memory | 反复验证的流程和决策模式 | Agent 肌肉记忆 |

**检索能力**：

| 检索方式 | 机制 | 特点 |
|----------|------|------|
| BM25 | 关键词匹配 + 词干提取 + 同义词扩展 | 精确匹配 |
| Vector Search | 余弦相似度语义检索 | all-MiniLM-L6-v2 本地运行 |
| Knowledge Graph | 实体识别 + BFS 图遍历 | 关联发现 |

**Agent 集成**：

| Tier | Agent | 特性 |
|------|-------|------|
| Tier 1 | Claude Code | native plugin + 12 hooks + MCP |
| Tier 1 | Codex CLI | native plugin + 6 hooks + MCP |
| Tier 1 | OpenClaw | native plugin + MCP |
| Tier 1 | Hermes | native plugin + MCP |
| Tier 1 | OpenCode | 22 hooks + MCP + plugin |
| Tier 2 | Cursor | MCP server |
| Tier 2 | Gemini CLI | MCP server |
| Tier 2 | Windsurf | MCP server |
| Tier 2 | GitHub Copilot CLI | MCP + plugin hooks/skills |
| Tier 3 | Aider | REST API |

### 3.2 技术原理

**零外部数据库依赖**：
- SQLite 存储 + iii-engine KV store + in-memory vector index
- 无需 Qdrant/pgvector 等向量数据库
- all-MiniLM-L6-v2 本地 embedding（免费，无 API key）

**自动捕获机制**：
- PostToolUse hook：Agent 每次工具调用自动记录
- 无需手动调用 add()（mem0 需手动）
- 12 hooks 零干预

**三层检索融合**：
- BM25（关键词）：词干提取 + 同义词扩展
- Vector（语义）：all-MiniLM-L6-v2 余弦相似度
- Graph（关联）：实体识别 + BFS 遍历
- RRF (k=60) 排序融合

### 3.3 局限性

**不适合场景** <!-- confidence: EXTRACTED -->：
- 短平快一次性任务（200行 CLAUDE.md 够用）
- 简单项目（不需要持久记忆）
- 非编码 Agent（通用 LLM 用户画像场景）

**技术限制**：
- 默认 embedding 对中文一般 <!-- confidence: INFERRED -->
- iii-engine v0.11.2 版本锁定 <!-- confidence: EXTRACTED -->
- 仅对接 Coding Agent <!-- confidence: EXTRACTED -->

## 4. 生态位

### 4.1 工具对比

| 特性 | agentmemory | mem0 (53K⭐) | Letta/MemGPT (22K⭐) | CLAUDE.md |
|------|-------------|--------------|----------------------|-----------|
| **R@5** | **95.2%** | 68.5% | 83.2% | N/A (grep) |
| **自动捕获** | 12 hooks | 手动 add() | Agent 自编辑 | 手动编辑 |
| **外部依赖** | 无 | Qdrant/pgvector | Postgres + vector | 无 |
| **Framework 锁定** | 无 | 无 | 高（必须用 Letta） | 无 |
| **Token 成本/年** | **$10** | 不确定 | 核心记忆在上下文 | 240 obs = 22K+ |
| **实时 Viewer** | 是 (:3113) | 云端仪表板 | 云端仪表板 | 无 |

### 4.2 适用场景

**最适合**：
- 长周期编程项目（需要跨 session 记忆）
- 多 Agent 协作（一个记忆服务器共享）
- 复杂项目（>200 行 CLAUDE.md 不够用）
- 需要检索历史决策和技术细节

**不适合**：
- 短平快一次性任务
- 简单项目（CLAUDE.md 足够）
- 非编程场景（通用用户画像）

### 4.3 发展趋势

**技术演进**：
- v0.9.22（2026-05-26）：新增 3 个 connect adapters、AGENT_ID 多 Agent 隔离
- 950+ tests passing（稳定可靠）
- Viewer 支持 1000+ nodes（大规模图谱）

**竞品对比优势**：
- R@5 95.2% vs mem0 68.5% vs Letta 83.2%
- 零外部依赖 vs mem0 Qdrant/pgvector
- 零干预自动捕获 vs mem0 手动 add()

## 5. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[2026-07-02-agentmemory-github-readme]] | Tier 1 | EXTRACTED | 核心指标、支持的 Agent、竞品对比 |
| [[2026-07-02-agentmemory-iii-engine-architecture]] | Tier 1 | EXTRACTED | iii-engine 三原语、技术栈 |
| [[2026-07-02-agentmemory-deep-analysis]] | Tier 1 | EXTRACTED | 四层记忆架构、检索机制 |
| [[2026-07-02-agentmemory-six-tools-comparison]] | Tier 1 | EXTRACTED | 六款工具横评、R@5 对比 |
| [[2026-07-02-agentmemory-zero-db-architecture]] | Tier 1 | EXTRACTED | 零数据库架构、Token 效率 |

## 6. 待验证问题

| 声明 | 优先级 | 验证方式 |
|------|--------|----------|
| R@5 95.2% | P1 | LongMemEval-S benchmark 数据 |
| Stars 23K+ | P1 | GitHub API 查询 |
| 12 hooks 自动捕获 | P2 | iii-engine 文档核实 |
| 零外部数据库依赖 | P2 | 源码检查 |
| all-MiniLM-L6-v2 本地运行 | P2 | iii-engine 文档 |
| 支持 16+ Agent | P1 | GitHub README 核实 |

## 7. 版本历史

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| v1.0 | 2026-07-02 | 初始版本 |

---

**下一步**：执行证伪验证，生成 v1.1 修正报告