---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-anthropic-parallel-tool-use-guide.md
images: 0
image_paths: []
---

# Anthropic Parallel Tool Use Guide

> 并行工具调用的官方指南，涵盖启用机制、执行语义、消息历史格式和性能优化技巧

## 基本信息

- **来源类型**：官方文档（Anthropic Platform Docs）
- **原文位置**：raw/articles/2026-06-28-anthropic-parallel-tool-use-guide.md
- **消化日期**：2026-06-28
- **官方链接**：https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use

## 核心观点

1. **并行调用机制**：
   - 默认行为：Claude可在单个turn调用多个工具
   - 禁用方式：`disable_parallel_tool_use=true`
     - `auto`时：最多1个工具
     - `any`/`tool`时：恰好1个工具<!-- confidence: EXTRACTED -->
   - 证据：原文"By default, Claude may use multiple tools to answer a user query. You can disable this behavior by setting disable_parallel_tool_use=true"

2. **执行语义的自由度**：
   - API不规定执行顺序
   - 可选择策略：并发（Promise.all/asyncio.gather）、顺序、或组合
   - 根据工具特性选择：独立读操作并行，有副作用/共享状态/依赖顺序的顺序执行<!-- confidence: EXTRACTED -->
   - 证据：原文"When Claude returns multiple tool_use blocks in a single assistant turn, how you run them is your decision"

3. **消息历史格式的关键规则**：
   - ❌ 错误：每个tool_result用单独user message
   - ✅ 正确：所有tool_result在单个user message中
   - 错误格式会"教导"Claude避免并行调用<!-- confidence: EXTRACTED -->
   - 证据：原文"The most common issue is formatting tool results incorrectly in the conversation history. This teaches Claude to avoid parallel calls"

4. **最大化并行调用的Prompt技巧**：
   - System prompt："Call all independent tools in the same block"
   - User prompt："Use multiple tools at once to speed up the analysis"
   - Claude 4默认并行能力强，但prompt可进一步增强<!-- confidence: EXTRACTED -->
   - 证据：原文"Add instructions to your system prompt to encourage Claude to make multiple independent tool calls together"

5. **未执行工具的is_error处理**：
   - 顺序执行且前call失败时，未执行的call返回`is_error: true`+说明
   - 并行执行且依赖未完成时，返回自然错误，Claude下轮重发<!-- confidence: EXTRACTED -->
   - 证据：原文"If you choose not to run a particular call, still return a tool_result for it with is_error: true"

## 关键概念

- [[Parallel Tool Use]] — 并行调用多个工具的能力（待创建）
- [[disable_parallel_tool_use]] — 禁用并行调用的参数（待创建）
- [[Execution Semantics]] — 工具执行顺序的自由度（待创建）
- [[Tool Result Formatting]] — tool_result的格式化规则（待创建）
- [[Tool Runner]] — SDK自动化并行执行抽象（已关联）

## 与其他素材的关联

- **与 [[Anthropic Handle Tool Calls Guide]] 的关系**：Handle讲解单call格式，本文讲解多call并行格式<!-- confidence: EXTRACTED -->
  - 证据：原文"For the single-call flow, see Handle tool calls"
- **与 [[Anthropic Define Tools Guide]] 的关系**：Define讲解工具定义，本文讲解如何优化并行调用性能<!-- confidence: INFERRED -->
- **与 [[Agentic Loop]] 的关系**：并行调用是Agentic Loop的优化技术<!-- confidence: INFERRED -->

## 原文精彩摘录

> The API doesn't prescribe an execution order: you can run the calls concurrently (Promise.all, asyncio.gather), sequentially in the order they appear, or in any combination that suits your tools.

> Specifically for parallel tool use: ❌ Wrong: Sending separate user messages for each tool result. ✅ Correct: All tool results must be in a single user message. This reduces parallel tool use.

> Average tools per message: Should be > 1.0 if parallel calls are working.

## 相关页面

- [[Parallel Tool Use]]（实体页，待创建）
- [[disable_parallel_tool_use]]（实体页，待创建）
- [[Tool Runner]]（实体页，待创建）
- [[Agentic Loop]]（实体页，已创建）
- [[Agent集成层]]（主题页，需更新）