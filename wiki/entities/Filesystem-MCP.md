---
tags: [filesystem, mcp, tool, official]
created: 2026-06-29
updated: 2026-06-29
sources: [wiki/sources/2026-06-29-filesystem-mcp-server-github.md, wiki/sources/2026-06-29-mcp-roots-protocol.md, wiki/sources/2026-06-29-filesystem-mcp-analysis.md]
---

# Filesystem MCP

> Anthropic 官方维护的 MCP 参考实现，为 AI Agent 提供安全、受控的文件系统操作能力。

## 概述

Filesystem MCP Server 是 Model Context Protocol 的官方参考服务器之一，提供文件系统操作工具给 AI Agent 使用。通过目录白名单和 MCP Roots 协议实现安全的文件系统访问控制。

## 核心功能

### 文件读取
- `read_text_file`：读取文本文件（支持 head/tail 参数）
- `read_media_file`：读取图片/音频（base64 编码）
- `read_multiple_files`：批量读取多个文件

### 文件写入
- `write_file`：创建或覆盖文件
- `edit_file`：选择性编辑（支持 dry run、Git-style diff）

### 目录操作
- `create_directory`：创建目录（幂等）
- `list_directory`：列出目录内容
- `directory_tree`：递归目录树

### 文件操作
- `move_file`：移动或重命名
- `search_files`：glob 模式搜索
- `get_file_info`：获取元数据（大小、时间、权限）

### 访问控制
- `list_allowed_directories`：列出允许目录

## 安全机制

### 目录白名单

所有文件系统操作都被限制在白名单目录内：
- 启动时通过命令行参数指定
- 或通过 MCP Roots 协议动态更新

### 分层安全模型

```
Layer 4: 应用层 - 用户确认
Layer 3: 协议层 - Roots 协调
Layer 2: 实现层 - 目录白名单
Layer 1: 系统层 - Docker/权限
```

### Tool Annotations

| 工具 | readOnlyHint | idempotentHint | destructiveHint |
|------|-------------|----------------|-----------------|
| read_text_file | true | - | - |
| write_file | false | true | true |
| edit_file | false | false | true |
| create_directory | false | true | false |
| move_file | false | false | true |

## 局限性

1. **Roots 非强制**：恶意服务器可忽略 Roots 边界
2. **OS 级安全依赖**：必须配合 Docker 或文件权限
3. **无文件锁定**：并发写入存在风险

## 相关页面

- [[MCP]] — 父协议
- [[Tool-Calling]] — 相关技术
- [[文件系统控制]] — 所属领域
