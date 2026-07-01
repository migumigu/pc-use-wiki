---
tags: [Agent记忆, MCP, Coding-Agent, 记忆系统]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-agentmemory-github-readme.md
  - wiki/sources/2026-07-02-agentmemory-iii-engine-architecture.md
  - wiki/sources/2026-07-02-agentmemory-deep-analysis.md
  - wiki/sources/2026-07-02-agentmemory-six-tools-comparison.md
  - wiki/sources/2026-07-02-agentmemory-zero-db-architecture.md
---

# agentmemory

> AI 编程助手的持久记忆系统，零外部数据库依赖，95.2% R@5 检索精度

<!-- confidence: EXTRACTED -->
<!-- evidence: "Retrieval R@5 95.2%, Token 节省 92% fewer tokens, MCP 工具数 53 MCP tools" -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **GitHub** | https://github.com/rohitg00/agentmemory |
| **Stars** | 23,000+ |
| **许可证** | MIT |
| **核心依赖** | SQLite + iii-engine（零外部数据库） |
| **MCP 工具数** | 53 |
| **Auto Hooks** | 12 |
| **测试通过数** | 950+ |
| **检索精度** | 95.2% R@5（LongMemEval-S） |
| **Token 节省** | 92% |

## 核心定位

**Your coding agent remembers everything. No more re-explaining.**

为 Claude Code、GitHub Copilot CLI、Cursor、Gemini CLI、Codex CLI、Hermes、OpenClaw、pi、OpenCode 以及任何 MCP 客户端提供持久化记忆。

<!-- confidence: EXTRACTED -->
<!-- evidence: "为 Claude Code、GitHub Copilot CLI、Cursor、Gemini CLI、Codex CLI、Hermes、OpenClaw、pi、OpenCode 以及任何 MCP 客户端提供持久化记忆" -->

## 核心能力

### 四层记忆架构（4-Tier Memory Consolidation）

| 层级 | 名称 | 功能 |
|------|------|------|
| **Working Memory** | 工作记忆 | Agent 当前 session 每次 tool call 的原始记录 |
| **Episodic Memory** | 情景记忆 | Session 结束后自动压缩，提取结构化事实 |
| **Semantic Memory** | 语义记忆 | 跨 session 的事实沉淀，置信度上升 |
| **Procedural Memory** | 程序记忆 | 被反复验证的流程和决策模式（肌肉记忆） |

<!-- confidence: EXTRACTED -->
<!-- evidence: "Working Memory, Episodic Memory, Semantic Memory, Procedural Memory 四层" -->

### 三层检索融合机制

1. **BM25**: 关键词匹配 + 词干提取 + 同义词扩展
2. **Vector Search**: 余弦相似度语义检索
3. **Knowledge Graph**: 实体识别 + BFS 图遍历

结果用 **Reciprocal Rank Fusion (k=60)** 融合排序。

<!-- confidence: EXTRACTED -->
<!-- evidence: "BM25 + Vector + Graph 的混合检索（RRF fusion）" -->

### 记忆生命周期管理

- **置信度评分** — 随时间衰减（艾宾浩斯遗忘曲线）
- **访问频率强化** — 频繁访问的记忆会被强化
- **长期不被访问降权** — 逐渐降低权重
- **冲突检测** — 新信息与旧信息冲突时自动标记

<!-- confidence: EXTRACTED -->
<!-- evidence: "置信度评分随时间衰减、访问频率强化、长期不被访问降权、冲突检测" -->

## 支持的 Agent 集成

### Tier 1: Native Plugin + Hooks + MCP

| Agent | 特性 |
|-------|------|
| Claude Code | native plugin + 12 hooks + MCP |
| Codex CLI | native plugin + 6 hooks + MCP |
| OpenClaw | native plugin + MCP |
| Hermes | native plugin + MCP |
| OpenCode | 22 hooks + MCP + plugin |

### Tier 2: MCP Server

| Agent | 特性 |
|-------|------|
| Cursor | MCP server |
| Gemini CLI | MCP server |
| Cline | MCP server |
| Goose | MCP server |
| Windsurf | MCP server |
| GitHub Copilot CLI | MCP + plugin hooks/skills |

### Tier 3: REST API

| Agent | 特性 |
|-------|------|
| Aider | REST API |

<!-- confidence: EXTRACTED -->
<!-- evidence: "Tier 1/2/3 分层支持，共 16+ Agent" -->

## 与竞品对比

