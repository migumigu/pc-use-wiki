---
tags: [素材摘要, 运行时, iii-engine]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# iii-engine 架构分析

> agentmemory 的底层运行时，三原语设计模型

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **来源** | GitHub iii-hq/iii (https://github.com/iii-hq/iii) |
| **收集日期** | 2026-07-02 |

## 核心定位

iii 把传统后端技术栈——队列、cron、HTTP、状态、可观测性、agents、沙箱——压缩成一个**统一的实时系统表面**。

<!-- confidence: EXTRACTED -->

## 三原语设计模型

### Workers（进程）
- 向 iii engine 注册的进程
- TypeScript/Python/Rust 服务都可以是 worker
- Workers 可以在运行时创建其他 workers

### Triggers（触发器）
- 任何导致 function 运行的事件
- HTTP endpoint、Cron、Queue、State change 等
- 声明式：iii 处理路由、序列化和交付

### Functions（功能单元）
- 带有稳定标识符的工作单元
- 接收输入、执行工作、可选返回输出

## iii vs 传统后端

| 传统方案 | iii 方案 |
|----------|----------|
| Express.js/FastAPI | iii Worker (HTTP trigger) |
| SQLite/Postgres | iii State (KV store) |
| Qdrant/pgvector | iii in-memory vector index |
| SSE/Socket.io | iii Stream |
| pm2/systemd | iii Worker management |

## SDKs 支持

- Node.js: `npm install iii-sdk`
- Python: `pip install iii-sdk`
- Rust: Cargo.toml
- Go: `go get github.com/iii-hq/iii/sdk/packages/go/iii`

## 内置 Workers

- iii-queue, iii-state, iii-pubsub, iii-stream
- iii-cron, iii-http, iii-observability, iii-bridge, iii-exec

## 与 agentmemory 的关系

agentmemory 构建在 iii-engine 之上：
- 118 个源文件
- ~21800 行代码
- 123 个 functions
- 34 个 KV scopes

## 分层许可证

- engine/: Elastic License 2.0
- sdk/: Apache License 2.0
- console/: Apache License 2.0

## 相关页面

- [[iii-engine]] — 实体页
- [[agentmemory]] — 上层记忆系统