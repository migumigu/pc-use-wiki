---
tags: [Python库, GUI自动化, Windows工具]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pywinauto-github-readme.md]
---

# Pywinauto

> Python Windows GUI自动化库，支持Win32 API和UIAutomation双后端，提供面向对象的控件访问方式

## 基本信息

- **项目类型**: Python自动化库
- **开源地址**: https://github.com/pywinauto/pywinauto
- **License**: BSD 3-clause license
- **维护状态**: 开源社区维护（0.6.0+）

## 核心能力

### 双后端支持
<!-- confidence: EXTRACTED -->
- `backend="win32"` (默认): 使用Win32 API
- `backend="uia"`: 使用MS UI Automation

### 属性访问延迟解析
<!-- confidence: EXTRACTED -->
```python
myapp.Notepad  # 查找标题类似 "Notepad" 的窗口
myapp.PageSetup.OK  # 先找PageSetup对话框，再找其中的OK按钮
```
属性解析是延迟的（默认有超时），会自动等待控件出现。

### 依赖
<!-- confidence: EXTRACTED -->
- Windows: pyWin32, comtypes
- Linux: python-xlib
- Optional: Pillow (截图功能)

## 设计理念

<!-- confidence: EXTRACTED -->
1. **面向对象设计** - 比其他工具更Pythonic
2. **本地化支持** - 主要设计目标，支持多语言UI
3. **属性访问延迟解析** - 无需显式使用time.sleep或wait函数

## 与其他工具对比

### Python工具
<!-- confidence: EXTRACTED -->
- PyAutoGui - 跨平台库（基于图像搜索，无文本控件操作）
- Lackey - 纯Python Sikuli替代品（基于图像模式匹配）
- AXUI - MS UI Automation API封装之一
- winGuiAuto - 另一个Win32 API模块

### 脚本语言工具
<!-- confidence: EXTRACTED -->
- Perl: Win32::GuiTest
- Ruby: Win32-Autogui, RAutomation

### 开源工具
<!-- confidence: EXTRACTED -->
- C#: Winium.Desktop, TestStack.White
- AutoIt, AutoHotKey

## 适用场景

<!-- confidence: INFERRED -->
- 复杂Windows桌面应用自动化
- 需要文本读取的自动化流程
- 企业级桌面应用测试
- 需要双后端灵活切换的场景

## 技术限制

<!-- confidence: INFERRED -->
- 主要面向Windows，Linux/macOS支持仍在规划中
- 需要管理员权限（部分操作）
- 依赖pywin32和comtypes

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[PyAutoGUI]] — 对比工具
- [[UI Automation]] — UIAutomation后端依赖
