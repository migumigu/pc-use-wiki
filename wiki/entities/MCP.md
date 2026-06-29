---
tags: [MCP, protocol, Anthropic, standard]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP

> 一句话摘要：Model Context Protocol,AI应用连接数据源和工具的开放标准协议,类比"AI应用的USB-C接口"。

## 定义

<!-- confidence: EXTRACTED -->

MCP是Anthropic发布的开放标准协议,用于连接AI助手与数据源、业务工具和开发环境。其目标是帮助前沿模型产生更好、更相关的响应,替代碎片化集成。

**类比**：MCP类似USB-C接口——提供标准化连接方式。

## 核心架构

<!-- confidence: EXTRACTED -->

### 参与者
- **MCP Host**：AI应用(如Claude Desktop、VS Code)
- **MCP Client**：Host内维护连接的组件
- **MCP Server**：提供上下文和能力的程序

### 双层架构
1. **数据层**：JSON-RPC 2.0协议,定义消息结构和语义
2. **传输层**：通信机制(Stdio transport、Streamable HTTP transport)

### Server原语
- **Tools**：AI可调用的可执行函数
- **Resources**：提供上下文信息的数据源
- **Prompts**：可重用的交互模板

### Client原语
- **Sampling**：服务器向Host LLM请求补全
- **Elicitation**：向用户请求额外信息
- **Logging**：发送日志消息

## 多语言SDK支持

<!-- confidence: EXTRACTED -->

提供10种语言SDK：C#、Go、Java、Kotlin、PHP、Python、Ruby、Rust、Swift、TypeScript。

## 生态系统支持

<!-- confidence: EXTRACTED -->

### AI应用
- Claude Desktop
- ChatGPT
- VS Code(Copilot)
- Cursor
- MCPJam

### 开发工具公司
- Zed
- Replit
- Codeium
- Sourcegraph

### 早期采用者
- Block
- Apollo

## 预构建Servers

<!-- confidence: EXTRACTED -->

涵盖主流系统：
- Google Drive、Slack、GitHub、Git
- Postgres、Puppeteer
- Everything、Fetch、Filesystem、Memory

## 不同素材中的观点

### [[MCP 发布公告]](2024-11-25)
- 解决AI模型数据隔离问题
- Claude 3.5 Sonnet擅长快速构建MCP server
- Block称MCP为"连接AI与真实应用的桥梁"

### [[MCP 官方文档索引]]
- "AI应用的USB-C接口"类比
- 连接数据源、工具、工作流
- 广泛生态系统支持

### [[MCP 架构概览]]
- Client-server架构
- JSON-RPC 2.0基础
- 生命周期管理(初始化、能力协商、终止)
- Primitives是MCP最重要概念

### [[MCP 协议规范]]
- 状态连接、能力协商
- 安全原则(用户同意、数据隐私、工具安全)
- 受LSP启发

### [[MCP Python SDK]]
- FastMCP简化开发
- Resources类似GET endpoints
- Tools类似POST endpoints

### [[MCP TypeScript SDK]]
- v2 pre-alpha,Q3 2026发布
- Node.js/Bun/Deno支持
- Standard Schema(Zod/Valibot/ArkType)

### [[MCP Claude Desktop 集成指南]]
- Filesystem Server实现文件系统访问
- 所有操作需用户批准
- 配置文件路径(macOS/Windows)

## 应用场景

<!-- confidence: EXTRACTED -->

- Agent访问Google Calendar和Notion
- Claude Code根据Figma设计生成Web应用
- 企业聊天机器人连接多个数据库
- AI模型在Blender创建3D设计

## 安全原则

<!-- confidence: EXTRACTED -->

1. 用户同意和控制
2. 数据隐私保护
3. 工具安全(工具代表任意代码执行)
4. LLM Sampling控制

## 相关页面

- [[MCP Host]]
- [[MCP Client]]
- [[MCP Server]]
- [[JSON-RPC 2.0]]
- [[Agent集成层]]
- [[Claude Desktop]]