---
source_id: auto-2026-06-28-pywinauto-github-readme
title: pywinauto GitHub README
url: https://github.com/pywinauto/pywinauto
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# pywinauto

pywinauto is a set of python modules to automate the Microsoft Windows GUI. At its simplest it allows you to send mouse and keyboard actions to windows dialogs and controls, but it has support for more complex actions like getting text data.

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

## 核心概念

pywinauto 使用属性访问方式（`__getattribute__`）来定位控件。例如：
```python
myapp.Notepad  # 查找标题类似 "Notepad" 的窗口
myapp.PageSetup.OK  # 先找 PageSetup 对话框，再找其中的 OK 按钮
```

**延迟解析机制：** 属性解析是延迟的（默认有超时），会自动等待控件出现。

## 与其他工具对比

**Python 工具：**
- PyAutoGui - 跨平台库（基于图像搜索，无文本控件操作）
- Lackey - 纯 Python Sikuli 替代品（基于图像模式匹配）
- AXUI - MS UI Automation API 封装之一
- winGuiAuto - 另一个 Win32 API 模块

**脚本语言工具：**
- Perl: Win32::GuiTest
- Ruby: Win32-Autogui, RAutomation

**开源工具：**
- C#: Winium.Desktop, TestStack.White
- AutoIt, AutoHotKey

## 设计理念

1. **面向对象设计** - 比其他工具更 Pythonic
2. **本地化支持** - 主要设计目标，支持多语言 UI
3. **属性访问延迟解析** - 无需显式使用 time.sleep 或 wait 函数

## License

BSD 3-clause license

## 贡献者

由 Mark Mc Mahon 最初编写，2015 年后由开源社区维护（0.6.0+）
