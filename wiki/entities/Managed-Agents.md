---
tags: [Anthropic, Managed-Agents, Agent-Runtime, 沙箱, MCP]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-anthropic-managed-agents-architecture.md
---

# Managed-Agents

> Anthropic 托管式 Agent 运行平台，Brain-Hands-Session 三层解耦架构

<!-- confidence: EXTRACTED -->

## 核心能力

- Brain: Claude + Harness（推理决策循环），调用Hands的唯一入口
- Hands: Sandbox + Tools（执行环境），execute(name,input)→string
- Session: 持久化Event Log（状态记录），append-only，独立于模型进程
- Session-as-Event-Log: 崩溃恢复只需awake(sessionId)
- Harness-as-Stateless-Executor: 极简设计，不到300行代码
- Sandbox-as-Cattle: 每次tool call全新microVM(Firecracker)，执行完销毁
- Vault+Proxy凭证安全: 凭据不以环境变量暴露
- 延迟优化: 首token p50降低60%, p95降低90% <!-- confidence: UNVERIFIED -- Anthropic内部测试 -->
- 发布: 2026年4月8日

## 三大资源抽象

- Agent(配置)
- Environment(执行环境)
- Session(一次运行)

## 竞品

- OpenAI Agents SDK
- Google ADK
- AWS AgentCore
- LangGraph

## 相关页面

- [[MCP]]
- [[Agent-Loop]]
- [[Computer-Use]]
- [[Agent集成层]]
- [[Docker]]
- [[Multi-Agent协作]]
