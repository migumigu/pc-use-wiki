---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-tool-reference.md
images: 0
image_paths: []
---

# Anthropic Tool Reference

> Anthropic提供的工具目录大全，涵盖Server Tools和Client Tools的完整列表、版本管理机制和工具定义属性参考

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-tool-reference.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference

## 核心观点

1. **Anthropic提供的工具分为两类**：
   - **Server Tools**（Anthropic执行）：web_search、web_fetch、code_execution、advisor、tool_search、mcp_toolset
   - **Client Tools**（应用执行，Anthropic定义schema）：memory、bash、text_editor、computer<!-- confidence: EXTRACTED -->
   - 证据：原文工具表格列出所有工具的type、execution和status

2. **工具版本管理机制**：
   - **Capability-keyed**：新版本增加新能力（如web_search_20260209添加动态内容过滤）
   - **Model-keyed**：不同模型使用不同版本（text_editor_20250728用于Claude 4）
   - **Variant**：并行变体而非版本替代（tool_search_tool_regex vs bm25）
   - **Legacy**：旧版本保留兼容（code_execution_20250522只支持Python）<!-- confidence: EXTRACTED -->
   - 证据：原文"When a tool has multiple active versions, the relationship between them varies"

3. **工具定义的可选属性**：
   - `cache_control`：设置prompt cache断点
   - `strict`：保证schema验证（mcp_toolset除外）
   - `defer_loading`：延迟加载到system prompt，与tool search配合
   - `allowed_callers`：限制调用者（direct或code_execution）
   - `input_examples`：提供调用示例（仅client tools）
   - `eager_input_streaming`：细粒度输入流控制<!-- confidence: EXTRACTED -->
   - 证据：原文表格列出所有可选属性及其用途

4. **defer_loading与Prompt Caching的协同**：
   - defer_loading工具不进入system prompt，不计算cache key
   - tool search发现deferred工具时，在对话中展开而非system prompt
   - 保持prompt cache有效，避免缓存失效<!-- confidence: EXTRACTED -->
   - 证据：原文"Tools with defer_loading: true are stripped from the rendered tools section before the cache key is computed"

5. **allowed_callers的调用者限制**：
   - `"direct"`：模型直接在tool_use block调用（默认）
   - `"code_execution_20260120"`：code sandbox内调用
   - 可组合使用：`["code_execution_20260120"]`（仅sandbox调用，非direct）<!-- confidence: EXTRACTED -->
   - 证据：原文"Omitting direct from the array guides Claude to call the tool only from within code execution"

## 关键概念

- [[Anthropic-schema Tools]] — Anthropic定义schema的client tools（bash/text_editor/computer/memory）
- [[Tool Versioning]] — 工具的版本管理机制（待创建）
- [[defer_loading]] — 延迟加载工具到system prompt的机制
- [[allowed_callers]] — 工具调用者限制机制（待创建）
- [[input_examples]] — 工具调用示例（待创建）
- [[cache_control]] — Prompt caching断点设置（已存在）
- [[mcp_toolset]] — MCP connector的server tool类型

## 与其他素材的关联

- **与 [[Anthropic Tool Use Overview]] 的关系**：Overview介绍概念，本文提供工具目录和属性参考<!-- confidence: EXTRACTED -->
  - 证据：原文"This page is a reference for the tools Anthropic provides and the optional properties you can set on any tool definition"
- **与 [[MCP Connector]] 的关系**：mcp_toolset是MCP协议在Claude API的server tool实现<!-- confidence: INFERRED -->
- **与 [[Prompt Caching]] 的关系**：defer_loading与cache_control协同优化prompt caching<!-- confidence: INFERRED -->

## 原文精彩摘录

> Most Anthropic-provided tools carry a _YYYYMMDD suffix in the type string. A new version is released when the tool's behavior, schema, or model support changes. Older versions remain available so that existing integrations continue to work.

> Tools with defer_loading: true are stripped from the rendered tools section before the cache key is computed. They don't appear in the system-prompt prefix at all. When tool search discovers a deferred tool and returns a tool_reference for it, the tool's full definition is expanded inline at that point in the conversation body, not in the prefix.

> The mcp_toolset type is not date-versioned; versioning is carried in the anthropic-beta header instead.

## 相关页面

- [[Anthropic-schema Tools]]（实体页，待创建）
- [[Tool Versioning]]（实体页，待创建）
- [[defer_loading]]（实体页，待创建）
- [[mcp_toolset]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）