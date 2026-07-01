---
tags: [运行时, Agent基础设施, 零依赖, MCP]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-agentmemory-iii-engine-architecture.md
---

# iii-engine

> agentmemory 的底层运行时，三原语设计模型，零外部数据库依赖

<!-- confidence: EXTRACTED -->
<!-- evidence: "iii 把传统的后端技术栈压缩成一个统一的实时系统表面" -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **GitHub** | https://github.com/iii-hq/iii |
| **许可证** | Engine: Elastic License 2.0，SDKs: Apache 2.0 |
| **定位** | 统一实时系统表面 |
| **核心模型** | Worker · Function · Trigger 三原语 |

## 核心定位

iii 把传统的后端技术栈——队列、cron、HTTP、状态、可观测性、agents、沙箱——压缩成一个**统一的实时系统表面**。

<!-- confidence: EXTRACTED -->
<!-- evidence: "iii 把传统的后端技术栈压缩成一个统一的实时系统表面" -->

## 三原语设计模型

### Workers（进程）

Workers 是向 iii engine 注册的进程，然后注册 triggers 和 functions。

- TypeScript API 服务是 worker
- Python 数据管道是 worker
- Rust 微服务是 worker
- Workers 可以在运行时创建其他 workers

<!-- confidence: EXTRACTED -->
<!-- evidence: "Workers 是向 iii engine 注册的进程" -->

### Triggers（触发器）

Triggers 是任何导致 function 运行的事件：

- 直接调用 function
- HTTP endpoint
- Cron schedule
- Queue subscription
- State change
- Stream event

Triggers 是声明式的：Worker 定义"当这件事发生时运行这个 function"，iii 处理路由、序列化和交付。

<!-- confidence: EXTRACTED -->
<!-- evidence: "Triggers 是任何导致 function 运行的事件" -->

### Functions（功能单元）

Functions 是带有稳定标识符的工作单元（如 `content::classify`, `orders::validate`）：

- 接收输入
- 执行工作
- 可选返回输出
- Functions 存在于 workers 中

<!-- confidence: EXTRACTED -->
<!-- evidence: "Functions 是带有稳定标识符的工作单元" -->

## iii vs 传统后端技术栈

| 传统方案 | iii 方案 |
|----------|----------|
| Express.js / FastAPI | iii Worker (HTTP trigger) |
| SQLite / Postgres | iii State (KV store) |
| Qdrant / pgvector | iii in-memory vector index |
| SSE / Socket.io | iii Stream |
| pm2 / systemd | iii Worker management |
| Prometheus / Grafana | iii Observability worker |

<!-- confidence: EXTRACTED -->
<!-- evidence: "技术栈替代对比表" -->

## 内置 Workers

iii 的内置 workers 包括：

- `iii-queue` — 队列服务
- `iii-state` — KV 存储 + 内存向量索引
- `iii-pubsub` — 发布订阅
- `iii-stream` — 流式传输
- `iii-cron` — 定时任务
- `iii-http` — HTTP 服务
- `iii-observability` — 可观测性
- `iii-bridge` — 桥接服务
- `iii-exec` — 执行服务
- `configuration` — 配置管理

<!-- confidence: EXTRACTED -->
<!-- evidence: "内置 workers 列表" -->

## SDKs 多语言支持

| Language | Package | Install |
|----------|---------|---------|
| Node.js | `iii-sdk` | `npm install iii-sdk` |
| Python | `iii-sdk` | `pip install iii-sdk` |
| Rust | `iii-sdk` | Cargo.toml |
| Go | `iii-sdk` | `go get github.com/iii-hq/iii/sdk/packages/go/iii` |

<!-- confidence: EXTRACTED -->
<!-- evidence: "多语言 SDK 支持" -->

## 与 agentmemory 的关系

agentmemory 构建在 iii-engine 之上，利用其：

1. **State (KV store + in-memory vector index)** — 提供本地向量索引能力
2. **BM25 + Vector + Graph 混合检索** — iii 内置的 RRF fusion
3. **Worker 插件系统** — `iii worker add` 可以随时扩展能力
4. **零外部数据库依赖** — SQLite 作为唯一存储后端

agentmemory 的核心架构：
- 118 个源文件
- 约 21800 行代码
- 123 个 functions
- 34 个 KV scopes
- 全部构建在 Worker/Function/Trigger 三原语上

<!-- confidence: EXTRACTED -->
<!-- evidence: "agentmemory 118 个源文件，123 个 functions，34 个 KV scopes" -->

## 分层许可证

| Directory | License |
|-----------|---------|
| `engine/` | Elastic License 2.0 |
| `sdk/` | Apache License 2.0 |
| `console/` | Apache License 2.0 |
| `docs/` | Apache License 2.0 |

**Engine runtime 使用 Elastic License 2.0 (ELv2)。所有 SDKs、CLI、console、文档和网站使用 Apache License 2.0。**

<!-- confidence: EXTRACTED -->
<!-- evidence: "分层许可证说明" -->

## Repository 结构

| Directory | What it is |
|-----------|------------|
| `engine/` | iii Engine (Rust) - 核心 runtime |
| `sdk/` | SDKs for Node.js, Python, Rust, Go |
| `console/` | Developer console (React + Rust) |
| `skills/` | Agent-readable reference material |
| `docs/` | Documentation site (Mintlify/MDX) |

<!-- confidence: EXTRACTED -->
<!-- evidence: "Repository 结构说明" -->

## 相关页面

- [[agentmemory]] — 构建在 iii-engine 之上的记忆系统
- [[MCP]] — 协议层
- [[Agent集成层]] — 主题页