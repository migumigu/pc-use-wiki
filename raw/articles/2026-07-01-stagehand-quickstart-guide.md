---
source_id: auto-2026-07-01-c5e1
title: Stagehand Quickstart Guide
url: https://docs.stagehand.dev/v3/first-steps/quickstart
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# Quickstart

Stagehand allows you to build web automations with natural language and code.

The quickest way to start with Stagehand is with our CLI. It scaffolds a ready‑to‑run Stagehand app with sensible defaults, and an example script. You can also try Stagehand using our [MCP server](https://docs.stagehand.dev/v3/integrations/mcp/introduction).

This quickstart is for **TypeScript**. For other languages, change the language selector in the top left corner.

## 1) Create a sample project

Bash

```
npx create-browser-app
```

## 2) Run it

Follow the CLI prompts to enter the project directory and add your API keys. Then run the example script.

Bash

```
cd my-stagehand-app # Enter the project directory
cp .env.example .env # Add your API keys
npm start # Run the example script
```

## 3) Use Stagehand (act, extract, observe)

The scaffold includes an index.ts file that contains the example script. Here's what it looks like:

TypeScript

```typescript
import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";

async function main() {
  const stagehand = new Stagehand({
    env: "BROWSERBASE"
  });

  await stagehand.init();

  console.log(`Stagehand Session Started`);
  console.log(`Watch live: https://browserbase.com/sessions/${stagehand.browserbaseSessionID}`);

  const page = stagehand.context.pages()[0];

  await page.goto("https://stagehand.dev");

  const extractResult = await stagehand.extract("Extract the value proposition from the page.");
  console.log(`Extract result:\n`, extractResult);

  await stagehand.act("Click the 'Evals' button.");

  const observeResult = await stagehand.observe("What can I click on this page?");
  console.log(`Observe result:\n`, observeResult);

  const agent = stagehand.agent({
    mode: "cua",
    model: "google/gemini-2.5-computer-use-preview-10-2025",
    systemPrompt: "You're a helpful assistant that can control a web browser.",
  });

  const agentResult = await agent.execute("What is the most accurate model to use in Stagehand?");
  console.log(`Agent result:\n`, agentResult);

  await stagehand.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

To use, set provider keys in `.env` (e.g., `OPENAI_API_KEY`). For cloud browsers, add `BROWSERBASE_API_KEY`.

## Next steps

Learn about the Stagehand primitives: act, extract, observe, and agent.

## Act

Perform actions on web pages with natural language

## Extract

Get structured data with Zod schemas

## Observe

Discover available elements and actions

## Agent

Autonomous multi-step browser workflows