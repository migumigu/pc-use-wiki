---
tags: [素材摘要, Anthropic, Managed-Agents, Agent-Runtime, 沙箱]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# Anthropic Managed Agents Architecture

> 完整的托管式 Agent 运行平台，Brain-Hands-Session 三层解耦架构

<!-- confidence: EXTRACTED -->

## 核心内容
- 发布: 2026年4月8日
- 核心架构: Brain (Claude+Harness) / Hands (Sandbox+Tools) / Session (Event-Log)
- Session-as-Event-Log: append-only, 可恢复, 可审计
- Harness-as-Stateless-Executor: 极简设计, execute(name,input)→string
- Sandbox-as-Cattle: 每次tool call全新microVM
- Vault+Proxy凭证安全
- 延迟优化: 首token p50降低60%, p95降低90%
- 竞品: OpenAI Agents SDK, Google ADK, AWS AgentCore

## 相关页面
- [[Managed-Agents]] — 实体页
- [[MCP]] — 实体页
- [[Agent-Loop]] — 实体页
- [[Agent集成层]] — 实体页
