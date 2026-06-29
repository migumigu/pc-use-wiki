---
tags: [实体, 工具]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-page-agent-github-readme.md
  - wiki/sources/2026-06-28-page-agent-mcp-server.md
  - wiki/sources/2026-06-28-page-agent-analysis.md
---

# page-agent

> 阿里巴巴开源的页面内 GUI Agent，让 AI 直接运行在网页内部来控制 Web 页面

## 简介

page-agent 是阿里巴巴开源的页面内 GUI Agent 项目，GitHub 获得 20.2k+ Stars（截至 2026-06-27）。其核心创新是让 Agent **直接住进网页里**，而非从外部操控浏览器。

## 关键信息

- **类型**：工具（页面内 GUI Agent 框架）
- **领域**：浏览器自动化 / AI Agent
- **GitHub**：https://github.com/alibaba/page-agent
- **Stars**：20,200+（截至 2026-06-27）
- **许可证**：MIT
- **编程语言**：TypeScript
- **最新版本**：v1.10.0
- **Commits**：1,061

## 核心定位

**不是让 AI 从外面操控浏览器，而是让 Agent 直接住进网页里。**

| 对比点 | page-agent | 传统浏览器自动化 |
|--------|------------|------------------|
| 运行位置 | 页面内 JavaScript | 页面外的脚本或客户端 |
| 面向对象 | Web 应用开发者、SaaS 产品 | 测试、爬虫、自动化脚本 |
| 典型用途 | 给产品加 AI 操作员 | 自动执行任务 |
| 页面理解 | DOM 文本和语义结构 | 截图、选择器、浏览器控制 |
| 集成方式 | CDN / npm 接入 | 单独启动自动化环境 |

## 核心特性

1. **Easy Integration**：无需浏览器扩展、Python、无头浏览器，仅需页面内 JavaScript
2. **Text-based DOM Manipulation**：基于文本的 DOM 操作，无需截图和多模态 LLM
3. **Bring Your Own LLMs**：支持用户自带大语言模型（OpenAI-compatible API、Ollama 等）
4. **Optional Chrome Extension**：可选 Chrome 扩展支持多标签页任务
5. **MCP Server (Beta)**：提供 MCP Server 用于外部 Agent 控制

## 适用场景

- **SaaS AI Copilot**：几行代码即可在产品中集成 AI 助手
- **Smart Form Filling**：将 20 次点击的工作流转变为一句话完成
- **Accessibility**：通过自然语言使任何 Web 应用可访问
- **Multi-page Agent**：通过 Chrome 扩展跨浏览器标签页执行任务
- **MCP 接入**：允许 Agent 客户端控制浏览器

## 技术基础

page-agent 构建于 **browser-use** 项目之上：
- DOM 处理组件和 prompt 来自 browser-use
- 由 Gregor Zunic 开发，MIT License

## 局限性

- 复杂拖拽
- 右键菜单
- 纯视觉识别
- Canvas / WebGL / 图片内容理解
- 跨域 iframe
- Monaco、CodeMirror 等复杂编辑器的细粒度操作

## 使用示例

```html
<!-- 一行集成 -->
<script src="{URL}" crossorigin="true"></script>
```

```javascript
import { PageAgent } from 'page-agent'

const agent = new PageAgent({
    model: 'qwen3.5-plus',
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKey: 'YOUR_API_KEY',
    language: 'en-US',
})

await agent.execute('Click the login button')
```

## MCP Server (Beta)

Page Agent 提供 MCP Server 用于让本地 Agent 发送自然语言浏览器任务到 Page Agent Ext：

1. 在 Chrome 中安装 Page Agent Ext
2. 添加 MCP server 到本地 agent 客户端
3. 启动客户端并在浏览器中批准 Hub 连接
4. 让 agent 在浏览器中执行任务

**Hub 机制**：Hub 是 Page Agent Ext 与外部调用者之间的通信控制中心。

## 不同素材中的观点

### 技术分析报告观点

> Page Agent 的定位是"给 Web 产品加一个内置 AI 操作员"，而不是替代所有浏览器自动化工具。这个定位更清晰，也更适合落地。

### 与 browser-use 的定位差异

- browser-use：面向测试/爬虫/自动化脚本，页面外运行
- page-agent：面向 SaaS 产品开发者，页面内运行

## 相关页面

- [[browser-use]] — page-agent 的底层依赖
- [[MCP]] — 外部 Agent 控制协议
- [[浏览器控制]]（主题页）
- [[Agent集成层]]（主题页）
