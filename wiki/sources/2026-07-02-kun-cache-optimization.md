# Kun Cache-First Agent Loop 技术架构

> **来源类型**：Tier 1 官方文档 | **置信度**：EXTRACTED | **收集日期**：2026-07-02

**原文链接**：https://deepseek-gui.com

---

## 核心要点

Kun 是 DeepSeek-GUI 的本地 Agent 运行时，核心设计理念是 **Cache-first agent loop**：稳定 prompt 前缀、按需工具发现（MCP search）、上下文卫生，实现 90%+ 缓存命中率，把 Token ROI 做成核心指标。

### Token ROI 核心优势

| Kun 优势 | Token ROI 来源 |
|----------|----------------|
| **Cache-first agent loop** | 稳定 system prompt、工具 schema 和不可变前缀，让 DeepSeek 原生缓存更容易命中，长会话不必反复为同一段背景付费 |
| **按需工具上下文** | MCP 工具很多时，先用 `mcp_search` 找相关工具，再描述和调用目标工具，避免每轮把完整工具目录塞进 prompt |
| **上下文卫生** | 对超长工具结果、长参数、base64 payload、重复工具循环和低价值历史做边界压缩，保留代码、路径、错误、决策和未解决事项 |
| **可见的用量收益** | 运行时跟踪 cache hit/miss、token 用量和节省估算，GUI 会把 Token economy 的收益显示出来 |

---

## 技术细节

### Cache-First Agent Loop 组件

借鉴自 Reasonix 的验证设计：

| 组件 | 功能 |
|------|------|
| **immutable prompt prefix** | 带 sha256 持纹的稳定前缀 |
| **append-only session log** | 只追加的会话日志 |
| **bounded TTL/LRU cache** | 有界的 TTL/LRU 缓存 |
| **inflight tracking** | 保证清理的飞行追踪 |
| **mid-turn steering queue** | 中转转向队列 |
| **context compaction** | 保留 pinned constraints 的上下文压缩 |
| **cache / usage telemetry** | 缓存和用量遥测 |

### MCP 工具发现流程

当 MCP 工具很多时：
1. `mcp_search` — 搜索相关工具
2. `mcp_describe` — 描述目标工具
3. `mcp_call` — 调用目标工具

**避免的问题**：
- 每轮把完整工具目录塞进 prompt
- 无关工具 schema 占用上下文
- Token 浪费在工具描述而非任务执行

### DeepSeek 原生缓存遥测

读取字段：
- `prompt_cache_hit_tokens`
- `prompt_cache_miss_tokens`

统计方式：Kun 读取这些字段后，报告 cache 和 token-economy 节省。

---

## 技术架构

### 运行时架构

```
Renderer (React)
  ↓
KunRuntimeProvider
  ↓
preload: dsGui.runtimeRequest / startSse
  ↓
main: LocalHttpRuntimeAdapter
  ↓
kun serve (HTTP + SSE)
  ↓
cache-first AgentLoop
```

### Feature Flags 管理

| 能力 | 标志 | 说明 |
|------|------|------|
| MCP | `capabilities.mcp` | 接入第三方 MCP server |
| Web | `capabilities.web` | `web_fetch` / `web_search` |
| Skills | `capabilities.skills` | 发现 skill.json + SKILL.md |
| Attachments | `capabilities.attachments` | 图片附件 + 文本 fallback |
| Memory | `capabilities.memory` | 跨会话记忆 |
| Subagents | `capabilities.subagents` | 有预算上限的子 agent 委派 |

---

## 适用场景

✅ **最适合**：
- 长任务、长会话（多轮对话）
- 多工具协作（大量 MCP）
- Token 预算敏感场景
- 真实项目持续开发

❌ **不适合**：
- 短对话一次性问答
- 少工具场景（缓存收益低）

---

## 提取实体

| 实体 | 类型 | 相关性 | 置信度 | 证据 |
|------|------|--------|--------|------|
| **Kun** | 工具 | 核心 | EXTRACTED | README 主体 |
| **Cache-first-loop** | 技术模式 | 核心 | EXTRACTED | README 明确描述 |
| **MCP-search** | 工具发现机制 | 高 | EXTRACTED | README 明确描述 |
| **上下文卫生** | 技术概念 | 高 | EXTRACTED | README 明确描述 |
| **Token-ROI** | 指标概念 | 高 | EXTRACTED | README 明确描述 |

---

## 提取主题

- **Agent集成层**（Agent loop + MCP + Skills）
- **上下文工程**（Cache-first loop 实践）
- **桌面应用控制**（本地 Agent 工作台）

---

## 相关页面

- [[Kun]]（实体页）
- [[上下文工程]]（概念页）
- [[Agent集成层]]（主题页）
- [[MCP]]（实体页）
- [[Qoder]]（对比实体）
- [[OpenClaw]]（对比实体）