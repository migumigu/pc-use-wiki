---
tags: [OpenHands, Coding-Agent, Runtime, Sandbox, EventStream, Agent-Controller]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-openhands-github-readme.md
  - raw/articles/2026-07-02-openhands-architecture-analysis.md
---

# OpenHands

> 75.9K Stars 全栈 AI Coding Agent 平台，SWEBench 77.6% SOTA

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **GitHub** | https://github.com/All-Hands-AI/OpenHands |
| **Stars** | 75,9K+ (截至 2026-06) |
| **许可证** | MIT |
| **SWEBench** | 77.6% 通过率（公开 SOTA） |
| **论文** | arXiv:2407.16741 |

## 核心定位

> OpenHands agents can do anything a human developer can: modify code, run commands, browse the web, call APIs.

一个平台级 AI 软件开发 Agent，从「辅助」到「自主」的完整工程栈。不是 copilot，而是 autonomous agent。

<!-- confidence: EXTRACTED -->

## 五层架构

```
OpenHands 技术栈
├── Software Agent SDK    → 可组合 Python 库（核心）
├── CLI                    → 终端交互模式
├── Local GUI              → 本地桌面应用
├── OpenHands Cloud        → 云端基础设施
└── OpenHands Enterprise   → 企业级 VPC 自托管
```

<!-- confidence: EXTRACTED -->

## 三层 Harness 设计

| 层级 | 组件 | 功能 |
|------|------|------|
| **决策层** | Agent Controller | Agent 决策与状态管理 |
| **消息层** | EventStream | 事件流消息总线 |
| **执行层** | Runtime + Sandbox | 安全沙箱运行时 |

<!-- confidence: EXTRACTED -->

## 核心能力

- 修改代码：读写任意代码文件
- 运行命令：沙箱环境执行终端命令
- 浏览网页：Web 自动化
- 调用 API：外部服务集成
- SWEBench SOTA：77.6% 通过率

<!-- confidence: EXTRACTED -->

## Runtime 类型

| 类型 | 适用场景 |
|------|----------|
| Docker 运行时 | 生产环境（容器隔离） |
| 本地运行时 | 开发测试 |
| 远程运行时 | 企业云端（Kubernetes） |

<!-- confidence: EXTRACTED -->

## 安全设计

- 文件系统隔离
- 网络隔离
- 进程隔离
- 权限控制
- 单用户工作站设计（不支持多租户）

<!-- confidence: EXTRACTED -->

## 弹性扩展

支持从本地到 1000+ Agent 云端规模部署。

<!-- confidence: EXTRACTED -->

## 与竞品对比

| 维度 | OpenHands | smolagents | OpenAI Agents SDK |
|------|-----------|------------|-------------------|
| Stars | 75.9K | 27K | 新发布 |
| SWEBench | 77.6% | — | — |
| 企业特性 | ✅ | ❌ | ❌ |

<!-- confidence: INFERRED -->

## 相关页面

- [[EventStream]] — 事件流消息总线
- [[Runtime]] — 运行时执行层
- [[Sandbox]] — 安全沙箱隔离
- [[Agent集成层]] — 主题页
- [[系统服务控制]] — Sandbox/Runtime 分类