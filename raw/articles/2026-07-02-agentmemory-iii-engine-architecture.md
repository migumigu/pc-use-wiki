# iii-engine: agentmemory 的底层运行时架构

> 来源：GitHub iii-hq/iii (https://github.com/iii-hq/iii)
> 收集日期：2026-07-02

---

## iii 是什么？

iii 是最简单的方式来实时组合、扩展和观察你技术栈中的每一个服务。

iii 把传统的后端技术栈——队列、cron、HTTP、状态、可观测性、agents、沙箱——压缩成一个**统一的实时系统表面**。

```
iii worker add queue
iii worker add agent
iii worker add sandbox
iii worker add <anything>
```

每个 worker 加入实时目录，其他 worker 可以立即调用它。所有 worker 在 [workers.iii.dev](https://workers.iii.dev/) 可浏览。

---

## 三原语设计模型

**Worker · Function · Trigger** 是 iii 的整个心智模型。

### Workers (进程)

Workers 是向 iii engine 注册的进程，然后注册 triggers 和 functions。

- TypeScript API 服务是 worker
- Python 数据管道是 worker
- Rust 微服务是 worker
- 任何功能都可以通过几行代码变成 worker
- Workers 可以在运行时创建其他 workers

### Triggers (触发器)

Triggers 是任何导致 function 运行的事件：

- 直接调用 function
- HTTP endpoint
- Cron schedule
- Queue subscription
- State change
- Stream event
- 其他任何事件

Triggers 是声明式的：Worker 定义"当这件事发生时运行这个 function"，iii 处理路由、序列化和交付。

### Functions (功能单元)

Functions 是带有稳定标识符的工作单元（如 `content::classify`, `orders::validate`）：

- 接收输入
- 执行工作
- 可选返回输出
- Functions 存在于 workers 中

通过将服务能做的所有事情映射到这三个原语，iii 创建了既**易于组合**又**完全可观测**的开发过程。

---

## iii vs 传统后端技术栈

### Before iii

- 新可观测性工具：无数 integrations
- 新 agent harness：分离的 retry config、traces、timeouts
- 新队列：vendor 评估、采购、数周集成

### After iii

```bash
iii worker add observability  # Done. 在系统中、可追踪、可调用
iii worker add queue          # Done.
```

**Platform teams 发布 workers。Application teams 注册 functions 和声明 triggers。Agents 使用同一个目录和同一个 function calls。**

---

## Quick Start

```bash
# 安装 iii
curl -fsSL https://install.iii.dev/iii/main/install.sh | sh

# 创建项目
iii project init myapp
cd myapp
iii   # 启动 engine
```

---

## SDKs 多语言支持

| Language | Package | Install |
|----------|---------|---------|
| Node.js | `iii-sdk` | `pnpm add iii-sdk` / `npm install iii-sdk` |
| Python | `iii-sdk` | `pip install iii-sdk` |
| Rust | `iii-sdk` | Add to `Cargo.toml` |
| Go | `iii-sdk` | `go get github.com/iii-hq/iii/sdk/packages/go/iii` |

---

## Agent Skills

安装 iii 的 agent-readable 参考文档：

```bash
npx skills add iii-hq/iii/skills
```

覆盖每个 iii primitive：HTTP endpoints、queues、cron、state、streams、custom triggers 等。

每个 [iii-hq/workers](https://github.com/iii-hq/workers) 中的 worker 也自带 skill：

```bash
npx skills add iii-hq/workers --list      # 列出可用的 worker skills
npx skills add iii-hq/workers --skill database  # 安装单个 worker skill
npx skills add iii-hq/workers --all       # 安装所有 worker skills
```

---

## iii Console

[iii-console](https://github.com/iii-hq/iii/blob/main/console) 是开发和运维控制台，用于检查：

- Workers
- Functions
- Triggers
- Queues
- Traces
- Logs
- 实时状态

详见 [Console docs](https://iii.dev/docs/using-iii/console)。

---

## Repository 结构

| Directory | What it is | README |
|-----------|------------|--------|
| `engine/` | iii Engine (Rust) - 核心 runtime、modules、protocol | [engine/README.md](https://github.com/iii-hq/iii/blob/main/engine/README.md) |
| `sdk/` | SDKs for Node.js, Python, Rust, Go | [sdk/README.md](https://github.com/iii-hq/iii/blob/main/sdk/README.md) |
| `console/` | Developer console (React + Rust) | [console/README.md](https://github.com/iii-hq/iii/blob/main/console/README.md) |
| `skills/` | Agent-readable reference material | [skills/README.md](https://github.com/iii-hq/iii/blob/main/skills/README.md) |
| `website/` | iii website | [website/](https://github.com/iii-hq/iii/blob/main/website) |
| `docs/` | Documentation site (Mintlify/MDX) | [docs/README.md](https://github.com/iii-hq/iii/blob/main/docs/README.md) |

---

## iii 内置 Workers

iii 的内置 workers 包括：

- `iii-queue`
- `iii-state`
- `iii-pubsub`
- `iii-stream`
- `iii-cron`
- `iii-http`
- `iii-observability`
- `iii-bridge`
- `iii-exec`
- `configuration`

每个 worker 的 README 在 [`engine/src/workers/`](https://github.com/iii-hq/iii/blob/main/engine/src/workers) 下。

---

## License 许可证

iii 采用分层许可证：

| Directory | License |
|-----------|---------|
| `engine/` | [Elastic License 2.0](https://github.com/iii-hq/iii/blob/main/engine/LICENSE) |
| `sdk/` | [Apache License 2.0](https://github.com/iii-hq/iii/blob/main/sdk/LICENSE) |
| `console/` | [Apache License 2.0](https://github.com/iii-hq/iii/blob/main/console/LICENSE) |
| `docs/` | [Apache License 2.0](https://github.com/iii-hq/iii/blob/main/docs/LICENSE) |
| `website/` | [Apache License 2.0](https://github.com/iii-hq/iii/blob/main/website/LICENSE) |

**Engine runtime 使用 Elastic License 2.0 (ELv2)。所有 SDKs、CLI、console、文档和网站使用 Apache License 2.0。**

---

## iii 与 agentmemory 的关系

agentmemory 构建在 iii-engine 之上，利用其：

1. **State (KV store + in-memory vector index)** - 提供本地向量索引能力
2. **BM25 + Vector + Graph 混合检索** - iii 内置的 RRF fusion
3. **Worker 插件系统** - `iii worker add` 可以随时扩展能力
4. **零外部数据库依赖** - SQLite 作为唯一存储后端

agentmemory 的核心架构：
- 118 个源文件
- 约 21800 行代码
- 123 个 functions
- 34 个 KV scopes
- 全部构建在 Worker/Function/Trigger 三原语上

---

## 技术栈替代对比

iii 直接替代了传统后端的一整套技术栈：

| 传统方案 | iii 方案 |
|----------|----------|
| Express.js / FastAPI | iii Worker (HTTP trigger) |
| SQLite / Postgres | iii State (KV store) |
| Qdrant / pgvector | iii in-memory vector index |
| SSE / Socket.io | iii Stream |
| pm2 / systemd | iii Worker management |
| Prometheus / Grafana | iii Observability worker |

---

## Resources

- [Documentation](https://iii.dev/docs)
- [CLI & Engine](https://github.com/iii-hq/iii)
- [Console](https://github.com/iii-hq/iii/blob/main/console)
- [Examples](https://github.com/iii-hq/iii-examples)
- [Contributing](https://github.com/iii-hq/iii/blob/main/CONTRIBUTING.md)