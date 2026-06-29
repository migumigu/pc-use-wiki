---
tags: [filesystem, mcp, tool, official]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-filesystem-mcp-server-github.md]
---

# Filesystem MCP Server GitHub README

> Anthropic 官方维护的 MCP 参考实现，为 AI Agent 提供安全、受控的文件系统操作能力。

## 核心功能

**文件系统操作**：
- 读文件（read_text_file、read_media_file、read_multiple_files）
- 写文件（write_file、edit_file）
- 目录操作（create_directory、list_directory、directory_tree）
- 文件操作（move_file、search_files、get_file_info）

**访问控制**：
- 目录白名单机制
- MCP Roots 协议动态更新
- Docker 沙箱隔离

## 工具注解

| 工具 | readOnly | idempotent | destructive |
|------|----------|------------|-------------|
| read_text_file | true | - | - |
| write_file | false | true | true |
| edit_file | false | false | true |
| create_directory | false | true | false |
| move_file | false | false | true |

## 安全机制

- **目录验证**：所有操作前检查白名单
- **Roots 协议**：动态更新允许目录
- **Tool Annotations**：提供 readOnlyHint、idempotentHint、destructiveHint

## 部署方式

**Docker（推荐）**：
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "--mount", "type=bind,src=/path,dst=/projects/path", "mcp/filesystem", "/projects"]
    }
  }
}
```

**NPX**：
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

## 相关页面

- [[Filesystem-MCP]]
- [[MCP]]
- [[文件系统控制]]
