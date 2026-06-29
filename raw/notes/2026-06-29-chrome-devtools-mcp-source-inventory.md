# Source Inventory - chrome-devtools-mcp 研究

**研究日期**：2026-06-29
**研究方向**：chrome-devtools-mcp
**总素材数**：4

## 素材清单

| 素材 ID | 标题 | 类型 | Tier | 控制对象 | 技术层级 | 置信度 |
|---------|------|------|------|----------|----------|--------|
| auto-2026-06-29-chrome-devtools-protocol | Chrome DevTools Protocol 官方文档 | official_docs | 1 | browser_control | protocol | high |
| auto-2026-06-29-chrome-devtools-mcp-official | Chrome DevTools MCP 官方介绍 | official_docs | 1 | browser_control | agent_integration | high |
| auto-2026-06-29-chrome-devtools-mcp-analysis | Chrome DevTools MCP 技术深度分析 | tech_blog | 1 | browser_control | agent_integration | high |
| auto-2026-06-29-playwright-cdp-websocket | Playwright CDP/WebSocket/PlayWright 对比分析 | tech_blog | 2 | browser_control | protocol | medium |
| auto-2026-06-29-playwright-github-readme | Playwright GitHub README | github_readme | 1 | browser_control | tool_implementation | high |

## 来源质量分析

### Tier 1 来源（必备）
- Chrome DevTools Protocol 官方文档：CDP 协议规范
- chrome-devtools-mcp 官方博客：Google 官方发布的项目介绍
- Playwright GitHub README：Microsoft 官方仓库

### Tier 2 来源（重要）
- Playwright CDP/WebSocket 对比分析：技术博客，提供 Playwright 与 CDP 关系的技术细节

## 素材分布

| 控制对象 | 技术层级 | 素材数 |
|----------|----------|--------|
| browser_control | protocol | 2 |
| browser_control | agent_integration | 2 |
| browser_control | tool_implementation | 1 |

## 核心实体识别

1. **chrome-devtools-mcp** - Google 官方 MCP 服务器
2. **Chrome DevTools Protocol (CDP)** - 底层浏览器控制协议
3. **Puppeteer** - chrome-devtools-mcp 的底层技术
4. **Playwright** - 类似的浏览器自动化框架
5. **MCP (Model Context Protocol)** - Agent 与外部工具交互的协议
