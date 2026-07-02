---
tags: [Sandbox, Security, Isolation, OpenHands, Runtime]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-openhands-architecture-analysis.md
---

# Sandbox

> OpenHands 安全沙箱隔离容器

## 基本概念

Sandbox 是 OpenHands Runtime 的安全隔离组件，提供多层隔离机制。

## 隔离能力

- **文件系统隔离**：读写权限控制
- **网络隔离**：网络访问限制
- **进程隔离**：进程执行边界
- **权限控制**：用户权限管理

## 与竞品对比

OpenHands 主要通过 Docker 容器隔离，与 OpenAI Agents SDK 的多沙箱提供商模式不同。

## 适用场景

- 生产环境：Docker 容器隔离
- 开发测试：本地安全模式
- 企业云端：Kubernetes 部署

## 相关页面

- [[OpenHands]] — 主平台
- [[Runtime]] — 执行层
- [[系统服务控制]] — 分类主题
- [[E2B]] — 竞品沙箱方案