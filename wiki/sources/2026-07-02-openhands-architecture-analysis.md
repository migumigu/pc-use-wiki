---
tags: [架构分析, OpenHands, EventStream, Runtime, Sandbox]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-openhands-architecture-analysis.md
---

# OpenHands 技术架构分析

> Runtime/EventStream/Sandbox 三层 Harness 设计深度解析

## 核心摘要

OpenHands 采用三层 Harness 架构：Agent Controller（决策层） + EventStream（消息总线） + Runtime/Sandbox（执行层）。事件驱动架构支持异步操作和多 Agent 协作。

## 关键架构

### 三层设计

| 层级 | 组件 | 功能 |
|------|------|------|
| 决策层 | Agent Controller | Agent 决策与状态管理 |
| 消息层 | EventStream | 事件流消息总线 |
| 执行层 | Runtime + Sandbox | 安全沙箱执行 |

### Runtime 类型

- Docker 运行时（容器隔离）
- 本地运行时（开发测试）
- 远程运行时（Kubernetes）

## 提取实体

- [[EventStream]] — 事件流消息总线
- [[Runtime]] — 运行时执行层
- [[Sandbox]] — 安全沙箱隔离
- [[Environment]] — 执行环境抽象

## 提取主题

- [[Agent集成层]] — 主分类
- [[系统服务控制]] — Sandbox/Runtime
- [[Multi-Agent协作]] — Micro-Agent架构

## 相关页面

- [[OpenHands]] — 主实体
- [[2026-07-02-openhands-github-readme]] — 官方README