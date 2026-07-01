---
source_id: auto-2026-07-01-b3d8
title: Stagehand Official Documentation Homepage
url: https://docs.stagehand.dev/
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Introducing Stagehand

Developers use Stagehand to reliably automate the web.

Stagehand is a browser automation framework used to control web browsers with natural language and code. By combining the power of AI with the precision of code, Stagehand makes web automation flexible, maintainable, and actually reliable.

## The Problem with Browser Automation

Traditional frameworks like Playwright and Puppeteer force you to write brittle scripts that break with every UI change. Web agents promise to solve this with AI, but leave you at the mercy of unpredictable behavior.

**You're stuck between two bad options:**

- **Too brittle**: Traditional selectors break when websites change
- **Too agentic**: AI agents are unpredictable and impossible to debug

## Enter Stagehand

Stagehand gives you the best of both worlds through four powerful primitives that let you choose exactly how much AI to use:

## Act

[Execute actions using natural language](https://docs.stagehand.dev/v3/basics/act)

## Extract

[Pull structured data with schemas](https://docs.stagehand.dev/v3/basics/extract)

## Observe

[Discover available actions on any page](https://docs.stagehand.dev/v3/basics/observe)

## Agent

[Automate entire workflows autonomously](https://docs.stagehand.dev/v3/basics/agent)

```typescript
// Act - Execute natural language actions
await stagehand.act("click the login button");

// Extract - Pull structured data
const price = await stagehand.extract(
  "extract the price",
  z.number()
);

// Observe - Discover available actions
const actions = await stagehand.observe("find submit buttons");

// Agent - Automate entire workflows
const agent = stagehand.agent({
  mode: "cua",
  model: "google/gemini-2.5-computer-use-preview-10-2025",
});
await agent.execute("apply for this job");
```

## Why Developers Choose Stagehand

- **Precise Control**: Mix AI-powered actions with deterministic code. You decide exactly how much AI to use.

- **Actually Repeatable**: Save and replay actions exactly. No more "it worked on my machine" with browser automations.

- **Maintainable at Scale**: One script can automate multiple websites. When sites change, your automations adapt.

- **Composable Tools**: Choose your level of automation with Act, Extract, Observe, and Agent.

## Built for Modern Development

Stagehand is designed for developers building production browser automations and AI agents that need reliable web access.

### Works Everywhere

Compatible with all Chromium-based browsers: Chrome, Edge, Arc, Brave, and more.

### Built by Browserbase

Created and maintained by the team behind enterprise browser infrastructure.

## Get Started in 60 Seconds

**Pro tip**: For best results, we recommend using Stagehand with [Browserbase](https://www.browserbase.com/) for reliable cloud browser infrastructure.

## [Quickstart](https://docs.stagehand.dev/v3/first-steps/quickstart)

[Build your first automation in under a minute](https://docs.stagehand.dev/v3/first-steps/quickstart)

## [Try Director](https://www.director.ai/)

[Generate Stagehand scripts with AI](https://www.director.ai/)

## [View Templates](https://www.browserbase.com/templates)

[See real-world automation examples](https://www.browserbase.com/templates)

## [Join Discord](https://stagehand.dev/discord)

[Get help from the community](https://stagehand.dev/discord)