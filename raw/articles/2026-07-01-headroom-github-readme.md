---
source_id: auto-20260701-headroom-github-readme
title: Headroom - The context compression layer for AI agents
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-01
confidence: high
source_url: https://github.com/headroomlabs-ai/headroom
project_name: headroom
project_org: headroomlabs-ai
stars: 24534
license: Apache-2.0
language: Python
---

<div align="center"><pre>
  ██╗  ██╗███████╗ █████╗ ██████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗
  ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║
  ███████║█████╗  ███████║██║  ██║██████╔╝██║   ██║██║   ██║██╔████╔██║
  ██╔══██║██╔══╝  ██╔══██║██║  ██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║
  ██║  ██║███████╗██║  ██║██████╔╝██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
                  The context compression layer for AI agents
</pre></div>
<p align="center"><strong>60–95% fewer tokens · library · proxy · MCP · 6 algorithms · local-first · reversible</strong></p>
<p align="center">
  <a href="https://github.com/chopratejas/headroom/actions/workflows/ci.yml"><img src="https://github.com/chopratejas/headroom/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://app.codecov.io/gh/chopratejas/headroom"><img src="https://codecov.io/gh/chopratejas/headroom/graph/badge.svg" alt="codecov"></a>
  <a href="https://pypi.org/project/headroom-ai/"><img src="https://img.shields.io/pypi/v/headroom-ai.svg" alt="PyPI"></a>
  <a href="https://www.npmjs.com/package/headroom-ai"><img src="https://img.shields.io/npm/v/headroom-ai.svg" alt="npm"></a>
  <a href="https://huggingface.co/chopratejas/kompress-v2-base"><img src="https://img.shields.io/badge/model-Kompress--v2--base-yellow.svg" alt="Model: Kompress-v2-base"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License: Apache 2.0"></a>
  <a href="https://headroom-docs.vercel.app/docs"><img src="https://img.shields.io/badge/docs-online-blue.svg" alt="Docs"></a>
</p>
<p align="center">
  <a href="https://headroom-docs.vercel.app/docs">Docs</a> ·
  <a href="#get-started-60-seconds">Install</a> ·
  <a href="#proof">Proof</a> ·
  <a href="#agent-compatibility-matrix">Agents</a> ·
  <a href="https://discord.gg/yRmaUNpsPJ">Discord</a> ·
  <a href="llms.txt">llms.txt</a>
</p>
<p align="center"><sub>
  <b>AI agents / LLMs:</b> read <a href="llms.txt"><code>/llms.txt</code></a> here, or fetch <a href="https://headroom-docs.vercel.app/llms.txt">the live index</a> / <a href="https://headroom-docs.vercel.app/llms-full.txt">full docs blob</a>.
</sub></p>
---
<p align="center"><a href="https://trendshift.io/repositories/20881" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20881" alt="chopratejas%2Fheadroom | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a></p>
Headroom compresses everything your AI agent reads — tool outputs, logs, RAG chunks, files, and conversation history — before it reaches the LLM. Same answers, fraction of the tokens.
<p align="center">
  <img src="HeadroomDemo-Fast.gif" alt="Headroom in action" width="820">
  
<sub>Live: 10,144 → 1,260 tokens — same FATAL found.</sub>
</p>

## What it does

