---
source_id: auto-2026-06-28-k1l2
title: Anthropic Handle Tool Calls Guide
url: https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Handle tool calls

Parse tool_use blocks, format tool_result responses, and handle errors with is_error.

This page covers the tool-call lifecycle: reading `tool_use` blocks from Claude's response, formatting `tool_result` blocks in your reply, and signaling errors. For the SDK abstraction that handles this automatically, see [Tool Runner](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner).

**Simpler with Tool Runner** : The manual tool handling described on this page is automatically managed by [Tool Runner](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner). Use this page when you need custom control over tool execution.

Claude's response differs based on whether it uses a [client or server tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview#how-tool-use-works).

## Handling results from client tools

The response will have a `stop_reason` of `tool_use` and one or more `tool_use` content blocks that include:

- `id`: A unique identifier for this particular tool use block. This will be used to match up the tool results later.

- `name`: The name of the tool being used.

- `input`: An object containing the input being passed to the tool, conforming to the tool's `input_schema`.

When you receive a tool use response for a client tool, you should:

1. Extract the `name`, `id`, and `input` from the `tool_use` block.

2. Run the actual tool in your codebase corresponding to that tool name, passing in the tool `input`.

3. Continue the conversation by sending a new message with the `role` of `user`, and a `content` block containing the `tool_result` type and the following information:

    - `tool_use_id`: The `id` of the tool use request this is a result for.

    - `content` (optional): The result of the tool, as a string (for example, `"content": "15 degrees"`), a list of nested content blocks (for example, `"content": [{"type": "text", "text": "15 degrees"}]`), or a list of document blocks (for example, `"content": [{"type": "document", "source": {"type": "text", "media_type": "text/plain", "data": "15 degrees"}}]`). These content blocks can use the `text`, `image`, or `document` types.

    - `is_error` (optional): Set to `true` if the tool execution resulted in an error.

**Important formatting requirements** :

- Tool result blocks must immediately follow their corresponding tool use blocks in the message history. You cannot include any messages between the assistant's tool use message and the user's tool result message.

- In the user message containing tool results, the tool_result blocks must come FIRST in the content array. Any text must come AFTER all tool results.

For example, this will cause a 400 error:

```
{
 "role": "user",
 "content": [
 { "type": "text", "text": "Here are the results:" }, // ❌ Text before tool_result
 { "type": "tool_result", "tool_use_id": "toolu_01" /* ... */ }
 ]
}
```
This is correct:

```
{
 "role": "user",
 "content": [
 { "type": "tool_result", "tool_use_id": "toolu_01" /* ... */ },
 { "type": "text", "text": "What should I do next?" } // ✅ Text after tool_result
 ]
}
```
If you receive an error like "tool_use ids were found without tool_result blocks immediately after", check that your tool results are formatted correctly.

Tool results often carry content from sources outside your control: web pages, inbound email, user uploads, third-party APIs. Treat that content as untrusted: an attacker who can influence it may embed instructions that try to redirect Claude (indirect prompt injection). Keep untrusted content inside `tool_result` blocks rather than `system` prompts or plain user `text` blocks, and see [Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks#indirect-prompt-injection) for further hardening.

After receiving the tool result, Claude will use that information to continue generating a response to the original user prompt.

## Handling results from server tools

Claude executes the tool internally and incorporates the results directly into its response without requiring additional user interaction.

**Differences from other APIs**

Unlike APIs that separate tool use or use special roles like `tool` or `function`, the Claude API integrates tools directly into the `user` and `assistant` message structure.

Messages contain arrays of `text`, `image`, `tool_use`, and `tool_result` blocks. `user` messages include client content and `tool_result`, while `assistant` messages contain AI-generated content and `tool_use`.

## Handling errors with is_error

There are a few different types of errors that can occur when using tools with Claude:

### Tool execution error

If your tool execution code throws an error, you can communicate this error back to Claude by setting the `is_error` field to `true` and including the error message in the `content` field:

```python
{
 "role": "user",
 "content": [
 {
 "type": "tool_result",
 "tool_use_id": "toolu_01A09q90qw90lq917835lq9",
 "content": "Connection error: Unable to connect to weather service",
 "is_error": true
 }
 ]
}
```
Claude will then use this error information to either retry the tool call with corrected parameters, ask the user for clarification, or explain the limitation.

### Invalid tool name

If Claude attempts to use a tool that doesn't exist (i.e., not defined in your `tools` array), the API will automatically return a `tool_result` with `is_error: true` and an error message indicating the invalid tool name. You don't need to handle this case manually.

### Server tool errors

Server tools may also encounter errors. These are communicated directly in the response and don't require you to construct a `tool_result`. The response will contain error information in the corresponding `server_tool_use` block.

## Next steps

- For running multiple tools in one turn, see [Parallel tool use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use).

- For the SDK abstraction that automates this loop, see [Tool Runner](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-runner).

- For the full tool-use workflow, see [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools).