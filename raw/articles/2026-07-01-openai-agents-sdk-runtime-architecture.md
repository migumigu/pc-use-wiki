---
source_id: auto-20260701-oa03
title: OpenAI Agents SDK 到底有什么：不是平台，但像一张运行时骨架图
url: http://m.toutiao.com/group/7657008122011124258/
source_type: tech_blog
tier: 2
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: medium
---

# OpenAI Agents SDK 到底有什么：不是平台，但像一张运行时骨架图

## 核心定位

OpenAI Agents SDK 最容易被低估的一点是：它不是多封装一层模型调用。它把一个 Agent 产品里必然会遇到的运行时问题，拆成了 Agent、Runner、工具、handoff、guardrail、session、trace、sandbox、realtime 这些零件。

它不是完整 Agent 管理平台，但它很像一张运行时骨架图。平台会关心租户、权限、发布、灰度、知识库、计费、审计、评测、回放，Agents SDK 不替你做这些。但它回答了另一个更底层的问题：一个 Agent 跑起来时，哪些东西应该进入 runtime。

**官方定位**：用于构建 multi-agent workflows 的轻量框架。
- Python 版：v0.17.7（2026-06-24）
- JS/TS 版：v0.12.0（2026-06-24）

官方 Developers guide 边界描述：当应用自己拥有 orchestration、tool execution、approvals、state 时，适合使用 Agents SDK。如果你想自己写 loop，也可以直接用 Responses API。

## 七层架构解析

### 第一层：Agent 和 Runner

**Agent** 是一个可运行角色定义。它可以包含：
- instructions
- model
- tools
- MCP servers
- handoffs
- input/output guardrails
- output type
- hooks
- tool behavior

Agent 不是一个简单 prompt。一个能工作的 agent 至少要回答：用什么模型，能调用哪些工具，能把任务交给谁，输出结构是什么，哪些输入不能进来，哪些结果不能出去。

**Runner** 负责托管 agent loop。它会：
- 调用模型
- 执行工具
- 把工具结果写回上下文
- 处理 handoff
- 判断 final output
- 必要时继续下一轮

入口包括：`run()`、`run_sync()` 和 `run_streamed()`。

从平台视角看，Agent 是运行定义，Runner 是运行机制。

### 第二层：工具和外部世界

Agents SDK 的工具体系比"函数调用"更宽。官方文档把工具分成几类：

1. **OpenAI hosted tools**：web search、file search、code interpreter、hosted MCP、image generation、tool search
2. **Function tools**：把本地函数包装给模型调用
3. **Local/runtime execution tools**
4. **Agents as tools**：把另一个 agent 当成工具使用
5. **Experimental Codex tool**

**MCP 是关键扩展点**。SDK 支持 Hosted MCP，也支持本地 Streamable HTTP、SSE、stdio transports。它还支持：
- tool filter
- require approval
- 工具列表缓存
- server 名称前缀等控制点

这意味着 SDK 不是只让模型"会调用函数"，而是在处理一个更现实的问题：工具面会变大，工具权限要控制，工具调用可能要审批，工具 schema 也要适配模型。

### 第三层：多 Agent，不只有一种形态

官方文档里有两个特别实用的模式：

**第一种：agents as tools**
- 一个 manager agent 保持控制权
- 把 specialist agent 当成受限工具调用
- 比如主 agent 判断用户问题，再调用"退款规则 agent"或"技术诊断 agent"
- 语义："我请专家帮忙"

**第二种：handoffs**
- 当前 active agent 发生切换
- 后续对话由另一个 agent 接管
- 更像客服场景里的转接
- 语义："这段对话交给你"

Agents SDK 把它们分开，是一个很好的抽象信号。

### 第四层：Guardrails 和人工审批

SDK 支持：
- input guardrails
- output guardrails
- tool guardrails

input guardrails 可以并行跑，也可以 blocking。blocking 的价值在于：检查未通过前，不让模型或工具先产生副作用。

**Human-in-the-loop** 则把敏感工具调用暂停下来，等待人批准或拒绝。它不是一个 UI 小按钮，而是 run state 的一部分。运行可以被序列化，可以恢复，审批结果可以进入后续上下文。

### 第五层：Session、结果、流式事件

**Sessions** 管的是对话历史：
- run 前取历史并加到输入前
- run 后把新 item 存回去

支持的后端：
- SQLite
- Redis
- SQLAlchemy
- MongoDB
- Dapr
- OpenAI conversations
- compaction
- encrypted session

但这不是完整长期 memory 产品。长期 memory 还要处理用户身份、写入筛选、可编辑、可遗忘、跨 agent 权限和召回策略。SDK 提供的是运行时历史管理。

**结果层**也很关键：
- `RunResult.new_items` 保存 message、reasoning、tool call、tool output、approval、handoff 等结构化产物
- 流式模式下，`stream_events()` 给出 message output、tool called、tool output、handoff requested/occurred、MCP approval 等事件

一次 agent run 不应该只是一段日志文本。它应该是结构化事件流。

### 第六层：Tracing、usage、eval

**Tracing** 在 SDK 中默认启用。它记录：
- runner
- agent
- LLM generation
- function tool call
- guardrail
- handoff
- audio

等 span，并带有 workflow name、trace id、group id、metadata。

OpenAI 的 eval 文档建议：先用 traces 调试单次 agent 行为，再把可复现的问题放进 datasets 和 eval runs。

**usage 层**聚合：
- requests
- input tokens
- output tokens
- total tokens
- cached/reasoning token

第三方模型的 usage 是否完整，要看 provider 支持。

### 第七层：Sandbox 和 Realtime

**Sandbox Agents**（beta）给 agent 一个持久 workspace：
- 文件系统
- shell
- 安装包
- 挂载数据
- 开放端口
- snapshot
- 受控访问

官方把它拆成 harness 和 compute：
- **harness**：管 agent loop、model call、tool routing、handoff、approval、trace、run state
- **compute**：管文件、命令、包、挂载、端口、快照

**Realtime Agents** 走另一条路：低延迟语音和事件会话。
- 基于 OpenAI Realtime API
- 提供 server-side orchestration、tools、approvals、telephony integrations
- 支持 tools、output guardrails、handoffs
- 当前不支持 structured outputs

## 功能地图

**Runtime**：Agent、Runner、run state、streaming、results、usage

**Tools**：function tools、hosted tools、MCP、tool search、agents as tools

**Control**：guardrails、HITL、approval、handoff、trace

**Memory**：sessions 管对话历史，sandbox memory 管 workspace 经验文件

**Work surfaces**：sandbox agents 面向工作区，realtime agents 面向低延迟会话

**Platform gap**：租户、权限、版本、发布、知识库生命周期、长期 memory 产品、账单、审计、eval UI 仍在平台层

## 结论

OpenAI Agents SDK 值得看，不是因为它把 API 调用变简单，而是因为它把 agent runtime 的控制点摆出来了。

它不是完整 Agent 平台。它也有明显约束：
- 非 OpenAI provider 的能力不一定等价
- tool search、hosted tools、tracing、usage、realtime 等功能有模型和后端条件
- sandbox 仍是 beta

但如果你从平台角度读它，它已经给出一张很有价值的骨架图：Agent 产品的运行时至少要有定义层、循环层、工具层、控制层、事件层、可观测层，以及面向工作区和实时会话的扩展层。
