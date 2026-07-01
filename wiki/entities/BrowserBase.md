---
tags: [浏览器控制, 云平台, MCP, 基础设施]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-browserbase-official-homepage]]"
  - "[[2026-07-01-browserbase-api-reference-overview]]"
---

# BrowserBase

> Browserbase公司提供的云浏览器平台，10K+公司使用，36M+月活浏览器会话，为AI Agent提供可靠的云端浏览器基础设施

## 基本信息

- **开发方**: Browserbase公司
- **用户规模**: 10K+ 公司使用
- **月活会话**: 36,925,870（March 2026，官网实时数据）
- **官网**: https://www.browserbase.com/
- **文档**: https://docs.browserbase.com/
- **核心定位**: "Give your agents access to the whole web"

## 三大核心API

| API | 功能 | 核心能力 |
|-----|------|----------|
| **Search API** | Web搜索 | 快速定位相关网站 |
| **Fetch API** | 内容抓取 | URL → HTML/JSON/Markdown |
| **Browser-as-a-Service** | 云浏览器 | 登录态、交互、复杂操作 |

## 核心价值

**为AI Agent构建浏览器基础设施**：
- 85%的Web内容API无法触及 → BrowserBase通过浏览器访问
- 登录态、动态内容、复杂交互 → 全程自动化
- 生产级可靠性 → 36M+月活会话支撑

## 技术架构

**Sessions API**：
- 创建/复用浏览器会话
- Context机制保存登录态
- 支持代理配置、区域选择
- Keep Alive会话保持

**Node.js SDK**：
```javascript
import Browserbase from '@browserbasehq/sdk';

const bb = new Browserbase({
  apiKey: process.env.BROWSERBASE_API_KEY,
  projectId: process.env.BROWSERBASE_PROJECT_ID,
});

const session = await bb.sessions.create();
```

**核心能力**：
1. **登录态保持** - Context机制保存会话状态
2. **手动MFA绕过** - 支持人工介入验证
3. **代理配置** - 全球节点、区域选择
4. **并行会话** - 数千并发浏览器实例

## MCP集成

通过 **mcp-server-browserbase** 与Claude Desktop/IDE集成：
- 托管地址：`https://mcp.browserbase.com/mcp`
- 默认模型：Gemini 2.5 Flash Lite（免费）
- 6个工具：start/end/navigate/act/observe/extract

## 应用场景

**官方模板**：
- Google Trends关键词监控
- 自动求职申请
- KYC业务验证
- 网站链接测试器
- 动态表单填充
- Amazon价格对比
- 财务报表下载

## 与Stagehand配合

Stagehand + BrowserBase 构成完整技术栈：
- Stagehand提供智能层（AI+代码混合控制）
- BrowserBase提供基础设施层（云浏览器）

**一键启动**：
```bash
npx create-browser-app
```

## 局限性

- 付费服务（免费额度有限）
- Scale Plan才能使用Verified Identity等高级功能
- 云平台依赖（需要API Key和Project ID）
- 网络依赖强

## 相关页面

- [[Stagehand]] — 智能层框架，官方集成
- [[Browserbase-MCP-Server]] — MCP服务器
- [[浏览器控制]] — 所属主题分类
- [[MCP]] — 集成协议