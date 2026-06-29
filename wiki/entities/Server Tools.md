---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-how-it-works.md
  - wiki/sources/2026-06-28-anthropic-tool-reference.md
---

# Server Tools

> 在Anthropic服务器端执行的工具类型，内部运行Server-side Loop，结果直接返回

## 定义

Server Tools（服务器工具）是在Anthropic基础设施上执行的Tool Use类型。应用启用工具后，Anthropic处理执行，应用接收包含结果的最终响应，不需要构造tool_result。<!-- confidence: EXTRACTED -->
- 证据：原文"Server-executed tools run on Anthropic's infrastructure. You enable the tool in your request and the server handles everything else"

## Anthropic提供的Server Tools

| Tool | Type | Status |
|------|------|--------|
| Web Search | `web_search_20260318`, `web_search_20260209`, `web_search_20250305` | GA |
| Web Fetch | `web_fetch_20260318`, `web_fetch_20260309`, `web_fetch_20260209`, `web_fetch_20250910` | GA |
| Code Execution | `code_execution_20260521`, `code_execution_20260120`, `code_execution_20250825` | GA |
| Advisor | `advisor_20260301` | Beta |
| Tool Search | `tool_search_tool_regex_20251119`, `tool_search_tool_bm25_20251119` | GA |
| MCP Connector | `mcp_toolset` | Beta <!-- confidence: EXTRACTED -->
- 证据：原文工具表格列出所有Server Tools

## 执行机制

### Server-side Loop

Server Tools内部运行自己的loop：
- 单个请求可能触发多次web search或code execution
- 模型搜索→读取结果→决定继续→迭代直到完成
- 应用不参与内部迭代<!-- confidence: EXTRACTED -->
- 证据：原文"Server-executed tools run their own loop inside Anthropic's infrastructure"

### pause_turn机制

Server-side loop有迭代上限：
- 达到上限返回`stop_reason: "pause_turn"`
- 表示任务未完成，需重发对话继续<!-- confidence: EXTRACTED -->
- 证据：原文"If the model is still iterating when it hits the cap, the response comes back with stop_reason: pause_turn"

### 响应结构

Server Tools的响应特点：
- 包含`server_tool_use` blocks（已执行完成）
- 不需要应用构造tool_result
- 应用只需读取最终答案<!-- confidence: EXTRACTED -->
- 证据：原文"The response you receive contains server_tool_use blocks showing what ran and what came back, but by the time you see them, execution is already complete"

## 版本管理

Server Tools的版本类型：

### Capability-keyed版本

新版本增加新能力：
- `web_search_20260209`：动态内容过滤
- `web_fetch_20260309`：cache-bypass选项
- `web_search_20260318` + `web_fetch_20260318`：response-inclusion控制
- `code_execution_20260120`：programmatic tool calling
- `code_execution_20260521`：披露per-cell时间限制<!-- confidence: EXTRACTED -->
- 证据：原文"web_search_20260209 and web_fetch_20260209 add dynamic content filtering over their predecessors"

### Variant变体

并行变体而非版本替代：
- `tool_search_tool_regex_20251119`：正则搜索
- `tool_search_tool_bm25_20251119`：BM25搜索<!-- confidence: EXTRACTED -->
- 证据：原文"tool_search_tool_regex_20251119 and tool_search_tool_bm25_20251119 are two search algorithms released together"

### Legacy版本

旧版本保留兼容：
- `code_execution_20250522`：仅支持Python
- `code_execution_20250825`：增加Bash和文件操作<!-- confidence: EXTRACTED -->
- 证据：原文"code_execution_20250522 supports only Python. code_execution_20250825 adds Bash and file operations"

### MCP Connector版本

`mcp_toolset`不带日期版本：
- 版本信息在`anthropic-beta` header<!-- confidence: EXTRACTED -->
- 证据：原文"The mcp_toolset type is not date-versioned; versioning is carried in the anthropic-beta header instead"

## 与Client Tools的对比

| 维度 | Server Tools | Client Tools |
|------|-------------|-------------|
| 执行位置 | Anthropic服务器 | 应用端 |
| Server-side Loop | Anthropic内部 | 无（应用驱动） |
| tool_result构造 | 不需要 | 应用负责 |
| input_examples | 不支持 | 支持 |
| 额外定价 | 按使用收费 | 仅token费 |

## Tool Definition属性限制

Server Tools**不支持**以下属性：
- `input_examples`：仅Client Tools支持
- `strict`：仅除mcp_toolset外的工具支持<!-- confidence: EXTRACTED -->
- 证据：原文"input_examples... Not available on server tools"和"strict... All tools except mcp_toolset"

## 与相关概念的关系

- [[Tool Use]] — Server Tools是Tool Use的执行类型之一<!-- confidence: EXTRACTED -->
- [[Server-side Loop]] — Server Tools的内部迭代机制<!-- confidence: EXTRACTED -->
- [[pause_turn]] — Server-side Loop的上限信号<!-- confidence: EXTRACTED -->
- [[Client Tools]] — 执行位置对比<!-- confidence: INFERRED -->
- [[mcp_toolset]] — MCP Connector的Server Tool类型<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Tool Use Overview]] | Server Tools由Anthropic执行，直接返回结果 |
| [[Anthropic How Tool Use Works]] | Server-side Loop内部迭代，应用不参与 |
| [[Anthropic Tool Reference]] | 工具列表、版本管理、Capability-keyed/Variant/Legacy类型 |

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Server-side Loop]]（实体页，待创建）
- [[pause_turn]]（实体页，待创建）
- [[Client Tools]]（实体页，已创建）
- [[mcp_toolset]]（实体页，待创建）
- [[Agent集成层]]（主题页，已存在）