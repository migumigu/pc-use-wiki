---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-server-tools-guide.md
images: 0
image_paths: []
---

# Anthropic Server Tools Guide

> Server Tools的共享机制详解，涵盖server_tool_use block、pause_turn续传、ZDR兼容性、域过滤和流式事件处理

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-server-tools-guide.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/server-tools

## 核心观点

1. **server_tool_use block的结构**：
   - 使用`srvtoolu_`前缀区分client tool calls
   - 包含`type`、`id`、`name`、`input`
   - 结果block紧随在同一assistant turn，无需tool_result<!-- confidence: EXTRACTED -->
   - 证据：原文"The server_tool_use block appears in Claude's response when a server-executed tool runs"

2. **pause_turn续传机制**：
   - Server-side loop达到迭代上限返回`stop_reason: "pause_turn"`
   - 处理方式：将paused response原样发回后续请求继续
   - 可修改content interrupt或redirect对话
   - 必须包含相同tools保持功能<!-- confidence: EXTRACTED -->
   - 证据：原文"When using server tools like web search, the API may return a pause_turn stop reason"

3. **ZDR兼容性与allowed_callers**：
   - 基础版本（web_search_20250305/web_fetch_20250910）支持ZDR
   - _20260209+版本默认不支持ZDR（依赖内部code execution）
   - 可设置`allowed_callers: ["direct"]`禁用dynamic filtering获得ZDR兼容<!-- confidence: EXTRACTED -->
   - 证据：原文"To use a _20260209 or later server tool with ZDR, disable dynamic filtering by setting allowed_callers: ["direct"]"

4. **Domain Filtering规则**：
   - 不含HTTP/HTTPS scheme（用`example.com`而非`https://example.com`）
   - 子域名自动包含（`example.com`覆盖`docs.example.com`）
   - 指定子域名仅返回该子域名结果
   - 支持子路径匹配（`example.com/blog`匹配`example.com/blog/post-1`）
   - 允许或阻止列表只能用其一<!-- confidence: EXTRACTED -->
   - 证据：原文"When using domain filters: Domains should not include the HTTP/HTTPS scheme"

5. **Wildcard和Unicode安全**：
   - Wildcard规则：每个entry仅一个`*`，必须出现在path部分
   - Valid：`example.com/*`、`example.com/*/articles`
   - Invalid：`*.example.com`、`ex*.com`
   - Unicode homograph攻击风险（如Cyrillic 'а'伪装amazon.com）<!-- confidence: EXTRACTED -->
   - 证据：原文"Only one wildcard (*) is allowed per domain entry... Unicode characters in domain names can create security vulnerabilities"

## 关键概念

- [[server_tool_use block]] — Server tools的响应结构（待创建）
- [[pause_turn]] — Server-side loop上限信号（已关联）
- [[ZDR]] — Zero Data Retention无数据保留政策（待创建）
- [[allowed_callers]] — 调用者限制机制（已关联）
- [[Domain Filtering]] — 域名过滤机制（待创建）
- [[Dynamic Filtering]] — 动态内容过滤（待创建）
- [[Homograph Attack]] — Unicode视觉相似字符攻击（待创建）

## 与其他素材的关联

- **与 [[Anthropic Tool Reference]] 的关系**：Reference提供工具列表，本文讲解Server Tools的共享机制<!-- confidence: EXTRACTED -->
  - 证据：原文"For individual tools, see the tool reference"
- **与 [[Anthropic How Tool Use Works]] 的关系**：How-it-works介绍Server-side Loop概念，本文提供pause_turn续传的实现指南<!-- confidence: INFERRED -->
- **与 [[Computer Use]] 的关系**：Server Tools中的code_execution工具提供Agent的代码执行能力<!-- confidence: INFERRED -->

## 原文精彩摘录

> The API executes the tool internally. You see the call and its result in the response, but you don't handle execution. Unlike client tool_use blocks, you don't need to respond with a tool_result.

> Be aware that Unicode characters in domain names can create security vulnerabilities through homograph attacks, where visually similar characters from different scripts can bypass domain filters. For example, аmazon.com (using Cyrillic 'а') may appear identical to amazon.com but represents a different domain.

> Including a standalone code_execution tool alongside _20260209 or later versions of web tools creates two execution environments, which can confuse the model. Use one or the other, or pin both to the same version.

## 相关页面

- [[server_tool_use block]]（实体页，待创建）
- [[pause_turn]]（实体页，待创建）
- [[ZDR]]（实体页，待创建）
- [[Domain Filtering]]（实体页，待创建）
- [[Server Tools]]（实体页，已创建）
- [[Agent集成层]]（主题页，需更新）