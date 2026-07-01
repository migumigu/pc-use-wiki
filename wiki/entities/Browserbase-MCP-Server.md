---
tags: [浏览器控制, MCP, Agent集成]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-browserbase-mcp-server-github-readme]]"
---

# Browserbase MCP Server

> Browserbase官方MCP服务器，提供6个工具控制云浏览器，支持托管和自托管两种模式

## 基本信息

- **开发方**: Browserbase公司
- **GitHub**: https://github.com/browserbase/mcp-server-browserbase
- **协议**: Apache 2.0 License
- **NPM包**: `@browserbasehq/mcp`
- **托管地址**: `https://mcp.browserbase.com/mcp`

## 6个核心工具

| Tool | 功能 | 输入 |
|------|------|------|
| `start` | 创建/复用Browserbase会话 | none |
| `end` | 关闭当前会话 | none |
| `navigate` | 导航到URL | `{ url: string }` |
| `act` | 执行页面动作 | `{ action: string }` |
| `observe` | 发现可操作元素 | `{ instruction: string }` |
| `extract` | 提取页面数据 | `{ instruction?: string }` |

## 两种部署模式

### 1. SHTTP托管模式（推荐）

托管MCP地址：`https://mcp.browserbase.com/mcp`

**优势**：
- Browserbase公司托管服务器
- 提供LLM成本（Gemini免费）
- 默认最佳性能模型
- 最简单配置

**配置**：
```json
{
  "mcpServers": {
    "browserbase": {
      "type": "http",
      "url": "https://mcp.browserbase.com/mcp"
    }
  }
}
```

### 2. STDIO自托管模式

**NPM安装**：
```json
{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": ["@browserbasehq/mcp"],
      "env": {
        "BROWSERBASE_API_KEY": "",
        "BROWSERBASE_PROJECT_ID": "",
        "GEMINI_API_KEY": ""
      }
    }
  }
}
```

**本地运行**：
```bash
git clone https://github.com/browserbase/mcp-server-browserbase.git
cd mcp-server-browserbase
npm install && npm run build
```

## 配置选项

| Flag | 描述 |
|------|------|
| `--proxies` | 启用Browserbase代理 |
| `--verified` | 启用Verified Identity（Scale Plan） |
| `--keepAlive` | 启用Keep Alive会话 |
| `--contextId <id>` | 指定Context ID |
| `--persist` | 是否持久化Context（默认true） |
| `--browserWidth <w>` | 浏览器视口宽度（默认1024） |
| `--browserHeight <h>` | 浏览器视口高度（默认768） |
| `--modelName <model>` | Stagehand使用的模型 |
| `--modelApiKey <key>` | 自定义模型API key |

## 模型配置

**默认模型**：Gemini 2.5 Flash Lite（免费）

**自定义模型**：
```json
{
  "args": [
    "@browserbasehq/mcp",
    "--modelName", "anthropic/claude-sonnet-4.5",
    "--modelApiKey", "your-anthropic-api-key"
  ]
}
```

支持模型：GPT-4o、Claude、Gemini等（需Stagehand支持）

## 与Stagehand集成

MCP Server基于 **Stagehand** 智能层：
- act/observe/extract工具来自Stagehand API
- 默认使用Gemini模型（托管免费）
- 可切换其他LLM模型

## 相关页面

- [[Stagehand]] — 底层智能框架
- [[BrowserBase]] — 云浏览器平台
- [[MCP]] — 集成协议
- [[浏览器控制]] — 所属主题分类