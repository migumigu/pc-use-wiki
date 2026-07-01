---
source_id: auto-2026-07-02-k8s-agent-sandbox-github
title: kubernetes-sigs/agent-sandbox GitHub README
url: https://github.com/kubernetes-sigs/agent-sandbox
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: system_foundation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# kubernetes-sigs/agent-sandbox

> Kubernetes 原生的 Agent 沙箱 CRD — 为管理"隔离的、有状态的、单实例工作负载"提供声明式标准化 API

## 项目基本信息

- **许可证**: Apache-2.0
- **组织**: Kubernetes SIG Apps
- **最新版本**: v0.4.6 (2026-05-14)
- **提交次数**: 507 Commits
- **语言构成**: Go 59.9%, Python 34.7%
- **分支/标签**: 8 Branches, 25 Tags

## 核心 CRD 定义

### 1. Sandbox (核心 CRD)
- API Version: `agents.x-k8s.io/v1alpha1` → 已升级至 `v1beta1`
- 提供声明式 API 管理"单个、有状态、稳定身份"的 Pod
- 关键能力：稳定身份、持久存储、生命周期管理

### 2. Extensions 扩展 CRD
- `SandboxTemplate`: 可复用的沙箱模板
- `SandboxClaim`: 从模板创建沙箱
- `SandboxWarmPool`: 预热沙箱池，快速分配

## 与 K8s 集成方式

- 通过 `kubectl apply` 安装 CRD 和控制器
- 提供 Helm Chart 部署
- 提供 Python SDK (`agentic-sandbox-client`)
- 支持 `runtimeClass` 机制接入 gVisor、Kata Containers
- Volcano AgentCube 已深度集成

## 期望的沙箱特性（Roadmap）

- **强隔离**: 支持 gVisor/Kata Containers，内核级+网络级隔离
- **深度休眠**: 状态持久化 + Sandbox 对象归档
- **自动恢复**: 网络连接时自动恢复
- **高效持久化**: 弹性快速存储供给
- **跨沙箱内存共享**: 同主机非同构沙箱间内存共享
