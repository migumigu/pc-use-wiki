---
tags: [工具, 浏览器API, AI-Agent基础设施, CDP]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-steel-browser-github-readme.md
---

# Steel Browser

> 专为 AI Agent 设计的开源浏览器 API，支持多框架兼容、会话管理和反检测

## 基本信息

| 属性 | 值 |
|------|-----|
| 类型 | 浏览器基础设施/API |
| 开发者 | steel-dev |
| GitHub | https://github.com/steel-dev/steel-browser
| Stars | 约 6,475+（第三方报道）<!-- confidence: UNVERIFIED --> |
| License | Apache-2.0 |
| 语言 | TypeScript 85.4% |
| 最新版本 | v0.5.3-beta（2026-04-24） |
| Commits | 245 |

## 核心能力

1. **全浏览器控制**：Puppeteer + CDP，支持 Playwright/Puppeteer/Selenium
2. **Session 管理**：跨请求维护状态、Cookie、LocalStorage
3. **反检测**：Stealth 插件 + 指纹管理 + CAPTCHA 解决
4. **代理轮换**：内置 IP 轮换 + 住宅代理支持
5. **Quick Actions**：一行 HTTP 请求完成 scrape/screenshot/pdf
6. **扩展支持**：Chrome 146 扩展加载
7. **Human-in-the-Loop**：内置调试 UI 和会话查看器

## API 体系

| API | 用途 |
|-----|------|
| Sessions API | 核心浏览器会话管理 |
| Quick Actions API | 简化只读操作 |
| Credentials API | 凭证管理 |
| Files API | 文件管理 |
| Extensions API | Chrome 扩展管理 |
| Captchas API | 验证码解决 |
| Profiles API | 配置文件管理 |

## AI Agent 集成

- **Claude Computer Use** — Claude CUA + Steel 浏览器
- **OpenAI Computer Use** — OpenAI CUA + Steel 浏览器
- **Gemini Computer Use** — Gemini CUA + Steel 浏览器
- **Browser-Use** — Browser-Use 框架 + Steel
- **CrewAI** — 多 Agent 框架 + Steel

## 与同类工具对比

| 维度 | Steel Browser | BrowserBase | 直接 Playwright |
|------|---------------|-------------|-----------------|
| 部署 | 自托管+云 | 仅云 | 自行管理 |
| Session 管理 | ✅ 内置 | ✅ 内置 | ❌ |
| 反检测 | ✅ Stealth | ✅ 内置 | ❌ |
| 代理支持 | ✅ 内置轮换 | ✅ 内置 | ❌ |
| 多框架兼容 | Playwright/Puppeteer/Selenium | Playwright | 仅 Playwright |
| License | Apache-2.0 | 商业 | Apache-2.0 |

## 技术架构

- **后端**: Node.js + TypeScript (Fastify)
- **浏览器控制**: Puppeteer + CDP
- **部署**: Docker / npm
- **数据库**: DuckDB（嵌入式）

## 相关页面

- [[Browserbase]]
- [[Playwright]]
- [[chrome-devtools-mcp]]
- [[bb-browser]]
- [[浏览器控制]]
