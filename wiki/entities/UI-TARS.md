---
tags: [GUI-Agent, 视觉语言模型, 桌面自动化]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-ui-tars-desktop-github-readme.md]
---

# UI-TARS

> 字节跳动开发的原生GUI Agent桌面应用,基于视觉语言模型实现自然语言控制电脑

## 基本信息

- **开发者**: 字节跳动(ByteDance) Seed团队
- **开源协议**: Apache 2.0
- **GitHub Stars**: 33K+
- **主要语言**: TypeScript (89.1%)
- **项目地址**: https://github.com/bytedance/UI-TARS-desktop

## 核心特性

<!-- confidence: EXTRACTED -->
- **自然语言控制**: 通过VLM理解自然语言指令并转换为操作
<!-- confidence: EXTRACTED -->
- **截图理解**: 通过视觉识别理解屏幕内容
<!-- confidence: EXTRACTED -->
- **精确鼠标键盘控制**: 实现精准的GUI操作
<!-- confidence: EXTRACTED -->
- **跨平台支持**: Windows/MacOS/Browser全覆盖
<!-- confidence: EXTRACTED -->
- **本地处理**: 完全私有安全,无需云端依赖

## 技术架构

<!-- confidence: EXTRACTED -->
- **底层模型**: UI-TARS视觉-语言模型(基于Seed-1.5-VL/1.6)
<!-- confidence: EXTRACTED -->
- **MCP集成**: 内核构建在MCP之上,支持外部工具连接
<!-- confidence: EXTRACTED -->
- **事件流驱动**: 基于事件驱动的架构模式

## 包含产品

### Agent TARS
通用多模态AI Agent技术栈,支持CLI/Web UI、混合浏览器Agent、事件流、MCP集成。

### UI-TARS Desktop
原生GUI Agent桌面应用,专注于桌面环境的自动化操作。

## 与其他工具对比

<!-- confidence: EXTRACTED -->
- **vs browser-use**: browser-use专注浏览器自动化,UI-TARS覆盖整个桌面环境
- **vs PyAutoGUI**: PyAutoGUI是底层API,UI-TARS提供高层自然语言接口

## 发布历程

- 2025-04-17: UI-TARS Desktop v0.1.0
- 2025-06-12: v0.2.0(远程计算机/浏览器操作)
- 2025-11-05: Agent TARS CLI v0.3.0

## 相关页面

- [[视觉语言模型]] — 底层技术
- [[桌面应用控制]] — 应用场景
- [[MCP]] — 集成协议
- [[字节跳动]] — 开发团队