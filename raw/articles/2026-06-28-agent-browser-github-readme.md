---
source_id: auto-2026-06-28-agent-browser-github-readme
title: agent-browser GitHub README
url: https://github.com/vercel-labs/agent-browser
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# agent-browser

Browser automation CLI for AI agents. Fast native Rust CLI.

## Installation

### Global Installation (recommended)

Installs the native Rust binary:

```bash
npm install -g agent-browser
agent-browser install # Download Chrome from Chrome for Testing (first time only)
```

### Project Installation (local dependency)

For projects that want to pin the version in `package.json`:

```bash
npm install agent-browser
agent-browser install
```

Then use via `package.json` scripts or by invoking `agent-browser` directly.

### Homebrew (macOS)

```bash
brew install agent-browser
agent-browser install # Download Chrome from Chrome for Testing (first time only)
```

### Cargo (Rust)

```bash
cargo install agent-browser
agent-browser install # Download Chrome from Chrome for Testing (first time only)
```

### From Source

Requires Node.js 24+, pnpm 11+, and Rust.

```bash
git clone https://github.com/vercel-labs/agent-browser
cd agent-browser
pnpm install
pnpm build
pnpm build:native # Requires Rust (https://rustup.rs)
pnpm link --global # Makes agent-browser available globally
agent-browser install
```

### Linux Dependencies

On Linux, install system dependencies:

```bash
agent-browser install --with-deps
```

This exits nonzero if the package manager cannot install every required browser library.

### Updating

Upgrade to the latest version:

```bash
agent-browser upgrade
```

Detects your installation method (npm, Homebrew, or Cargo) and runs the appropriate update command automatically.

### Requirements

- **Chrome** - Run `agent-browser install` to download Chrome from [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing/) (Google's official automation channel). Existing Chrome, Brave, Playwright, and Puppeteer installations are detected automatically. No Playwright or Node.js required for the daemon.
- **Node.js 24+ and pnpm 11+** - Only needed when building from source.
- **Rust** - Only needed when building from source (see From Source above).

## Quick Start

```bash
agent-browser open example.com
agent-browser snapshot # Get accessibility tree with refs
agent-browser click @e2 # Click by ref from snapshot
agent-browser fill @e3 "test@example.com" # Fill by ref
agent-browser get text @e1 # Get text by ref
agent-browser screenshot page.png
agent-browser close
```

## Key Features

### Refs Mechanism (AI-Native)

The core innovation is the `refs` mechanism that replaces traditional CSS selectors. Instead of telling AI "find the button with class submit", you run `snapshot` to get a snapshot with unique refs for each interactive element (@e1, @e2, etc.).

AI视角：
```
# - button "Submit" [ref=e2]
# - textbox "Email" [ref=e3]
```

操作变得简单："click @e2", "fill @e3 with email"

### Rust CLI + Node.js Daemon

- CLI built with Rust for speed
- Node.js daemon manages browser instances
- Low latency for continuous operations

### Core Commands

#### Browser Control
- `open` - Launch browser (no nav) or navigate to URL
- `click` - Click element
- `dblclick` - Double-click
- `fill` - Clear and fill
- `type` - Type into element
- `press` - Press key
- `keyboard type` - Type at current focus
- `hover` - Hover element
- `select` - Select dropdown option
- `check/uncheck` - Checkbox control
- `scroll` - Scroll in any direction
- `upload` - File upload

#### Page Interaction
- `screenshot` - Screenshot (--full for full page)
- `screenshot --annotate` - Annotated with numbered element labels
- `pdf` - Save as PDF
- `snapshot` - Accessibility tree with refs (best for AI)

#### Data Retrieval
- `get text` - Get text content
- `get html` - Get innerHTML
- `get value` - Get input value
- `get attr` - Get attribute
- `get title` - Page title
- `get url` - Current URL

#### Element Finding (Semantic Locators)
- `find role` - By ARIA role
- `find text` - By text content
- `find label` - By label
- `find placeholder` - By placeholder
- `find alt` - By alt text

#### Session Management
- `tab` - List/switch/close tabs
- `window new` - New window
- `cookies` - Cookie management
- `storage local/session` - Storage management

#### Network Control
- `network route` - Intercept requests
- `network requests` - View tracked requests
- `network har start/stop` - HAR recording

#### AI Integration
- `chat` - AI chat for natural language browser control
- `--json` - Structured output for programmatic use
- Claude Code Skill file provided

### Session Isolation

Multiple sessions with isolated cookies and state - perfect for testing multi-user scenarios.

### Visual Noise Reduction

Filter mode to extract only interactive elements, reducing token usage and improving accuracy.

### Serverless Support

Custom Chromium path support for running in AWS Lambda and similar environments.

## Comparison with Other Tools

| Feature | agent-browser | Playwright | Selenium | Puppeteer |
|---------|---------------|------------|----------|-----------|
| **Target User** | AI Agents | Developers | Developers | Developers |
| **Selector Type** | refs (AI-native) | CSS/XPath | CSS/XPath | CSS/XPath |
| **Performance** | Fast (Rust CLI) | Medium | Slow | Medium |
| ** CDP Native** | Yes | Via Playwright | No | Yes |
| **CLI First** | Yes | Via bindings | No | Via Puppeteer CLI |
| **Session Isolation** | Yes | Yes | Limited | Limited |
