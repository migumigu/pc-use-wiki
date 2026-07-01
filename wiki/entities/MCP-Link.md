---
tags: [MCP, OpenAPI, API 转换, Go, 工具链]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-mcp-link-openapi-convert]
---

# MCP-Link

> OpenAPI 规范到 MCP Server 的自动化转换工具，解决存量 API 与 AI Agent 集成的核心痛点

## 核心信息

- **项目类型**：MCP Server 转换工具
- **开源协议**：未知
- **技术栈**：Go 语言、JSON-RPC over SSE
- **GitHub 组织**：automation-ai-labs
- **核心创新**：5 分钟内完成 API 到 MCP 的转换，零代码配置

## 核心功能

1. **OpenAPI 转换**：自动将 OpenAPI V3 规范转换为 MCP Server
2. **零代码配置**：仅需 YAML 文件完成集成
3. **多协议支持**：JSON-RPC over SSE + HTTP
4. **智能路由**：自动根据参数路由请求
5. **预设集成**：内置 Brave Search、DuckDuckGo、Notion、Slack、GitHub 等 10+ 服务的配置

## 架构特点

| 组件 | 功能 |
|------|------|
| MCP Router | 智能请求路由中心 |
| OpenAPI Parser | 规范解析引擎 |
| API Adapter | 协议转换桥梁 |
| 预设配置库 | 主流服务配置模板 |

## 适用场景

- 自动化测试环境中的 API 集成
- AI Agent 与第三方服务的快速集成
- 现有 RESTful API 的 MCP 化改造
- 多服务复合应用的快速构建

## 局限性

- 不支持 OAuth 认证流程
- 对资源型 API 交互支持有限
- 对复杂 MIME 类型处理能力有待增强
- 需要确保 OpenAPI 规范质量

## 生态定位

| 特性 | MCP-Link | Spring AI MCP | 手动开发 |
|------|----------|---------------|----------|
| 开发成本 | 零代码 | 低代码 | 高 |
| 转换速度 | 5 分钟 | 10 分钟 | 数天 |
| 标准化 | OpenAPI 规范 | Spring 框架 | 自定义 |

## 相关页面

- [[MCP]]
- [[MCP Server]]
- [[OpenAPI]]
- [[Spring AI MCP]]
