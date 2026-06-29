---
tags: [MCP, Model-Context-Protocol, specification, protocol, JSON-RPC]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# MCP 协议规范

> 一句话摘要：MCP 协议的权威规范文档，定义 JSON-RPC 2.0 消息格式、状态连接、能力协商及安全原则。

## 基本信息

- **来源**：MCP 官方文档 (https://modelcontextprotocol.io/specification/)
- **作者**：Anthropic
- **素材类型**：协议规范文档
- **控制对象**：Agent集成层
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **协议基础**：基于 JSON-RPC 消息格式、有状态连接、Server 和 Client 能力协商。

2. **Server Features**：
   - Resources：上下文和数据（用户或 AI 模型使用）
   - Prompts：模板化消息和工作流
   - Tools：AI 模型可执行的函数

3. **Client Features**：
   - Sampling：服务器发起的 agentic 行为和递归 LLM 交互
   - Roots：服务器发起的 URI 或文件系统边界查询
   - Elicitation：服务器发起的用户信息请求

4. **安全原则**：
   - 用户同意和控制
   - 数据隐私保护
   - 工具安全（工具代表任意代码执行）
   - LLM Sampling 控制

## 关键概念

- [[JSON-RPC 2.0]] — MCP 的基础 RPC 协议
- [[Stateful Connection]] — 有状态连接，需要生命周期管理
- [[Capability Negotiation]] — 能力协商机制
- [[Security Principles]] — MCP 安全原则（同意、隐私、工具安全）

## 协议参与者

<!-- confidence: EXTRACTED -->

- **Hosts**：发起连接的 LLM 应用
- **Clients**：Host 内的连接器
- **Servers**：提供上下文和能力的服务

## 安全实现指南

<!-- confidence: EXTRACTED -->

Implementors SHOULD：
1. 在应用中构建强大的同意和授权流程
2. 提供清晰的安全影响文档
3. 实现适当的访问控制和数据保护
4. 在集成中遵循安全最佳实践
5. 在功能设计中考虑隐私影响

## 协议灵感来源

<!-- confidence: EXTRACTED -->

MCP 受 [Language Server Protocol (LSP)] 启发，LSP 标准化了如何为整个开发工具生态系统添加编程语言支持。MCP 同理，标准化了如何为 AI 应用生态系统集成额外上下文和工具。

## 与其他素材的关联

- 与 [[MCP 架构概览]] 形成完整协议定义
- 与 [[MCP Python SDK]]、[[MCP TypeScript SDK]] 对应具体实现
- 与 [[Agent集成层]] 主题核心内容

## 原文精彩摘录

> "MCP provides a standardized way for applications to share contextual information with language models, expose tools and capabilities to AI systems, and build composable integrations and workflows."

## 相关页面

- [[MCP]]
- [[JSON-RPC 2.0]]
- [[Agent集成层]]
- [[LSP]]