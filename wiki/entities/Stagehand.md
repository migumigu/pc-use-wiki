---
tags: [浏览器控制, 浏览器自动化, AI Agent, MCP]
created: 2026-07-01
updated: 2026-07-01
sources:
  - "[[2026-07-01-stagehand-github-readme]]"
  - "[[2026-07-01-stagehand-official-docs-home]]"
  - "[[2026-07-01-stagehand-quickstart-guide]]"
---

# Stagehand

> BrowserBase公司开源的AI+代码混合控制浏览器自动化框架，介于传统确定性自动化和完全AI Agent之间的新范式

## 基本信息

- **开发方**: Browserbase公司
- **GitHub Stars**: 20K+（来源：多个技术分析文章）
- **GitHub**: https://github.com/browserbase/stagehand
- **官方文档**: https://docs.stagehand.dev/
- **协议**: MIT License
- **语言**: TypeScript (80.7%), MDX (18.1%)
- **发布时间**: 2025-2026年

## 核心定位

**解决两难问题**：
- 传统框架（Playwright/Puppeteer） → 太脆弱，UI变化就崩溃
- AI Agent（browser-use等） → 太不可控，生产环境不可靠
- **Stagehand中间路线** → AI+代码混合控制，精确选择何时用AI

## 四大核心API

| API | 功能 | AI参与度 | 适用场景 |
|-----|------|----------|----------|
| `act()` | 执行自然语言描述的单步动作 | 高 | 不熟悉页面、动态UI |
| `extract()` | 从页面提取结构化数据(Zod schema) | 中 | 数据抓取、信息提取 |
| `observe()` | 发现页面可用元素和动作 | 中 | 探索性操作、调试 |
| `agent()` | 自主执行多步骤工作流(CUA模式) | 最高 | 复杂任务、完整流程 |

## 技术架构

**底层引擎**：
- CDP Engine（基于Playwright底层优化）
- 所有Chromium系浏览器：Chrome、Edge、Arc、Brave
- 不支持Firefox/Safari（需CDP协议）

**模型层**：
- 默认：Gemini 2.5 Flash Lite（免费，托管MCP提供）
- 可切换：GPT-4o、Claude Sonnet 4.5、其他LLM
- CUA模式：Gemini Computer Use Preview

**核心特性**：
1. **自动缓存** - 可重复操作缓存，节省token和时间
2. **自愈机制** - 网站变化时自动检测并重新介入AI
3. **预览机制** - 预览AI动作后再执行
4. **多网站脚本** - 一套脚本自动化多个网站

## 与同类工具对比

| 维度 | Stagehand | browser-use | Playwright | agent-browser |
|------|-----------|-------------|------------|---------------|
| **控制模式** | AI+代码混合 | 纯AI Agent | 纯代码控制 | AI CLI工具 |
| **Stars** | 20K+ | 50K+ | 67K+ | 37K+ |
| **适用场景** | 生产环境自动化 | AI研究、原型 | 测试、确定性自动化 | 开发者CLI |
| **AI参与度** | 可选 | 全程 | 无 | 全程 |
| **稳定性** | 高(缓存+自愈) | 中 | 高 | 中 |
| **成本** | 默认免费 | 需LLM API | 免费 | 需LLM API |
| **与BrowserBase集成** | 官方集成 | 无 | 可配合 | 无 |

## MCP集成

通过 **mcp-server-browserbase** 提供6个工具：
- `start` - 创建/复用Browserbase会话
- `end` - 关闭会话
- `navigate` - 导航到URL
- `act` - 执行页面动作
- `observe` - 发现可操作元素
- `extract` - 提取页面数据

托管MCP地址：`https://mcp.browserbase.com/mcp`

## 适用场景

**最适合**：
- 生产环境浏览器自动化（需要稳定性和可维护性）
- 不熟悉网站的探索性操作
- 多网站统一自动化脚本
- 与Claude Desktop/IDE MCP集成

**不适合**：
- Firefox/Safari等非Chromium浏览器
- 纯确定性、无变化的网站（直接用Playwright更好）
- 无LLM API访问的环境

## 局限性

- 仅支持Chromium系浏览器（需CDP协议）
- 依赖LLM成本（默认免费，切换其他模型需付费）
- 新项目成熟度风险（2025-2026年，API可能快速演进）
- 兼容性边界未明确（P1-002待验证）

## 相关页面

- [[BrowserBase]] — 云浏览器平台，官方集成
- [[Playwright]] — 底层CDP引擎基础
- [[browser-use]] — 纯AI Agent对比项目
- [[agent-browser]] — CLI AI工具对比项目
- [[浏览器控制]] — 所属主题分类
- [[MCP]] — 集成协议