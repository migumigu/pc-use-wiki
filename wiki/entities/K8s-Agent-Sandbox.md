---
tags: [Kubernetes, Agent-Sandbox, CRD, SIG-Apps]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-k8s-agent-sandbox-github-readme.md
---

# K8s-Agent-Sandbox

> Kubernetes 原生的 Agent 沙箱 CRD，SIG Apps 官方项目

<!-- confidence: EXTRACTED -->

## 核心能力

- Sandbox CRD: 声明式API管理"单个、有状态、稳定身份"的Pod
- 扩展CRD: SandboxTemplate, SandboxClaim, SandboxWarmPool
- API Version: agents.x-k8s.io/v1beta1
- runtimeClass 支持可插拔隔离: gVisor, Kata Containers
- Volcano AgentCube 深度集成
- 版本: v0.4.6, Go+Python, 507 Commits, Apache-2.0
- Roadmap: 强隔离, 深度休眠, 自动恢复, 跨沙箱内存共享

## 与 agent-sandbox 区别

面向K8s直接操作(CRD级别), 不提供RESTful API/MCP, 不兼容E2B SDK

## 相关页面

- [[Agent-Sandbox]]
- [[Docker]]
- [[系统服务控制]]
