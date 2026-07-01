---
source_id: auto-2026-07-02-agent-sandbox-github
title: agent-sandbox/agent-sandbox GitHub README
url: https://github.com/agent-sandbox/agent-sandbox
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# agent-sandbox/agent-sandbox

> E2B 与 Blaxel Sandbox 的开源替代 — 企业级、AI-First、云原生 AI Agent 运行时环境

## 项目基本信息

- **许可证**: Apache-2.0
- **最新版本**: v0.7.0 (2026-06-24)
- **提交次数**: 108 Commits
- **语言构成**: Go 52.1%, TypeScript 45.2%, Python 1.1%
- **容器镜像包**: agent-sandbox, code-interpreter, openclaw, e2b-desktop

## 核心特性

- **E2B 完全兼容**: 完全兼容 E2B 协议和 SDK，现有 E2B Agent 可无缝迁移
- **AI-First**: Agent 通过 MCP 自动管理整个 Sandbox 生命周期
- **AI-Agent Runtimes**: 支持代码执行、浏览器自动化、Computer Use、Shell 命令
- **企业级**: 多租户/多会话的 Sandbox 生命周期管理
- **云原生**: 基于 Kubernetes 构建，具备可扩展性、弹性
- **快速轻量**: 最小化 K8s 对象部署

## 技术架构

```
Agent A/B/C → Agent-Sandbox (Auto CRUD) → Code/Browser/Computer/Custom Sandbox
                                          ↓
                                    Unified Storage (NAS/OSS/S3)
                                          ↓
                                    Kubernetes Cluster
```

## API 设计

- RESTful API: POST /api/v1/sandbox（创建）、GET /sandbox/{name}（访问）、DELETE（删除）
- MCP Server: http://host/mcp，支持 SSE (Streamable-http)
- Python SDK: `from agent_sandbox import Sandbox`
- 依赖: Kubernetes 1.26+

## 创建动机

作者发现 kubernetes-sigs/agent-sandbox 面向 K8s 直接操作，对 AI Agent 管理 Sandbox 生命周期不友好。因此创建此项目，提供 RESTful API + MCP 来抽象 K8s 复杂性。
