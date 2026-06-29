---
source_id: auto-2026-06-28-pwmcp
title: Playwright MCP Server 官方文档
url: https://github.com/microsoft/playwright-mcp
source_type: github_readme
tier: 1
control_object: browser_control
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Playwright MCP Server 官方信息汇总

## 项目概览
- **开发者**：微软（Microsoft）
- **npm 包**：@playwright/mcp
- **协议**：Apache-2.0
- **Commit数**：552+

## 核心定位
一个使用 Playwright 实现的模型上下文协议（MCP）服务器，为大型语言模型（LLMs）提供浏览器自动化能力。

## 核心特性
- **Fast and lightweight**：使用 Playwright 的无障碍树（accessibility tree），非像素输入
- **LLM-friendly**：无需视觉模型，纯结构化数据操作
- **Deterministic tool application**：避免基于截图方法的歧义性

## Playwright MCP vs Playwright CLI
- **CLI**：适合高吞吐量编码 Agent，更节省 token
- **MCP**：适合持久状态、丰富内省和迭代推理的特殊 Agent 循环（如探索性自动化、自愈测试、长期自主工作流）

## 技术细节
- **无障碍树 vs 截图**：
  - 使用结构化无障碍树而非截图
  - 不需要视觉模型
  - 确定性工具应用，避免歧义
  
## MCP 客户端支持
支持 20+ MCP 客户端：
- VS Code
- Cursor
- Windsurf
- Claude Desktop
- Goose
- Junie
- Codex
- Copilot
- Gemini CLI
- Factory
- Kiro
- LM Studio
- opencode
- Qodo Gen
- Warp
- 等等

## 配置选项
| 选项 | 说明 |
|------|------|
| --browser | 浏览器类型（chrome, firefox, webkit, msedge） |
| --caps | 额外能力（vision, pdf, devtools） |
| --headless | 无头模式运行 |
| --allowed-hosts | 允许访问的主机列表 |
| --device | 设备模拟（如 "iPhone 15"） |

## 与 browser-use 的关系
两者都支持浏览器自动化，但：
- browser-use：基于 AI 视觉模型，通过截图理解页面
- Playwright MCP：使用无障碍树，结构化数据，更轻量
