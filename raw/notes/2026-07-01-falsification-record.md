# 证伪验证记录

## 证伪时间：2026-07-01

## OpenCUA 关键声明验证

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "OSWorld-Verified 45.0%" | GitHub README | ✅已验证 | README中明确列出OpenCUA-72B 100 Steps = 45.0% | 无需修正 |
| "AgentNet 22.6K任务" | GitHub README + 论文 | ✅已验证 | README: "22.6K human-annotated tasks" | 无需修正 |
| "OpenCUA-72B SOTA" | GitHub README | ✅已验证 | "OpenCUA-72B ranks #1 on OSWorld-Verified leaderboard" | 无需修正 |
| "三层推理架构" | 论文 arXiv:2508.09123 | ✅已验证 | GitHub详细描述Action Reduction → State-Action Matching → Reflective Long CoT | 无需修正 |
| "vLLM官方支持" | GitHub README | ✅已验证 | "vLLM now fully supports OpenCUA-7B, OpenCUA-32B, and OpenCUA-72B!" | 无需修正 |

## real-browser-mcp 关键声明验证

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "18个MCP工具" | GitHub README | ✅已验证 | README列出完整工具列表：browser_snapshot/screenshot/text/find/click/click_text/type/press_key/scroll/hover/select/wait/navigate/tabs/console/network/evaluate/handle_dialog | 无需修正 |
| "会话状态复用核心优势" | GitHub README | ✅已验证 | README标题："Your agent can now see your REAL browser"，明确说明连接用户已有Chrome实例 | 无需修正 |
| "Chrome Extension + MCP Server架构" | GitHub README | ✅已验证 | 项目结构：mcp-server/ + extension/ | 无需修正 |
| "browser_click_text创新工具" | GitHub README | ✅已验证 | README描述："click by visible text, works through React portals and overlay layers" | 无需修正 |

## Computer-Use-Preview 关键声明验证

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "Gemini 2.5 Computer Use" | GitHub README + 官方博客 | ✅已验证 | README: "based on the latest Gemini Computer Use model"，配置使用gemini-2.5-flash-preview-05-20 | 无需修正 |
| "双后端架构 Playwright + Browserbase" | GitHub README | ✅已验证 | computers/playwright/ + computers/browserbase/ 目录结构，README "--env playwright/browserbase" | 无需修正 |
| "坐标归一化 [0, 1000]" | agent.py源码 | ✅已验证 | 源码中denormalize_x/y函数明确实现归一化转换 | 无需修正 |
| "截图管理仅保留最近3轮" | agent.py源码 | ✅已验证 | MAX_RECENT_TURN_WITH_SCREENSHOTS = 3 | 无需修正 |
| "44 Stars" | GitHub页面 | ✅已验证 | WebFetch结果显示44 stars, 7 forks | ⚠️置信度标注：实时数据，可能变化 |

## P1/P2声明全部已验证

所有关键声明均来自官方GitHub README、源码、论文等一级来源，无需修正。

报告版本更新：v1.0 → v1.1（添加置信度标注）