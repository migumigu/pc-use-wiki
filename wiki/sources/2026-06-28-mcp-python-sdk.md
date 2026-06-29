---
tags: [MCP, Model-Context-Protocol, Python, SDK, GitHub]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP Python SDK GitHub 仓库

> 一句话摘要：MCP 协议的 Python 官方 SDK，支持构建 MCP clients、创建 MCP servers，提供 FastMCP 简化开发。

## 基本信息

- **来源**：GitHub (https://github.com/modelcontextprotocol/python-sdk)
- **作者**：Anthropic
- **素材类型**：官方 SDK 仓库
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **SDK 能力**：
   - 构建 MCP clients 连接任何 MCP server
   - 创建 MCP servers 暴露 resources、prompts、tools
   - 使用标准传输（stdio、SSE、Streamable HTTP）
   - 处理所有 MCP 协议消息和生命周期事件

2. **FastMCP 简化开发**：提供装饰器语法快速创建 tools、resources、prompts。

3. **推荐工具**：使用 uv 管理 Python 项目，pip 作为备选方案。

## 关键概念

- [[FastMCP]] — Python SDK 的简化开发接口
- [[MCP Server]] — Python 实现的 MCP 服务端
- [[MCP Client]] — Python 实现的 MCP 客户端
- [[uv]] — Astral 开发的 Python 项目管理工具

## Quickstart 示例

<!-- confidence: EXTRACTED -->

```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Demo", json_response=True)

@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b

@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
    """Get a personalized greeting"""
    return f"Hello, {name}!"

@mcp.prompt()
def greet_user(name: str, style: str = "friendly") -> str:
    """Generate a greeting prompt"""
    return f"Please write a {style} greeting for {name}."

if __name__ == "__main__":
    mcp.run(transport="streamable-http")
```

## 核心概念详解

<!-- confidence: EXTRACTED -->

### Resources
类似 REST API 的 GET endpoints，提供数据但不执行计算或有副作用。

### Tools
类似 POST endpoints，执行计算和产生副作用。

### Prompts
可重用的 LLM 交互模板。

## 与其他素材的关联

- 与 [[MCP 架构概览]]、[[MCP 协议规范]] 形成完整文档
- 与 [[MCP TypeScript SDK]] 对比不同语言实现
- 与 [[Agent集成层]] 主题直接相关

## 原文精彩摘录

> "Think of it like a web API, but specifically designed for LLM interactions."

## 相关页面

- [[MCP]]
- [[FastMCP]]
- [[MCP Server]]
- [[MCP Client]]
- [[Agent集成层]]