---
tags: [MCP, Model-Context-Protocol, documentation, official]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP 官方文档索引

> 一句话摘要：MCP 官方文档门户，介绍 MCP 作为"AI应用的 USB-C 接口"，提供完整的开发指南和概念说明。

## 基本信息

- **来源**：MCP 官方文档 (https://modelcontextprotocol.io/)
- **作者**：Anthropic
- **素材类型**：官方文档首页
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **MCP 的类比定位**：将 MCP 比作 AI 应用的 USB-C 接口，提供标准化连接方式。（原文："Think of MCP like a USB-C port for AI applications"）

2. **MCP 能力范围**：连接数据源（本地文件、数据库）、工具（搜索引擎、计算器）和工作流（专业提示）。（原文："data sources, tools and workflows"）

3. **生态系统支持**：Claude、ChatGPT、VS Code、Cursor、MCPJam 等广泛支持 MCP。（原文："supported across a wide range of clients"）

4. **三大建设方向**：
   - Build servers：创建 MCP servers 暴露数据和工具
   - Build clients：开发连接 MCP servers 的应用
   - Build MCP Apps：构建在 AI clients 内运行的交互式应用

## 关键概念

- [[MCP]] — Model Context Protocol，AI应用标准化连接协议
- [[USB-C类比]] — MCP 类似 USB-C，提供标准化连接接口
- [[MCP Server]] — 暴露数据和工具的服务端
- [[MCP Client]] — 连接 MCP servers 的 AI 应用
- [[MCP App]] — 在 AI clients 内运行的交互式应用

## 应用场景示例

<!-- confidence: EXTRACTED -->

- Agent 访问 Google Calendar 和 Notion，充当个性化 AI assistant
- Claude Code 根据 Figma 设计生成完整 Web 应用
- 企业聊天机器人连接多个数据库，支持聊天式数据分析
- AI 模型在 Blender 创建 3D 设计并用 3D 打印机打印

## MCP 的价值

<!-- confidence: EXTRACTED -->

- **开发者**：减少构建/集成 AI 应用或 agent 的复杂度
- **AI 应用/Agent**：获得数据源、工具和应用生态的访问能力
- **终端用户**：获得能访问数据并执行操作的更强大 AI 应用

## 与其他素材的关联

- 本素材是 MCP 官方文档体系的入口
- 与 [[MCP 发布公告]] 形成完整的官方介绍
- 与 [[MCP 架构概览]]、[[MCP 协议规范]] 构成技术文档
- 与 [[Agent集成层]] 主题直接相关

## 原文精彩摘录

> "Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect electronic devices, MCP provides a standardized way to connect AI applications to external systems."

## 相关页面

- [[MCP]]
- [[Agent集成层]]
- [[MCP Server]]
- [[MCP Client]]