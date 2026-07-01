---
tags: [素材摘要]
created: 2026-07-01
updated: 2026-07-01
sources: []
source_type: GitHub README
source_path: raw/notes/2026-07-01-computer-use-preview-analysis.md
images: 0
image_paths: []
---

# Computer-Use-Preview GitHub README

> Google官方Gemini CUA实现，三层架构（模型层/Agent层/环境层），双后端（Playwright本地 + Browserbase云端），坐标归一化设计

## 基本信息

- **来源类型**：GitHub README + 官方博客（Tier 1）
- **原文位置**：raw/notes/2026-07-01-computer-use-preview-analysis.md
- **消化日期**：2026-07-01

## 核心观点

1. **三层架构**：模型层（Gemini 2.5 Computer Use）→ Agent层（BrowserAgent）→ 环境层（Computer抽象接口）
2. **双后端架构**：PlaywrightComputer本地 + BrowserbaseComputer云端，接口统一
3. **坐标归一化系统**：模型输出[0, 1000]范围，Agent转换为实际屏幕坐标
4. **截图管理策略**：仅保留最近3轮截图，节省token消耗
5. **安全机制完备**：内置safety service + 用户确认机制

## 关键概念

- [[Computer-Use-Preview]]
- [[Gemini-Computer-Use]]
- [[坐标归一化]]
- [[Playwright]]
- [[Browserbase]]

## 与其他素材的关联

- 与 [[Anthropic Computer Use]] 对比：Google官方框架vs第三方生态，双后端vs单一，归一化坐标vs像素坐标
- 与 [[OpenCUA]] 对比：同为CUA框架，Google官方vs港大学术，模型集成vs完整工具链
- 与 [[Playwright MCP]] 关联：同为Playwright后端

## 原文精彩摘录

> 三层架构：模型层 → Agent层 → 环境层（Computer抽象接口 + Playwright/Browserbase实现）

> 坐标归一化：模型输出[0, 1000]范围，Agent通过denormalize_x/y转换为实际屏幕坐标

> 截图管理：MAX_RECENT_TURN_WITH_SCREENSHOTS = 3

## 相关页面

- [[浏览器控制]]
- [[Computer-Use-Preview]]
- [[Computer-Use]]