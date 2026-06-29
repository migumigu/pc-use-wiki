---
tags: [MCP, Model-Context-Protocol, architecture, protocol-design]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP 架构概览

> 一句话摘要：MCP 官方架构文档，详述协议的参与者、双层架构（数据层+传输层）、核心原语（Tools/Resources/Prompts）和生命周期管理。

## 基本信息

- **来源**：MCP 官方文档 (https://modelcontextprotocol.io/docs/learn/architecture)
- **作者**：Anthropic
- **素材类型**：官方架构文档
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **架构参与者**：
   - MCP Host：AI 应用（如 Claude Desktop、VS Code）
   - MCP Client：Host 内维护连接的组件
   - MCP Server：提供上下文的程序

2. **双层架构设计**：
   - **数据层**：JSON-RPC 2.0 协议，定义消息结构和语义
   - **传输层**：通信机制和通道（Stdio transport、Streamable HTTP transport）

3. **Server 三大原语**：
   - **Tools**：AI 可调用的可执行函数
   - **Resources**：提供上下文信息的数据源
   - **Prompts**：可重用的交互模板

4. **Client 三大原语**：
   - **Sampling**：服务器向 Host LLM 请求补全
   - **Elicitation**：向用户请求额外信息
   - **Logging**：发送日志消息用于调试

## 关键概念

- [[MCP Host]] — 协调和管理多个 MCP clients 的 AI 应用
- [[MCP Client]] — 维护与 MCP server 连接的组件
- [[MCP Server]] — 向 MCP clients 提供上下文的程序
- [[Data Layer]] — JSON-RPC 2.0 协议层
- [[Transport Layer]] — 通信传输层
- [[JSON-RPC 2.0]] — MCP 使用的 RPC 协议基础

## 数据层详解

<!-- confidence: EXTRACTED -->

### Lifecycle Management
- 连接初始化
- 能力协商（capability negotiation）
- 连接终止

### Server Primitives

| 原语 | 方法 | 说明 |
|------|------|------|
| Tools | `tools/list`, `tools/call` | 可执行函数 |
| Resources | `resources/list`, `resources/read` | 数据源 |
| Prompts | `prompts/list`, `prompts/get` | 交互模板 |

### Client Primitives

| 原语 | 方法 | 说明 |
|------|------|------|
| Sampling | `sampling/createMessage` | LLM 补全请求 |
| Elicitation | `elicitation/create` | 用户信息请求 |
| Logging | — | 调试日志 |

## 传输层详解

<!-- confidence: EXTRACTED -->

### Stdio Transport
- 用标准输入/输出流进行进程间通信
- 本地进程，无网络开销，性能最优
- 单 MCP client 服务

### Streamable HTTP Transport
- HTTP POST 用于 client-to-server 消息
- Server-Sent Events 用于流式能力
- 支持远程服务器通信
- 支持 Bearer tokens、API keys、OAuth 认证

## 初始化序列示例

<!-- confidence: EXTRACTED -->

```json
{
  "jsonrpc": "2.0",
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": { "elicitation": {} },
    "clientInfo": { "name": "example-client", "version": "1.0.0" }
  }
}
```

## Tool Discovery 示例

<!-- confidence: EXTRACTED -->

```json
{
  "jsonrpc": "2.0",
  "method": "tools/list"
}
```

返回包含 `name`、`title`、`description`、`inputSchema`（JSON Schema）的完整工具元数据。

## 与其他素材的关联

- 与 [[MCP 协议规范]] 形成完整的协议定义
- 与 [[MCP Python SDK]]、[[MCP TypeScript SDK]] 对应具体实现
- 与 [[Agent集成层]] 主题核心内容

## 原文精彩摘录

> "MCP follows a client-server architecture where an MCP host establishes connections to one or more MCP servers."

> "MCP primitives are the most important concept within MCP. They define what clients and servers can offer each other."

## 相关页面

- [[MCP]]
- [[MCP Host]]
- [[MCP Client]]
- [[MCP Server]]
- [[JSON-RPC 2.0]]
- [[Agent集成层]]