---
source_id: auto-2026-07-01-mcp-link
title: MCP-Link - OpenAPI 转换 MCP 服务器终极指南
url: https://blog.csdn.net/gitblog_01172/article/details/155436680
source_type: tech_blog
tier: 2
control_object: system_service
tech_layer: agent_integration
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# MCP-Link：OpenAPI 转换 MCP 服务器

## 项目概述

MCP-Link 是一个创新的开源项目，专门用于将 OpenAPI 规范无缝转换为 MCP（Model Context Protocol）服务器。它解决了 AI Agent 与外部 API 集成的核心痛点，让开发者无需编写复杂的集成代码就能实现跨系统协作。

**项目地址**: https://gitcode.com/gh_mirrors/mc/mcp-link

## 核心优势

### 5 大核心优势

1. **极速部署** - 5 分钟内完成 API 到 MCP 的转换
2. **零代码配置** - 仅需 YAML 文件即可完成集成
3. **多协议支持** - 同时兼容 JSON-RPC over SSE 和 HTTP 协议
4. **智能路由** - 自动根据 URL 参数和 Schema 类型路由请求
5. **标准化接口** - 基于 OpenAPI 规范，确保接口一致性

## 架构设计

### 核心组件

- **MCP Router** - 智能请求路由中心
- **OpenAPI Parser** - 规范解析引擎
- **API Adapter** - 协议转换桥梁

### 工作流程

1. AI Agent 发起请求
2. MCP Router 智能分发
3. OpenAPI Parser 解析规范
4. API Adapter 完成外部 API 调用

## 技术实现

- **开发语言**: Go 语言
- **核心文件**:
  - `utils/adapter.go` - API 适配器，负责协议转换
  - `utils/parser.go` - 解析器，确保 OpenAPI 规范的正确解析
  - `utils/multiserver_sse.go` - 处理多个服务器的并发请求

## 快速上手

### 安装

```bash
git clone https://github.com/automation-ai-labs/mcp-link.git
cd mcp-openapi-to-mcp-adapter
go mod download
```

### 运行

```bash
go run main.go serve --port 8080 --host 0.0.0.0
```

### 参数说明

| 参数 | 说明 |
|------|------|
| `s` | OpenAPI 规范文件的 URL |
| `u` | 目标 API 的基础 URL |
| `h` | 认证头格式，如 `header-name:value-prefix` |
| `f` | 路径过滤表达式，用于包含或排除 API 端点 |

## 预设集成示例

MCP-Link 提供了丰富的预设配置：

| 服务 | URL | 认证方式 |
|------|-----|----------|
| Brave Search | https://mcp-link.vercel.app/links/brave | API Key |
| DuckDuckGo | https://mcp-link.vercel.app/links/duckduckgo | None |
| Figma | https://mcp-link.vercel.app/links/figma | API Token |
| GitHub | https://mcp-link.vercel.app/links/github | Bearer Token |
| Home Assistant | https://mcp-link.vercel.app/links/homeassistant | Bearer Token |
| Notion | https://mcp-link.vercel.app/links/notion | Bearer Token |
| Slack | https://mcp-link.vercel.app/links/slack | Bearer Token |
| Stripe | https://mcp-link.vercel.app/links/stripe | Bearer Token |
| TMDB | https://mcp-link.vercel.app/links/tmdb | Bearer Token |
| YouTube | https://mcp-link.vercel.app/links/youtube | Bearer Token |

## 在 AI Agent 中的使用

```json
{
  "mcpServers": {
    "@service-name": {
      "url": "http://localhost:8080/sse?s=[OpenAPI-Spec-URL]&u=[API-Base-URL]&h=[Auth-Header]:[Value-Prefix]"
    }
  }
}
```

## 应用场景

### 自动化测试

通过将现有 API 转换为 MCP 服务器，开发者可以轻松地在自动化测试环境中使用这些 API。

### 智能代理集成

AI Agent 可以方便地通过 MCP 协议与转换后的 API 进行交互，从而实现更智能的决策支持和流程自动化。

### 第三方服务集成

对于需要连接多个服务以构建复合应用的场景，MCP-Link 可以极大地简化集成过程。

## 项目特点

1. **自动转换**：基于 OpenAPI Schema 自动生成 MCP 服务器，无需手动干预
2. **无缝集成**：现有 RESTful API 可以立即与 AI Agent 调用标准兼容
3. **功能完整**：确保所有 API 端点和特性正确映射
4. **零代码修改**：无需修改原始 API 实现即可获得 MCP 兼容性
5. **开放标准**：遵循 MCP 规范，确保与各种 AI Agent 框架的兼容性

## 未来发展

- 实现 MCP 协议的 OAuth 认证流程支持
- 添加处理资源型 API 交互的能力
- 增强对各种 MIME 类型的支持

## 在线体验

可在 https://mcp-link.vercel.app/ 上尝试 mcp-link 的在线版本，快速转换和测试 API。
