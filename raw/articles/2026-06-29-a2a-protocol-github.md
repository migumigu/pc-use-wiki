---
source_id: auto-2026-06-29-a2a-github
title: A2A Protocol GitHub Official Repository
url: https://github.com/google/A2A
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Agent2Agent (A2A) Protocol - Google Official Repository

## 核心信息

- **发布方**：Google LLC
- **许可证**：Apache License 2.0
- **最新版本**：v0.3.0（2025年7月）
- **开源日期**：2025年4月9日（Cloud Next '25）
- **定位**：开放协议，实现不同 AI Agent 之间的通信和互操作性

## 核心特性

1. **标准化通信**：JSON-RPC 2.0 over HTTP(S)
2. **Agent 发现**：通过 "Agent Cards" 提供能力和连接信息
3. **灵活交互**：支持同步请求/响应、流式传输（SSE）、异步推送通知
4. **丰富数据交换**：处理文本、文件和结构化 JSON 数据
5. **企业级**：安全性、认证、可观测性设计

## A2A 解决的问题

- **打破孤岛**：连接不同生态系统的 Agent
- **复杂协作**：允许多个专业 Agent 协同处理单一 Agent 无法完成的任务
- **开放标准**：社区驱动的方法，促进创新和广泛采用
- **保持不透明**：Agent 无需共享内部内存、工具或专有逻辑

## 与 MCP 的互补关系

- **MCP**：Agent 到工具/数据源的连接（"我亲自干活，工具辅助"）
- **A2A**：Agent 到 Agent 的协作（"我指挥你干活"，团队协作分工）

## SDK 支持

- Python SDK：https://github.com/a2aproject/a2a-python
- JavaScript SDK：https://github.com/a2aproject/a2a-js
- Java SDK：Maven
- .NET SDK：NuGet
- Golang SDK：https://github.com/a2aproject/a2a-go

## 未来发展方向

- **Agent 发现增强**：将授权方案和可选凭证直接纳入 AgentCard
- **Agent 协作**：探索 QuerySkill() 方法以动态检查不支持的技能
- **任务生命周期与 UX**：支持任务内的动态 UX 协商
- **客户端方法与传输**：扩展对客户端发起方法的支持
- **流式传输可靠性**：改进流式传输和推送通知机制
