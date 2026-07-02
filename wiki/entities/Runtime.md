---
tags: [Runtime, Execution-Layer, Sandbox, OpenHands]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-openhands-architecture-analysis.md
---

# Runtime

> OpenHands 运行时执行层，安全沙箱执行引擎

## 基本概念

Runtime 是 OpenHands 三层 Harness 架构中的执行层，负责 Action 执行和环境隔离。

## 运行时类型

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| **Docker 运行时** | 每个 Agent 任务在独立容器运行 | 生产环境 |
| **本地运行时** | 本地受限环境运行 | 开发测试 |
| **远程运行时** | 云端 Kubernetes 部署 | 企业云端 |

## 核心功能

- Action 执行
- 环境抽象
- Sandbox 管理
- 插件系统

## 插件架构

sandbox_plugins 提供可扩展的安全机制：
- 文件系统插件
- 网络插件
- 进程管理插件

## 安全隔离

- 文件系统隔离
- 网络隔离
- 进程隔离
- 权限控制

## 相关页面

- [[OpenHands]] — 主平台
- [[Sandbox]] — 安全沙箱
- [[EventStream]] — 消息总线
- [[系统服务控制]] — 分类主题