---
tags: [素材, 官方文档]
created: 2026-06-29
updated: 2026-06-29
sources:
  - raw/articles/2026-06-29-playwright-library-docs.md
---

# Playwright Library 官方文档

> Playwright Library API 参考和使用指南

## 一句话摘要

Playwright Library 提供启动浏览器和交互的统一 API，支持 chromium/firefox/webkit 三种浏览器类型。

## 关键信息

- **来源**：[playwright.dev/docs/library](https://playwright.dev/docs/library)
- **类型**：official_docs
- **Tier**：1（官方来源）
- **控制对象**：browser_control
- **技术层级**：tool_implementation
- **收集日期**：2026-06-29

## 核心概念

### BrowserType

用于启动或连接浏览器：
```javascript
const { chromium, firefox, webkit } = require('playwright');
const browser = await chromium.launch();
```

### 对象层次

```
Playwright → BrowserType → Browser → BrowserContext → Page
```

### 关键方法

| 对象 | 方法 | 说明 |
|------|------|------|
| BrowserType | launch() | 启动浏览器 |
| BrowserType | connect() | 连接已有浏览器 |
| Browser | newContext() | 创建隔离上下文 |
| Browser | newPage() | 创建新页面 |
| BrowserContext | route() | 网络请求拦截 |
| Page | goto() | 导航到 URL |
| Page | click() | 点击元素 |
| Page | fill() | 填写输入框 |

## Playwright Library vs Playwright Test

| 特性 | Library | Test |
|------|---------|------|
| 初始化 | 显式创建 | 运行器提供 |
| 断言 | 普通 assert | Web-First |
| 清理 | 显式 close | 自动处理 |
| 运行 | `node script.js` | `npx playwright test` |

## 相关页面

- [[Playwright]] — 主实体页
- [[浏览器控制]] — 主题页
