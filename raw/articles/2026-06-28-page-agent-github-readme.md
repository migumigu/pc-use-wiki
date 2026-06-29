---
source_id: auto-2026-06-28-page-agent-github-readme
title: Page Agent - The GUI Agent Living in Your Webpage
url: https://github.com/alibaba/page-agent
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Page Agent - GitHub README

## 项目概览

- **开发者**: 阿里巴巴 (alibaba)
- **GitHub**: https://github.com/alibaba/page-agent
- **Stars**: 20.2k+ (2026-06-27)
- **协议**: MIT License
- **主语言**: TypeScript
- **最新版本**: v1.10.0
- **Commits**: 1,061

## 核心定位

Page Agent 是一款**运行在网页内部的 GUI Agent**，让任意 Web 应用通过自然语言被 AI 控制。

## 核心特性

1. **Easy Integration**
   - 无需浏览器扩展 / Python / 无头浏览器
   - 仅需页面内 JavaScript，所有操作在网页内完成

2. **Text-based DOM Manipulation**
   - 基于文本的 DOM 操作
   - 无需截图，无需多模态 LLM 或特殊权限

3. **Bring Your Own LLMs**
   - 支持用户自带大语言模型

4. **Optional Chrome Extension**
   - 可选 Chrome 扩展支持多页面任务
   - 提供 MCP Server (Beta) 用于外部控制

## 使用场景

1. **SaaS AI Copilot** - 几行代码即可在产品中集成 AI 助手
2. **Smart Form Filling** - 将 20 次点击的工作流转变为一句话完成
3. **Accessibility** - 通过自然语言使任何 Web 应用可访问
4. **Multi-page Agent** - 通过 Chrome 扩展扩展跨浏览器标签页的能力
5. **MCP** - 允许 Agent 客户端控制浏览器

## 快速开始

### 一行集成
```html
<script src="{URL}" crossorigin="true"></script>
```

### NPM 安装
```bash
npm install page-agent
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

## 技术基础

Page Agent 构建于 **browser-use** 项目之上：
- DOM 处理组件和 prompt 来自 browser-use
- 由 Gregor Zunic 开发，MIT License

## 重要说明

PageAgent 专为**客户端 Web 增强**设计，而非服务端自动化。
