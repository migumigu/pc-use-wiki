---
source_id: auto-2026-06-29-filesystem-mcp-github
title: Filesystem MCP Server (modelcontextprotocol/servers)
url: https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem
source_type: github_readme
tier: 1
control_object: file_system
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Filesystem MCP Server

Node.js server implementing Model Context Protocol (MCP) for filesystem operations.

## Features

- Read/write files
- Create/list/delete directories
- Move files/directories
- Search files
- Get file metadata
- Dynamic directory access control via Roots

## Directory Access Control

The server uses a flexible directory access system. Directories can be specified via command-line arguments or dynamically via MCP Roots.

### Method 1: Command-line Arguments

Specify Allowed directories when starting the server:

```
mcp-server-filesystem /path/to/dir1 /path/to/dir2
```

### Method 2: MCP Roots (Recommended)

MCP clients that support Roots can dynamically update the Allowed directories. Roots notified by Client to Server completely replace server-side Allowed directories when provided.

**Important**: If server starts without command-line arguments AND client doesn't support roots protocol (or provides empty roots), the server will throw an error during initialization.

## API Tools

### Read Operations (readOnlyHint: true)
- **read_text_file**: Read complete contents of a file as text (UTF-8)
- **read_media_file**: Read image or audio file (base64 + MIME type)
- **read_multiple_files**: Read multiple files simultaneously
- **list_directory**: List directory contents with [FILE]/[DIR] prefixes
- **list_directory_with_sizes**: List with file sizes and statistics
- **directory_tree**: Get recursive JSON tree structure
- **search_files**: Recursively search for files matching patterns
- **get_file_info**: Get detailed metadata (size, times, permissions)
- **list_allowed_directories**: List all accessible directories

### Write Operations (readOnlyHint: false)
- **write_file**: Create new file or overwrite existing
- **edit_file**: Selective edits with pattern matching, dry run mode, Git-style diff
- **create_directory**: Create directory or ensure it exists
- **move_file**: Move or rename files/directories

### Tool Annotations (MCP hints)

| Tool | readOnlyHint | idempotentHint | destructiveHint |
|------|-------------|----------------|-----------------|
| read_text_file | true | - | - |
| read_media_file | true | - | - |
| read_multiple_files | true | - | - |
| list_directory | true | - | - |
| create_directory | false | true | false |
| write_file | false | true | true |
| edit_file | false | false | true |
| move_file | false | false | true |

## Usage with Claude Desktop

### Docker
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "--mount", "type=bind,src=/Users/username/Desktop,dst=/projects/Desktop",
        "mcp/filesystem", "/projects"
      ]
    }
  }
}
```

### NPX
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

## Build

Docker build:
```
docker build -t mcp/filesystem -f src/filesystem/Dockerfile .
```

## License

MIT License
