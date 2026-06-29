---
source_id: auto-20260629-cd34
title: OpenClaw Gateway Architecture
url: https://docs.openclaw.ai/concepts/architecture
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Gateway architecture

## Overview

- A single long-lived **Gateway** owns all messaging surfaces (WhatsApp via Baileys, Telegram via grammY, Slack, Discord, Signal, iMessage, WebChat).
- Control-plane clients (macOS app, CLI, web UI, automations) connect to the Gateway over **WebSocket** on the configured bind host (default `127.0.0.1:18789`).
- **Nodes** (macOS/iOS/Android/headless) also connect over **WebSocket**, but declare `role: node` with explicit caps/commands.
- One Gateway per host; it is the only place that opens a WhatsApp session.
- The **canvas host** is served by the Gateway HTTP server under `/__openclaw__/canvas/` and `/__openclaw__/a2ui/`.

## Components and flows

### Gateway (daemon)
- Maintains provider connections
- Exposes a typed WS API (requests, responses, server-push events)
- Validates inbound frames against JSON Schema
- Emits events like `agent`, `chat`, `presence`, `health`, `heartbeat`, `cron`

### Clients (mac app / CLI / web admin)
- One WS connection per client
- Send requests (`health`, `status`, `send`, `agent`, `system-presence`)
- Subscribe to events (`tick`, `agent`, `presence`, `shutdown`)

### Nodes (macOS / iOS / Android / headless)
- Connect to the **same WS server** with `role: node`
- Provide a device identity in `connect`; pairing is **device-based**
- Expose commands like `canvas.*`, `camera.*`, `screen.record`, `location.get`

### WebChat
- Static UI that uses the Gateway WS API for chat history and sends
- In remote setups, connects through the same SSH/Tailscale tunnel as other clients

## Wire protocol (summary)

- Transport: WebSocket, text frames with JSON payloads
- First frame **must** be `connect`
- After handshake:
  - Requests: `{type:"req", id, method, params}` → `{type:"res", id, ok, payload|error}`
  - Events: `{type:"event", event, payload, seq?, stateVersion?}`
- Shared-secret auth uses `connect.params.auth.token` or `connect.params.auth.password`
- Idempotency keys are required for side-effecting methods (`send`, `agent`)
- Nodes must include `role: "node"` plus caps/commands/permissions in `connect`

## Pairing + local trust

- All WS clients (operators + nodes) include a **device identity** on `connect`
- New device IDs require pairing approval; the Gateway issues a **device token** for subsequent connects
- Direct local loopback connects can be auto-approved to keep same-host UX smooth
- All connects must sign the `connect.challenge` nonce
- **Non-local** connects still require explicit approval

## Remote access

- Preferred: Tailscale or VPN
- Alternative: SSH tunnel
- TLS + optional pinning can be enabled for WS in remote setups

## Invariants

- Exactly one Gateway controls a single Baileys session per host
- Handshake is mandatory; any non-JSON or non-connect first frame is a hard close
- Events are not replayed; clients must refresh on gaps
