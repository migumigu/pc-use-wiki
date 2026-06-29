---
source_id: auto-2026-06-28-uite
title: UI-TARS-desktop GitHub README
url: https://github.com/bytedance/UI-TARS-desktop
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# UI-TARS-desktop 官方 GitHub 信息汇总

## 项目概览
- **开发者**：字节跳动（ByteDance）Seed 团队
- **协议**：Apache 2.0
- **Stars**：33K+
- **Commit数**：1,109+
- **主要语言**：TypeScript (89.1%)

## 核心产品
包含两个主要项目：**Agent TARS** 和 **UI-TARS Desktop**

### Agent TARS
通用多模态 AI Agent 技术栈，将 GUI Agent 和视觉能力带入终端、计算机、浏览器和产品。

**核心特性**：
- 🖱️ 一键 CLI/Web UI 开箱即用
- 🌐 混合浏览器 Agent（GUI Agent / DOM / 混合策略）
- 🔄 事件流驱动（Event Stream）
- 🧰 MCP 集成

### UI-TARS Desktop
基于 UI-TARS 视觉语言模型的原生 GUI Agent 桌面应用。

**核心特性**：
- 🤖 自然语言控制（由 VLM 驱动）
- 🖥️ 截图和视觉识别支持
- 🎯 精确鼠标和键盘控制
- 💻 跨平台支持（Windows/MacOS/Browser）
- 🔄 实时反馈和状态显示
- 🔐 私有安全 - 完全本地处理

## 技术架构
- **底层模型**：UI-TARS 视觉-语言模型，基于 Seed-1.5-VL/1.6 系列模型
- **核心理念**：通过截图理解屏幕，将自然语言指令转化为精确的鼠标键盘操作
- **与 MCP 的关系**：内核构建在 MCP 之上，支持挂载 MCP Servers 连接现实世界工具

## 发布历史
- **2025-11-05**：Agent TARS CLI v0.3.0（流式多工具支持、运行时设置、事件流查看器）
- **2025-06-25**：Agent TARS Beta 发布
- **2025-06-12**：UI-TARS Desktop v0.2.0（远程计算机/浏览器操作）
- **2025-04-17**：UI-TARS Desktop v0.1.0
- **2025-02-20**：UI-TARS SDK 发布
- **2025-01-23**：云部署文档更新

## 与 browser-use 的区别
browser-use 专注于浏览器自动化，UI-TARS-desktop 面向整个桌面环境的 GUI Agent，覆盖更广泛的应用场景。
