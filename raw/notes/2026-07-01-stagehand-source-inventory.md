# Stagehand 官方素材清单

**收集日期**: 2026-07-01
**收集方式**: auto_research
**项目**: Stagehand (Browserbase)

---

## 素材汇总

本次收集共获取 **3个** Tier 1 官方素材，涵盖 Stagehand 项目核心信息。

### 素材列表

| 序号 | source_id | 标题 | 来源类型 | URL | 文件路径 |
|------|-----------|------|----------|-----|----------|
| 1 | auto-2026-07-01-a7f2 | Stagehand GitHub README | github_readme | https://github.com/browserbase/stagehand | raw/articles/2026-07-01-stagehand-github-readme.md |
| 2 | auto-2026-07-01-b3d8 | Stagehand Official Documentation Homepage | official_docs | https://docs.stagehand.dev/ | raw/articles/2026-07-01-stagehand-official-docs-home.md |
| 3 | auto-2026-07-01-c5e1 | Stagehand Quickstart Guide | official_docs | https://docs.stagehand.dev/v3/first-steps/quickstart | raw/articles/2026-07-01-stagehand-quickstart-guide.md |

---

## 素材详细信息

### 1. Stagehand GitHub README

- **source_id**: auto-2026-07-01-a7f2
- **来源类型**: github_readme
- **Tier**: 1 (官方一手来源)
- **控制对象**: browser_control
- **技术层级**: tool_implementation
- **置信度**: high

**核心内容要点**:
- Stagehand 定位：浏览器自动化框架，结合自然语言和代码控制浏览器
- 核心优势：开发者可选择代码 vs 自然语言、AI驱动转换为可重复工作流、自愈能力
- 四大核心 API：act()、agent()、extract()、observe()
- 快速启动：`npx create-browser-app`
- 基于 CDP (Chrome DevTools Protocol) 引擎
- MIT License，由 Browserbase 团队维护

### 2. Stagehand Official Documentation Homepage

- **source_id**: auto-2026-07-01-b3d8
- **来源类型**: official_docs
- **Tier**: 1 (官方一手来源)
- **控制对象**: browser_control
- **技术层级**: tool_implementation
- **置信度**: high

**核心内容要点**:
- 问题定位：传统框架（Playwright/Puppeteer）脆弱，AI Agent 不可预测
- 解决方案：通过四个原语（Act、Extract、Observe、Agent）精确控制 AI 使用程度
- 核心价值：精确控制、可重复执行、大规模可维护、组合式工具
- 兼容性：支持所有 Chromium 系浏览器（Chrome、Edge、Arc、Brave）
- 推荐：与 Browserbase 云浏览器基础设施配合使用

### 3. Stagehand Quickstart Guide

- **source_id**: auto-2026-07-01-c5e1
- **来源类型**: official_docs
- **Tier**: 1 (官方一手来源)
- **控制对象**: browser_control
- **技术层级**: tool_implementation
- **置信度**: high

**核心内容要点**:
- 快速启动流程：`npx create-browser-app` → 配置 `.env` → `npm start`
- 完整示例代码：展示 act、extract、observe、agent 四大 API 使用
- 环境配置：需要 LLM provider API key（如 OPENAI_API_KEY）和 Browserbase API key
- Agent 模式：支持 CUA (Computer Use Agent)，推荐模型 gemini-2.5-computer-use-preview-10-2025
- MCP 支持：可通过 MCP server 使用 Stagehand

---

## 技术特征提取

### 核心定位
**Stagehand 是一个 AI 辅助的浏览器自动化框架**，介于传统确定性自动化（Playwright/Puppeteer）和完全 AI Agent 之间，提供可控的混合方案。

### 技术架构
- **底层引擎**: CDP (Chrome DevTools Protocol)
- **LLM 集成**: 支持多种 LLM provider（OpenAI、Gemini 等）
- **Agent 模式**: CUA (Computer Use Agent) 支持完全自主工作流
- **云浏览器**: 与 Browserbase 集成，提供可靠云端基础设施

### 四大核心 API

| API | 功能 | 适用场景 |
|-----|------|----------|
| `act()` | 执行自然语言描述的单步动作 | 点击、输入、导航等确定性操作 |
| `extract()` | 从页面提取结构化数据（Zod schema） | 数据抓取、内容提取 |
| `observe()` | 发现页面可用元素和动作 | 页面探索、动作发现 |
| `agent()` | 自主执行多步骤工作流 | 复杂流程自动化、端到端任务 |

### 核心创新点

1. **可控 AI 使用**: 开发者精确控制何时用 AI、何时用确定性代码
2. **自动缓存与自愈**: 记忆历史动作，网站变更时自动适应
3. **预览机制**: AI 动作可预览，避免不可预测行为
4. **生产可靠性**: 面向生产环境的可维护、可重复自动化

---

## 研究价值评估

### 与现有知识库关联

- **browser_control 方向**: Stagehand 是当前 browser_control 领域的重要项目，介于 Browser Use 和传统 Playwright 之间
- **MCP 集成**: Stagehand 提供 MCP server，可与 Claude Desktop 等集成
- **CUA 技术**: 支持 Computer Use Agent 模式，与 Claude Computer Use、OpenCUA 等技术趋势相关

### 技术对比维度

- **vs Browser Use**: Stagehand 更强调生产可靠性、开发者可控性，Browser Use 更偏纯 AI Agent
- **vs Playwright**: Stagehand 在 Playwright CDP 基础上增加 AI 层，保留确定性控制能力
- **vs Claude Computer Use**: Stagehand 提供更细粒度的 API 控制而非完全自主 Agent

### 深入研究方向建议

1. **架构深度分析**: 研究 CDP 引擎实现、AI 与确定性代码混合机制
2. **自愈机制**: 缓存、记忆、网站变更适应的技术实现
3. **CUA 模式**: Agent 自主工作流的实现细节、与传统 Agent 的差异
4. **生产实践**: 实际应用案例、与其他工具集成方案
5. **MCP 集成**: Stagehand MCP server 的架构与使用

---

## 覆盖完整性评估

| 维度 | 覆盖情况 | 说明 |
|------|----------|------|
| 项目定位 | ✅ 完整 | README 和文档首页清晰定义 |
| 核心概念 | ✅ 完整 | 四大 API (act/extract/observe/agent) 解释完整 |
| 快速启动 | ✅ 完整 | Quickstart 提供完整流程和示例代码 |
| 技术架构 | ⚠️ 部分 | 提到 CDP，但缺少详细架构文档 |
| 生产实践 | ⚠️ 缺失 | 缺少实际案例、最佳实践详细文档 |
| API 深度文档 | ⚠️ 缺失 | 未收集各 API 详细文档页 |

**下一步收集建议**:
- Act API 详细文档
- Extract API 详细文档
- Observe API 详细文档
- Agent API 详细文档
- 生产最佳实践案例
- MCP 集成文档

---

## 元数据统计

- **Tier 1 素材数量**: 3
- **总素材数量**: 3
- **覆盖语言**: TypeScript
- **主要维护方**: Browserbase 团队
- **License**: MIT
- **首次发布**: 2025年（根据 License 版权年份）

---

**收集完成时间**: 2026-07-01
**收集状态**: ✅ 完成
**下一步建议**: 收集各 API 详细文档页、深入架构分析