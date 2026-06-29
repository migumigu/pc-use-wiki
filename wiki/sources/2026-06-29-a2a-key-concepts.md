---
tags: [A2A, Concepts, Protocol, source]
created: 2026-06-29
updated: 2026-06-29
sources: []
---

# A2A Protocol Core Concepts and Components

> 官方核心概念文档，详细定义 A2A 的核心组件和交互机制

## 素材摘要

本文档定义了 A2A Protocol 的核心概念，包括核心角色、交互机制和关键组件。

## 核心角色

| 角色 | 描述 |
|------|------|
| **User** | 最终用户（人类或自动化服务），发起请求或定义目标 |
| **A2A Client** | 代表用户的应用程序、服务或 AI Agent，发起 A2A 协议通信 |
| **A2A Server** | 暴露 HTTP 端点实现 A2A 协议的 AI Agent 或 Agent 系统 |

## 核心通信元素

| 元素 | 描述 | 关键目的 |
|------|------|----------|
| **Agent Card** | JSON 元数据文档，描述 Agent 的身份、能力、端点、技能和认证要求 | 使客户端能够发现 Agent 并了解如何安全有效地交互 |
| **Task** | 由 Agent 发起的有状态工作单元，具有唯一 ID 和定义的生命周期 | 促进长时间运行操作的跟踪，支持多轮交互和协作 |
| **Message** | 客户端与 Agent 之间的单轮通信，包含内容和角色 | 传达指令、上下文、问题、答案或状态更新 |
| **Part** | Messages 和 Artifacts 中使用的基本内容容器 | 提供灵活性，使 Agent 能够在消息和 artifacts 中交换各种内容类型 |
| **Artifact** | Agent 在任务处理期间生成的 tangible 输出 | 交付 Agent 工作的具体结果，确保结构化和可检索的输出 |

## 交互机制

### 1. Request/Response (Polling)
客户端发送请求，服务器响应。对于长时间运行的任务，客户端定期轮询服务器获取更新。

### 2. Streaming with Server-Sent Events (SSE)
客户端发起流以通过开放的 HTTP 连接从服务器接收实时、增量结果或状态更新。

### 3. Push Notifications
对于非常长时间运行的任务，服务器可以主动向客户端提供的 webhook 发送异步通知。

## Part 对象类型

```json
{
  "text": "string",           // 纯文本内容
  "raw": "bytes",             // 二进制文件数据（内联）
  "url": "string URI",        // 外部文件内容的 URI
  "data": structured JSON     // 机器可读的结构化数据
}
```

## 与 MCP 的关键区别

| 维度 | MCP | A2A |
|------|-----|-----|
| **定位** | Agent 到工具/数据源 | Agent 到 Agent |
| **架构** | 客户端-服务器 | 去中心化对等 |
| **状态** | 无状态（每次独立） | 有状态（Task 生命周期） |
| **发现机制** | tools/list | Agent Card |
| **类比** | "我亲自干活，工具辅助" | "我指挥你干活" |

## 相关页面

- [[A2A]] — A2A Protocol 实体页
