---
tags: [mcp, protocol, security, directory]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-mcp-roots-protocol.md]
---

# MCP Protocol - Roots

> MCP 协议中定义的文件系统边界协调机制，让客户端向服务器传达操作范围。

## 核心概念

**Roots 定义**：
- 文件系统边界的 URI 列表
- 通知服务器可在哪些目录操作
- 帮助服务器理解项目边界和工作空间组织

**重要**：Roots 是协调机制，不是安全边界。

## Root 结构

```json
{
  "uri": "file:///path/to/workspace",
  "name": "Workspace Name"
}
```

## 核心原则

**Roots vs 安全**：

| 方面 | Roots | OS 安全 |
|------|-------|---------|
| 目的 | 协调/上下文范围 | 访问控制 |
| 执行 | 建议性（SHOULD） | 强制性（MUST） |
| 范围 | 文件系统边界 | 文件权限、沙箱 |
| 信任 | 需要 - 服务器需配合 | 不需要 - 强制执行 |

## 工作流程

1. 客户端在初始化时发送 roots
2. 服务器通过 `roots/list` 请求 roots
3. 服务器在访问文件时尊重边界
4. 通过 `roots/list_changed` 动态更新

## 安全设计

**分层安全**：
- Layer 4：应用层（用户确认）
- Layer 3：协议层（Roots 协调）
- Layer 2：实现层（目录白名单）
- Layer 1：系统层（Docker/Permissions）

**必须配合 OS 级安全**：
- Docker 沙箱隔离
- 文件权限（chmod/chown）
- 强制访问控制（SELinux/AppArmor）

## 协议消息

**客户端能力声明**：
```json
{
  "capabilities": {
    "roots": {
      "listChanged": true
    }
  }
}
```

**服务器请求**：
```json
{
  "method": "roots/list"
}
```

**运行时更新**：
```json
{
  "method": "notifications/roots/list_changed"
}
```

## 相关页面

- [[MCP]]
- [[Filesystem-MCP]]
- [[文件系统控制]]
