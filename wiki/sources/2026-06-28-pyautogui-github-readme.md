---
tags: [素材摘要, GitHub-README, Python库, GUI自动化]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pyautogui-github-readme.md]
source_type: github_readme
source_path: raw/articles/2026-06-28-pyautogui-github-readme.md
images: 0
image_paths: []
---

# PyAutoGUI GitHub README

> 跨平台GUI自动化Python模块，基于图像识别，支持鼠标键盘控制

## 基本信息

- **来源类型**：GitHub README（文章）
- **原文位置**：raw/articles/2026-06-28-pyautogui-github-readme.md
- **消化日期**：2026-06-28
- **项目地址**：https://github.com/asweigart/pyautogui
- **License**：BSD-3-Clause license

## 核心观点

1. **跨平台支持**：Windows(macOS Linux)，使用各平台原生API（Windows API/Cocoa API/Xlib）
2. **图像识别驱动**：基于截图对比定位元素，适合固定界面，但分辨率变化时易失效
3. **简单易用**：API简洁直观，适合快速原型，但缺乏文本控件操作能力
4. **安全机制**：Fail-Safe（鼠标到角落自动停止）和PAUSE延迟

## 关键概念

- [[PyAutoGUI]] — 主体工具
- [[坐标系统]] — 核心技术
- [[屏幕截图]] — 图像识别基础

## 与其他素材的关联

- 与 [[pywinauto GitHub README]] 的关系：PyAutoGUI更简单（图像识别），pywinauto更强大（控件树遍历）
- 与 [[PyAutoGUI官方文档]] 的关系：同一项目，GitHub README提供概览，官方文档提供完整API参考

## 原文精彩摘录

> PyAutoGUI 是一个跨平台的 GUI 自动化 Python 模块，用于人类可读的鼠标和键盘控制。

> 仅适用于主显示器，多显示器支持不稳定；基于图像的搜索在分辨率变化时可能失效；无原生文本控件操作能力。

## 技术特性

**跨平台支持：**
- Windows: 使用 ctypes 访问 Windows API
- macOS: 使用 rubicon-objc 访问 Cocoa API
- Linux: 使用 Xlib 访问 X11

**依赖：**
- Windows: 无外部依赖
- macOS: pyobjc-core, pyobjc
- Linux: python3-xlib
- 可选: Pillow (图像相关功能)

## API概览

**鼠标控制：**
```python
pyautogui.moveTo(100, 150)  # 移动到坐标
pyautogui.click()  # 点击
pyautogui.doubleClick()  # 双击
```

**键盘控制：**
```python
pyautogui.write('Hello world!', interval=0.25)
pyautogui.press('esc')
pyautogui.hotkey('ctrl', 'c')
```

**屏幕截图与图像识别：**
```python
pyautogui.screenshot()
pyautogui.locateOnScreen('button.png')  # 定位图像
```

## 技术限制

1. 仅适用于主显示器，多显示器支持不稳定
2. 基于图像的搜索在分辨率变化时可能失效
3. 无原生文本控件操作能力

## 相关页面

- [[桌面应用控制]] — 应用领域
- [[PyAutoGUI]] — 主体工具
- [[坐标系统]] — 核心技术
