---
tags: [Agent-Sandbox, 沙箱, Kubernetes, E2B, MCP]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-agent-sandbox-github-readme.md
  - wiki/sources/2026-07-02-agent-sandbox-ecosystem-comparison.md
---

# Agent-Sandbox

> E2B 与 Blaxel Sandbox 的开源替代，企业级云原生 AI Agent 运行时环境

<!-- confidence: EXTRACTED -->

## 核心能力

- E2B SDK 完全兼容，现有 E2B Agent 可无缝迁移
- AI-First: Agent 通过 MCP 自动管理 Sandbox 生命周期
- 支持: 代码执行、浏览器自动化、Computer Use、Shell 命令
- 企业级: 多租户/多会话生命周期管理
- 云原生: 基于 Kubernetes，RESTful API + MCP Server
- 版本: v0.7.0, Go+TypeScript, Apache-2.0
- 架构: Agent → Agent-Sandbox → Sandbox → K8s → Storage

## 竞品

- E2B (SaaS)
- CubeSandbox (硬件隔离)
- k8s-sigs (CRD)

## 相关页面

- [[E2B]]
- [[CubeSandbox]]
- [[K8s-Agent-Sandbox]]
- [[MCP]]
- [[Docker]]
- [[系统服务控制]]
