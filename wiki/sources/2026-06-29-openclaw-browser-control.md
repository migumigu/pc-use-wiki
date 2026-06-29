---
tags: [openclaw, browser, cdp, automation, ssrf]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-ij90]
---

# OpenClaw Browser Control

> OpenClaw 浏览器控制模块：独立 profile 隔离，CDP 协议，SSR 防护，视觉模型降级

## 一句话摘要

OpenClaw 内置基于 CDP 的浏览器控制模块，支持独立 openclaw profile 和用户真实浏览器两种模式，提供标签页管理、Agent 操作、截图、SSR 防护等能力。

## 核心要点

- **两种 profile 模式**：
  - openclaw：独立隔离浏览器，不影响个人浏览器
  - user：Chrome MCP 附加到真实登录的 Chrome 会话
- **浏览器操作**：标签页管理、点击/输入/拖拽/选择、快照、截图、PDF
- **多 profile 支持**：openclaw、work、remote、user、brave 等
- **SSR 防护**：导航前防护，strict 模式下也防护 CDP 发现
- **视觉模型截图描述**：文本模型时，自动用视觉模型描述截图为文本
- **标签页清理**：空闲超时（默认 120 分钟）、每会话上限（默认 8 个）
- **三种控制方式**：本地托管、节点远程、远程 CDP
- **browser-automation 技能**：多步自动化最佳实践（快照、稳定标签页、失效恢复）

## 关键概念

- [[OpenClaw]] — 本项目
- [[Playwright]] — 浏览器自动化工具对比
- [[browser-use]] — 浏览器 Agent 对比
- [[浏览器自动化]] — 浏览器自动化概念

## 相关页面

- [[浏览器控制]] — 浏览器控制主题
- [[Agent集成层]] — Agent 集成层主题
