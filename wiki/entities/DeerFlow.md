---
tags: [DeerFlow, SuperAgent, Harness, ByteDance, Agent集成层]
created: 2026-07-01
updated: 2026-07-01
sources:
  - raw/articles/2026-07-01-deerflow-github-readme.md
  - raw/articles/2026-07-01-deerflow-official-site.md
  - raw/articles/2026-07-01-deerflow-14-middleware-architecture.md
---

# DeerFlow

> 字节跳动开源的 SuperAgent Harness 框架，登顶 2026 年 GitHub Trending #1

## 定义

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow**) 是字节跳动开源的 **SuperAgent Harness** 框架，用于编排 **Sub-Agents**、**Memory** 和 **Sandboxes** 来执行分钟级到小时级的复杂任务。2026年2月28日发布后登顶 GitHub Trending #1，4个月内斩获 72K+ Stars。

<!-- confidence: EXTRACTED -->

## 核心定位

- **定位**: SuperAgent Harness（超级智能体框架）
- **核心价值**: 从"对话 Agent"演进到"执行 Agent"
- **适用任务**: 分钟级到小时级复杂任务自动化

<!-- confidence: EXTRACTED -->

## 核心架构

### Lead Agent + 14层 Middleware

DeerFlow 采用 **Lead Agent 作为唯一入口**的设计模式，通过 14层 Middleware 洋葱模型实现严格的关注点分离：

```
用户请求 → Lead Agent（唯一入口）
          ├── 配置解析（模型选型、plan模式）
          ├── 模型管理（LLM实例化）
          ├── 14层 Middleware 洋葱模型
          ├── Sub-Agent 并发编排
          └── Docker 沙箱执行
```

<!-- confidence: INFERRED -->

### 14层 Middleware ⚠️

> 来源：技术博客分析，待源码确认

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

<!-- confidence: INFERRED -->

## 核心能力

| 能力 | 说明 |
|------|------|
| **长时复杂任务** | 分钟级到小时级任务自动化 |
| **Sub-Agent编排** | 多 Agent 并发执行与结果聚合 |
| **沙箱安全隔离** | Docker/K8s 多种隔离模式 |
| **多模型支持** | Doubao、DeepSeek、OpenAI、Gemini |
| **MCP Server** | 标准 MCP 协议集成 |
| **技能扩展** | Skills 动态加载 |
| **IM集成** | 飞书/Slack消息触发 |
| **记忆系统** | 短期/长期双重记忆 |

<!-- confidence: EXTRACTED -->

## Sandbox 模式

| 模式 | 执行环境 | 安全性 | 适用场景 |
|------|----------|--------|----------|
| **Local Execution** | 主机直接执行 | 低 | 开发测试 |
| **Docker Execution** | Docker容器 | 高 | 生产环境 |
| **Kubernetes Execution** | K8s Pod | 最高 | 企业级部署 |

<!-- confidence: EXTRACTED -->

## 推荐配置

| 部署目标 | 最低配置 | 推荐配置 |
|----------|----------|----------|
| 本地开发 | 4 vCPU, 8 GB RAM | 8 vCPU, 16 GB RAM |
| Docker开发 | 4 vCPU, 8 GB RAM | 8 vCPU, 16 GB RAM |
| 长期服务器 | 8 vCPU, 16 GB RAM | 16 vCPU, 32 GB RAM |

<!-- confidence: EXTRACTED -->

## 技术栈

- **后端**: Python + LangChain/LangGraph
- **前端**: React/TypeScript
- **沙箱**: Docker + AIO Sandbox
- **通信**: MCP Server
- **IM**: 飞书/Slack

<!-- confidence: EXTRACTED -->

## Stars 增长历史 ✅

| 时间 | Stars | 说明 |
|------|-------|------|
| 2026年2月28日 | 0 → 47K+ | 发布当天登顶 Trending #1 |
| 2026年3月 | 48K+ → 52K+ | 一个月内 |
| 2026年6月 | 57K → 59K+ | 三个月内 |
| 2026年7月 | 72K+ | 当前数据 |

<!-- confidence: EXTRACTED -->

## 局限性

| 限制 | 说明 |
|------|------|
| **部署复杂度高** | 需要 Docker/K8s 环境 |
| **资源消耗大** | 推荐配置 16 vCPU + 32 GB RAM |
| **不适合简单对话** | 定位是执行 Agent |
| **Windows 原生不支持** | 需要 Git Bash |
| **学习曲线陡峭** | 14层 Middleware 理解难度高 |

<!-- confidence: INFERRED -->

## 与其他框架对比

| 框架 | Stars | 定位 | 核心特性 |
|------|-------|------|----------|
| **DeerFlow** | 72K+ | SuperAgent Harness | 14层中间件 + Sub-Agent编排 |
| [[OpenClaw]] | 200K+ | 全栈 AI Agent | Gateway架构 + Skills市场 |
| [[hermes-agent]] | 204K+ | 自进化 Agent | 学习闭环 + cua-driver |

<!-- confidence: INFERRED -->

## 适用场景

1. **长时复杂任务**：研究、编码、创作等多步骤任务
2. **企业级部署**：需要严格安全隔离的生产环境
3. **开发者定制**：构建自定义 Agent 系统
4. **多模型切换**：需要在不同 LLM 之间灵活切换

<!-- confidence: EXTRACTED -->

## 不适用场景

- 简单对话任务（用 ChatGPT/Claude 更合适）
- 资源受限环境（低于 8 GB RAM）
- 快速原型验证（部署时间长）
- 单任务自动化（用单一工具更高效）

<!-- confidence: INFERRED -->

## 相关页面

- [[Agent集成层]]
- [[OpenClaw]]
- [[hermes-agent]]
- [[MCP]]
- [[LangGraph]]
- [[Sub-Agent]]
- [[Middleware]]
- [[AIO Sandbox]]
- [[Multi-Agent协作-深度报告]]