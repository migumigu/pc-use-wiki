---
tags: [素材摘要, Agent记忆, GitHub-README]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# agentmemory GitHub README

> AI 编程助手的持久记忆系统，零外部数据库依赖，95.2% R@5 检索精度

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **来源** | GitHub README (https://github.com/rohitg00/agentmemory) |
| **收集日期** | 2026-07-02 |
| **Star 数** | 23,000+ |
| **许可证** | MIT |

## 核心定位

**Your coding agent remembers everything. No more re-explaining.**

为 Claude Code、GitHub Copilot CLI、Cursor、Gemini CLI、Codex CLI、Hermes、OpenClaw、pi、OpenCode 以及任何 MCP 客户端提供持久化记忆。

<!-- confidence: EXTRACTED -->

## 核心数据指标

| 指标 | 数值 |
|------|------|
| Retrieval R@5 | **95.2%** |
| Token 节省 | **92% fewer tokens** |
| MCP 工具数 | **53 MCP tools** |
| 自动 Hooks | **12 auto hooks** |
| 外部数据库依赖 | **0 external DBs** |
| 测试通过数 | **950+ tests passing** |

## 支持的 Agent 集成

### Tier 1: Native Plugin + Hooks + MCP
- Claude Code (12 hooks + MCP)
- Codex CLI (6 hooks + MCP)
- OpenClaw (MCP)
- Hermes (MCP)
- OpenCode (22 hooks + MCP)

### Tier 2: MCP Server
- Cursor, Gemini CLI, Cline, Goose, Windsurf, Claude Desktop

### Tier 3: REST API
- Aider

## 检索精度基准

### LongMemEval-S (ICLR 2025, 500 questions)

| 系统 | R@5 | R@10 | MRR |
|--------|-----|------|-----|
| **agentmemory** | **95.2%** | **98.6%** | **88.2%** |
| BM25-only fallback | 86.2% | 94.6% | 71.5% |

## Token 效率对比

| 方案 | Tokens/年 | 成本/年 |
|------|-----------|---------|
| 粘贴完整上下文 | 19.5M+ | 不可能 |
| LLM 摘要 | ~650K | ~$500 |
| **agentmemory** | **~170K** | **~$10** |

## 技术架构

核心依赖：**SQLite + iii-engine**，无外部向量数据库。

iii-engine 提供：
- BM25 + Vector + Graph 混合检索（RRF fusion）
- all-MiniLM-L6-v2 本地嵌入模型（无 API key）

## 与竞品对比

| 特性 | agentmemory | mem0 | Letta/MemGPT |
|------|-------------|------|--------------|
| Retrieval R@5 | **95.2%** | 68.5% | 83.2% |
| Auto-capture | 12 hooks | 手动 | Agent 自编辑 |
| External deps | **无** | Qdrant/pgvector | Postgres+vector |

## 快速开始

```bash
npm install -g @agentmemory/agentmemory
agentmemory                              # 在 :3111 启动记忆服务器
agentmemory connect claude-code          # 连接 MCP
```

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

## 相关页面

- [[agentmemory]] — 实体页
- [[iii-engine]] — 底层运行时
- [[Mem0]] — 竞品对比
- [[MCP]] — 集成协议