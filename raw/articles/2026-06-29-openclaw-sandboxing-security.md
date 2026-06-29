---
source_id: auto-20260629-kl12
title: OpenClaw Sandboxing & Security
url: https://docs.openclaw.ai/gateway/sandboxing
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: agent_integration
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Sandboxing

OpenClaw can run **tools inside sandbox backends** to reduce blast radius. This is **optional** and controlled by configuration. If sandboxing is off, tools run on the host.

**Note**: This is not a perfect security boundary, but it materially limits filesystem and process access when the model does something dumb.

## What gets sandboxed

- Tool execution (`exec`, `read`, `write`, `edit`, `apply_patch`, `process`, etc.)
- Optional sandboxed browser (`agents.defaults.sandbox.browser`)

Not sandboxed:
- The Gateway process itself
- Any tool explicitly allowed to run outside the sandbox (e.g. `tools.elevated`)

## Modes

`agents.defaults.sandbox.mode` controls **when** sandboxing is used:

### off
No sandboxing.

### non-main
Sandbox only **non-main** sessions (default if you want normal chats on host).

`"non-main"` is based on `session.mainKey` (default `"main"`), not agent id. Group/channel sessions use their own keys, so they count as non-main and will be sandboxed.

### all
Every session runs in a sandbox.

## Scope

`agents.defaults.sandbox.scope` controls **how many containers** are created:

- `"agent"` (default): one container per agent
- `"session"`: one container per session
- `"shared"`: one container shared by all sandboxed sessions

## Backend

`agents.defaults.sandbox.backend` controls **which runtime** provides the sandbox:

- `"docker"` (default when sandboxing is enabled): local Docker-backed sandbox runtime
- `"ssh"`: generic SSH-backed remote sandbox runtime
- `"openshell"`: OpenShell-backed sandbox runtime

### Choosing a backend

| | Docker | SSH | OpenShell |
|-|--------|-----|-----------|
| **Where it runs** | Local container | Any SSH-accessible host | OpenShell managed sandbox |
| **Setup** | `scripts/sandbox-setup.sh` | SSH key + target host | OpenShell plugin enabled |
| **Workspace model** | Bind-mount or copy | Remote-canonical (seed once) | `mirror` or `remote` |
| **Browser sandbox** | Supported | Not supported | Not supported yet |
| **Best for** | Local dev, full isolation | Offloading to a remote machine | Managed remote sandboxes |

### Docker backend

- Executes tools and sandbox browsers locally via the Docker daemon socket
- Sandbox container isolation is determined by Docker namespaces
- To expose host GPUs: set `agents.defaults.sandbox.docker.gpus`

**Docker-out-of-Docker (DooD) constraints**: If you deploy the OpenClaw Gateway itself as a Docker container, it orchestrates sibling sandbox containers using the host's Docker socket (DooD).

### SSH backend

Use `backend: "ssh"` when you want OpenClaw to sandbox `exec`, file tools, and media reads on an arbitrary SSH-accessible machine.

This is a **remote-canonical** model. The remote SSH workspace becomes the real sandbox state after the initial seed.

### OpenShell backend

OpenShell reuses the same core SSH transport and remote filesystem bridge as the generic SSH backend, and adds OpenShell-specific lifecycle plus the optional `mirror` workspace mode.

OpenShell modes:
- `mirror` (default): local workspace stays canonical. OpenClaw syncs local files into OpenShell before exec and syncs the remote workspace back after exec.
- `remote`: OpenShell workspace is canonical after the sandbox is created. OpenClaw seeds the remote workspace once from the local workspace, then file tools and exec run directly against the remote sandbox without syncing changes back.

## Workspace access

`agents.defaults.sandbox.workspaceAccess` controls **what the sandbox can see**:
- `none` (default): no workspace access
- `ro`: read-only access
- `rw`: read-write access
