---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-agent-browser-commands-docs.md
images: 0
image_paths: []
---

# agent-browser Commands 文档

> agent-browser 官方命令参考文档，包含 50+ 命令覆盖浏览器控制、元素交互、网络管理、调试等完整功能

## 基本信息

- **来源类型**：官方文档（文章）
- **原文位置**：raw/articles/2026-06-28-agent-browser-commands-docs.md
- **消化日期**：2026-06-28

## 核心观点

1. **命令分类清晰**：50+ 命令按功能分为核心交互、信息获取、元素查找、等待、网络、标签页、调试等多个类别

2. **refs 系统贯穿始终**：所有元素操作都支持 @e1 格式的引用，refs 与 tab 绑定，切换标签后需重新 snapshot

3. **语义定位器**：提供 find 命令支持 role/text/label/placeholder/alt 等多种语义定位方式，无需 CSS 选择器

4. **强大的网络控制**：支持请求拦截、Mock 响应、HAR 录制、请求过滤等完整的网络调试能力

5. **企业级特性**：Auth Vault（凭证管理）、状态持久化、会话隔离、操作确认机制等

## 关键概念

- [[agent-browser]] — 命令所属的工具
- [[CDP]] — 底层通信协议（Chrome DevTools Protocol）
- [[浏览器自动化]] — 技术领域
- [[语义定位器]] — 基于 ARIA role/text 的元素定位方式

## 命令分类速览

| 类别 | 代表命令 | 说明 |
|------|----------|------|
| 核心交互 | open, click, fill, type, press | 基础浏览器操作 |
| 页面捕获 | screenshot, pdf, snapshot | 截图、PDF、无障碍树 |
| 数据获取 | get text/html/value/attr | 元素内容提取 |
| 语义定位 | find role/text/label | AI 友好的定位方式 |
| 网络控制 | network route/requests/har | 请求拦截和录制 |
| 标签管理 | tab, window, frame | 多标签、多窗口、iframe |
| 调试工具 | trace, profiler, console | 性能追踪和调试 |
| 安全特性 | auth, state, session | 凭证和会话管理 |

## 与其他素材的关联

- 与 [[agent-browser GitHub README]] 的关系：README 介绍项目概况，Commands 文档是详细的命令参考
- 与 [[Playwright MCP Server 官方文档]] 的关系：都提供浏览器控制命令，agent-browser 命令更精简、AI 原生设计
- 与 [[browser-use 官方文档索引]] 的关系：同为浏览器自动化工具的命令参考，设计理念不同

## 原文精彩摘录

> Tab ids are stable strings of the form t1, t2, t3. They're never reused within a session.

> Refs (@e1, etc.) are scoped to the tab that was active when the snapshot ran.

> By default, alert and beforeunload dialogs are automatically accepted so they never block the agent.

## 相关页面

- [[agent-browser]]（实体页）
- [[浏览器控制]]（主题页）
- [[agent-browser GitHub README]]（素材摘要）
