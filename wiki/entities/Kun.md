---
tags: [本地agent, cache-first, token-roi, kun-runtime, deepseek]
created: 2026-07-02
updated: 2026-07-02
sources:
  - "[[2026-07-02-deepseek-gui-readme]]"
  - "[[2026-07-02-kun-cache-optimization]]"
---

# Kun

> DeepSeek-GUI 的本地 Agent 运行时，Cache-first agent loop 实现 90%+ 缓存命中率，Token ROI 核心优势

## 基本信息

- **开发方**: XingYu-Zhong（个人项目，非 DeepSeek 官方）<!-- confidence: EXTRACTED -->
- **GitHub**: https://github.com/XingYu-Zhong/DeepSeek-GUI
- **Stars**: 4.1K+<!-- confidence: EXTRACTED -->
- **许可证**: MIT<!-- confidence: EXTRACTED -->
- **技术栈**: TypeScript + Node.js + HTTP/SSE<!-- confidence: EXTRACTED -->
- **最新版本**: 0.2.8（2026-06-10）<!-- confidence: EXTRACTED -->
- **官网**: https://deepseek-gui.com

## 核心定位

把 Kun 的高 Token ROI 本地智能体能力带进桌面窗口：
- **Code**：处理项目
- **写作**：打磨文档
- **连接手机**：接入 IM 与定时任务
- 让每一个 token 尽量花在需求、代码、决策和结果上

## Token ROI 核心优势

### Cache-First Agent Loop

| Kun 优势 | Token ROI 来源 |
|----------|----------------|
| **Cache-first agent loop** | 稳定 system prompt、工具 schema 和不可变前缀，让 DeepSeek 原生缓存更容易命中<!-- confidence: EXTRACTED --> |
| **按需工具上下文** | MCP 工具很多时，先用 `mcp_search` 找相关工具<!-- confidence: EXTRACTED --> |
| **上下文卫生** | 对超长工具结果、长参数、base64 payload 做边界压缩<!-- confidence: EXTRACTED --> |
| **可见的用量收益** | GUI 显示 Token economy 收益<!-- confidence: EXTRACTED --> |

### Token Economy 效果

- **90%+ 目标 cache hit 率**<!-- confidence: EXTRACTED -->
- **3-step progressive MCP discovery**<!-- confidence: EXTRACTED -->
- DeepSeek 原生缓存遥测<!-- confidence: EXTRACTED -->

## 技术架构

### Cache-First Agent Loop 组件

借鉴自 Reasonix 的验证设计：

| 组件 | 功能 |
|------|------|
| **immutable prompt prefix** | sha256 持纹稳定前缀<!-- confidence: EXTRACTED --> |
| **append-only session log** | 只追加会话日志<!-- confidence: EXTRACTED --> |
| **bounded TTL/LRU cache** | 有界缓存<!-- confidence: EXTRACTED --> |
| **inflight tracking** | 飞行追踪<!-- confidence: EXTRACTED --> |
| **mid-turn steering queue** | 中转转向队列<!-- confidence: EXTRACTED --> |
| **context compaction** | 上下文压缩<!-- confidence: EXTRACTED --> |
| **cache / usage telemetry** | 缓存遥测<!-- confidence: EXTRACTED --> |

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

### Feature Flags

| 能力 | 标志 | 说明 |
|------|------|------|
| MCP | `capabilities.mcp` | 接入第三方 MCP server<!-- confidence: EXTRACTED --> |
| Web | `capabilities.web` | `web_fetch` / `web_search`<!-- confidence: EXTRACTED --> |
| Skills | `capabilities.skills` | 发现 skill.json<!-- confidence: EXTRACTED --> |
| Attachments | `capabilities.attachments` | 图片附件<!-- confidence: EXTRACTED --> |
| Memory | `capabilities.memory` | 跨会话记忆<!-- confidence: EXTRACTED --> |
| Subagents | `capabilities.subagents` | 子 agent 委派<!-- confidence: EXTRACTED --> |

## 工作台模式

| 模式 | 定位 | 能力 |
|------|------|------|
| **Code** | 面向真实代码库 | 文件操作、Shell 执行、Git、审查改动<!-- confidence: EXTRACTED --> |
| **Write** | 独立写作空间 | Markdown 文件树、Live 编辑/预览<!-- confidence: EXTRACTED --> |
| **Connect phone** | IM 接入 | 飞书/Lark/微信、定时任务<!-- confidence: EXTRACTED --> |

## 与同类对比

| 维度 | Kun | Qoder | OpenClaw | Hermes |
|------|-----|-------|----------|--------|
| **定位** | 本地 Agent 工作台 | 企业级 Agentic 平台 | 全栈个人助手 | 自进化 Agent |
| **Computer Use** | ❌ 无 | ✅ 内置后台 | ⚠️ 有限 | ✅ cua-driver |
| **Token ROI** | ✅ 核心优势 | ⚠️ 有限 | ⚠️ 有限 | ⚠️ 有限 |
| **Cache-first** | ✅ 核心设计 | ⚠️ 云端缓存 | ⚠️ Gateway 级 | ⚠️ 本地缓存 |
| **开源** | ✅ MIT | ❌ 闭源 | ✅ 完全开源 | ✅ 完全开源 |
| **Stars** | 4.1K+ | N/A（闭源） | 200K+ | 204K+ |

## 适用场景

✅ **最适合**：
- 用 DeepSeek 处理真实代码库的开发者<!-- confidence: EXTRACTED -->
- Token 预算敏感场景<!-- confidence: EXTRACTED -->
- 长任务、长会话、多工具协作<!-- confidence: EXTRACTED -->
- 需清楚看到 Agent 改动、需批准操作的团队<!-- confidence: EXTRACTED -->
- 本地优先、数据隐私敏感用户<!-- confidence: EXTRACTED -->

❌ **不适合**：
- 简单问答<!-- confidence: EXTRACTED -->
- 纯本地模型运行（需 DeepSeek API）<!-- confidence: EXTRACTED -->
- 低资源设备<!-- confidence: EXTRACTED -->

## 局限性

1. ❌ 无内置 Computer Use<!-- confidence: EXTRACTED -->
2. ⚠️ 需自行配置 MCP Server<!-- confidence: EXTRACTED -->
3. ⚠️ 需 DeepSeek API Key<!-- confidence: EXTRACTED -->
4. ⚠️ 个人项目，非 DeepSeek 官方<!-- confidence: EXTRACTED -->

## 设计理念

Kun 取意于《庄子·逍遥游》中的"北冥有鱼，其名为鲲"：
- 不是临时聊天壳
- 把模型能力沉到更深的本地运行时里
- 承载更长的上下文、更复杂的工具调用和更持续的项目协作

## 致谢

感谢 Reasonix 团队提供的可运行参考。Kun 的几乎全部性能特征——cache hit 率、token replay、断线重连、审批中断——都可以追溯到该项目。<!-- confidence: EXTRACTED -->

## 相关页面

- [[上下文工程]] — Cache-first loop 实践案例
- [[Agent集成层]] — 所属主题
- [[MCP]] — 工具协议
- [[Qoder]] — 对比实体（企业级 Agentic 平台）
- [[OpenClaw]] — 对比实体（全栈个人助手）
- [[hermes-agent]] — 对比实体（自进化 Agent）