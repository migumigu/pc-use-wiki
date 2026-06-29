---
source_id: auto-2026-06-28-pyautogui-github-readme
title: PyAutoGUI GitHub README
url: https://github.com/asweigart/pyautogui
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# PyAutoGUI

PyAutoGUI 是一个跨平台的 GUI 自动化 Python 模块，用于人类可读的鼠标和键盘控制。

## 核心特性

**跨平台支持：**
- Windows: 使用 ctypes 访问 Windows API
- macOS: 使用 rubicon-objc 访问 Cocoa API
- Linux: 使用 Xlib 访问 X11

**依赖：**
- Windows: 无外部依赖
- macOS: pyobjc-core, pyobjc
- Linux: python3-xlib
- 可选: Pillow (图像相关功能)

## API 概览

**鼠标控制：**
```python
pyautogui.moveTo(100, 150)  # 移动到坐标
pyautogui.click()  # 点击
pyautogui.doubleClick()  # 双击
pyautogui.move(None, 10)  # 相对移动
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
pyautogui.locateCenterOnScreen('button.png')  # 定位图像中心
```

**对话框：**
```python
pyautogui.alert()
pyautogui.confirm()
pyautogui.prompt()
pyautogui.password()
```

## 坐标系统

- 原点 (0, 0) 在屏幕左上角
- x 向右增加
- y 向下增加
- 仅支持主显示器

## 技术限制

1. 仅适用于主显示器，多显示器支持不稳定
2. 基于图像的搜索在分辨率变化时可能失效
3. 无原生文本控件操作能力

## License

BSD-3-Clause license

## 作者

由 Al Sweigart 开发维护
