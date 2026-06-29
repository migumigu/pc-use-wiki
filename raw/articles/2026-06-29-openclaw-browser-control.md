---
source_id: auto-20260629-ij90
title: OpenClaw Browser Control
url: https://docs.openclaw.ai/tools/browser
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Browser (OpenClaw-managed)

OpenClaw can run a **dedicated Chrome/Brave/Edge/Chromium profile** that the agent controls. It is isolated from your personal browser and is managed through a small local control service inside the Gateway (loopback only).

## What you get

- A separate browser profile named **openclaw** (orange accent by default)
- Deterministic tab control (list/open/focus/close)
- Agent actions (click/type/drag/select), snapshots, screenshots, PDFs
- A bundled `browser-automation` skill that teaches agents the snapshot, stable-tab, stale-ref, and manual-blocker recovery loop
- Optional multi-profile support (`openclaw`, `work`, `remote`, ...)

## Profiles: `openclaw` vs `user`

- `openclaw`: managed, isolated browser (no extension required)
- `user`: built-in Chrome MCP attach profile for your **real signed-in Chrome** session

Default: use the isolated `openclaw` browser.

## Configuration

Browser settings live in `~/.openclaw/openclaw.json`.

Key config options:
- `browser.enabled`: Enable/disable browser (default: true)
- `browser.defaultProfile`: Default profile (default: "openclaw")
- `browser.headless`: Run browser headless
- `browser.executablePath`: Path to Chromium-based browser executable
- `browser.profiles.<name>`: Per-profile configuration
  - `cdpPort`: CDP port for managed profiles
  - `color`: UI accent color
  - `headless`: Per-profile headless override
  - `driver`: "existing-session" for Chrome MCP attach
  - `cdpUrl`: Remote CDP endpoint URL

### Screenshot vision (text-only model support)

When the main model is text-only, browser screenshots can be described using a configured vision model. The vision model returns a text description instead of an image block.

Config: `tools.media.image.models` — list of image understanding models with fallback.

## SSRF policy

- Browser navigation and open-tab are SSRF-guarded before navigation
- `browser.ssrfPolicy.dangerouslyAllowPrivateNetwork` is off by default; enable only when private-network browser access is intentionally trusted

## Tab cleanup

Best-effort cleanup for tabs opened by primary-agent browser sessions:
- `browser.tabCleanup.enabled`: Enable tab cleanup (default: true)
- `browser.tabCleanup.idleMinutes`: Close idle tabs after N minutes (default: 120)
- `browser.tabCleanup.maxTabsPerSession`: Max tabs per session (default: 8)
- `browser.tabCleanup.sweepMinutes`: Sweep interval (default: 5)

## Local vs remote control

- **Local control (default):** the Gateway starts the loopback control service and can launch a local browser
- **Remote control (node host):** run a node host on the machine that has the browser; the Gateway proxies browser actions to it
- **Remote CDP:** set `browser.profiles.<name>.cdpUrl` to attach to a remote Chromium-based browser

## Plugin control

The default `browser` tool is a bundled plugin. Disable it to replace it with another plugin that registers the same `browser` tool name.

## Agent guidance

- `tools.profile: "coding"` includes `web_search` and `web_fetch`, but not the full `browser` tool
- Add browser with `tools.alsoAllow: ["browser"]`
- The bundled `browser-automation` skill carries the longer operating loop: check status/tabs first, label task tabs, snapshot before acting, resnapshot after UI changes, recover stale refs once, and report login/2FA/captcha blockers as manual action
