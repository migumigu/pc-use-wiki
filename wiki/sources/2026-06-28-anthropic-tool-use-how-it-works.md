---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-tool-use-how-it-works.md
images: 0
image_paths: []
---

# Anthropic How Tool Use Works

> Tool Use的深度机制解析，详细讲解工具执行边界、Agentic Loop实现、Server-side loop和适用场景判断

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-tool-use-how-it-works.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works

## 核心观点

1. **Tool-Use Contract的设计哲学**：Tool use是应用与模型的契约——应用定义可用操作和输入输出形状，Claude决定何时如何调用，模型从不执行代码，只发出结构化请求。这使LLM像函数接口而非文本生成器。<!-- confidence: EXTRACTED -->
   - 证据：原文"Tool use is a contract between your application and the model... The model never executes anything on its own. It emits a structured request"

2. **三类工具的执行边界**：
   - **User-defined tools**：应用定义schema+执行代码+返回结果（主要流量）
   - **Anthropic-schema tools**（bash/text_editor/computer/memory）：Anthropic提供schema，应用执行（trained-in优化）
   - **Server-executed tools**（web_search/web_fetch/code_execution/tool_search）：Anthropic服务器执行，结果直接返回<!-- confidence: EXTRACTED -->
   - 证据：原文"Every tool falls into one of three buckets, and the bucket determines what your application is responsible for"

3. **Agentic Loop的标准实现**：Client tools需要应用驱动`while`循环：
   - `stop_reason: "tool_use"` → 执行工具 → `tool_result` blocks → 新请求
   - 循环退出条件：`"end_turn"`, `"max_tokens"`, `"stop_sequence"`, `"refusal"`<!-- confidence: EXTRACTED -->
   - 证据：原文"The canonical shape is a `while` loop keyed on `stop_reason`"

4. **Server-side Loop的迭代限制**：Server tools内部循环有迭代上限，触发上限时返回`stop_reason: "pause_turn"`，需重发对话继续。<!-- confidence: EXTRACTED -->
   - 证据：原文"If the model is still iterating when it hits the cap, the response comes back with stop_reason: pause_turn"

5. **适用场景的判断标准**：
   - **适合**：有副作用操作、外部数据、结构化输出、系统集成
   - **不适合**：训练数据可回答、无副作用单次Q&A、轻量任务（延迟超过工作）
   - **信号**：如果需要用regex从model output提取决策，那决策应该是tool call<!-- confidence: EXTRACTED -->
   - 证据：原文"The tell that you should be using tools: if you're writing a regex to extract a decision from model output, that decision should have been a tool call"

## 关键概念

- [[Tool-Use Contract]] — 应用与模型的契约关系（待创建）
- [[User-defined Tools]] — 应用自定义工具类型
- [[Anthropic-schema Tools]] — Anthropic提供的trained-in工具（待创建）
- [[Server-side Loop]] — 服务器端工具的内部迭代机制
- [[pause_turn]] — Server-side loop达到上限时的停止信号（待创建）
- [[Agentic Loop]] — Client tools的循环调用机制（已关联）

## 与其他素材的关联

- **与 [[Anthropic Tool Use Overview]] 的关系**：Overview提供总览，本文深入讲解agentic loop和执行边界的技术细节<!-- confidence: EXTRACTED -->
  - 证据：原文"This page explains the concepts behind tool use: where tools run, how the agentic loop works"
- **与 [[Anthropic Define Tools Guide]] 的关系**：本文讲解概念，后续文档将提供schema定义的实现指南<!-- confidence: INFERRED -->
- **与 [[MCP 协议规范]] 的关系**：Tool-Use Contract的思想与MCP的client-server架构理念一致，强调清晰的职责边界<!-- confidence: INFERRED -->

## 原文精彩摘录

> This contract makes the model behave less like a text generator and more like a function you call. Engineers with classical API experience can integrate tool use the same way they would any other typed interface: define the schema, handle the callback, return a result.

> The tell that you should be using tools: if you're writing a regex to extract a decision from model output, that decision should have been a tool call. Parsing free-form text to recover structured intent is a sign the structure belongs in the schema.

> Server-executed tools run their own loop inside Anthropic's infrastructure. A single request from your application might trigger several web searches or code executions before a response comes back. The model searches, reads results, decides to search again, and iterates until it has what it needs, all without your application participating.

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Agentic Loop]]（实体页，待创建）
- [[Anthropic-schema Tools]]（实体页，待创建）
- [[Tool-Use Contract]]（实体页，待创建）
- [[Agent集成层]]（主题页，需更新）