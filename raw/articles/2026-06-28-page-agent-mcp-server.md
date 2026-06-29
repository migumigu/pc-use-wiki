---
source_id: auto-2026-06-28-page-agent-mcp-server
title: Page Agent MCP Server Documentation
url: https://alibaba.github.io/page-agent/docs/features/mcp-server
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Page Agent MCP Server (Beta) 文档

## 概述

Page Agent 提供 MCP Server 用于让本地 Agent 发送自然语言浏览器任务到 Page Agent Ext。

## 快速开始

1. 在 Chrome 中安装 Page Agent Ext
2. 添加 MCP server 到本地 agent 客户端
3. 启动客户端并在浏览器中批准 Hub 连接
4. 让 agent 在浏览器中执行任务

## MCP 配置示例

```json
{
  "mcpServers": {
    "page-agent": {
      "command": "npx",
      "args": ["-y", "@page-agent/mcp"],
      "env": {
        "LLM_BASE_URL": "https://api.openai.com/v1",
        "LLM_API_KEY": "sk-xxx",
        "LLM_MODEL_NAME": "gpt-5.2"
      }
    }
  }
}
```

## Hub 机制

Hub 是 Page Agent Ext 与外部调用者之间的通信控制中心：
1. MCP server 启动时打开本地启动器页面
2. 启动器请求扩展打开 Hub 标签页
3. Hub 从本地 agent 接收任务

## Beta 阶段说明

当前功能不完整，API 可能随时更改。正式发布前请勿在生产环境中使用。
