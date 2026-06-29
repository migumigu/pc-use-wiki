---
tags: [mcp, protocol, tool, official]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-mcp-tools-protocol-spec.md]
---

# MCP Protocol Specification - Tools

> MCP 协议规范中定义的工具交互机制，为 AI Agent 与外部工具的标准化集成提供协议基础。

## 核心概念

**Tools in MCP**：
- 服务器暴露给语言模型的工具
- 模型可自动发现和调用工具
- 基于 JSON-RPC 2.0 通信

## 协议消息

**工具发现**：`tools/list`
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list"
}
```

**工具调用**：`tools/call`
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "tool_name",
    "arguments": {}
  }
}
```

## 工具定义

每个工具包含：
- `name`：唯一标识符
- `title`：可选人类可读名称
- `description`：功能描述
- `inputSchema`：参数 JSON Schema
- `outputSchema`：输出结构（可选）
- `annotations`：工具行为标注

## Tool Annotations

| 标注 | 用途 |
|------|------|
| `readOnlyHint` | 标识只读工具 |
| `idempotentHint` | 标识幂等操作 |
| `destructiveHint` | 标识破坏性操作 |

## 安全要求

**Servers MUST**：
- 验证所有工具输入
- 实现访问控制
- 限流工具调用
- 清理工具输出

**Clients SHOULD**：
- 敏感操作用户确认
- 调用前显示工具输入
- 传递给 LLM 前验证结果
- 实现超时和审计

## Human-in-the-loop

- 工具调用可视化
- 敏感操作确认提示
- 用户可拒绝/修改操作

## 相关页面

- [[MCP]]
- [[Filesystem-MCP]]
- [[Tool-Calling]]
