# agentmemory — Persistent memory for AI coding agents

> 来源：GitHub README (https://github.com/rohitg00/agentmemory)
> 收集日期：2026-07-02
> Star 数：23,000+

## 核心定位

**Your coding agent remembers everything. No more re-explaining.**

为 Claude Code、GitHub Copilot CLI、Cursor、Gemini CLI、Codex CLI、Hermes、OpenClaw、pi、OpenCode 以及任何 MCP 客户端提供持久化记忆。

基于 [iii engine](https://github.com/iii-hq/iii) 构建。

---

## 核心数据指标

| 指标 | 数值 |
|------|------|
| Retrieval R@5 | **95.2%** |
| Token 节省 | **92% fewer tokens** |
| MCP 工具数 | **53 MCP tools** |
| 自动 Hooks | **12 auto hooks** |
| 外部数据库依赖 | **0 external DBs** |
| 测试通过数 | **950+ tests passing** |

---

## 安装与快速开始

```bash
npm install -g @agentmemory/agentmemory # 全局安装
agentmemory                              # 在 :3111 启动记忆服务器
agentmemory demo                         # 注入示例会话并验证召回
agentmemory connect claude-code          # 连接 MCP 到你的 agent
npx skills add rohitg00/agentmemory -y   # 安装 8 个原生 skills
```

或通过 npx（无需安装）：

```bash
npx @agentmemory/agentmemory
```

---

## 支持的 Agent 集成

agentmemory 兼容任何支持 hooks、MCP 或 REST API 的 agent。所有 agent 共享同一个记忆服务器。

### Tier 1: Native Plugin + Hooks + MCP

| Agent | 特性 |
|-------|------|
| **Claude Code** | native plugin + 12 hooks + MCP |
| **Codex CLI** | native plugin + 6 hooks + MCP |
| **OpenClaw** | native plugin + MCP |
| **Hermes** | native plugin + MCP |
| **pi** | native plugin + MCP |
| **OpenHuman** | native Memory trait backend |
| **OpenCode** | 22 hooks + MCP + plugin |

### Tier 2: MCP Server

| Agent | 特性 |
|-------|------|
| **Cursor** | MCP server |
| **Gemini CLI** | MCP server |
| **Cline** | MCP server |
| **Goose** | MCP server |
| **Kilo Code** | MCP server |
| **Claude Desktop** | MCP server |
| **Windsurf** | MCP server |
| **Roo Code** | MCP server |
| **GitHub Copilot CLI** | MCP + plugin hooks/skills |

### Tier 3: REST API

| Agent | 特性 |
|-------|------|
| **Aider** | REST API |

---

## Benchmarks: 检索准确率

### coding-agent-life-v1 (内部语料库)

| Adapter | P@5 | R@5 | Top-5 hit rate | p50 latency |
|---------|-----|-----|----------------|-------------|
| **agentmemory hybrid** | **0.578** | **0.967** | **15 / 15** | 14 ms |
| grep baseline | 0.267 | 0.967 | 15 / 15 | 0 ms |

**100% top-5 hit rate. 2.2× better precision than grep baseline.**

### LongMemEval-S (ICLR 2025, 500 questions)

| System | R@5 | R@10 | MRR |
|--------|-----|------|-----|
| **agentmemory** | **95.2%** | **98.6%** | **88.2%** |
| BM25-only fallback | 86.2% | 94.6% | 71.5% |

---

## Token 节省对比

| Approach | Tokens/yr | Cost/yr |
|----------|-----------|---------|
| Paste full context | 19.5M+ | Impossible (exceeds window) |
| LLM-summarized | ~650K | ~$500 |
| **agentmemory** | **~170K** | **~$10** |
| agentmemory + local embeddings | ~170K | **$0** |

**Embedding model: `all-MiniLM-L6-v2` (local, free, no API key)**

---

## vs Competitors 竞品对比

| 特性 | agentmemory | mem0 (53K ⭐) | Letta/MemGPT (22K ⭐) | Built-in (CLAUDE.md) |
|------|-------------|---------------|----------------------|----------------------|
| **Type** | Memory engine + MCP server | Memory layer API | Full agent runtime | Static file |
| **Retrieval R@5** | **95.2%** | 68.5% (LoCoMo) | 83.2% (LoCoMo) | N/A (grep) |
| **Auto-capture** | 12 hooks (零人工) | 手动调用 `add()` | Agent 自编辑 | 手动编辑 |
| **Search** | BM25 + Vector + Graph (RRF fusion) | Vector + Graph | Vector (归档) | 全量加载到上下文 |
| **Multi-agent** | MCP + REST + leases + signals | API (无协调) | 仅 Letta runtime 内 | 每 agent 一个文件 |
| **Framework 锁定** | 无 (任何 MCP client) | 无 | 高 (必须用 Letta) | 每 agent 格式 |
| **External deps** | 无 (SQLite + iii-engine) | Qdrant / pgvector | Postgres + vector DB | 无 |
| **Memory lifecycle** | 4 层整合 + 衰减 + auto-forget | Passive extraction | Agent-managed | Manual pruning |
| **Token 效率** | ~1,900 tokens/session ($10/yr) | 依集成方式不同 | 核心记忆在上下文 | 240 obs = 22K+ tokens |
| **实时 Viewer** | 是 (:3113) | 云端仪表板 | 云端仪表板 | 无 |
| **自托管** | 是 (默认) | 可选 | 可选 | 是 |

---

## 核心设计理念

### 设计文档来源

基于 [Karpathy's LLM Wiki pattern](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2) 扩展实现，增加了四个关键能力：

> "The gist extends Karpathy's LLM Wiki pattern with **confidence scoring, lifecycle, knowledge graphs, and hybrid search**: agentmemory is the implementation."

---

## 技术架构

### iii-engine 零依赖设计

agentmemory 的核心依赖只有两个：**SQLite + iii-engine**，无外部向量数据库依赖。

iii-engine 提供了：
- BM25 + Vector + Graph 的混合检索（RRF fusion）
- all-MiniLM-L6-v2 嵌入模型本地运行（无 API key，无成本）
- Worker/Function/Trigger 三原语运行时

### 检索机制：三层融合

1. **BM25**: 关键词匹配 + 词干提取 + 同义词扩展
2. **Vector Search**: 余弦相似度语义检索
3. **Knowledge Graph**: 实体识别 + BFS 图遍历

结果用 **Reciprocal Rank Fusion (k=60)** 融合排序。

---

## MCP Server 配置

MCP 配置在所有主流 Agent 中完全相同：

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

支持的配置文件路径：
- Cursor: `~/.cursor/mcp.json`
- Claude Desktop
- Cline
- Windsurf
- Gemini CLI
- OpenClaw
- Codex CLI
- OpenCode

---

## 导入历史记录

```bash
# 导入 Claude Code 项目历史
npx @agentmemory/agentmemory import-jsonl ~/.claude/projects/-my-project/abc123.jsonl

# 导入所有默认 Claude 项目
npx @agentmemory/agentmemory import-jsonl
```

---

## v0.9.22 新功能 (2026-05-26)

- Three new connect adapters (Qwen Code, Antigravity, Kiro)
- `AGENT_ID` multi-agent isolation with opt-in `AGENTMEMORY_AGENT_SCOPE=isolated` filtering
- install ERESOLVE fixed
- OpenAI thinking-model output handled
- OpenCode auto-context + session creation
- viewer graph settles on 1000+ nodes
- 22 fixes total

---

## 协议与资源

- **License**: MIT
- **npm**: `@agentmemory/agentmemory`, `@agentmemory/mcp`
- **GitHub**: https://github.com/rohitg00/agentmemory
- **iii engine**: https://github.com/iii-hq/iii
- **Viewer**: http://localhost:3113 (启动后)
- **健康检查**: `curl http://localhost:3111/agentmemory/health`