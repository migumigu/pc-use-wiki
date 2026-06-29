---
source_id: auto-2026-06-28-o5p6
title: Anthropic Parallel Tool Use Guide
url: https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Parallel tool use

Enable and format parallel tool calls, with message-history guidance and troubleshooting.

This page covers parallel tool calls: when Claude calls multiple tools in one turn, how to format the message history so parallelism keeps working, and how to disable it. For the single-call flow, see [Handle tool calls](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls).

By default, Claude may use multiple tools to answer a user query. You can disable this behavior by:

- Setting `disable_parallel_tool_use=true` when `tool_choice` type is `auto`, which ensures that Claude uses **at most one**  tool

- Setting `disable_parallel_tool_use=true` when `tool_choice` type is `any` or `tool`, which ensures that Claude uses **exactly one**  tool

## Execution semantics

When Claude returns multiple `tool_use` blocks in a single assistant turn, how you run them is your decision. The API doesn't prescribe an execution order: you can run the calls concurrently (`Promise.all`, `asyncio.gather`), sequentially in the order they appear, or in any combination that suits your tools.

Choose the strategy based on what your tools do. Independent, read-only operations are usually safe to run in parallel for lower latency. Tools with side effects, shared state, or ordering requirements might be better run sequentially.

Whichever strategy you use, return one `tool_result` for each `tool_use` block, all together in the next user message. If you choose not to run a particular call (for example, because you ran the batch sequentially and an earlier call failed), still return a `tool_result` for it with `is_error: true` and a brief explanation.

```
{
 "type": "tool_result",
 "tool_use_id": "toolu_02",
 "is_error": true,
 "content": "Not executed: the preceding write_file call failed."
}
```

## Maximizing parallel tool use

While Claude 4 models have excellent parallel tool use capabilities by default, you can increase the likelihood of parallel tool execution across all models with targeted prompting:

### System prompts for parallel tool use

Add instructions to your system prompt to encourage Claude to make multiple independent tool calls together:

```
"Call all independent tools in the same block:
- Don't wait for one tool's results before calling another independent tool
- Batch tool calls together when they don't depend on each other
- Group related operations: if you need to get user info, their orders, and their preferences, call all three in one block"
```

### User message prompting

You can also guide parallel behavior through specific user prompts:

```
"Use multiple tools at once to speed up the analysis. Check weather, stock prices, and news simultaneously."
```

## Troubleshooting

If Claude isn't making parallel tool calls when expected, check these common issues:

**1. Incorrect tool result formatting**

The most common issue is formatting tool results incorrectly in the conversation history. This "teaches" Claude to avoid parallel calls.

Specifically for parallel tool use:

- ❌ **Wrong** : Sending separate user messages for each tool result

- ✅ **Correct** : All tool results must be in a single user message

```
// ❌ This reduces parallel tool use
[
 {"role": "assistant", "content": [tool_use_1, tool_use_2]},
 {"role": "user", "content": [tool_result_1]},
 {"role": "user", "content": [tool_result_2]} // Separate message
]

// ✅ This maintains parallel tool use
[
 {"role": "assistant", "content": [tool_use_1, tool_use_2]},
 {"role": "user", "content": [tool_result_1, tool_result_2]} // Single message
]
```
See [Handle tool calls](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls) for other formatting rules.

**2. Weak prompting**

Default prompting may not be sufficient. Use the stronger system prompt from the [Maximizing parallel tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use#maximizing-parallel-tool-use) section above.

**3. Measuring parallel tool usage**

To verify parallel tool calls are working:

```python
# Calculate average tools per tool-calling message
tool_call_messages = [
 msg for msg in messages if any(block.type == "tool_use" for block in msg.content)
]
total_tool_calls = sum(
 len([b for b in msg.content if b.type == "tool_use"]) for msg in tool_call_messages
)
avg_tools_per_message = (
 total_tool_calls / len(tool_call_messages) if tool_call_messages else 0.0
)
print(f"Average tools per message: {avg_tools_per_message}")
# Should be > 1.0 if parallel calls are working
```

**4. Calls in a batch appear to depend on each other**

Execution order is your choice. If your tools have ordering dependencies, running the batch sequentially and stopping on the first failure is a valid strategy: return `is_error: true` for any call you didn't run. If you run in parallel and a call fails because its prerequisite hadn't completed, return `is_error: true` with the natural error message; Claude will reissue it on the next turn. To reduce dependent calls appearing together, add this to your system prompt: "Only batch tool calls that are independent of each other."

## Next steps

- For the single-tool-call flow and `tool_result` formatting rules, see [Handle tool calls](https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls).

- For the SDK abstraction that handles parallel execution automatically, see [Tool Runner](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner).

- For the full tool-use workflow, see [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools).