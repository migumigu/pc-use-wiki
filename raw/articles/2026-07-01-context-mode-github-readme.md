---
source_id: auto-20260701-a1b2c3d
title: context-mode GitHub README
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
confidence: high
original_url: https://github.com/mksglu/context-mode
---

# Context Mode

**The other half of the context problem.**

## The Problem

Every MCP tool call dumps raw data into your context window. A Playwright snapshot costs 56 KB. Twenty GitHub issues cost 59 KB. One access log — 45 KB. After 30 minutes, 40% of your context is gone. And when the agent compacts the conversation to free space, it forgets which files it was editing, what tasks are in progress, and what you last asked for. On top of that, the agent wastes output tokens on filler, pleasantries, and verbose explanations — burning context from both sides.

### How Context Mode Solves It

Context Mode is an MCP server that solves all four sides of this problem:

1. **Context Saving** — Sandbox tools keep raw data out of the context window. 315 KB becomes 5.4 KB. 98% reduction.

2. **Session Continuity** — Every file edit, git operation, task, error, and user decision is tracked in SQLite. When the conversation compacts, context-mode doesn't dump this data back into context — it indexes events into FTS5 and retrieves only what's relevant via BM25 search. The model picks up exactly where you left off. If you don't `--continue`, previous session data is deleted immediately — a fresh session means a clean slate.

3. **Think in Code** — The LLM should program the analysis, not compute it. Instead of reading 50 files into context to count functions, the agent writes a script that does the counting and `console.log()`s only the result. One script replaces ten tool calls and saves 100x context. This is a mandatory paradigm across all 16 platforms: stop treating the LLM as a data processor, treat it as a code generator.
```
// Before: 47 × Read() = 700 KB. After: 1 × ctx_execute() = 3.6 KB.
ctx_execute("javascript", `
 const files = fs.readdirSync('src').filter(f => f.endsWith('.ts'));
 files.forEach(f => console.log(f + ': ' + fs.readFileSync('src/'+f,'utf8').split('\\n').length + ' lines'));
`);
```

4. **No prose-style enforcement** — context-mode keeps raw data out of context but never dictates how the model writes its final answer. Brevity, completeness, formatting — your model's call (or yours via your own `CLAUDE.md` / `AGENTS.md`). Aggressive brevity prompts have been shown to degrade coding/reasoning benchmarks ([Moonshot AI on `kimi-k2.5`](https://github.com/anomalyco/opencode/issues/20258)) — the routing block stays focused on *where data goes*, not on *how the model talks*.

## Install

### Claude Code — plugin marketplace, fully automatic

**Prerequisites:** Claude Code v1.0.33+ (`claude --version`). If `/plugin` is not recognized, update first: `brew upgrade claude-code` or `npm update -g @anthropic-ai/claude-code`.

**Install:**

```
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
```
Restart Claude Code (or run `/reload-plugins`).

**Verify:**

```
/context-mode:ctx-doctor
```
All checks should show `[x]`. The doctor validates runtimes, hooks, FTS5, and plugin registration.

**Routing:** Automatic. The SessionStart hook injects routing instructions at runtime — no file is written to your project. The plugin registers all hooks (PreToolUse, PostToolUse, PreCompact, SessionStart) and 11 MCP tools — six sandbox tools (`ctx_batch_execute`, `ctx_execute`, `ctx_execute_file`, `ctx_index`, `ctx_search`, `ctx_fetch_and_index`) plus five meta-tools (`ctx_stats`, `ctx_doctor`, `ctx_upgrade`, `ctx_purge`, `ctx_insight`).

| Slash Command | What it does |
|---|---|
| `/context-mode:ctx-stats` | Context savings — per-tool breakdown, tokens consumed, savings ratio. |
| `/context-mode:ctx-doctor` | Diagnostics — runtimes, hooks, FTS5, plugin registration, versions. |
| `/context-mode:ctx-index` | Index a local file or directory into the persistent FTS5 knowledge base. |
| `/context-mode:ctx-search` | Search previously indexed content. |
| `/context-mode:ctx-upgrade` | Pull latest, rebuild, migrate cache, fix hooks. |
| `/context-mode:ctx-purge` | Permanently delete all indexed content from the knowledge base. |
| `/context-mode:ctx-insight` | Personal analytics dashboard — 90 metrics, 37 insight patterns, 4 composite scores (productivity, quality, delegation, context health) across 23 event categories. Opens a local web UI. |

### Gemini CLI — one config file, hooks included

**Prerequisites:** Node.js >= 22.5 (or Bun), Gemini CLI installed.

**Install:**

1. Install context-mode globally:
```
npm install -g context-mode
```

2. Add the following to `~/.gemini/settings.json`. This single file registers the MCP server and all four hooks:
```
{
 "mcpServers": {
   "context-mode": {
     "command": "context-mode"
   }
 },
 "hooks": {
   "BeforeTool": [
     {
       "matcher": "run_shell_command|read_file|read_many_files|grep_search|search_file_content|web_fetch|activate_skill|mcp__plugin_context-mode|mcp__context-mode|mcp__(?!.*context-mode)",
       "hooks": [{ "type": "command", "command": "context-mode hook gemini-cli beforetool" }]
     }
   ],
   "AfterTool": [
     {
       "matcher": "",
       "hooks": [{ "type": "command", "command": "context-mode hook gemini-cli aftertool" }]
     }
   ],
   "PreCompress": [
     {
       "matcher": "",
       "hooks": [{ "type": "command", "command": "context-mode hook gemini-cli precompress" }]
     }
   ],
   "SessionStart": [
     {
       "matcher": "",
       "hooks": [{ "type": "command", "command": "context-mode hook gemini-cli sessionstart" }]
     }
   ]
 }
}
```

3. Restart Gemini CLI.

**Verify:**

```
/mcp list
```
You should see `context-mode: ... - Connected`.

### VS Code Copilot — hooks with SessionStart

**Prerequisites:** Node.js >= 22.5 (or Bun), VS Code with Copilot Chat v0.32+.

**Install:**

1. Install context-mode globally:
```
npm install -g context-mode
```

2. Create `.vscode/mcp.json` in your project root:
```
{
 "servers": {
   "context-mode": {
     "command": "context-mode"
   }
 }
}
```

3. Create `.github/hooks/context-mode.json`:
```
{
 "hooks": {
   "PreToolUse": [
     { "type": "command", "command": "context-mode hook vscode-copilot pretooluse" }
   ],
   "PostToolUse": [
     { "type": "command", "command": "context-mode hook vscode-copilot posttooluse" }
   ],
   "SessionStart": [
     { "type": "command", "command": "context-mode hook vscode-copilot sessionstart" }
   ]
 }
}
```

4. Restart VS Code.

### JetBrains Copilot — hooks with SessionStart

**Prerequisites:** Node.js >= 22.5 (or Bun), JetBrains IDE with GitHub Copilot plugin v1.5.57+.

**Install:**

1. Install context-mode globally:
```
npm install -g context-mode
```

2. Add MCP server via Settings UI: **Settings > Tools > AI Assistant > Model Context Protocol (MCP) > Add Server**:

    - **Name:** `context-mode`
    - **Command:** `context-mode`

3. Create `.github/hooks/context-mode.json`:
```
{
 "hooks": {
   "PreToolUse": [
     { "type": "command", "command": "context-mode hook jetbrains-copilot pretooluse" }
   ],
   "PostToolUse": [
     { "type": "command", "command": "context-mode hook jetbrains-copilot posttooluse" }
   ],
   "SessionStart": [
     { "type": "command", "command": "context-mode hook jetbrains-copilot sessionstart" }
   ]
 }
}
```

4. Restart the JetBrains IDE.

### Cursor — hooks with stop support

**Prerequisites:** Node.js >= 22.5 (or Bun), Cursor with agent mode.

**Option A — Marketplace plugin (recommended once published)**

After Cursor lists context-mode in the Marketplace, install with one click. The plugin auto-registers MCP, hooks (`preToolUse`, `postToolUse`, `sessionStart`, `stop`, `afterAgentResponse`), rules, and skills. No manual config required.

**Until then, use the local-folder path:**

**Windows (PowerShell)** — Cursor does not follow Windows symlinks/junctions, so use `robocopy`:

```
git clone https://github.com/mksglu/context-mode.git
cd context-mode
robocopy . "$env:USERPROFILE\.cursor\plugins\local\context-mode" /MIR
```

## Platform Coverage (16 Platforms)

| Platform | Hook Support | Install Method |
|---|---|---|
| Claude Code | Full (PreToolUse/PostToolUse/PreCompact/SessionStart) | Plugin marketplace |
| Gemini CLI | Full (BeforeTool/AfterTool/PreCompress/SessionStart) | Config file |
| VS Code Copilot | Partial | MCP + hooks |
| JetBrains Copilot | Partial | MCP + hooks |
| Cursor | Full | Marketplace pending |
| Windsurf (Cascade) | None | MCP-only |
| OpenCode | Full | Config file |
| KiloCode | Full | Config file |
| OpenClaw / Pi Agent | Native | Gateway Plugin |
| Antigua | None | MCP-only |
| AutoCode | None | MCP-only |
| Continue | None | MCP-only |
| Nitro | None | MCP-only |
| Tabby | None | MCP-only |
| Sourcegraph | None | MCP-only |
| Zed | Partial | MCP + hooks |

## Technical Architecture

- **Database:** SQLite (local file, no external dependencies)
- **Full-text Search:** SQLite FTS5 extension (built-in, BM25 ranking)
- **Sandbox Execution:** Platform-native tools (Shell/file read) wrapped
- **Registration Protocol:** MCP (Model Context Protocol) standard

## Enterprise Adoption

Used across teams at: Microsoft, Google, Meta, Amazon, IBM, NVIDIA, ByteDance, Stripe, Datadog, Salesforce, GitHub, Red Hat, Supabase, Canva, Notion, Hasura, Framer, Cursor

## License

Elastic License 2.0 (ELv2)

## Stats

- GitHub Stars: 15,616+
- Platforms Supported: 16
- Token Reduction: 98% (315KB → 5.4KB)