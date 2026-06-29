---
source_id: auto-2026-06-29-a2a-key-concepts
title: A2A Protocol Core Concepts and Components
url: https://a2a-protocol.org/latest/topics/key-concepts/
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# A2A Protocol Core Concepts

## 核心角色

| 角色 | 描述 |
|------|------|
| **User** | 最终用户（人类或自动化服务），发起请求或定义目标 |
| **A2A Client** | 代表用户的应用程序、服务或 AI Agent，发起 A2A 协议通信 |
| **A2A Server** | 暴露 HTTP 端点实现 A2A 协议的 AI Agent 或 Agent 系统，接收客户端请求、处理任务、返回结果 |

## 核心通信元素

| 元素 | 描述 | 关键目的 |
|------|------|----------|
| **Agent Card** | JSON 元数据文档，描述 Agent 的身份、能力、端点、技能和认证要求 | 使客户端能够发现 Agent 并了解如何安全有效地交互 |
| **Task** | 由 Agent 发起的有状态工作单元，具有唯一 ID 和定义的生命周期 | 促进长时间运行操作的跟踪，支持多轮交互和协作 |
| **Message** | 客户端与 Agent 之间的单轮通信，包含内容和角色（"user" 或 "agent"） | 传达指令、上下文、问题、答案或状态更新 |
| **Part** | Messages 和 Artifacts 中使用的基本内容容器，可包含：text、raw、url、data | 提供灵活性，使 Agent 能够在消息和 artifacts 中交换各种内容类型 |
| **Artifact** | Agent 在任务处理期间生成的 tangible 输出（如文档、图像、结构化数据） | 交付 Agent 工作的具体结果，确保结构化和可检索的输出 |

## 交互机制

### 1. Request/Response (Polling)
客户端发送请求，服务器响应。对于长时间运行的任务，客户端定期轮询服务器获取更新。

### 2. Streaming with Server-Sent Events (SSE)
客户端发起流以通过开放的 HTTP 连接从服务器接收实时、增量结果或状态更新。

### 3. Push Notifications
对于非常长时间运行的任务或断开连接的场景，服务器可以在发生重大任务更新时主动向客户端提供的 webhook 发送异步通知。

## Agent Card 结构

Agent Card 是 Agent 的数字名片，包含：
- **身份信息**：Agent 名称、版本、描述
- **服务端点**：URL
- **A2A 能力**：支持的功能
- **认证要求**：需要的凭证类型
- **技能列表**：Agent 能执行的操作

## Part 对象类型

```json
{
  "text": "string",           // 纯文本内容
  "raw": "bytes",             // 二进制文件数据（内联）
  "url": "string URI",       // 外部文件内容的 URI
  "data": structured JSON    // 机器可读的结构化数据
}
```

每个 Part 还可以包含：
- `mediaType`：MIME 类型（如 "text/plain"、"image/png"）
- `filename`：文件名
- `metadata`：键值对附加上下文

## 与 MCP 的关键区别

| 维度 | MCP | A2A |
|------|-----|-----|
| **定位** | Agent 到工具/数据源 | Agent 到 Agent |
| **架构** | 客户端-服务器 | 去中心化对等 |
| **状态** | 无状态（每次独立） | 有状态（Task 生命周期） |
| **发现机制** | tools/list | Agent Card |
| **类比** | "我亲自干活，工具辅助" | "我指挥你干活" |
