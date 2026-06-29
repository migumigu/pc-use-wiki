---
tags: [素材摘要, GitHub-README, Python库, GUI自动化]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pywinauto-github-readme.md]
source_type: github_readme
source_path: raw/articles/2026-06-28-pywinauto-github-readme.md
images: 0
image_paths: []
---

# pywinauto GitHub README

> Python Windows GUI自动化库，支持Win32 API和UIAutomation双后端，面向对象设计

## 基本信息

- **来源类型**：GitHub README（文章）
- **原文位置**：raw/articles/2026-06-28-pywinauto-github-readme.md
- **消化日期**：2026-06-28
- **项目地址**：https://github.com/pywinauto/pywinauto
- **License**：BSD 3-clause license

## 核心观点

1. **双后端支持**：pywinauto支持Win32 API（默认）和MS UI Automation两种后端，灵活切换
2. **属性访问延迟解析**：使用`app.Notebook.Dialog.Button`语法，延迟等待控件出现，无需显式sleep
3. **面向对象设计**：比其他工具更Pythonic，比AutoHotkey等脚本语言更现代
4. **本地化支持**：主要设计目标，支持多语言UI自动化

## 关键概念

- [[Pywinauto]] — 主体工具
- [[UI Automation]] — UIAutomation后端依赖的框架
- [[Win32 API]] — win32后端依赖的底层API

## 与其他素材的关联

- 与 [[PyAutoGUI官方文档]] 的关系：两者都是Python GUI自动化工具，但pywinauto功能更全面（支持控件树遍历），PyAutoGUI更简单（基于图像识别）
- 与 [[Windows UI Automation官方文档]] 的关系：pywinauto的uia后端底层依赖UI Automation框架

## 原文精彩摘录

> pywinauto is a set of python modules to automate the Microsoft Windows GUI. At its simplest it allows you to send mouse and keyboard actions to windows dialogs and controls, but it has support for more complex actions like getting text data.

> pywinauto uses attribute access (via __getattribute__) to locate controls. For example: `myapp.Notepad` finds a window with title similar to "Notepad".

## 技术特性

**支持的技术：**
- Win32 API (`backend="win32"`; 默认后端)
- MS UI Automation (`backend="uia"`)

**依赖：**
- Windows: pyWin32, comtypes
- Linux: python-xlib
- Optional: Pillow (截图功能)

**安装：**
```bash
pip install pywinauto
conda install -c conda-forge pywinauto
```

## 与其他工具对比

**Python工具：**
- PyAutoGui - 跨平台库（基于图像搜索，无文本控件操作）
- Lackey - 纯Python Sikuli替代品（基于图像模式匹配）
- AXUI - MS UI Automation API封装之一
- winGuiAuto - 另一个Win32 API模块

**脚本语言工具：**
- Perl: Win32::GuiTest
- Ruby: Win32-Autogui, RAutomation

**开源工具：**
- C#: Winium.Desktop, TestStack.White
- AutoIt, AutoHotKey

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[PyAutoGUI]] — 对比工具
- [[UI Automation]] — 底层框架
