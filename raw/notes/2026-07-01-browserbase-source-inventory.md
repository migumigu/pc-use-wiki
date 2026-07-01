# BrowserBase 官方素材清单

收集日期: 2026-07-01
收集方式: auto_research
平台名称: BrowserBase
平台类型: Cloud Browser Platform / Browser-as-a-Service

---

## 素材列表

### Tier 1 官方素材 (共3个)

| 序号 | 文件名 | 来源类型 | URL | 标题 | 技术层级 |
|------|--------|----------|-----|------|----------|
| 1 | 2026-07-01-browserbase-mcp-server-github-readme.md | github_readme | https://github.com/browserbase/mcp-server-browserbase | Browserbase MCP Server GitHub README | tool_implementation |
| 2 | 2026-07-01-browserbase-official-homepage.md | official_docs | https://www.browserbase.com/ | Browserbase Official Homepage | platform_service |
| 3 | 2026-07-01-browserbase-api-reference-overview.md | official_docs | https://docs.browserbase.com/reference/introduction | Browserbase API Reference Overview | api_reference |

---

## 素材详细说明

### 1. Browserbase MCP Server GitHub README

**文件路径**: `d:\superwiki\pc-use-wiki\raw\articles\2026-07-01-browserbase-mcp-server-github-readme.md`

**核心内容**:
- MCP Server 架构说明
- 6个核心工具: start, end, navigate, act, observe, extract
- 两种传输协议: SHTTP (托管版) 和 STDIO (自托管版)
- 配置参数详解: proxies, verified, keepAlive, contextId, modelName等
- 模型配置: 默认使用 Gemini 2.5 Flash Lite，支持自定义模型
- 部署方式: NPM安装、本地克隆、Docker容器

**关键特性**:
- 提供托管 MCP server (https://mcp.browserbase.com/mcp)
- 集成 Stagehand 框架实现自然语言浏览器控制
- 支持 Verified Identity (高级反检测)
- 支持代理配置和地理位置设置
- 支持 Context 持久化会话状态

---

### 2. Browserbase Official Homepage

**文件路径**: `d:\superwiki\pc-use-wiki\raw\articles\2026-07-01-browserbase-official-homepage.md`

**核心内容**:
- 平台定位: 让 AI Agent 访问整个 Web，将 Web 变得像 API 一样可靠和可编程
- 三大核心 API:
  - **Search API**: 为 Agent 设计的 Web 搜索
  - **Fetch API**: 将任意 URL 转换为 HTML/JSON/Markdown
  - **Browser-as-a-Service**: 提供真实浏览器让 Agent 像人类一样使用 Web
- 8大应用场景: 自动化研究、跨登录墙访问、测试监控、表单填写、价格追踪等
- 统计数据 (2026年3月): 36,925,870 浏览器会话, 800,000 SDK周下载量, 100,000 开发者

**关键价值**:
- 处理认证、动态内容、不可预测的 UI
- 镜像人类交互行为
- 自适应网站更新和变化
- 访问 API 无法覆盖的 85% 的 Web 内容

---

### 3. Browserbase API Reference Overview

**文件路径**: `d:\superwiki\pc-use-wiki\raw\articles\2026-07-01-browserbase-api-reference-overview.md`

**核心内容**:
- **Sessions API**: 创建和管理浏览器会话
  - POST /v1/sessions 创建会话
  - 参数: projectId, timeout (60-21600秒), keepAlive, proxies, region, browserSettings
  - 返回: connectUrl (WebSocket), seleniumRemoteUrl (HTTP), signingKey
  - 状态: PENDING, RUNNING, ERROR, TIMED_OUT, COMPLETED
- **Node.js SDK**: @browserbasehq/sdk
  - 与 Playwright 集成示例
  - 完整配置选项: 代理、区域、超时、浏览器设置
  - 支持高级特性: blockAds, solveCaptchas, verified, context持久化
- **Regions**: us-west-2, us-east-1, eu-central-1, ap-southeast-1

**关键 API 能力**:
- Context API: 跨会话复用浏览器环境
- Projects API: 项目级用量查看
- Proxy 配置: Browserbase托管代理 + 地理位置选择，或外部代理
- Browser Settings: 广告拦截、CAPTCHA自动解决、会话录制、日志记录

---

## 技术架构总结

### 核心定位
BrowserBase 是一个云浏览器平台，提供:
1. **云浏览器实例**: 通过 CDP/WebSocket 连接远程浏览器
2. **Agent 工具链**: MCP Server + Stagehand SDK 实现自然语言控制
3. **基础设施服务**: 代理网络、反检测、会话管理、录制回放

### 技术栈
- **协议层**: MCP (Model Context Protocol) + CDP (Chrome DevTools Protocol)
- **SDK层**: Stagehand (自然语言浏览器控制) + Node.js SDK + Python SDK
- **框架集成**: Playwright, Puppeteer, Selenium, LangChain, CrewAI, Mastra
- **AI模型**: 默认 Gemini 2.5 Flash Lite，支持 GPT-4o, Claude, 其他 LLM

### 与 PC Agent 的关系
- **Browser Control**: BrowserBase 提供云浏览器基础设施
- **Agent Integration**: 通过 MCP Server 让 AI Agent 控制浏览器
- **Use Cases**: 自动化测试、数据采集、表单填写、跨网站工作流

---

## 素材质量评估

| 评估维度 | 评分 | 说明 |
|----------|------|------|
| 官方权威性 | ⭐⭐⭐⭐⭐ | GitHub官方仓库 + 官网 + 官方文档 |
| 内容完整性 | ⭐⭐⭐⭐⭐ | 涵盖架构、API、SDK、配置、示例 |
| 技术深度 | ⭐⭐⭐⭐⭐ | API参数详尽、代码示例完整、配置选项全面 |
| 时效性 | ⭐⭐⭐⭐⭐ | 2026年3月最新统计数据，持续更新 |
| 可操作性 | ⭐⭐⭐⭐⭐ | 提供完整部署指南和配置示例 |

---

## 后续研究建议

1. **对比研究**: BrowserBase vs Stagehand vs Playwright MCP 的架构差异
2. **深度调研**: Verified Identity 反检测技术的实现原理
3. **集成测试**: 在实际 Agent 项目中测试 BrowserBase MCP Server
4. **成本分析**: BrowserBase 云浏览器服务的成本结构和性价比
5. **竞品分析**: BrowserBase vs 其他云浏览器平台 (如 Browserless, Bright Data)

---

## 素材收集状态

✅ **已完成**: 3个 Tier 1 官方素材已收集并保存
✅ **格式规范**: 所有素材包含完整 frontmatter 元数据
✅ **内容完整**: 每个素材包含核心技术信息和关键特性说明
✅ **清单生成**: 素材清单文件已保存到指定目录