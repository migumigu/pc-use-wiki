---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-tool-use-overview.md
  - wiki/sources/2026-06-28-anthropic-tool-use-how-it-works.md
---

# Agentic Loop

> Tool Use的循环调用机制，实现Agent与工具之间的往返交互直到任务完成

## 定义

Agentic Loop（代理循环）是Tool Use的核心实现机制，用于处理Client Tools的往返调用。模型无法执行应用代码，每次tool call都是round trip：模型请求→应用执行→应用返回结果→模型继续。<!-- confidence: EXTRACTED -->
- 证据：原文"Client-executed tools (both user-defined and Anthropic-schema) require your application to drive a loop. The model can't run your code, so every tool call is a round trip"

## 标准实现流程

Canonical shape是`while`循环，以`stop_reason`为键：

1. 发送带`tools` array和user message的请求
2. Claude返回`stop_reason: "tool_use"` + 一个或多个`tool_use` blocks
3. 应用执行每个工具，输出格式化为`tool_result` blocks
4. 发送新请求（包含原始消息、assistant响应、user tool_result）
5. 重复步骤2-4，直到`stop_reason`不是"tool_use"<!-- confidence: EXTRACTED -->
- 证据：原文"The canonical shape is a while loop keyed on stop_reason"

## 循环退出条件

循环在以下`stop_reason`时退出：
- `"end_turn"`：Claude生成最终回答
- `"max_tokens"`：达到token上限
- `"stop_sequence"`：命中停止序列
- `"refusal"`：Claude拒绝响应<!-- confidence: EXTRACTED -->
- 证据：原文"The loop exits on any other stop reason"

## Server-side Loop的差异

Server-executed tools在Anthropic基础设施内部运行自己的loop：
- 单个请求可能触发多次web search或code execution
- 模型搜索→读取结果→决定继续搜索→迭代直到完成
- 应用不参与内部迭代<!-- confidence: EXTRACTED -->
- 证据：原文"Server-executed tools run their own loop inside Anthropic's infrastructure"

### pause_turn机制

Server-side loop有迭代上限：
- 达到上限时返回`stop_reason: "pause_turn"`而非`"end_turn"`
- pause_turn表示任务未完成，需重发对话让模型继续<!-- confidence: EXTRACTED -->
- 证据：原文"If the model is still iterating when it hits the cap, the response comes back with stop_reason: pause_turn"

## 数据结构

### tool_use block

Claude返回的工具调用结构：
- `id`：唯一标识符，用于匹配tool_result
- `name`：工具名称
- `input`：参数对象，符合input_schema<!-- confidence: EXTRACTED -->
- 证据：原文"tool_use content blocks that include: id, name, input"

### tool_result block

应用返回的工具执行结果：
- `tool_use_id`：匹配对应tool_use的id
- `content`：结果内容（字符串或content blocks）
- `is_error`（可选）：标记执行错误<!-- confidence: EXTRACTED -->
- 证据：原文"Format the outputs as tool_result blocks"

## 格式化要求

**必须遵守的规则**：
1. tool_result blocks必须在user message的content array中**最先出现**
2. tool_result blocks必须**紧跟**对应的tool_use blocks（不能插入其他消息）
3. 违反格式返回400错误<!-- confidence: EXTRACTED -->
- 证据：原文"Tool result blocks must immediately follow their corresponding tool use blocks in the message history"

**正确示例**：
```
user message: [tool_result block, text block]  ✅
```

**错误示例**：
```
user message: [text block, tool_result block]  ❌
```

## 安全注意事项

tool_result内容来自外部控制源：
- 网页内容、邮件、用户上传、第三方API
- 视为untrusted，可能嵌入indirect prompt injection
- 保持untrusted内容在tool_result内而非system prompt<!-- confidence: EXTRACTED -->
- 证据：原文"Tool results often carry content from sources outside your control... an attacker who can influence it may embed instructions"

## 与相关概念的关系

- [[Tool Use]] — Agentic Loop是Tool Use的实现机制<!-- confidence: EXTRACTED -->
- [[Client Tools]] — 需要应用驱动Agentic Loop<!-- confidence: EXTRACTED -->
- [[Server Tools]] — Server-side Loop在Anthropic内部<!-- confidence: INFERRED -->
- [[pause_turn]] — Server-side Loop的上限信号<!-- confidence: EXTRACTED -->
- [[Indirect Prompt Injection]] — tool_result的安全风险<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Tool Use Overview]] | 概念总览：Agentic Loop是Client tools的必需机制 |
| [[Anthropic How Tool Use Works]] | 深入机制：while循环实现、stop_reason退出条件、Server-side loop对比 |
| [[Anthropic Handle Tool Calls Guide]] | 数据结构：tool_use/tool_result格式化、格式禁忌、错误处理 |

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Client Tools]]（实体页，待创建）
- [[Server Tools]]（实体页，待创建）
- [[pause_turn]]（实体页，待创建）
- [[Indirect Prompt Injection]]（实体页，已存在）
- [[Agent集成层]]（主题页，已存在）