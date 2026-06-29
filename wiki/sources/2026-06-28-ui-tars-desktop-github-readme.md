---
tags: [GUI-Agent, 桌面自动化, 视觉语言模型, MCP, 字节跳动]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-ui-tars-desktop-github-readme.md]
---

# UI-TARS-desktop GitHub README

> 字节跳动开源的原生GUI Agent桌面应用,基于视觉语言模型实现自然语言控制电脑

## 基本信息

- **开发者**: 字节跳动(ByteDance) Seed团队
- **开源协议**: Apache 2.0
- **GitHub Stars**: 33K+
- **主要语言**: TypeScript (89.1%)
- **项目地址**: https://github.com/bytedance/UI-TARS-desktop
- **素材类型**: GitHub README
- **技术层级**: 工具实现层
- **控制对象**: 桌面应用控制

## 核心产品

### Agent TARS
通用多模态AI Agent技术栈,将GUI Agent和视觉能力带入终端、计算机、浏览器和产品。

**核心特性**:
- 🖱️ 一键 CLI/Web UI 开箱即用
- 🌐 混合浏览器 Agent(GUI Agent / DOM / 混合策略)
- 🔄 事件流驱动(Event Stream)
- 🧰 MCP集成

### UI-TARS Desktop
基于UI-TARS视觉语言模型的原生GUI Agent桌面应用。

**核心特性**:
- 🤖 自然语言控制(由VLM驱动)
- 🖥️ 截图和视觉识别支持
- 🎯 精确鼠标和键盘控制
- 💻 跨平台支持(Windows/MacOS/Browser)
- 🔄 实时反馈和状态显示
- 🔐 私有安全 - 完全本地处理

## 技术架构

- **底层模型**: UI-TARS视觉-语言模型,基于Seed-1.5-VL/1.6系列模型
- **核心理念**: 通过截图理解屏幕,将自然语言指令转化为精确的鼠标键盘操作
- **与MCP的关系**: 内核构建在MCP之上,支持挂载MCP Servers连接现实世界工具

## 发布历史

- **2025-11-05**: Agent TARS CLI v0.3.0(流式多工具支持、运行时设置、事件流查看器)
- **2025-06-25**: Agent TARS Beta发布
- **2025-06-12**: UI-TARS Desktop v0.2.0(远程计算机/浏览器操作)
- **2025-04-17**: UI-TARS Desktop v0.1.0
- **2025-02-20**: UI-TARS SDK发布
- **2025-01-23**: 云部署文档更新

## 关键概念

<!-- confidence: EXTRACTED -->
- **视觉语言模型(VLM)**: 理解屏幕截图并生成操作指令的核心技术
<!-- confidence: EXTRACTED -->
- **MCP集成**: 通过模型上下文协议连接外部工具和服务
<!-- confidence: EXTRACTED -->
- **事件流驱动**: 基于事件驱动的架构模式
<!-- confidence: EXTRACTED -->
- **混合浏览器Agent**: 结合GUI Agent和DOM操作的混合策略

## 与其他工具的关系

### 与browser-use的区别
<!-- confidence: EXTRACTED -->
browser-use专注于浏览器自动化,UI-TARS-desktop面向整个桌面环境的GUI Agent,覆盖更广泛的应用场景。

## 相关页面

- [[桌面应用控制]] — 本素材所属控制对象
- [[视觉语言模型]] — 底层技术支撑
- [[MCP]] — 集成协议
- [[Agent集成层]] — 技术架构层面