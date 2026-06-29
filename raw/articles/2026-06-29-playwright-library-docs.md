---
source_id: auto-2026-06-29-playwright-library-docs
title: Playwright Library 官方文档
url: https://playwright.dev/docs/library
source_type: official_docs
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Playwright Library 官方文档

## Playwright Library vs Playwright Test

**Playwright Library**：提供启动浏览器和交互的统一 API
**Playwright Test**：在 Library 基础上提供完整的端到端测试运行器

## 核心概念

### BrowserType

用于启动或连接浏览器：
```javascript
const { chromium, firefox, webkit } = require('playwright');
const browser = await chromium.launch();
```

### Browser

通过 `browserType.launch()` 创建 Browser 实例。

主要方法：
- `browser.newPage()`：创建新页面
- `browser.newContext()`：创建新浏览器上下文
- `browser.close()`：关闭浏览器

### BrowserContext

独立的浏览器会话，相当于新鲜浏览器 profile。用于：
- 测试隔离
- 保存认证状态
- 并行执行

### Page

在 Context 内操作的页面对象：
```javascript
await page.goto('https://example.com/');
await page.screenshot({ path: 'screenshot.png' });
```

## API 特性

### 设备模拟

```javascript
const { devices } = require('playwright');
const context = await browser.newContext(devices['iPhone 11']);
```

### 网络拦截

```javascript
await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
```

### Locators

Playwright 提供了模拟用户视角的弹性定位器：
```javascript
page.getByRole('button', { name: 'Submit' })
page.getByLabel('Email')
page.getByPlaceholder('Search...')
page.getByTestId('login-form')
```

## 关键差异

| 特性 | Library | Test |
|------|---------|------|
| 安装 | `npm install playwright` | `npm init playwright@latest` |
| 初始化 | 显式创建 browser/context/page | 由测试运行器提供 |
| 断言 | 普通 assert | Web-First Assertions |
| 超时 | 默认 30s | 每个测试有超时（默认 30s） |
| 清理 | 显式 close | 测试运行器自动处理 |
| 运行方式 | `node script.js` | `npx playwright test` |

## 浏览器下载

```bash
npx playwright install chromium firefox webkit
```

或使用 helper 包：
```bash
npm install @playwright/browser-chromium
```

## TypeScript 支持

Playwright 内置 TypeScript 支持，类型定义自动导入。

## 系统要求

- Node.js: latest 22.x, 24.x 或 26.x
- Windows 11+, Windows Server 2019+ 或 WSL
- macOS 14 (Sonoma) 或更高版本
- Debian 12/13, Ubuntu 22.04/24.04/26.04 (x86-64 或 arm64)
