---
source_id: auto-2026-06-29-mcp-roots-protocol
title: MCP Protocol - Roots (Client Concepts)
url: https://modelcontextprotocol.io/docs/learn/client-concepts
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# MCP Protocol - Roots

## Overview

Roots define filesystem boundaries for server operations, allowing clients to specify which directories servers should focus on.

## Root Structure

```json
{
  "uri": "file:///Users/agent/travel-planning",
  "name": "Travel Planning Workspace"
}
```

Roots are exclusively filesystem paths and always use the `file://` URI scheme.

## Key Design Principles

**Important**: Roots serve as a coordination mechanism between clients and servers, NOT a security boundary.

- Roots communicate intended boundaries ("SHOULD respect" vs "MUST enforce")
- Actual security must be enforced at OS level via file permissions and/or sandboxing
- Servers run code clients cannot control, so trust is required

## Roots vs Security

| Aspect | Roots | OS Security |
|--------|-------|------------|
| Purpose | Coordination/context scoping | Access control |
| Enforcement | Advisory (SHOULD) | Mandatory (MUST) |
| Scope | Filesystem boundaries | File permissions, sandboxing |
| Trust Required | Yes - servers must cooperate | No - enforced regardless |

## How Roots Work

1. **Client sends roots to server** during initialization
2. **Server requests roots** via `roots/list` if it supports roots protocol
3. **Server respects boundaries** when accessing files
4. **Dynamic updates** via `roots/list_changed` notification

## Use Cases

- **Context scoping**: Telling servers where to focus
- **Accident prevention**: Helping well-behaved servers stay in bounds
- **Workflow organization**: Managing project boundaries automatically

## Filesystem Server Integration

The [Filesystem MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) is the reference implementation of root-based directory access control.

### Access Control Flow

1. Server starts with command-line directories (if provided)
2. Client connects and sends `initialize` with capabilities
3. Server checks if client supports roots (`capabilities.roots`)
4. If supported: Server requests roots via `roots/list`, replaces allowed directories
5. If not supported: Server continues using command-line directories only

### Security Note

**Critical**: Even with roots, actual security must be enforced at the OS level:
- Docker sandboxing
- File permissions (chmod/chown)
- Mandatory access controls (SELinux, AppArmor)

## Example Configuration

### Claude Desktop (NPX)
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

### Claude Desktop (Docker)
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "--mount", "type=bind,src=/path,dst=/projects/path",
        "mcp/filesystem", "/projects"
      ]
    }
  }
}
```

## Roots Protocol Messages

### Client Capability Declaration
```json
{
  "capabilities": {
    "roots": {
      "listChanged": true
    }
  }
}
```

### Server Requests Roots
```json
{
  "method": "roots/list",
  "params": {}
}
```

### Client Responds with Roots
```json
{
  "roots": [
    {
      "uri": "file:///path/to/workspace",
      "name": "Workspace"
    }
  ]
}
```

### Runtime Update Notification
```json
{
  "method": "notifications/roots/list_changed"
}
```
