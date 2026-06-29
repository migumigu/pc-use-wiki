---
source_id: auto-2026-06-29-mcp-tools-spec
title: MCP Protocol Specification - Tools
url: https://modelcontextprotocol.io/specification/2025-06-18/server/tools
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# MCP Tools Protocol Specification

## Overview

The Model Context Protocol (MCP) allows servers to expose tools that can be invoked by language models. Tools enable models to interact with external systems.

## User Interaction Model

Tools in MCP are designed to be **model-controlled**, meaning the language model can discover and invoke tools automatically. However, for trust & safety:

- There **SHOULD** always be a human in the loop with ability to deny tool invocations
- Applications **SHOULD** provide UI that makes clear which tools are being exposed
- Confirmation prompts **SHOULD** be presented for sensitive operations

## Tool Definition Schema

Each tool includes:
- `name`: Unique identifier
- `title`: Optional human-readable name
- `description`: Human-readable description
- `inputSchema`: JSON Schema defining parameters
- `outputSchema`: Optional JSON Schema for expected output
- `annotations`: Optional properties describing tool behavior

## Tool Annotations

Clients **MUST** consider tool annotations to be untrusted unless they come from trusted servers.

| Annotation | Purpose |
|------------|---------|
| `readOnlyHint` | Distinguishes read-only from write-capable tools |
| `idempotentHint` | Indicates if retry with same args is safe |
| `destructiveHint` | Indicates if operation is destructive |

## Protocol Messages

### Listing Tools
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}
```

### Calling Tools
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_weather",
    "arguments": { "location": "New York" }
  }
}
```

### Response
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "content": [
      { "type": "text", "text": "Weather data..." }
    ],
    "isError": false
  }
}
```

## Error Handling

1. **Protocol Errors**: JSON-RPC errors for unknown tools, invalid arguments
2. **Tool Execution Errors**: Reported with `isError: true` in tool results

## Security Considerations

**Servers MUST:**
- Validate all tool inputs
- Implement proper access controls
- Rate limit tool invocations
- Sanitize tool outputs

**Clients SHOULD:**
- Prompt for user confirmation on sensitive operations
- Show tool inputs before calling server
- Validate tool results before passing to LLM
- Implement timeouts for tool calls
- Log tool usage for audit

## Message Flow

1. Client sends `tools/list` to discover tools
2. LLM selects tool based on user request
3. Client sends `tools/call` with tool name and arguments
4. Server executes tool and returns result
5. LLM processes result and generates response
