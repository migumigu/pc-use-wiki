---
tags: [GUI自动化, Python库, 鼠标键盘控制, 跨平台]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-pyautogui-official-docs.md]
---

# PyAutoGUI官方文档

> Python跨平台GUI自动化库,提供鼠标键盘控制和屏幕截图功能

## 基本信息

- **项目类型**: Python自动化库
- **开源地址**: https://github.com/asweigart/pyautogui
- **文档地址**: https://pyautogui.readthedocs.io/
- **素材类型**: 官方文档
- **技术层级**: 工具实现层
- **控制对象**: 桌面应用控制

## 核心功能

<!-- confidence: EXTRACTED -->
- **鼠标操作**: 移动鼠标、点击、拖拽等
<!-- confidence: EXTRACTED -->
- **键盘操作**: 按键、输入文本、热键组合
<!-- confidence: EXTRACTED -->
- **屏幕截图**: 获取屏幕图像内容
<!-- confidence: EXTRACTED -->
- **图像识别**: 在屏幕上查找匹配的图像
<!-- confidence: EXTRACTED -->
- **窗口管理**: 定位应用窗口(仅Windows)

## 跨平台支持

<!-- confidence: EXTRACTED -->
- ✓ Windows
- ✓ macOS
- ✓ Linux
- ✓ Python 2 和 3

## 安装

```bash
pip install pyautogui
```

## 核心API示例

### 鼠标控制
<!-- confidence: EXTRACTED -->
```python
import pyautogui

# 获取屏幕尺寸
screenWidth, screenHeight = pyautogui.size()

# 获取鼠标位置
currentMouseX, currentMouseY = pyautogui.position()

# 移动鼠标
pyautogui.moveTo(100, 150)

# 点击
pyautogui.click()
pyautogui.click(100, 200)

# 图像识别点击
pyautogui.click('button.png')
```

### 键盘控制
<!-- confidence: EXTRACTED -->
```python
# 输入文本
pyautogui.write('Hello world!', interval=0.25)

# 按键
pyautogui.press('esc')

# 热键组合
pyautogui.hotkey('ctrl', 'c')
```

### 截图
<!-- confidence: EXTRACTED -->
```python
screenshot = pyautogui.screenshot()
```

## 安全特性

### Fail-Safes机制
<!-- confidence: EXTRACTED -->
PyAutoGUI默认启用安全机制,当鼠标位于屏幕四角时会抛出`pyautogui.FailSafeException`,防止失控操作。

- `pyautogui.FAILSAFE = True` (默认启用)
- `pyautogui.PAUSE = 0.1` (每次调用后的延迟)

## 限制

<!-- confidence: EXTRACTED -->
- **不支持多显示器**: 仅能控制主显示器
- **不支持移动设备**: 无法用于Android/iOS
- **无OCR能力**: 无法识别屏幕文字(roadmap中)
- **无法检测按键状态**: 无法判断当前按键是否按下

## 关键概念

<!-- confidence: EXTRACTED -->
- **坐标系统**: 基于屏幕坐标的鼠标定位
<!-- confidence: EXTRACTED -->
- **图像匹配**: 通过像素匹配识别UI元素
<!-- confidence: EXTRACTED -->
- **Fail-Safes**: 防止自动化失控的安全机制

## 在Agent控制中的应用

<!-- confidence: INFERRED -->
PyAutoGUI是Open Interpreter Computer Use等Agent系统的底层依赖,提供基础的鼠标键盘模拟能力。

## 与其他工具的关系

### 与UI-TARS对比
<!-- confidence: INFERRED -->
- PyAutoGUI: 底层API,需要精确坐标控制
- UI-TARS: 高层接口,通过自然语言和VLM理解生成操作

### 与Open Interpreter关系
<!-- confidence: EXTRACTED -->
Open Interpreter的Computer Use功能使用PyAutoGUI作为鼠标键盘模拟的底层实现。

## 相关页面

- [[桌面应用控制]] — 本素材所属控制对象
- [[Open Interpreter]] — 使用PyAutoGUI的Agent系统
- [[坐标系统]] — 核心技术概念