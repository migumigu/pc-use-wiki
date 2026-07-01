---
tags: [MCP-Link, MCP, OpenAPI, API 转换]
created: 2026-07-01
updated: 2026-07-01
sources: [raw/articles/2026-07-01-mcp-link-openapi-convert.md]
---

# MCP-Link — OpenAPI 到 MCP Server 的自动化转换工具

> MCP-Link 解决了存量 API 与 AI Agent 集成的核心痛点，支持 5 分钟内完成 API 到 MCP 的转换

## 核心要点

1. **OpenAPI 自动转换**：将 OpenAPI V3 规范自动转换为 MCP Server，无需手动开发
2. **零代码配置**：仅需 YAML 文件完成集成，5 分钟部署
3. **智能路由**：自动根据 URL 参数和 Schema 类型路由请求
4. **多协议支持**：JSON-RPC over SSE + HTTP
5. **预设集成**：内置 Brave Search、DuckDuckGo、Notion、Slack、GitHub 等 10+ 服务的配置

## 技术架构

- **语言**：Go 语言
- **协议**：JSON-RPC 2.0 over SSE/HTTP
- **核心组件**：MCP Router、OpenAPI Parser、API Adapter

## 适用场景

- 自动化测试环境中的 API 集成
- AI Agent 与第三方服务的快速集成
- 现有 RESTful API 的 MCP 化改造

## 局限性

- 不支持 OAuth 认证流程
- 对资源型 API 交互支持有限
- 需要确保 OpenAPI 规范质量

## 相关页面

- [[MCP-Link]]
- [[MCP]]
- [[MCP Server]]
