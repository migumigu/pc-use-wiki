---
source_id: auto-2026-07-01-bb03
title: Browserbase API Reference Overview
url: https://docs.browserbase.com/reference/introduction
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: api_reference
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# APIs and SDKs

Choose your favorite way to interact with browser fleets.

Fetch the complete documentation index at: https://docs.browserbase.com/llms.txt

## Understanding browser sessions

A browser session is the fundamental building block in Browserbase — it represents a single browser instance running in the cloud. Before diving into the APIs, familiarize yourself with the core concepts:

- [Create a browser session](https://docs.browserbase.com/platform/browser/getting-started/create-browser-session): Learn how to create and configure browser sessions
- [Using browser sessions](https://docs.browserbase.com/platform/browser/getting-started/using-browser-session): Connect and interact with browser sessions using your preferred framework
- [Managing sessions](https://docs.browserbase.com/platform/browser/getting-started/manage-browser-session): Understand session lifecycle and proper termination
- [Session inspector](https://docs.browserbase.com/platform/browser/observability/observability): Monitor and debug your browser sessions in real-time

## Get started with Python and Node.js

- [Node.js SDK](https://docs.browserbase.com/reference/sdk/nodejs): Browserbase for Node.js
- [Python SDK](https://docs.browserbase.com/reference/sdk/python): Quickly load pages and take screenshots with Python > 3.x

## Get full control of browsers via the APIs

- [Sessions API](https://docs.browserbase.com/reference/api/create-a-session): Create and manage browser sessions with full programmatic control.
- [Projects API](https://docs.browserbase.com/reference/api/get-project-usage): View project-wide usage.
- [Contexts API](https://docs.browserbase.com/reference/api/create-a-context): Configure and reuse browser environments across multiple sessions.

---

# Sessions API - Create a Session

POST /v1/sessions

## Request Example

```bash
curl --request POST \
  --url https://api.browserbase.com/v1/sessions \
  --header 'Content-Type: application/json' \
  --header 'X-BB-API-Key: <api-key>' \
  --data '{}'
```

## Response (201)

```json
{
  "id": "<string>",
  "createdAt": "2023-11-07T05:31:56Z",
  "updatedAt": "2023-11-07T05:31:56Z",
  "projectId": "<string>",
  "startedAt": "2023-11-07T05:31:56Z",
  "expiresAt": "2023-11-07T05:31:56Z",
  "proxyBytes": 123,
  "keepAlive": true,
  "connectUrl": "<string>",
  "seleniumRemoteUrl": "<string>",
  "signingKey": "<string>",
  "endedAt": "2023-11-07T05:31:56Z",
  "contextId": "<string>",
  "userMetadata": {}
}
```

## Authorizations

**X-BB-API-Key** (string, header, required)
Your Browserbase API Key from Settings.

## Body Parameters (application/json)

**projectId** (string)
The Project ID. Can be found in Settings. Optional - if not provided, the project will be inferred from the API key.

**extensionId** (string)
The uploaded Extension ID. See Upload Extension.

**browserSettings** (object)

**timeout** (integer)
Duration in seconds after which the session will automatically end. Defaults to the Project's defaultTimeout.
Required range: 60 <= x <= 21600

**keepAlive** (boolean)
Set to true to keep the session alive even after disconnections. Available on the Hobby Plan and above.

**proxies** (object[] | boolean | object[])
Proxy configuration. Can be true for default proxy, or an array of proxy configurations.

**proxySettings** (object)
Supplementary proxy settings. Optional.

**region** (enum<string>, default: us-west-2)
The region where the Session should run.
Available options: us-west-2, us-east-1, eu-central-1, ap-southeast-1

**userMetadata** (object)
Arbitrary user metadata to attach to the session.

## Response Fields (201 - application/json)

**id** (string, required)

**createdAt** (string<date-time>, required)

**updatedAt** (string<date-time>, required)

**projectId** (string, required)
The Project ID linked to the Session.

**startedAt** (string<date-time>, required)

**expiresAt** (string<date-time>, required)

**status** (enum<string>, required)
Available options: PENDING, RUNNING, ERROR, TIMED_OUT, COMPLETED

**proxyBytes** (integer, required)
Bytes used via the Proxy

**keepAlive** (boolean, required)
Indicates if the Session was created to be kept alive upon disconnections

**region** (enum<string>, required)
The region where the Session is running.

**connectUrl** (string<uri>, required)
WebSocket URL to connect to the Session.

**seleniumRemoteUrl** (string<uri>, required)
HTTP URL to connect to the Session.

**signingKey** (string, required)
Signing key to use when connecting to the Session via HTTP.

**endedAt** (string<date-time>)

**contextId** (string)
Optional. The Context linked to the Session.

**userMetadata** (object)
Arbitrary user metadata to attach to the session.

---

# Node.js SDK

All the features and utilities for fast Node.js development with Browserbase.

## Installation

```bash
npm install -S @browserbasehq/sdk
```

## Basic usage

Here's an example using the Browserbase Node.js SDK to create and connect to a session with Playwright:

```javascript
import { chromium } from "playwright-core";
import Browserbase from "@browserbasehq/sdk";

const bb = new Browserbase({
  apiKey: process.env.BROWSERBASE_API_KEY!,
});

// Create a new session
const session = await bb.sessions.create();

// Connect to the session
const browser = await chromium.connectOverCDP(session.connectUrl);

// Getting the default context to ensure the sessions are recorded
const defaultContext = browser.contexts()[0];
const page = defaultContext.pages()[0];

await page.goto("https://news.ycombinator.com/");
await page.close();
await browser.close();

console.log(`Session complete! View recording at https://browserbase.com/sessions/${session.id}`);
```

## Session configuration

Pass configuration options when creating a session to customize browser behavior.

### All configuration options

```javascript
const session = await bb.sessions.create({
  // Project ID (optional - inferred from API key if not provided)
  projectId: "your-project-id",

  // Proxy configuration
  proxies: true, // Use default proxy

  // Region where the session runs
  region: "us-west-2",

  // Keep session alive after disconnection
  keepAlive: true,

  // Session timeout in seconds (60-21600)
  timeout: 3600,

  // Extension ID (uploaded via Upload Extension API)
  extensionId: "ext_abc123",

  // Browser settings
  browserSettings: {
    // Toggle features
    blockAds: true,
    solveCaptchas: true,
    recordSession: true,
    logSession: true,
    verified: true,

    // Operating system (only available with verified)
    // Controls user agent and environment signals
    os: "windows",

    // Context for session persistence
    context: {
      id: "my-context-id",
      persist: true,
    },

    // Viewport configuration (ignored when verified is enabled)
    viewport: {
      width: 1920,
      height: 1080,
    },

    // Custom CAPTCHA selectors
    captchaImageSelector: "#captcha-image",
    captchaInputSelector: "#captcha-input",
  },

  // Custom metadata for the session
  userMetadata: {
    userId: "user_123",
    taskName: "data-extraction-job",
  },
});
```

### Proxy configuration

Configure proxies as a boolean or as an array for more control:

```javascript
// Using Browserbase managed proxy with geolocation
const session = await bb.sessions.create({
  proxies: [
    {
      type: "browserbase",
      geolocation: {
        country: "US",
        state: "CA",
        city: "San Francisco",
      },
    },
  ],
});

// Using external proxy
const session = await bb.sessions.create({
  proxies: [
    {
      type: "external",
      server: "http://proxy.example.com:8080",
      username: "user",
      password: "pass",
      domainPattern: "*.example.com",
    },
  ],
});

// Multiple proxies with domain patterns
const session = await bb.sessions.create({
  proxies: [
    {
      type: "browserbase",
      geolocation: { country: "US" },
      domainPattern: "*.google.com",
    },
    {
      type: "external",
      server: "http://proxy.example.com:8080",
      domainPattern: "*.example.com",
    },
  ],
});
```

### Common configuration examples

```javascript
// Verified with proxy
const session = await bb.sessions.create({
  proxies: true,
  browserSettings: {
    verified: true,
    os: "windows",
  },
});

// Long-running session with keep-alive
const session = await bb.sessions.create({
  timeout: 21600, // 6 hours
  keepAlive: true,
});

// Session with context persistence
const session = await bb.sessions.create({
  browserSettings: {
    context: {
      id: "user-session-context",
      persist: true,
    },
  },
});

// Custom viewport and ad blocking
const session = await bb.sessions.create({
  browserSettings: {
    viewport: { width: 1440, height: 900 },
    blockAds: true,
  },
});

// Mobile viewport
const session = await bb.sessions.create({
  browserSettings: {
    viewport: { width: 390, height: 844 },
  },
});

// Session in specific region with metadata
const session = await bb.sessions.create({
  region: "eu-central-1",
  userMetadata: {
    jobId: "job_456",
    environment: "production",
  },
});
```

## References

- [Examples](https://github.com/browserbase/sdk-node/tree/main/examples): Quickstart examples using CAPTCHA solving, proxies, extensions, and more
- [npm package](https://www.npmjs.com/package/@browserbasehq/sdk): View the package on NPM
- [SDK reference](https://github.com/browserbase/sdk-node/blob/main/api.md): View the complete SDK reference documentation