| 特性 | agentmemory | mem0 (41K+) | Letta/MemGPT (22K+) | Built-in (CLAUDE.md) |
|------|-------------|-------------|---------------------|----------------------|
| **Type** | Memory engine + MCP server | Memory layer API | Full agent runtime | Static file |
| **Retrieval R@5** | **95.2%** | 68.5% (LoCoMo) | 83.2% (LoCoMo) | N/A (grep) |
| **Auto-capture** | 12 hooks (零人工) | 手动调用 `add()` | Agent 自编辑 | 手动编辑 |
| **Search** | BM25 + Vector + Graph (RRF) | Vector + Graph | Vector | 全量加载 |
| **Multi-agent** | MCP + REST + leases + signals | API (无协调) | 仅 Letta runtime 内 | 每 agent 一个文件 |
| **External deps** | **无** (SQLite + iii-engine) | Qdrant / pgvector | Postgres + vector DB | 无 |
| **Token 效率** | ~1,900 tokens/session ($10/yr) | 依集成方式不同 | 核心记忆在上下文 | 240 obs = 22K+ tokens |

<!-- confidence: EXTRACTED -->
<!-- evidence: "竞品对比表，R@5 95.2% vs mem0 68.5% vs Letta 83.2%" -->

## 技术架构

### iii-engine 零依赖设计

核心依赖只有两个：**SQLite + iii-engine**，无外部向量数据库依赖。

iii-engine 提供：
- BM25 + Vector + Graph 的混合检索（RRF fusion）
- all-MiniLM-L6-v2 嵌入模型本地运行（无 API key，无成本）
- Worker/Function/Trigger 三原语运行时

<!-- confidence: EXTRACTED -->
<!-- evidence: "iii-engine 提供了 BM25 + Vector + Graph 的混合检索" -->

### Karpathy LLM Wiki 模式扩展

基于 [Karpathy's LLM Wiki pattern](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2) 扩展实现，增加了四个关键能力：
1. **confidence scoring** — 解决"哪些记忆是可靠的"
2. **lifecycle + auto-forget** — 解决记忆过期问题
3. **knowledge graphs** — 解决关系型记忆的检索问题
4. **hybrid search** — 解决单一检索模式的局限

<!-- confidence: EXTRACTED -->
<!-- evidence: "扩展 Karpathy's LLM Wiki pattern，增加 confidence scoring, lifecycle, knowledge graphs, hybrid search" -->

## Token 效率对比

| 方案 | Tokens/年 | 成本/年 |
|------|-----------|---------|
| 粘贴完整上下文 | 19.5M+ | 不可能（超出窗口） |
| LLM 摘要 | ~650K | ~$500 |
| **agentmemory** | **~170K** | **~$10** |
| agentmemory + 本地嵌入 | ~170K | **$0** |

<!-- confidence: EXTRACTED -->
<!-- evidence: "Token 效率对比表，agentmemory ~170K tokens vs LLM摘要 ~650K" -->

## 快速开始

```bash
npm install -g @agentmemory/agentmemory  # 全局安装
agentmemory                              # 在 :3111 启动记忆服务器
agentmemory demo                         # 注入示例会话并验证召回
agentmemory connect claude-code          # 连接 MCP 到你的 agent
npx skills add rohitg00/agentmemory -y   # 安装 8 个原生 skills
```

<!-- confidence: EXTRACTED -->
<!-- evidence: "安装命令 npm install -g @agentmemory/agentmemory" -->

## MCP Server 配置

```json
{
  "mcpServers": {
    "agentmemory": {
      "command": "npx",
      "args": ["-y", "@agentmemory/mcp"],
      "env": { "AGENTMEMORY_URL": "http://localhost:3111" }
    }
  }
}
```

<!-- confidence: EXTRACTED -->
<!-- evidence: "MCP 配置 JSON 示例" -->

## 适用人群

### 适合
- 每天在 Claude Code/Cursor 里泡 4+ 小时的重度用户
- 同时用多个 Agent 的用户（跨 Agent 共享记忆）
- 需要跨会话决策追踪的项目

### 不适合
- 短平快的一次性任务
- 简单项目（200 行 CLAUDE.md 可能更简单）

<!-- confidence: INFERRED -->
<!-- evidence: "基于设计哲学推断适用场景" -->

## 设计哲学

> **把 memory 从一个「存储问题」变成了一个「检索 + 生命周期管理问题」。**

Agent 不缺存储。它需要的是「在正确的时机，用正确的方式，把正确的东西拿回来」——这是检索，不是存储。

<!-- confidence: EXTRACTED -->
<!-- evidence: "原文摘录：把 memory 从一个存储问题变成了一个检索 + 生命周期管理问题" -->

## 相关页面

- [[iii-engine]] — agentmemory 的底层运行时
- [[Mem0]] — 事实提取范式记忆系统，生产就绪度更高
- [[Memora]] — 微软 ICML 2026，三重索引架构
- [[MCP]] — 集成协议
- [[Agent集成层]] — 主题页
- [[上下文工程]] — 相关概念