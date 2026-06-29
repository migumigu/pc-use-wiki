---
tags: [素材摘要, GitHub-README, Python库, GUI自动化]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-python-uiautomation-github-readme.md]
source_type: github_readme
source_path: raw/articles/2026-06-28-python-uiautomation-github-readme.md
images: 0
image_paths: []
---

# Python-UIAutomation-for-Windows GitHub README

> Windows UI Automation的Python封装，提供CLI工具遍历控件树，专注UIAutomation协议

## 基本信息

- **来源类型**：GitHub README（文章）
- **原文位置**：raw/articles/2026-06-28-python-uiautomation-github-readme.md
- **消化日期**：2026-06-28
- **项目地址**：https://github.com/yinkaisheng/Python-UIAutomation-for-Windows
- **License**：Apache License 2.0

## 核心观点

1. **专注UIAutomation**：仅使用UIAutomation后端，不支持Win32 API，更纯粹但仅限Windows
2. **CLI工具支持**：提供automation.py命令行工具，可遍历控件树进行调试
3. **广泛的应用支持**：支持MFC、Windows Form、WPF、Qt、Firefox、Chrome和Electron应用
4. **搜索优化建议**：推荐逐层定位而非深度搜索，可显著提升性能

## 关键概念

- [[Python-UIAutomation]] — 主体工具
- [[UI Automation]] — 底层框架
- [[Automation Element]] — 核心概念

## 与其他素材的关联

- 与 [[pywinauto GitHub README]] 的关系：两者都支持UIAutomation，但Python-UIAutomation更专注于此协议，pywinauto提供双后端选择
- 与 [[Windows UI Automation官方文档]] 的关系：Python-UIAutomation是UI Automation的Python封装

## 原文精彩摘录

> uiautomation 是一个用于 Windows UIAutomation 的 Python 模块。支持 Windows XP SP3 到 Windows 10。

> 搜索优化建议：慢：深度搜索 200+ 控件 vs 快：逐层定位

## 技术特性

**支持的应用类型：**
- MFC
- Windows Form
- WPF
- Modern UI (Metro UI)
- Qt (部分支持)
- Firefox (version <=56 或 >=60)
- Chrome 和 Electron 应用（需添加 `--force-renderer-accessibility` 参数）

**版本历史：**
- uiautomation1.x: 支持 py2, py3，无第三方依赖
- uiautomation2.0+: 仅支持 py3，依赖 comtypes 和 typing

**系统要求：**
- Minimum client: Windows 7, Windows Vista with SP2, Windows XP with SP3
- Minimum server: Windows Server 2008 R2, Windows Server 2008 with SP2

## 核心API

**控件搜索参数：**
- `searchDepth` - 搜索深度
- `Name` - 控件名称
- `ClassName` - 窗口类名
- `AutomationId` - 自动化ID
- `ControlType` - 控件类型
- `Depth` - 深度
- `Compare` - 自定义比较函数

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[UI Automation]] — 底层框架
- [[Python-UIAutomation]] — 主体工具
