---
source_id: auto-2026-06-28-agent-browser-commands-docs
title: agent-browser Commands Documentation
url: https://agent-browser.dev/commands
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# agent-browser Commands Documentation

## Core Commands

### Browser Launch
- `open` - Launch browser (no nav); stays on about:blank
- `open <url>` - Launch + navigate (aliases: goto, navigate)

### Element Interaction
- `click <sel>` - Click element (--new-tab to open in new tab)
- `dblclick <sel>` - Double-click
- `fill <sel> <text>` - Clear and fill
- `type <sel> <text>` - Type into element
- `press <key>` - Press key (Enter, Tab, Control+a)
- `keyboard type <text>` - Type at current focus (no selector)
- `keyboard inserttext <text>` - Insert text without key events
- `keydown/keyup <key>` - Hold/release key
- `hover/focus <sel>` - Hover or focus element
- `select <sel> <val>` - Select dropdown option
- `check/uncheck <sel>` - Checkbox control
- `scroll <dir> [px]` - Scroll (up/down/left/right)
- `scrollintoview <sel>` - Scroll element into view
- `drag <src> <dst>` - Drag and drop
- `upload <sel> <files>` - Upload files

### Page Capture
- `screenshot [path]` - Screenshot (--full for full page)
- `screenshot --annotate` - Annotated with numbered element labels
- `pdf <path>` - Save as PDF

### AI-Native Snapshot
- `snapshot` - Accessibility tree with refs (best for AI)
- Returns structured output with refs like @e1, @e2

### Data Retrieval
- `get text/html/value/attr <sel>` - Get element content
- `get title/url/cdp-url` - Get page info
- `get count/box/styles <sel>` - Get element metrics

### Semantic Locators
- `find role <role> <action>` - By ARIA role
- `find text <text> <action>` - By text content
- `find label <label> <action>` - By label
- `find placeholder/alt/title/testid`

### Wait Conditions
- `wait <selector>` - Wait for element
- `wait <ms>` - Wait for time
- `wait --text/--url/--load/--fn` - Various wait conditions
- `wait --download [path]` - Wait for download

### Mouse Control
- `mouse move <x> <y>` - Move mouse
- `mouse down/up [button]` - Press/release button
- `mouse wheel <dy> [dx]` - Scroll wheel

### Clipboard
- `clipboard read/write/copy/paste` - Clipboard operations

### Browser Settings
- `set viewport <w> <h>` - Set viewport size
- `set device <name>` - Emulate device
- `set geo <lat> <lng>` - Set geolocation
- `set offline/media/headers/credentials` - Various settings

### Cookies & Storage
- `cookies [set/clear]` - Cookie management
- `storage local/session` - Web Storage management

### Network
- `network route <url>` - Intercept requests
- `network requests` - View tracked requests
- `network har start/stop` - HAR recording

### Tabs & Windows
- `tab [new/close]` - Tab management
- Tab ids: stable strings (t1, t2, t3)
- Tab labels: user-assigned names (docs, app, admin)
- `window new` - New browser window
- `frame <sel>` - Switch to iframe

### Dialogs
- `dialog accept/dismiss/status` - Dialog handling
- Auto-accept alert/beforeunload by default

### Debug
- `trace start/stop` - Performance tracing
- `profiler start/stop` - Chrome DevTools profiling
- `record start/stop` - Video recording (WebM)
- `console/errors` - View logs
- `highlight/inspect` - Visual debugging

### Auth Vault
- `auth save/login/list/show/delete` - Credential management
- `state save/load/list/show/clear` - Auth state management

### Sessions & Profiles
- `session list` - Active sessions
- `profiles` - Chrome profiles
- `dashboard` - Dashboard server

### Developer Tools
- `eval <js>` - Run JavaScript
- `connect <port|url>` - Connect via CDP
- `stream enable/status/disable` - WebSocket streaming
- `doctor` - Diagnose installation

## Key Design Patterns

### Refs System
Refs (@e1, @e2, etc.) are scoped to the tab that was active when snapshot ran.
Switch tabs first, then snapshot and interact.

### Stable Tab IDs
Tab IDs (t1, t2, t3) are stable and never reused within a session.

### Batch Execution
```
agent-browser batch "open url" "snapshot" "click @e1" "screenshot"
```

### Pre-navigation Setup
Use `open` with no URL to stage cookies/routes, then navigate:
```
agent-browser batch '["open"]' '["cookies","set","--curl","cookies.curl"]' '["navigate","http://localhost:3000"]'
```
