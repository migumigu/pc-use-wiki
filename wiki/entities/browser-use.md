---
tags: [实体, 工具]
created: 2026-06-27
updated: 2026-06-27
sources:
  - wiki/sources/2026-06-27-browser-use-github-readme.md
  - wiki/sources/2026-06-27-browser-use-docs-index.md
  - wiki/sources/2026-06-27-browser-use-architecture-analysis.md
  - wiki/sources/2026-06-27-browser-use-vs-playwright-mcp.md
  - wiki/sources/2026-06-27-browser-use-research-report.md
---

# browser-use

> 让 AI Agent 理解自然语言指令并自主完成浏览器操作的开源项目

## 简介

browser-use 是 2026 年最火的 AI Agent 浏览器自动化开源项目，GitHub 获得 95K+ Stars。它通过集成大语言模型（LLM），让 AI Agent 能够理解自然语言指令并自主完成浏览器操作任务。

## 关键信息

- **类型**：工具（AI Agent 浏览器自动化框架）
- **领域**：浏览器自动化 / AI Agent
- **GitHub**：https://github.com/browser-use/browser-use
- **Stars**：95,000+（截至 2026年6月）
- **许可证**：MIT
- **编程语言**：Python 3.11+

## 技术架构

### 四层架构

1. **用户层**：自然语言任务描述
2. **Agent层**：LLM理解 + 任务规划 + 错误恢复
3. **协议层**：Playwright/Puppeteer 自动化接口
4. **浏览器层**：Chromium/Firefox 实际浏览器

### 核心组件

- **Agent Controller**：负责任务分解、执行控制、错误处理
- **LLM Core**：理解用户意图、规划操作序列、评估执行结果
- **DOM Extractor**：提取可交互元素供 LLM 分析
- **Playwright Bridge**：与底层浏览器引擎通信

## 功能特性

### 支持的能力

- 自然语言驱动的浏览器操作
- 网页信息自动提取和汇总
- 表单填写和提交
- 多页面任务处理
- 自定义工具扩展
- 多 LLM 支持（OpenAI、Google、Anthropic、本地模型）
- CLI 和 SDK 两种使用方式
- MCP 协议集成
- 云端隐身浏览器服务

### 局限性

1. **性能开销**：每次操作都需要 LLM 调用，比直接 Playwright 代码慢
2. **上下文限制**：长任务可能超出 LLM 上下文限制
3. **稳定性挑战**：页面变化可能导致失败，需要重试机制
4. **反爬防护**：CAPTCHA 等防护措施难以绕过
5. **已知问题**：
   - ChatBrowserUse 模型不稳定（国内使用可能出现 timeout）
   - Chromium 版本兼容性要求
   - 自定义浏览器集成有挑战

## 与其他工具的关系

### vs page-agent

- page-agent 是阿里巴巴在 browser-use 基础上的创新应用
- **运行位置不同**：browser-use 在页面外运行，page-agent 在页面内 JavaScript 运行
- **面向对象不同**：browser-use 面向测试/爬虫，page-agent 面向 SaaS 产品开发者
- page-agent 的 DOM 处理组件和 prompt 来自 browser-use

### vs Playwright

- Playwright 是底层浏览器自动化引擎
- browser-use 在 Playwright 之上添加了 LLM 理解层
- 用户不需要编写 Playwright 代码，只需自然语言指令

### vs Playwright MCP

- Playwright MCP 用于 IDE 插件控制浏览器
- browser-use 用于 AI Agent 自主完成任务
- 两者可互补使用

## 使用示例

```python
from browser_use import Agent, Browser, ChatBrowserUse
import asyncio

async def main():
    browser = Browser()
    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(),
        browser=browser,
    )
    await agent.run()

asyncio.run(main())
```

## 相关页面

- [[浏览器控制]]（主题页）
- [[Playwright]]
- [[LLM]]
- [[Agent]]
- [[MCP]]