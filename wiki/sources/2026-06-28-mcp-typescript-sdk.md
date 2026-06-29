---
tags: [MCP, Model-Context-Protocol, TypeScript, SDK, GitHub]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP TypeScript SDK GitHub 仓库

> 一句话摘要：MCP 协议的 TypeScript 官方 SDK（v2 pre-alpha），运行于 Node.js、Bun、Deno，提供分包架构。

## 基本信息

- **来源**：GitHub (https://github.com/modelcontextprotocol/typescript-sdk)
- **作者**：Anthropic
- **素材类型**：官方 SDK 仓库
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **版本状态**：主分支为 v2（pre-alpha，开发中）；v1.x 为稳定版本，Q3 2026 发布 v2。

2. **运行环境**：Node.js、Bun、Deno 三平台支持。

3. **分包架构**：
   - `@modelcontextprotocol/server` — 构建 MCP servers
   - `@modelcontextprotocol/client` — 构建 MCP clients
   - Middleware packages：Node.js、Express、Hono 集成

4. **Standard Schema**：Tool 和 Prompt schema 使用 Standard Schema，支持 Zod v4、Valibot、ArkType。

## 关键概念

- [[MCP Server]] — TypeScript 实现的 MCP 服务端
- [[MCP Client]] — TypeScript 实现的 MCP 客户端
- [[Middleware Packages]] — 运行时/框架集成适配器
- [[Standard Schema]] — Schema 标准（Zod/Valibot/ArkType）

## Quickstart 示例

<!-- confidence: EXTRACTED -->

```typescript
import { McpServer } from '@modelcontextprotocol/server';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';

const server = new McpServer({ name: 'greeting-server', version: '1.0.0' });

server.registerTool(
    'greet',
    {
        description: 'Greet someone by name',
        inputSchema: z.object({ name: z.string() })
    },
    async ({ name }) => ({
        content: [{ type: 'text', text: `Hello, ${name}!` }]
    })
);

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Middleware Packages

<!-- confidence: EXTRACTED -->

- `@modelcontextprotocol/node` — Node.js Streamable HTTP transport wrapper
- `@modelcontextprotocol/express` — Express helpers（Host header validation）
- `@modelcontextprotocol/hono` — Hono helpers（JSON body parsing + Host header validation）

## 与其他素材的关联

- 与 [[MCP 架构概览]]、[[MCP 协议规范]] 形成完整文档
- 与 [[MCP Python SDK]] 对比不同语言实现
- 与 [[Agent集成层]] 主题直接相关

## 原文精彩摘录

> "This repository contains the TypeScript SDK implementation of the MCP specification. It runs on Node.js, Bun, and Deno."

## 相关页面

- [[MCP]]
- [[MCP Server]]
- [[MCP Client]]
- [[Standard Schema]]
- [[Agent集成层]]