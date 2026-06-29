---
tags: [Python库, GUI自动化, 跨平台工具]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pyautogui-official-docs.md, raw/articles/2026-06-28-pyautogui-github-readme.md]
---

# PyAutoGUI

> Python跨平台GUI自动化库,提供鼠标键盘控制、屏幕截图和图像识别功能

## 基本信息

- **项目类型**: Python自动化库
- **开源地址**: https://github.com/asweigart/pyautogui
- **文档地址**: https://pyautogui.readthedocs.io/
- **主要开发者**: Al Sweigart

## 核心能力

### 鼠标控制
<!-- confidence: EXTRACTED -->
- `moveTo(x, y)` - 移动鼠标到指定坐标
- `click()` / `click(x, y)` - 点击操作
- `click('image.png')` - 通过图像识别点击

### 键盘控制
<!-- confidence: EXTRACTED -->
- `write(text)` - 输入文本
- `press(key)` - 按键操作
- `hotkey('ctrl', 'c')` - 热键组合

### 屏幕操作
<!-- confidence: EXTRACTED -->
- `screenshot()` - 截取屏幕
- `size()` - 获取屏幕尺寸
- `position()` - 获取鼠标位置

## 跨平台特性

<!-- confidence: EXTRACTED -->
支持Windows、macOS、Linux三大平台,兼容Python 2和Python 3。

## 安全机制

### Fail-Safes
<!-- confidence: EXTRACTED -->
默认启用,鼠标移到屏幕四角时自动停止执行,防止失控操作。

### PAUSE延迟
<!-- confidence: EXTRACTED -->
每次API调用后自动延迟0.1秒,避免操作过快。

## 技术限制

<!-- confidence: EXTRACTED -->
- ❌ 不支持多显示器
- ❌ 不支持Android/iOS
- ❌ 无OCR能力
- ❌ 无法检测按键状态

## 在Agent控制中的作用

### 底层依赖
<!-- confidence: EXTRACTED -->
Open Interpreter Computer Use使用PyAutoGUI作为鼠标键盘模拟的底层实现。

### vs UI-TARS
<!-- confidence: INFERRED -->
- PyAutoGUI: 底层坐标驱动API
- UI-TARS: 高层自然语言接口

## 适用场景

<!-- confidence: INFERRED -->
- 基础GUI自动化脚本
- Agent系统的底层输入模拟
- 跨平台桌面测试自动化

## 相关页面

- [[桌面应用控制]] — 应用场景
- [[Open Interpreter]] — 上层Agent系统
- [[坐标系统]] — 核心技术