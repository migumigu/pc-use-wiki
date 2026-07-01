---
tags: [浏览器控制, 浏览器自动化, AI Agent, MCP]
created: 2026-07-01
updated: 2026-07-01
sources: []
---

# Stagehand GitHub README

> BrowserBase公司开源的AI+代码混合控制浏览器自动化框架，20K+ Stars

## 核心内容

**项目定位**：
- AI+代码混合控制的浏览器自动化框架
- 解决传统工具"太脆弱"和AI Agent"太不可控"的两难问题
- GitHub 20K+ Stars，2025-2026年新开源项目

**三大核心优势**：
1. **选择何时用AI vs代码** - 不熟悉页面用AI，确定性操作用代码
2. **从AI驱动到可重复工作流** - 预览AI动作、缓存可重复操作
3. **一次编写永久运行** - 自动缓存+自愈机制

**四大核心API**：
```typescript
// Act - 执行自然语言动作
await stagehand.act("click on the stagehand repo");

// Extract - 提取结构化数据（Zod schema）
const { author, title } = await stagehand.extract(
  "extract the author and title of the PR",
  z.object({ author: z.string(), title: z.string() })
);

// Observe - 发现页面可操作元素
const actions = await stagehand.observe("find submit buttons");

// Agent - 自主执行多步骤任务（CUA模式）
const agent = stagehand.agent({ mode: "cua" });
await agent.execute("Get to the latest PR");
```

**技术架构**：
- CDP Engine（优化版Playwright底层）
- 默认模型：Gemini 2.5 Flash Lite（免费，托管MCP提供）
- 可切换模型：GPT-4o、Claude、其他LLM

**快速启动**：
```bash
npx create-browser-app
```

## 关键实体

- [[Stagehand]] — AI+代码混合控制的浏览器自动化框架
- [[BrowserBase]] — 云浏览器平台，与Stagehand官方集成
- [[Playwright]] — 底层CDP引擎基础
- [[MCP]] — 通过mcp-server-browserbase集成

## 相关页面

- [[browser-use]] — 纯AI Agent浏览器控制（对比项目）
- [[Playwright]] — 纯代码浏览器自动化（对比项目）
- [[浏览器控制]] — 所属主题分类
- [[agent-browser]] — CLI AI工具（对比项目）