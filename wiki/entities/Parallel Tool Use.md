---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-anthropic-parallel-tool-use-guide.md
---

# Parallel Tool Use

> Claude在单个turn调用多个工具的能力，显著降低延迟并提高Agent效率

## 定义

Parallel Tool Use（并行工具调用）是Claude在单个assistant turn中调用多个工具的能力。Claude默认可并行调用工具，应用可自由选择执行策略（并发、顺序或组合）。<!-- confidence: EXTRACTED -->
- 证据：原文"By default, Claude may use multiple tools to answer a user query"

## 启用与禁用

### 默认行为

Claude默认启用并行调用：
- 可在单个turn返回多个`tool_use` blocks
- API不规定执行顺序<!-- confidence: EXTRACTED -->
- 证据：原文"The API doesn't prescribe an execution order"

### 禁用方式

设置`disable_parallel_tool_use=true`：
- **`tool_choice: auto`**：最多1个工具
- **`tool_choice: any` / `tool`**：恰好1个工具<!-- confidence: EXTRACTED -->
- 证据：原文"Setting disable_parallel_tool_use=true when tool_choice type is auto, which ensures that Claude uses at most one tool"

## 执行策略选择

根据工具特性选择执行策略：

### 并发执行（并发）

适用于：
- 独立的read-only操作
- 无依赖关系
- 需要降低延迟<!-- confidence: EXTRACTED -->
- 实现方式：`Promise.all`（JavaScript）、`asyncio.gather`（Python）

### 顺序执行

适用于：
- 有副作用（side effects）
- 共享状态（shared state）
- 有ordering requirements<!-- confidence: EXTRACTED -->
- 证据：原文"Independent, read-only operations are usually safe to run in parallel for lower latency. Tools with side effects, shared state, or ordering requirements might be better run sequentially"

### 组合策略

可组合使用，根据具体工具灵活选择。

## 消息历史格式

### 关键规则

**必须遵守**：
- ✅ 所有tool_result在单个user message
- ❌ 每个tool_result用单独user message<!-- confidence: EXTRACTED -->
- 证据：原文"All tool results must be in a single user message... Sending separate user messages for each tool result reduces parallel tool use"

**错误格式示例**：
```
[
  {"role": "assistant", "content": [tool_use_1, tool_use_2]},
  {"role": "user", "content": [tool_result_1]},
  {"role": "user", "content": [tool_result_2]}  // ❌ Separate message
]
```

**正确格式示例**：
```
[
  {"role": "assistant", "content": [tool_use_1, tool_use_2]},
  {"role": "user", "content": [tool_result_1, tool_result_2]}  // ✅ Single message
]
```

### 格式错误的后果

错误格式会"教导"Claude避免并行调用：
- Claude从历史消息学习行为模式
- 分离的tool_result教导Claude避免并行<!-- confidence: EXTRACTED -->
- 证据：原文"This teaches Claude to avoid parallel calls"

## 最大化并行调用

### System Prompt优化

添加指令鼓励并行：
```
"Call all independent tools in the same block:
- Don't wait for one tool's results before calling another independent tool
- Batch tool calls together when they don't depend on each other"
```

### User Prompt引导

通过用户提示引导：
```
"Use multiple tools at once to speed up the analysis. Check weather, stock prices, and news simultaneously."
```

### Claude 4特性

Claude 4默认并行能力强：
- 优化了并行调用behavior
- Prompt可进一步增强<!-- confidence: EXTRACTED -->
- 证据：原文"Claude 4 models have excellent parallel tool use capabilities by default"

## 未执行工具处理

### is_error机制

当选择不执行某call时：
- 返回`tool_result`含`is_error: true`
- 提供简短说明（如"Not executed: preceding call failed"）<!-- confidence: EXTRACTED -->
- 证据：原文"If you choose not to run a particular call, still return a tool_result for it with is_error: true"

**示例**：
```
{
  "type": "tool_result",
  "tool_use_id": "toolu_02",
  "is_error": true,
  "content": "Not executed: the preceding write_file call failed."
}
```

### 并行执行失败处理

并行执行时依赖未完成导致失败：
- 返回`is_error: true`含自然错误信息
- Claude下轮重发该call<!-- confidence: EXTRACTED -->
- 证据：原文"If you run in parallel and a call fails because its prerequisite hadn't completed, return is_error: true with the natural error message; Claude will reissue it on the next turn"

## 性能测量

### 评估指标

计算平均tools per message：
```python
avg_tools_per_message = total_tool_calls / len(tool_call_messages)
# Should be > 1.0 if parallel calls are working
```

### 其他指标

- Top-level accuracy
- Tool call runtime
- Total tool calls
- Token consumption
- Tool errors<!-- confidence: EXTRACTED -->
- 证据：原文"We recommend collecting other metrics like the total runtime of individual tool calls and tasks, the total number of tool calls"

## Troubleshooting

### 常见问题

1. **Incorrect tool result formatting**：最常见问题，格式错误降低并行
2. **Weak prompting**：默认prompt不足，需增强system prompt
3. **Calls appear to depend on each other**：Batch中出现依赖关系

### 解决方案

- 检查消息历史格式
- 使用增强system prompt
- 在system prompt添加："Only batch tool calls that are independent of each other"<!-- confidence: EXTRACTED -->

## 与相关概念的关系

- [[Tool Use]] — Parallel Tool Use是Tool Use的优化技术<!-- confidence: INFERRED -->
- [[Agentic Loop]] — 并行调用在Agentic Loop中执行<!-- confidence: INFERRED -->
- [[disable_parallel_tool_use]] — 禁用并行调用的参数<!-- confidence: EXTRACTED -->
- [[Tool Runner]] — SDK自动处理并行执行的抽象<!-- confidence: EXTRACTED -->

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[Anthropic Parallel Tool Use Guide]] | 官方指南：启用机制、执行语义、消息历史格式、性能优化 |

## 相关页面

- [[Tool Use]]（实体页，已创建）
- [[Agentic Loop]]（实体页，已创建）
- [[disable_parallel_tool_use]]（实体页，待创建）
- [[Tool Runner]]（实体页，待创建）
- [[Agent集成层]]（主题页，已存在）