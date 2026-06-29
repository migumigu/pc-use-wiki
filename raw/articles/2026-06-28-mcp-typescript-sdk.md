---
source_id: auto-20260628-mcp07
tier: 1
control_object: agent_integration
tech_layer: agent_integration
confidence: high
url: https://github.com/modelcontextprotocol/typescript-sdk
title: MCP TypeScript SDK GitHub Repository
author: Anthropic
date_collected: 2026-06-28
tags: [MCP, Model-Context-Protocol, TypeScript, SDK, GitHub]
---

# MCP TypeScript SDK

**Important**: This is the `main` branch which contains v2 of the SDK (currently in development, pre-alpha).

We anticipate a stable v2 release in Q3 2026 along with the updated MCP spec. Until then, **v1.x remains the recommended version** for production use. v1.x will continue to receive bug fixes and security updates for at least 6 months after v2 ships to give people time to upgrade.

For v1 documentation, see the V1 API docs. For v2 API docs, see `/v2/`.

## Overview

The Model Context Protocol (MCP) allows applications to provide context for LLMs in a standardized way, separating the concerns of providing context from the actual LLM interaction.

This repository contains the TypeScript SDK implementation of the MCP specification. It runs on **Node.js**, **Bun**, and **Deno**, and ships:

- MCP **server** libraries (tools/resources/prompts, Streamable HTTP, stdio, auth helpers)
- MCP **client** libraries (transports, high-level helpers, OAuth helpers)
- Optional **middleware packages** for specific runtimes/frameworks (Express, Hono, Node.js HTTP)
- Runnable **examples** (under `examples/`)

## Packages

This monorepo publishes split packages:

- **`@modelcontextprotocol/server`**: build MCP servers
- **`@modelcontextprotocol/client`**: build MCP clients

Tool and prompt schemas use [Standard Schema](https://standardschema.dev/) — bring Zod v4, Valibot, ArkType, or any compatible library.

### Middleware packages (optional)

The SDK also publishes small "middleware" packages under `packages/middleware/` that help you **wire MCP into a specific runtime or web framework**.

They are intentionally thin adapters: they should not introduce new MCP functionality or business logic.

- **`@modelcontextprotocol/node`**: Node.js Streamable HTTP transport wrapper for `IncomingMessage` / `ServerResponse`
- **`@modelcontextprotocol/express`**: Express helpers (app defaults + Host header validation)
- **`@modelcontextprotocol/hono`**: Hono helpers (app defaults + JSON body parsing hook + Host header validation)

## Installation

### Server

```bash
npm install @modelcontextprotocol/server
# or
bun add @modelcontextprotocol/server
# or
deno add npm:@modelcontextprotocol/server
```

### Client

```bash
npm install @modelcontextprotocol/client
# or
bun add @modelcontextprotocol/client
# or
deno add npm:@modelcontextprotocol/client
```

### Optional middleware packages

```bash
# Node.js HTTP (IncomingMessage/ServerResponse) Streamable HTTP transport:
npm install @modelcontextprotocol/node

# Express integration:
npm install @modelcontextprotocol/express express

# Hono integration:
npm install @modelcontextprotocol/hono hono
```

## Getting Started

Here is what an MCP server looks like. This minimal example exposes a single `greet` tool over stdio:

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

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
}

main();
```

Ready to build something real? Follow the step-by-step quickstart tutorials:

- [Build a weather server](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/server-quickstart.md) — server quickstart
- [Build an LLM-powered chatbot](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/client-quickstart.md) — client quickstart

The complete code for each tutorial is in `examples/server-quickstart/` and `examples/client-quickstart/`. For more advanced runnable examples, see:

- `examples/server/README.md` — server examples index
- `examples/client/README.md` — client examples index

## Documentation

- [Server Guide](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/server.md) — building MCP servers: transports, tools, resources, prompts, server-initiated requests, and deployment
- [Client Guide](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/client.md) — building MCP clients: connecting, tools, resources, prompts, server-initiated requests, and error handling
- [FAQ](https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/faq.md) — frequently asked questions and troubleshooting
- [API docs](https://modelcontextprotocol.github.io/typescript-sdk/)
- [MCP documentation](https://modelcontextprotocol.io/docs)
- [MCP specification](https://modelcontextprotocol.io/specification/latest)

## v1 (legacy) documentation and fixes

If you are using the **v1** generation of the SDK, the **v1 API documentation** is available at `https://ts.sdk.modelcontextprotocol.io/`. The v1 source code and any v1-specific fixes live on the long-lived `v1.x` branch. V2 API docs are at `/v2/`.

## Contributing

Issues and pull requests are welcome on GitHub.

## License

This project is licensed under the Apache License 2.0 for new contributions, with existing code under MIT. See the LICENSE file for details.