---
source_id: auto-20260702-kun02
title: Kun 运行时技术架构 — Cache-First Agent Loop
url: https://deepseek-gui.com
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Kun 运行时技术架构 — Cache-First Agent Loop

> Kun 高 Token ROI 的核心：稳定缓存 + 按需工具发现

## 核心设计理念

### Token ROI 优先
Kun 把"省 token"做成 agent loop 的默认行为：
- 不是事后补救
- 每一轮调用前判断哪些信息值得进入上下文
- 把 token 留给需求、代码、决策和结果

## Cache-First Agent Loop

### 基础组件
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

### 缓存优化效果
- **90%+ 目标 cache hit 率**
- Warm threads 保持高缓存复用
- 稳定 prompt 前缀 + 工具 schema 规范化

## DeepSeek 原生缓存遥测

### 读取字段
- `prompt_cache_hit_tokens`
- `prompt_cache_miss_tokens`

### 统计方式
Kun 读取这些字段后，报告 cache 和 token-economy 节省。

## 按需工具上下文

### MCP 工具发现流程
当 MCP 工具很多时：
1. `mcp_search` — 搜索相关工具
2. `mcp_describe` — 描述目标工具
3. `mcp_call` — 调用目标工具

### 避免的问题
- 每轮把完整工具目录塞进 prompt
- 无关工具 schema 占用上下文
- Token 浪费在工具描述而非任务执行

## 上下文卫生

### 边界压缩对象
- 超长工具结果
- 长参数
- base64 payload
- 重复工具循环
- 低价值历史

### 保留内容
- 代码
- 路径
- 错误信息
- 决策记录
- 未解决事项

## 技术架构（完整版）

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

### 端点与配置
设置项在 **设置 → Agent 运行时**：
- binary path
- port
- auto-start
- API key
- base URL
- runtime token
- data dir
- model
- approval policy
- sandbox mode
- insecure 开关

## GUI 能力显示

### 运行时状态
- `/v1/runtime/info` — 实际可用状态
- `/v1/runtime/tools` — 工具列表

### Token Economy 可视化
- Cache hit/miss 统计
- Token 用量
- 节省估算
- GUI 显示收益

## 与同类对比

### 缓存优化对比
| 项目 | 缓存策略 | 工具发现 | Token Economy |
|------|----------|----------|---------------|
| Kun | ✅ Cache-first | ✅ MCP search | ✅ 可视化 |
| Qoder | ⚠️ 云端缓存 | ⚠️ 有 | ⚠️ 有限 |
| OpenClaw | ⚠️ Gateway 级 | ✅ Skills | ⚠️ 有限 |
| Hermes | ⚠️ 本地缓存 | ⚠️ 有 | ⚠️ 有限 |

### Agent Loop 设计对比
| 特性 | Kun | LangGraph | OpenAI Agents SDK |
|------|-----|-----------|-------------------|
| Cache-first | ✅ 核心 | ⚠️ 部分支持 | ⚠️ 部分支持 |
| 按需工具 | ✅ MCP search | ❌ 全量加载 | ❌ 全量加载 |
| Context compaction | ✅ 自动 | ⚠️ 手动 | ⚠️ 手动 |
| 上下文卫生 | ✅ 自动 | ❌ 无 | ❌ 无 |

## 适用场景

✅ **最适合**：
1. 长任务、长会话（多轮对话）
2. 多工具协作（大量 MCP）
3. Token 预算敏感场景
4. 真实项目持续开发

❌ **不适合**：
1. 短对话一次性问答
2. 少工具场景（缓存收益低）

## 知识库关联

### 已研究概念
- [[上下文工程]] — Kun 是实践案例
- [[KV-Cache]] — 缓存机制
- [[状态显式化]] — append-only log
- [[掩码而非移除工具]] — MCP search 体现
- [[思考与行动分离]] — mid-turn steering

### 技术层级定位
- **Agent 集成层**：Agent loop + MCP + Skills
- **协议接口层**：HTTP/SSE + MCP
- **系统基础层**：Node.js + TypeScript

## 相关页面

- [[上下文工程]]（概念）
- [[KV-Cache]]（概念）
- [[Agent集成层]]（主题页）
- [[MCP]]
- [[OpenClaw]]