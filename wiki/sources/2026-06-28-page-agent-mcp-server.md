---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-page-agent-mcp-server.md
images: 0
image_paths: []
---

# Page Agent MCP Server (Beta) 文档

> Page Agent 提供 MCP Server 用于让本地 Agent 发送自然语言浏览器任务到 Page Agent Ext

## 基本信息

- **来源类型**：官方文档（文章）
- **原文位置**：raw/articles/2026-06-28-page-agent-mcp-server.md
- **消化日期**：2026-06-28

## 核心观点

1. **Hub 机制**：Hub 是 Page Agent Ext 与外部调用者之间的通信控制中心，协调多标签页任务

2. **快速开始流程**：安装 Chrome 扩展 → 添加 MCP server 到本地 Agent 客户端 → 启动客户端并批准 Hub 连接 → 让 Agent 执行浏览器任务

3. **MCP 配置示例**：通过 npx 启动 @page-agent/mcp，支持配置 LLM_BASE_URL、LLM_API_KEY、LLM_MODEL_NAME

4. **Beta 阶段限制**：当前功能不完整，API 可能随时更改，不适合生产环境使用

## 关键概念

- [[MCP]] — 外部 Agent 控制浏览器的协议标准
- [[page-agent]] — 提供 MCP Server 的页面内 Agent
- [[Hub]] — Page Agent Ext 与外部调用者之间的通信控制中心

## 与其他素材的关联

- 与 [[page-agent GitHub README]] 的关系：MCP Server 是 page-agent 的外部扩展能力
- 与 [[MCP 协议规范]] 的关系：page-agent MCP Server 是 MCP 协议的具体实现
- 与 [[page-agent 技术分析报告]] 的关系：分析报告提及 MCP 接入是 page-agent 的适用场景

## 原文精彩摘录

> Page Agent 提供 MCP Server 用于让本地 Agent 发送自然语言浏览器任务到 Page Agent Ext。

> Hub 是 Page Agent Ext 与外部调用者之间的通信控制中心：MCP server 启动时打开本地启动器页面，启动器请求扩展打开 Hub 标签页，Hub 从本地 agent 接收任务。

> 当前功能不完整，API 可能随时更改。正式发布前请勿在生产环境中使用。

## 相关页面

- [[MCP]]（实体页）
- [[page-agent]]（实体页）
- [[MCP 协议规范]]（素材摘要）
- [[浏览器控制]]（主题页）
