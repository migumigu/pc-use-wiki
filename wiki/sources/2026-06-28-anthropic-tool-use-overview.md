---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-tool-use-overview.md
images: 0
image_paths: []
---

# Anthropic Tool Use Overview

> Claude的Tool Use能力官方文档总览，介绍工具调用核心概念、执行模式、定价机制和最佳实践

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-tool-use-overview.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview

## 核心观点

1. **Tool Use的核心机制**：Claude根据用户请求和工具描述决定何时调用工具，返回结构化的调用请求，由应用或Anthropic执行后返回结果。<!-- confidence: EXTRACTED -->
   - 证据：原文"Tool use lets Claude call functions you define or that Anthropic provides. Claude decides when to call a tool based on the user's request and the tool's description"

2. **Client Tools vs Server Tools的执行边界**：Client tools（用户定义工具+Anthropic-schema工具如bash/text_editor）在应用端执行，需要实现agentic loop；Server tools（web_search/code_execution等）在Anthropic服务器执行，直接返回结果。<!-- confidence: EXTRACTED -->
   - 证据：原文明确区分"Client tools (including user-defined tools and Anthropic-schema tools like bash and text_editor) run in your application"和"Server tools (web_search, code_execution, web_fetch, tool_search) run on Anthropic's infrastructure"

3. **Strict Tool Use保证Schema一致性**：添加`strict: true`确保Claude的tool call严格匹配schema定义，避免参数错误。<!-- confidence: EXTRACTED -->
   - 证据：原文"Add `strict: true` to your tool definitions to ensure Claude's tool calls always match your schema exactly"

4. **Tool Choice控制触发行为**：默认`auto`让Claude自行判断，可通过`any`或特定tool强制调用，也可通过system prompt进行软性引导。<!-- confidence: EXTRACTED -->
   - 证据：原文"With the default `tool_choice` of `{"type": "auto"}`, Claude decides on each turn whether to call a tool or respond directly"

5. **Token定价机制**：Tool use定价包括输入token（含tools参数）、输出token、server tools的额外使用费，以及自动注入的tool use系统提示（290-804 tokens）。<!-- confidence: EXTRACTED -->
   - 证据：原文表格列出各模型的tool use system prompt token count（290-804 tokens）

## 关键概念

- [[Tool Use]] — Claude调用外部函数的核心能力（待创建）
- [[Client Tools]] — 应用端执行的工具类型
- [[Server Tools]] — Anthropic服务器端执行的工具类型
- [[Agentic Loop]] — Tool use的循环调用机制（待创建）
- [[Strict Tool Use]] — Schema验证机制（待创建）
- [[tool_choice]] — 控制工具调用行为的参数（待创建）
- [[MCP]] — Tool use的标准化协议扩展（已存在）

## 与其他素材的关联

- **与 [[MCP 架构概览]] 的关系**：Tool Use是MCP的底层实现机制，MCP提供了标准化的工具定义和调用协议<!-- confidence: INFERRED -->
- **与 [[Anthropic How Tool Use Works]] 的关系**：本文是概念总览，后续文档将深入讲解agentic loop等技术细节<!-- confidence: EXTRACTED -->
  - 证据：原文"For the full conceptual model including the agentic loop and when to choose each approach, see [How tool use works]"
- **与 [[Agent集成层]] 的关系**：Tool Use是Agent集成层的核心能力之一，实现Agent与外部系统的连接<!-- confidence: INFERRED -->

## 原文精彩摘录

> Tool access is one of the highest-leverage primitives you can give an agent. On benchmarks like LAB-Bench FigQA (scientific figure interpretation) and SWE-bench (real-world software engineering), adding even basic tools produces outsized capability gains, often surpassing human expert baselines.

> The boundary is steerable through your system prompt. If Claude isn't calling tools when you expect, a light instruction like "Use the tools to investigate before responding." measurably increases tool use; a stronger form like "Always call a tool first before responding." pushes further.

> Tools differ primarily by where the code executes. Client tools (including user-defined tools and Anthropic-schema tools like bash and text_editor) run in your application: Claude responds with stop_reason: "tool_use" and one or more tool_use blocks, your code executes the operation, and you send back a tool_result.

## 相关页面

- [[Tool Use]]（实体页，待创建）
- [[Agentic Loop]]（实体页，待创建）
- [[MCP]]（实体页，已存在）
- [[Agent集成层]]（主题页，需更新）
- [[Anthropic How Tool Use Works]]（素材摘要，待消化）