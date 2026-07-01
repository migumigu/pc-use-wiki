---
tags: [DeerFlow, SuperAgent, Harness, ByteDance, Agent集成层]
created: 2026-07-01
updated: 2026-07-01
sources:
  - raw/articles/2026-07-01-deerflow-github-readme.md
  - raw/articles/2026-07-01-deerflow-official-site.md
  - raw/articles/2026-07-01-deerflow-14-middleware-architecture.md
  - raw/notes/2026-07-01-deerflow-technical-analysis-v1.1.md
---

# DeerFlow GitHub README

> 字节跳动开源的 SuperAgent Harness 框架，登顶 2026 年 GitHub Trending #1

<!-- confidence: EXTRACTED -->

## 基本信息

- **仓库地址**: https://github.com/bytedance/deer-flow
- **Stars**: 72K+（2026年7月数据）
- **提交数**: 2,396 Commits
- **许可证**: MIT License
- **首次发布**: 2026年2月28日
- **开发者**: ByteDance（字节跳动）

<!-- confidence: EXTRACTED -->

## 核心定位

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow**) 是一个开源的 **super agent harness**，编排 **sub-agents**、**memory** 和 **sandboxes** 来执行几乎任何任务——由 **extensible skills** 提供能力。

<!-- confidence: EXTRACTED -->

## DeerFlow 2.0 特性

**DeerFlow 2.0 是全新重写版本**，与 v1 共享零代码。v1 定位为 Deep Research，现已移至 `1.x` 分支。

### 核心功能

| 功能 | 说明 |
|------|------|
| **Skills & Tools** | 可扩展技能和工具，支持 Claude Code 集成 |
| **Sub-Agents** | 子代理编排，处理复杂任务 |
| **Sandbox & File System** | Docker 沙箱执行，安全隔离 |
| **Context Engineering** | 上下文工程，长短期记忆 |
| **Long-Term Memory** | 长期记忆系统，持久化用户偏好 |

<!-- confidence: EXTRACTED -->

### 14层 Middleware（洋葱模型）⚠️

> 来源：技术博客分析，待源码确认

<!-- confidence: INFERRED -->

| 层级 | Middleware | 功能 |
|------|-----------|------|
| 1 | ConfigMiddleware | 配置解析 |
| 2 | ModelMiddleware | LLM实例化 |
| 3 | MemoryMiddleware | 记忆管理 |
| 4 | ToolMiddleware | 工具调用 |
| 5 | SkillMiddleware | 技能加载 |
| 6 | SandboxMiddleware | 沙箱隔离 |
| 7 | PlanningMiddleware | 任务规划 |
| 8 | SubAgentMiddleware | Sub-Agent编排 |
| 9 | ConcurrentMiddleware | 并发控制 |
| 10 | RetryMiddleware | 失败重试 |
| 11 | TracingMiddleware | 追踪 |
| 12 | IMMiddleware | 飞书/Slack |
| 13 | MCPMiddleware | MCP Server |
| 14 | OutputMiddleware | 输出格式化 |

### 推荐模型

- Doubao-Seed-2.0-Code（字节跳动）
- DeepSeek v3.2
- Kimi 2.5
- GPT-4o
- Claude 系列

<!-- confidence: EXTRACTED -->

### Sandbox 模式

| 模式 | 执行环境 | 安全性 |
|------|----------|--------|
| **Local Execution** | 主机直接执行 | 低 |
| **Docker Execution** | Docker容器 | 高 |
| **Kubernetes Execution** | K8s Pod | 最高 |

<!-- confidence: EXTRACTED -->

### 部署规格

| 部署目标 | 最低配置 | 推荐配置 |
|----------|----------|----------|
| 本地开发 | 4 vCPU, 8 GB | 8 vCPU, 16 GB |
| Docker开发 | 4 vCPU, 8 GB | 8 vCPU, 16 GB |
| 长期服务器 | 8 vCPU, 16 GB | 16 vCPU, 32 GB |

<!-- confidence: EXTRACTED -->

## 技术栈

- **后端**: Python + LangChain/LangGraph
- **前端**: React/TypeScript
- **沙箱**: Docker + AIO Sandbox
- **通信**: MCP Server
- **IM**: 飞书/Slack

<!-- confidence: EXTRACTED -->

## 关键概念

- [[DeerFlow]] — 本项目实体页
- [[ByteDance]] — 开发者
- [[Sub-Agent]] — 子代理编排
- [[Middleware]] — 14层中间件架构
- [[AIO Sandbox]] — 沙箱执行环境
- [[LangGraph]] — 工作流框架
- [[MCP]] — 协议集成
- [[Agent集成层]] — 所属主题

## 与其他框架对比

<!-- confidence: INFERRED -->

| 框架 | Stars | 定位 | 核心特性 |
|------|-------|------|----------|
| **DeerFlow** | 72K+ | SuperAgent Harness | 14层中间件 |
| [[OpenClaw]] | 200K+ | 全栈 Agent | Gateway + Skills |
| [[hermes-agent]] | 204K+ | 自进化 Agent | 学习闭环 |

## 相关页面

- [[Agent集成层]]
- [[OpenClaw]]
- [[hermes-agent]]
- [[MCP-Protocol-深度报告]]
- [[Multi-Agent协作-深度报告]]