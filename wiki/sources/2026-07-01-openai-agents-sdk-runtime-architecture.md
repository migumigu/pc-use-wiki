---
tags: [Agent集成层, OpenAI, Agents SDK, 架构, runtime]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# OpenAI Agents SDK 运行时骨架图：七层架构解析

> 不是平台，而是一张 Agent 运行时骨架图——七层模型揭示 Agent runtime 的核心控制点

## 核心内容

OpenAI Agents SDK 最容易被低估的一点是：它不是多封装一层模型调用。它把一个 Agent 产品里必然会遇到的运行时问题，拆成了 Agent、Runner、工具、handoff、guardrail、session、trace、sandbox、realtime 这些零件。

它不是完整 Agent 管理平台，但它很像一张运行时骨架图。平台会关心租户、权限、发布、灰度、知识库、计费、审计、评测、回放，Agents SDK 不替你做这些。但它回答了另一个更底层的问题：一个 Agent 跑起来时，哪些东西应该进入 runtime。

## 关键发现

### 七层运行时架构

**第一层：Agent 和 Runner**
- Agent：可运行角色定义（instructions、model、tools、handoffs、guardrails 等）
- Runner：托管 agent loop，调用模型、执行工具、处理 handoff、判断 final output

**第二层：工具和外部世界**
- OpenAI hosted tools（web search、file search、code interpreter 等）
- Function tools（本地函数包装）
- Local/runtime execution tools
- Agents as tools（把另一个 agent 当工具使用）
- MCP 是关键扩展点（支持 Streamable HTTP、SSE、stdio transports）

**第三层：多 Agent，不只有一种形态**
- Agents as tools：manager agent 保持控制权，把 specialist agent 当受限工具调用
- Handoffs：当前 active agent 切换，后续对话由另一个 agent 接管（类似客服转接）

**第四层：Guardrails 和人工审批**
- input guardrails、output guardrails、tool guardrails
- 支持并行和 blocking 模式
- Human-in-the-loop：敏感工具调用暂停等待人批准，是 run state 的一部分

**第五层：Session、结果、流式事件**
- Sessions：对话历史管理（支持 SQLite、Redis、SQLAlchemy、MongoDB、Dapr 等后端）
- RunResult.new_items：结构化产物（message、reasoning、tool call 等）
- 流式事件：stream_events() 输出结构化事件流

**第六层：Tracing、usage、eval**
- Tracing：默认启用，记录 runner、agent、LLM generation 等 span
- usage：聚合 requests、token 消耗等信息
- eval：先用 traces 调试，再把可复现问题放进 datasets 和 eval runs

**第七层：Sandbox 和 Realtime**
- Sandbox Agents（beta）：持久 workspace，harness 与 compute 分离
- Realtime Agents：低延迟语音和事件会话，基于 OpenAI Realtime API

### 功能地图

| 层级 | 核心组件 |
|------|----------|
| Runtime | Agent、Runner、run state、streaming、results、usage |
| Tools | function tools、hosted tools、MCP、tool search、agents as tools |
| Control | guardrails、HITL、approval、handoff、trace |
| Memory | sessions（对话历史）、sandbox memory（workspace 经验） |
| Work surfaces | sandbox agents（工作区）、realtime agents（低延迟会话） |
| Platform gap | 租户、权限、版本、发布、知识库、长期记忆、账单、审计、eval UI |

## 重要观点

> "Agents SDK 不是平台，但非常适合作为平台团队理解 agent runtime 的参照物。"

> "我们到底是在管理 prompt，还是在管理一个可运行、可观察、可暂停、可恢复、可评测的 Agent 系统？"

## 相关页面

- [[OpenAI-Agents-SDK]]
- [[Agent集成层]]
- [[Multi-Agent协作]]
- [[Tracing]]
