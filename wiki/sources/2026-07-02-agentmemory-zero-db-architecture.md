---
tags: [素材摘要, Agent记忆, 零依赖架构]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# agentmemory：免数据库的 Agent 持久记忆基础设施

> 一个命令，跨所有 Agent 生效

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **来源** | 今日头条技术博客 |
| **收集日期** | 2026-07-02 |
| **原文链接** | http://m.toutiao.com/group/7639167042226029096/ |

## 核心改变

> You explain the same architecture every session. You re-discover the same bugs. You re-teach the same preferences.

agentmemory 静默记录 Agent 行为，压缩为可检索记忆，下次 session 自动注入正确上下文。

<!-- confidence: EXTRACTED -->

## 使用前 vs 使用后

| Session | 无 agentmemory | 有 agentmemory |
|---------|----------------|----------------|
| 1 | 设置 JWT auth | 完成 ✓ |
| 2 | 问 rate limiting | Agent 已知道 auth 用 jose |
| 3 | 问缓存策略 | Agent 知道之前讨论过 Redis |

## 架构选择：iii-engine 零依赖

| 项目 | 依赖 |
|------|------|
| **agentmemory** | SQLite + iii-engine（内置） |
| mem0 | Qdrant / pgvector（外部） |
| Letta/MemGPT | Postgres + vector DB（外部） |

## 检索精度：95.2% R@5

**ICLR 2025 LongMemEval-S**：
- agentmemory: 95.2%
- Letta/MemGPT: 83.2%
- mem0: 68.5%

## 多 Agent 共享：16+ Agent

**跨 Agent 协调机制**：MCP + REST + leases + signals

支持的 Agent：Claude Code, Cursor, Gemini CLI, Codex CLI, Cline, OpenCode, Goose, Windsurf, Aider, Claude Desktop, OpenClaw, Hermes...

## 记忆生命周期

- 4-tier consolidation + decay + auto-forget
- 区别于 mem0 的 passive extraction 和 Letta 的 agent-managed

## Karpathy LLM Wiki 模式扩展

四个关键增强：
1. **confidence scoring** — 哪些记忆可靠
2. **lifecycle + auto-forget** — 记忆过期问题
3. **knowledge graphs** — 关系型记忆检索
4. **hybrid search** — 单一检索模式局限

## v0.9.0 关键更新（2026-04-18）

- Landing site at agent-memory.dev
- filesystem connector（监听文件系统变化）
- standalone MCP 代理至运行服务器
- audit policy codified

## 相关页面

- [[agentmemory]] — 实体页
- [[iii-engine]] — 底层运行时
- [[MCP]] — 集成协议