---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-handle-tool-calls-guide.md
images: 0
image_paths: []
---

# Anthropic Handle Tool Calls Guide

> Tool Call处理的官方指南，详细讲解tool_use block解析、tool_result格式化、is_error错误处理和Server Tools响应机制

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-handle-tool-calls-guide.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls

## 核心观点

1. **Client Tools的响应结构**：
   - `stop_reason: "tool_use"` + `tool_use` blocks
   - `tool_use` block包含：`id`、`name`、`input`（符合input_schema）<!-- confidence: EXTRACTED -->
   - 证据：原文"The response will have a stop_reason of tool_use and one or more tool_use content blocks"

2. **tool_result的格式化要求**：
   - `tool_use_id`：匹配对应的tool_use block的id
   - `content`：字符串、嵌套content blocks或document blocks
   - `is_error`（可选）：标记工具执行错误<!-- confidence: EXTRACTED -->
   - 证据：原文"Continue the conversation by sending a new message with the role of user, and a content block containing the tool_result type"

3. **tool_result的格式化禁忌**：
   - tool_result blocks必须在user message的content array中**最先出现**
   - tool_result blocks必须**紧跟**对应的tool_use blocks（不能插入其他消息）
   - 违反格式返回400错误<!-- confidence: EXTRACTED -->
   - 证据：原文"Tool result blocks must immediately follow their corresponding tool use blocks... In the user message containing tool results, the tool_result blocks must come FIRST"

4. **Server Tools的响应差异**：
   - Claude内部执行工具并整合结果
   - 响应包含`server_tool_use` blocks（已执行完成）
   - 不需要应用构造tool_result<!-- confidence: EXTRACTED -->
   - 证据：原文"Claude executes the tool internally and incorporates the results directly into its response"

5. **错误处理的三种类型**：
   - **Tool execution error**：设置`is_error: true`并包含错误信息
   - **Invalid tool name**：API自动返回错误tool_result
   - **Server tool error**：错误信息在server_tool_use block中<!-- confidence: EXTRACTED -->
   - 证据：原文"There are a few different types of errors that can occur when using tools with Claude"

## 关键概念

- [[tool_use block]] — Claude返回的工具调用结构（待创建）
- [[tool_result block]] — 应用返回的工具执行结果结构（待创建）
- [[is_error]] — 工具执行错误标记字段（待创建）
- [[Server_tool_use block]] — Server tools的响应结构（待创建）
- [[Indirect Prompt Injection]] — 工具结果中的对抗性指令（已存在）
- [[Tool Runner]] — SDK自动化工具处理抽象（待创建）

## 与其他素材的关联

- **与 [[Anthropic Define Tools Guide]] 的关系**：本文处理tool call，前文定义tool schema<!-- confidence: EXTRACTED -->
  - 证据：原文"For the full tool-use workflow, see Define tools"
- **与 [[Prompt Injection防御研究]] 的关系**：tool_result内容需视为untrusted，防止indirect prompt injection<!-- confidence: EXTRACTED -->
  - 证据：原文"Tool results often carry content from sources outside your control... an attacker who can influence it may embed instructions that try to redirect Claude"
- **与 [[Agentic Loop]] 的关系**：tool_use和tool_result是agentic loop的核心数据结构<!-- confidence: INFERRED -->

## 原文精彩摘录

> Tool result blocks must immediately follow their corresponding tool use blocks in the message history. You cannot include any messages between the assistant's tool use message and the user's tool result message.

> Tool results often carry content from sources outside your control: web pages, inbound email, user uploads, third-party APIs. Treat that content as untrusted: an attacker who can influence it may embed instructions that try to redirect Claude (indirect prompt injection).

> Unlike APIs that separate tool use or use special roles like tool or function, the Claude API integrates tools directly into the user and assistant message structure. Messages contain arrays of text, image, tool_use, and tool_result blocks.

## 相关页面

- [[tool_use block]]（实体页，待创建）
- [[tool_result block]]（实体页，待创建）
- [[is_error]]（实体页，待创建）
- [[Tool Runner]]（实体页，待创建）
- [[Indirect Prompt Injection]]（实体页，已存在）
- [[Agent集成层]]（主题页，需更新）