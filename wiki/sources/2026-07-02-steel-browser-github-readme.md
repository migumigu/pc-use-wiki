---
tags: [浏览器API, AI-Agent基础设施, CDP, Puppeteer]
created: 2026-07-02
updated: 2026-07-02
sources:
  - raw/articles/2026-07-02-steel-browser-github-readme.md
---

# Steel Browser GitHub README

> 专为 AI Agent 设计的开源浏览器 API，提供会话管理、反检测和多框架兼容

## 核心信息

- **项目地址**: https://github.com/steel-dev/steel-browser
- **Stars**: 约 6,475+（第三方报道）
- **License**: Apache-2.0
- **语言**: TypeScript 85.4%
- **最新版本**: v0.5.3-beta（2026-04-24）
- **最新提交**: 2026-04-30

## 技术亮点

1. **全浏览器控制**：基于 Puppeteer + CDP 协议，支持 Playwright/Puppeteer/Selenium 三框架
2. **Session 管理**：跨请求维护浏览器状态、Cookie、Local Storage
3. **反检测机制**：Stealth 插件 + 指纹管理 + CAPTCHA 解决方案
4. **代理轮换**：内置代理链管理，支持 IP 轮换和住宅代理
5. **Quick Actions API**：一行 HTTP 请求完成 scrape/screenshot/pdf

## API 架构

- **Sessions API** — 核心会话管理端点
- **Quick Actions API** — 简化只读操作（/scrape, /screenshot, /pdf）
- **Credentials API** — 凭证管理
- **Files API** — 文件管理
- **Extensions API** — Chrome 扩展管理
- **Captchas API** — 验证码解决
- **Profiles API** — 配置文件管理

## 集成生态

- Claude Computer Use / OpenAI Computer Use / Gemini Computer Use
- Browser-Use / CrewAI / Magnitude
- Node SDK + Python SDK

## 与知识库其他项目的关系

- 与 [[Browserbase]] 同为 AI Agent 浏览器基础设施，但 Steel 支持自托管
- 底层使用 [[Playwright]]/Puppeteer + CDP，与 [[chrome-devtools-mcp]] 共享 CDP 机制
- 与 [[bb-browser]] 类似的会话状态管理
- 为 [[Computer-Use]] 系列 Agent 提供浏览器后端

## 相关页面

- [[Steel-Browser]]
- [[Browserbase]]
- [[Playwright]]
- [[chrome-devtools-mcp]]
- [[浏览器控制]]