- **Library** — `compress(messages)` in Python or TypeScript, inline in any app
- **Proxy** — `headroom proxy --port 8787`, zero code changes, any language
- **Agent wrap** — `headroom wrap claude|codex|copilot|cursor|aider|opencode|cline|continue|goose|openhands|openclaw|vibe` in one command; undo with `headroom unwrap <tool>`
- **MCP server** — `headroom_compress`, `headroom_retrieve`, `headroom_stats` for any MCP client
- **Cross-agent memory** — shared store across Claude, Codex, Gemini, auto-dedup
- **`headroom learn`** — mines failed sessions, writes corrections to `CLAUDE.local.md` (default, gitignored) or `CLAUDE.md` / `AGENTS.md` / `GEMINI.md`
- **Output token reduction** — trims what the model *writes back* (not just what you send): drops ceremony/restated code and skips deep "thinking" on routine steps. See [Output token reduction](#output-token-reduction-cut-what-the-model-writes-back).
- **Reversible (CCR)** — originals are cached for retrieval on demand

## How it works (30 seconds)

```
 Your agent / app
   (Claude Code, Cursor, Codex, LangChain, Agno, Strands, your own code…)
        │   prompts · tool outputs · logs · RAG results · files
        ▼
    ┌────────────────────────────────────────────────────┐
    │  Headroom   (runs locally — your data stays here)  │
    │  ────────────────────────────────────────────────  │
    │  CacheAligner  →  ContentRouter  →  CCR            │
    │                    ├─ SmartCrusher   (JSON)        │
    │                    ├─ CodeCompressor (AST)         │
    │                    └─ Kompress-base  (text, HF)    │
    │                                                    │
    │  Cross-agent memory  ·  headroom learn  ·  MCP     │
    └────────────────────────────────────────────────────┘
        │   compressed prompt  +  retrieval tool
        ▼
 LLM provider  (Anthropic · OpenAI · Bedrock · …)
```

- **ContentRouter** — detects content type, selects the right compressor
- **SmartCrusher / CodeCompressor / Kompress-base** — compress JSON, AST, or prose
- **CacheAligner** — stabilizes prefixes so provider KV caches actually hit
- **CCR** — stores originals locally; LLM calls `headroom_retrieve` if it needs them

→ [Architecture](https://headroom-docs.vercel.app/docs/architecture) · [CCR reversible compression](https://headroom-docs.vercel.app/docs/ccr) · [Kompress-v2-base model card](https://huggingface.co/chopratejas/kompress-v2-base)

## Get started (60 seconds)

```bash
# 1 — Install
pip install "headroom-ai[all]"          # Python
npm install headroom-ai                 # Node / TypeScript

# 2 — Pick your mode
headroom wrap claude                    # wrap a coding agent
headroom proxy --port 8787              # drop-in proxy, zero code changes
# or: from headroom import compress      # inline library

# 3 — Verify setup and see the savings
headroom doctor                         # health check — confirms routing is working
headroom perf
headroom dashboard                      # live savings dashboard (proxy must be running)
```

Granular extras: `[proxy]`, `[mcp]`, `[ml]`, `[code]`, `[memory]`, `[vector]` (optional HNSW backend — needs a C++ toolchain, not in `[all]`), `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU memory-embedder offload — set `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps`). Requires **Python 3.10+**.

## Proof

**Savings on real agent workloads:**

| Workload                      | Before | After  | Savings |
|-------------------------------|-------:|-------:|--------:|
| Code search (100 results)     | 17,765 |  1,408 | **92%** |
| SRE incident debugging        | 65,694 |  5,118 | **92%** |
| GitHub issue triage           | 54,174 | 14,761 | **73%** |
| Codebase exploration          | 78,502 | 41,254 | **47%** |

**Accuracy preserved on standard benchmarks:**

| Benchmark  | Category | N   | Baseline | Headroom | Delta      |
|------------|----------|----:|---------:|---------:|------------|
| GSM8K      | Math     | 100 |    0.870 |    0.870 | **±0.000** |
| TruthfulQA | Factual  | 100 |    0.530 |    0.560 | **+0.030** |
| SQuAD v2   | QA       | 100 |        — |  **97%** | 19% compression |
| BFCL       | Tools    | 100 |        — |  **97%** | 32% compression |

Reproduce: `python -m headroom.evals suite --tier 1` · [Full benchmarks & methodology](https://headroom-docs.vercel.app/docs/benchmarks)

## Output token reduction (cut what the model writes back)

Everything above shrinks the prompt you **send**. But you also pay for every
token the model **writes back** — and on Opus-class models output costs 5× input.
A lot of that output is waste: "Great, let me…" preambles, re-printing code you
just showed it, and deep "thinking" on routine steps like reading a file.

Headroom can trim that too, from the proxy, without you changing any code:

- **Verbosity steering** — appends a short "be terse, don't restate context"
  note to the end of the system prompt (so your prompt cache still hits).
- **Effort routing** — when a turn is just the model resuming after a tool result
  (a file read, a passing test), it dials the model's thinking effort down. New
  questions and errors keep full effort.

Turn it on:
```bash
export HEADROOM_OUTPUT_SHAPER=1     # off by default
headroom proxy --port 8787
```

> **Already running a proxy?** These switches are read *live* on every request,
> so a proxy that `headroom wrap` **reused** (rather than started) would not see
> a value you export afterwards — its environment was snapshotted at launch.
> `headroom wrap` now hot-syncs your current settings to the running proxy via a
> loopback `POST /admin/runtime-env`, so they take effect immediately with **no
> restart** (no cold start, no dropped requests, no lost caches). Set them before
> you `wrap`. On a shared proxy these overrides are global — the last explicit
> setting wins.

**Learn the right terseness for you.** People don't *say* how terse they want
answers — they *show* it (they interrupt long replies, or move on before they
could have read them). `headroom learn --verbosity` reads your past sessions and
picks the level automatically:

```bash
headroom learn --verbosity            # preview what it found (dry run)
headroom learn --verbosity --apply    # save it; the proxy uses it from now on
```

**See how many output tokens you saved.** Output savings are *counterfactual* —
we never see what the model *would* have written — so Headroom reports an honest
**estimate with a confidence range**, never a made-up number:

```bash
headroom output-savings
# Reduction: 31.7%  (95% CI 27.7% … 35.7%)   [estimated]
```

Want a *measured* number instead of an estimate? Leave 10% of conversations
unshaped as a control group: `export HEADROOM_OUTPUT_HOLDOUT=0.1`. The dashboard
shows an **Output Tokens Saved** card next to input compression, labelled
`measured` or `estimated` with the confidence band.

→ Full write-up incl. the measurement methodology: [Output token reduction](https://headroom-docs.vercel.app/docs/savings)

<a href="https://www.star-history.com/?repos=chopratejas%2Fheadroom&type=date&legend=top-left">
 <picture>
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=chopratejas/headroom&type=date&legend=top-left" />
 </picture>
</a>

## Agent compatibility matrix

| Agent        | `headroom wrap` | Notes                            |
|--------------|:---------------:|----------------------------------|
| Claude Code  | ✅              | `--memory` · `--code-graph` · `--1m` · `--tool-search` |
| Codex        | ✅              | shares memory with Claude        |
| Cursor       | Manual setup    | starts proxy and prints base URLs for Cursor settings |
| Aider        | ✅              | starts proxy + launches          |
| Copilot CLI  | ✅              | starts proxy + launches          |
| OpenClaw     | ✅              | installs as ContextEngine plugin |
| OpenCode     | ✅              | injects config · starts proxy + launches |
| Cline        | ✅              | starts proxy + injects config    |
| Continue     | ✅              | starts proxy + injects config    |
| Goose        | ✅              | starts proxy + launches          |
| OpenHands    | ✅              | starts proxy + launches          |
| Mistral Vibe | ✅              | starts proxy + launches          |
| Cortex Code  | ✅              | 60–65% savings · library mode   |

Any OpenAI-compatible client works via `headroom proxy`. MCP-native: `headroom mcp install`.

Undo durable wrapping with `headroom unwrap <tool>` (supports: `claude`, `copilot`, `codex`, `opencode`, `openclaw`).

### GitHub Copilot CLI subscription mode

Headroom can route GitHub Copilot CLI subscription traffic through the local proxy:

```bash
headroom copilot-auth login
headroom wrap copilot --subscription -- --model gpt-4o
```

This lets Headroom intercept OpenAI-compatible Copilot CLI requests and apply the same proxy compression pipeline before forwarding to GitHub Copilot's hosted API. The wrapper exchanges Headroom's reusable GitHub OAuth token for Copilot's short-lived API token and prints the upstream endpoint as `COPILOT_PROVIDER_API_URL=...` during launch.

`headroom copilot-auth login` stores a Headroom-specific Copilot OAuth token.
This avoids relying on generic GitHub or Copilot CLI tokens that can read
Copilot account metadata but may still be rejected by Copilot's token-exchange
endpoint.

For GitHub Enterprise Server or custom-domain Copilot deployments, set the
deployment domain before launching:

```bash
export GITHUB_COPILOT_ENTERPRISE_DOMAIN=ghe.example.com
```

For GitHub.com Enterprise Cloud URLs such as
`github.com/enterprises/your-enterprise`, do not set an enterprise-domain
override. Headroom uses GitHub's normal token-exchange endpoint and the Copilot
API endpoint advertised for the signed-in account.

Platform support note: macOS auth reuse via Copilot CLI Keychain storage has been smoke-tested. Windows Credential Manager, Linux Secret Service / `secret-tool`, and Docker/CI token-injection paths are implemented or planned as auth-discovery paths, but still need real OS validation before they should be considered fully vetted. For Docker and CI, prefer passing an explicit `GITHUB_COPILOT_TOKEN` or `GITHUB_COPILOT_GITHUB_TOKEN` rather than relying on host keychain access.

## When to use · When to skip

**Great fit if you…**
- run AI coding agents daily and want savings without changing your code
- work across multiple agents and want shared memory
- need reversible compression — originals are retrievable via CCR within the configured TTL

**Skip it if you…**
- only use a single provider's native compaction and don't need cross-agent memory
- work in a sandboxed environment where local processes can't run

<details>
<summary><b>Integrations — drop Headroom into any stack</b></summary>

| Your setup             | Hook in with                                                     |
|------------------------|------------------------------------------------------------------|
| Any Python app         | `compress(messages, model=…)`                                    |
| Any TypeScript app     | `await compress(messages, { model })`                            |
| Anthropic / OpenAI SDK | `withHeadroom(new Anthropic())` · `withHeadroom(new OpenAI())`   |
| Vercel AI SDK          | `wrapLanguageModel({ model, middleware: headroomMiddleware() })` |
| LiteLLM                | `litellm.callbacks = [HeadroomCallback()]`                       |
| LangChain              | `HeadroomChatModel(your_llm)`                                    |
| Agno                   | `HeadroomAgnoModel(your_model)`                                  |
| Strands                | [Strands guide](https://headroom-docs.vercel.app/docs/strands)  |
| ASGI apps              | `app.add_middleware(CompressionMiddleware)`                      |
| Multi-agent            | `SharedContext().put / .get`                                     |
| MCP clients            | `headroom mcp install`                                           |

</details>

<details>
<summary><b>What's inside</b></summary>

- **SmartCrusher** — universal JSON: arrays of dicts, nested objects, mixed types.
- **CodeCompressor** — AST-aware for Python, JS, Go, Rust, Java, C++.
- **Kompress-base** — our HuggingFace model, trained on agentic traces.
- **Image compression** — 40–90% reduction via trained ML router.
- **CacheAligner** — stabilizes prefixes so Anthropic/OpenAI KV caches actually hit.
- **IntelligentContext** — score-based context fitting with learned importance.
- **CCR** — reversible compression; LLM retrieves originals on demand.
- **Cross-agent memory** — shared store, agent provenance, auto-dedup.
- **SharedContext** — compressed context passing across multi-agent workflows.
- **`headroom learn`** — plugin-based failure mining for Claude, Codex, Gemini.

</details>

<details>
<summary><b>Pipeline internals</b></summary>

Headroom exposes one stable request lifecycle across `compress()`, the SDK, and the proxy:

1. **Request hits the compression layer**
   - `compress(messages, …)` in library mode
   - `POST /v1/chat/completions` to proxy
   - `headroom_compress` MCP tool call

2. **CacheAligner stabilizes cacheable prefixes**
   - Detects Anthropic's `anthropic-beta: cache-control` header or OpenAI's `cached_message_tokens`
   - Rewrites prompts to maximize KV cache hits → saves upstream provider costs

3. **ContentRouter classifies and routes**
   - Detects: JSON logs, code, prose, images
   - Selects: SmartCrusher, CodeCompressor, Kompress-base, ImageRouter

4. **Compression algorithms apply**
   - SmartCrusher: structural JSON compression
   - CodeCompressor: AST-level code shrinking
   - Kompress-base: learned text compression model
   - ImageRouter: ML-guided image compression

5. **CCR stores originals for retrieval**
   - Each compressed chunk gets a `chunk_id`
   - Original cached locally (configurable TTL, default 24h)
   - LLM can call `headroom_retrieve(chunk_id)` if needed

6. **Compressed prompt + retrieval tool returned**
   - Prompt: compressed, 60–95% fewer tokens
   - Tool injected: `headroom_retrieve` — lets LLM fetch originals on demand

7. **Response processing (output shaping, optional)**
   - Verbosity steering: terse system prompt appendix
   - Effort routing: reduces thinking effort on routine tool-followup turns
   - Only applies if `HEADROOM_OUTPUT_SHAPER=1`

</details>

## Key features

### CCR: Reversible compression

Originals are cached. LLM retrieves them via `headroom_retrieve` when needed.

```python
# Before compression
prompt = "Long log output with FATAL at line 892..."

# After compression
compressed_prompt = "Log[chunk_id=abc123]: FATAL at 892..."

# LLM can retrieve
tool_call("headroom_retrieve", {"chunk_id": "abc123"})
→ returns original 10,000-line log
```

→ [CCR deep dive](https://headroom-docs.vercel.app/docs/ccr)

### Cross-agent memory

Multiple agents share a compressed context store:

```bash
headroom wrap claude --memory
headroom wrap codex --memory
```

Claude scans a codebase → Codex and Cursor reuse the same compressed index → no duplicate token spend.

→ [Cross-agent memory](https://headroom-docs.vercel.app/docs/memory)

### `headroom learn`

Mines your failed agent sessions and writes corrections to your prompt files:

```bash
headroom learn --sessions ~/.claude/sessions
→ extracts patterns from failed runs
→ writes fixes to CLAUDE.local.md
```

Works with Claude Code, Codex, Gemini.

→ [headroom learn](https://headroom-docs.vercel.app/docs/learn)

### MCP server

Install as an MCP server for Claude Desktop, Cline, Continue, Goose:

```bash
headroom mcp install
```

Provides three tools:
- `headroom_compress` — compress specified content
- `headroom_retrieve` — retrieve cached originals
- `headroom_stats` — view compression stats

→ [MCP integration](https://headroom-docs.vercel.app/docs/mcp)

## Compression algorithms

| Algorithm      | Target     | Method                              | Savings |
|----------------|------------|-------------------------------------|---------|
| SmartCrusher   | JSON       | Structural compression              | 50–80%  |
| CodeCompressor | Code       | AST-aware, language-specific        | 40–70%  |
| Kompress-base  | Prose      | Learned transformer model           | 60–90%  |
| CacheAligner   | Any text   | Prefix stabilization for KV cache   | Indirect|
| ImageRouter    | Images     | ML-guided compression strategy      | 40–90%  |
| CCR            | All        | Original caching + retrieval        | Reverse |

→ [Algorithm deep dive](https://headroom-docs.vercel.app/docs/algorithms)

## Architecture

Headroom runs locally. No data leaves your machine.

```
Your data → Headroom (local) → Compressed → LLM provider
                    ↓
            Local cache (originals)
```

All compression, caching, and retrieval happen on your infrastructure.

→ [Architecture overview](https://headroom-docs.vercel.app/docs/architecture)

## Installation options

```bash
# Full install (includes ML models)
pip install "headroom-ai[all]"

# Proxy-only (no ML models)
pip install "headroom-ai[proxy]"

# MCP server only
pip install "headroom-ai[mcp]"

# Node / TypeScript
npm install headroom-ai
```

→ [Installation guide](https://headroom-docs.vercel.app/docs/install)

## Documentation

- [Docs home](https://headroom-docs.vercel.app/docs)
- [Architecture](https://headroom-docs.vercel.app/docs/architecture)
- [CCR reversible compression](https://headroom-docs.vercel.app/docs/ccr)
- [Cross-agent memory](https://headroom-docs.vercel.app/docs/memory)
- [MCP integration](https://headroom-docs.vercel.app/docs/mcp)
- [Benchmarks](https://headroom-docs.vercel.app/docs/benchmarks)
- [Output token reduction](https://headroom-docs.vercel.app/docs/savings)
- [llms.txt](https://headroom-docs.vercel.app/llms.txt) — LLM-optimized index

## Community

- [Discord](https://discord.gg/yRmaUNpsPJ)
- [GitHub Issues](https://github.com/chopratejas/headroom/issues)

## License

Apache 2.0 — [LICENSE](LICENSE)