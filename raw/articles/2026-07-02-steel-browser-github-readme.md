---
source_id: auto-20260702-steel
title: Steel Browser GitHub README
url: https://github.com/steel-dev/steel-browser
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_by: auto_research
confidence: high
---

# Steel Browser — The Open-Source Browser API for AI Agents & Apps

## 项目概览

- **GitHub**: https://github.com/steel-dev/steel-browser
- **Stars**: 6,475+（第三方报道）
- **License**: Apache-2.0
- **主要语言**: TypeScript 85.4%
- **最新版本**: v0.5.3-beta（2026-04-24）
- **Commits**: 245
- **最新提交**: 2026-04-30

## 核心定位

Steel 是一个开源浏览器 API，专为 AI Agent 和应用设计，使其能够与 Web 交互。它是构建实时 Web Agent 和浏览器自动化工具的最佳方式。

## 核心特性

### Full Browser Control
- 底层使用 Puppeteer 和 CDP 协议完全控制 Chrome 实例
- 支持通过 Puppeteer、Playwright 或 Selenium 连接

### Session Management
- 跨请求维护浏览器状态、Cookie 和 Local Storage
- 支持 Session 复用和上下文共享

### Proxy Support
- 内置代理链管理，支持 IP 轮换
- 支持住宅代理（Residential Proxy）

### Extension Support
- 可加载自定义 Chrome 扩展
- 2026 年更新支持 Chrome 146

### Debugging Tools
- 内置请求日志
- UI 界面查看/调试 Session

### Anti-Detection
- Stealth 插件
- 指纹管理（Fingerprint Management）
- CAPTCHA 解决方案（集成 Captchas API）

### Resource Management
- 自动清理和浏览器生命周期管理

### Browser Tools
- 页面转 Markdown
- 页面转 Readability 格式
- 截图
- PDF 导出

## API 架构

### Sessions API
核心 API 端点，用于管理浏览器会话：

**创建 Session（Node SDK）**：
```typescript
import Steel from 'steel-sdk';
const client = new Steel({ baseURL: "http://localhost:3000" });
const session = await client.sessions.create({
  blockAds: true,
  proxyUrl: "user:pass@host:port",
  dimensions: { width: 1280, height: 800 },
});
```

**创建 Session（Python SDK）**：
```python
from steel import Steel
client = Steel(base_url="http://localhost:3000")
session = client.sessions.create(
    block_ads=True,
    proxy_url="user:pass@host:port",
    dimensions={"width": 1280, "height": 800},
)
```

### Quick Actions API
简化的只读操作端点：
- `/v1/scrape` — 提取网页 HTML 内容
- `/v1/screenshot` — 网页截图
- `/v1/pdf` — 导出 PDF

### Selenium 兼容
通过 `isSelenium` 选项创建 Selenium 兼容会话，完全兼容 WebDriver 协议。

## 部署方式

1. **Steel Cloud** — 托管云版本
2. **Docker 预构建镜像**：
   ```bash
   docker run -p 3000:3000 -p 9223:9223 ghcr.io/steel-dev/steel-browser
   ```
3. **Docker Compose**：
   ```bash
   docker compose up
   ```
4. **Node.js 本地运行**：
   ```bash
   npm install && npm run dev
   ```

## 集成生态

### AI Agent 集成
- **Claude Computer Use** — Claude 与 Steel 浏览器配合
- **OpenAI Computer Use** — OpenAI CUA 与 Steel 配合
- **Gemini Computer Use** — Gemini CUA 与 Steel 配合
- **Browser-Use** — Browser-Use 框架与 Steel 配合
- **CrewAI** — CrewAI 多 Agent 框架与 Steel 配合
- **Magnitude** — Magnitude 与 Steel 配合

### SDK 支持
- **Steel TypeScript SDK** — Node.js SDK
- **Steel Python SDK** — Python SDK

### 其他 API
- **Credentials API** — 凭证管理
- **Files API** — 文件管理
- **Extensions API** — 扩展管理
- **Captchas API** — 验证码解决
- **Profiles API** — 配置文件管理

## 技术栈

- **后端**: Node.js + TypeScript (Fastify)
- **浏览器控制**: Puppeteer + CDP
- **前端**: EJS + CSS
- **部署**: Docker
- **数据库**: DuckDB（嵌入式）
- **Web 服务器**: Nginx（反向代理）

## 与竞品对比

| 维度 | Steel Browser | BrowserBase | 直接使用 Playwright |
|------|---------------|-------------|---------------------|
| 部署方式 | 自托管 + 云 | 仅云 | 自行管理 |
| Session 管理 | ✅ 内置 | ✅ 内置 | ❌ 需自行实现 |
| 反检测 | ✅ Stealth 插件 | ✅ 内置 | ❌ 需自行配置 |
| 代理支持 | ✅ 内置轮换 | ✅ 内置 | ❌ 需自行配置 |
| 多框架兼容 | Playwright/Puppeteer/Selenium | Playwright | 仅 Playwright |
| License | Apache-2.0 | 商业 | Apache-2.0 |
