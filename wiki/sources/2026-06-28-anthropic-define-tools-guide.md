---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-define-tools-guide.md
images: 0
image_paths: []
---

# Anthropic Define Tools Guide

> Tool Schema定义的官方指南，涵盖tool definition最佳实践、input_examples使用方法、tool_choice控制模式和forced tool use机制

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-define-tools-guide.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools

## 核心观点

1. **Tool Definition的核心参数**：
   - `name`：工具名（匹配`^[a-zA-Z0-9_-]{1,64}$`）
   - `description`：详细描述（至少3-4句，解释what/when/caveats）
   - `input_schema`：JSON Schema定义参数
   - `input_examples`（可选）：调用示例（仅client tools）<!-- confidence: EXTRACTED -->
   - 证据：原文"Each tool definition includes: name, description, input_schema, input_examples"

2. **Tool Definition最佳实践**：
   - **描述最重要**：至少3-4句，详细说明what/when/参数含义/限制
   - **优先描述，其次示例**：清晰描述优先，复杂工具可用input_examples
   - **合并相关操作**：一个tool带action参数而非多个独立tools
   - **使用namespace**：prefix工具名（github_list_prs, slack_send_message）
   - **高信号响应**：返回语义标识符而非opaque引用<!-- confidence: EXTRACTED -->
   - 证据：原文"To get the best performance out of Claude when using tools, follow these guidelines"

3. **input_examples的使用规则**：
   - Schema验证：每个example必须符合input_schema
   - 不支持server tools：仅user-defined和Anthropic-schema client tools
   - Token成本：简单example ~20-50 tokens，复杂 ~100-200<!-- confidence: EXTRACTED -->
   - 证据：原文"Examples are included in the prompt alongside your tool schema"

4. **tool_choice的四种模式**：
   - `auto`：Claude自行判断（默认）
   - `any`：必须调用某工具但不指定
   - `tool`：强制调用特定工具
   - `none`：禁止调用工具<!-- confidence: EXTRACTED -->
   - 证据：原文"When working with the tool_choice parameter, there are four possible options"

5. **Extended Thinking与tool_choice的限制**：
   - `tool_choice: {"type": "any"}`和`{"type": "tool"}`不支持extended thinking
   - 仅`auto`和`none`兼容extended thinking<!-- confidence: EXTRACTED -->
   - 证据：原文"When using extended thinking with tool use, tool_choice: {"type": "any"} and tool_choice: {"type": "tool"} are not supported"

## 关键概念

- [[Tool Schema]] — 工具定义的JSON Schema结构（待创建）
- [[input_examples]] — 工具调用示例字段（已关联）
- [[tool_choice]] — 工具调用控制参数（已关联）
- [[Namespace Prefix]] — 工具命名空间前缀（待创建）
- [[Extended Thinking]] — Claude的长推理模式（待创建）
- [[Prompt Caching]] — Prompt缓存机制（已存在）

## 与其他素材的关联

- **与 [[Anthropic Tool Use Overview]] 的关系**：Overview介绍概念，本文提供schema定义的实践指南<!-- confidence: INFERRED -->
- **与 [[Anthropic Handle Tool Calls Guide]] 的关系**：本文定义工具，后续文档讲解如何处理tool call<!-- confidence: EXTRACTED -->
  - 证据：原文"For guidance on implementing tool use in your application, see Define tools"
- **与 [[Strict Tool Use]] 的关系**：strict: true与tool_choice配合保证schema一致性和强制调用<!-- confidence: INFERRED -->

## 原文精彩摘录

> Provide extremely detailed descriptions. This is by far the most important factor in tool performance. Your descriptions should explain every detail about the tool... Aim for at least 3-4 sentences per tool description, more if the tool is complex.

> Consolidate related operations into fewer tools. Rather than creating a separate tool for every action (create_pr, review_pr, merge_pr), group them into a single tool with an action parameter. Fewer, more capable tools reduce selection ambiguity.

> When using prompt caching, changes to the tool_choice parameter will invalidate cached message blocks. Tool definitions and system prompts remain cached, but message content must be reprocessed.

## 相关页面

- [[Tool Schema]]（实体页，待创建）
- [[input_examples]]（实体页，待创建）
- [[tool_choice]]（实体页，待创建）
- [[Extended Thinking]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）