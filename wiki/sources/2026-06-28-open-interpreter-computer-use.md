---
tags: [Computer-Use, 屏幕截图, OCR, 输入模拟, 桌面自动化]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-open-interpreter-computer-use.md]
---

# Open Interpreter Computer Use文档

> Open Interpreter的Computer Use模式详细文档,实现AI通过视觉观察和输入模拟控制桌面

## 基本信息

- **文档类型**: 官方文档
- **项目**: Open Interpreter
- **文档地址**: https://docs.openinterpreter.com/
- **素材类型**: 官方文档
- **技术层级**: Agent集成层
- **控制对象**: 桌面应用控制

## Computer Use模式

### 启用方式
<!-- confidence: EXTRACTED -->
```bash
interpreter --computer-use-enabled
```

或Python代码:
```python
from interpreter import interpreter
interpreter.computer_use = True
```

## 核心组件

### 屏幕截图
<!-- confidence: EXTRACTED -->
- **工具**: mss 或 pyscreenshot
- **功能**: 全屏截图、窗口截图、区域截图
- **用途**: 获取屏幕视觉信息供LLM分析

### 视觉识别
<!-- confidence: EXTRACTED -->
- **OCR**: 文字提取和识别
- **图像匹配**: UI元素识别
- **屏幕分析**: 理解当前界面状态

### 输入模拟
<!-- confidence: EXTRACTED -->
- **鼠标操作**: 移动、点击(PyAutoGUI)
- **键盘输入**: 按键、输入文本(PyAutoGUI)
- **拖拽操作**: 鼠标拖放

### 缩放因子处理
<!-- confidence: EXTRACTED -->
```bash
interpreter --computer-use-desktop --computer-scaling-factor 1.5
```
解决高DPI显示器的坐标映射问题。

## 工作流程

<!-- confidence: EXTRACTED -->
1. **观察**: 捕获屏幕图像
2. **分析**: LLM分析屏幕内容
3. **规划**: 根据分析确定下一步操作
4. **执行**: 执行鼠标键盘操作
5. **循环**: 直到任务完成

## 应用场景

### 浏览器自动化
<!-- confidence: EXTRACTED -->
- 网站导航
- 表单填写
- 数据提取
- Web应用交互

### 桌面应用控制
<!-- confidence: EXTRACTED -->
- 打开和关闭应用
- 菜单和对话框交互
- 重复任务自动化
- Office应用控制

### 数据处理
<!-- confidence: EXTRACTED -->
- 从截图提取数据
- 处理视觉信息
- 结合代码执行能力

## 配置选项

<!-- confidence: EXTRACTED -->
```python
# 启用Computer Use
interpreter.computer_use = True

# 设置截图方法
interpreter.computer.use_screenshot = True

# 启用OCR
interpreter.computer.use_ocr = True

# 设置OCR置信度阈值
interpreter.computer.ocr_confidence = 0.8
```

## 技术限制

### OCR准确性
<!-- confidence: EXTRACTED -->
- 中文识别准确率较低
- 小文本可能无法识别
- 不支持手写文本

### 性能问题
<!-- confidence: EXTRACTED -->
- 截图和分析引入延迟
- 复杂屏幕需要更多处理时间

### 安全权限
<!-- confidence: EXTRACTED -->
- 需要屏幕录制权限
- macOS需要辅助功能权限

## 最佳实践

<!-- confidence: EXTRACTED -->
1. **从简单开始**: 先尝试基础操作
2. **明确指令**: 清晰的提示词效果更好
3. **处理错误**: 预期偶尔的误操作
4. **结合代码**: Computer Use + 代码执行
5. **密切监控**: 观察自动化操作过程

## 关键概念

<!-- confidence: EXTRACTED -->
- **视觉观察**: 通过截图理解屏幕
<!-- confidence: EXTRACTED -->
- **OCR识别**: 提取UI元素文字
<!-- confidence: EXTRACTED -->
- **输入模拟**: 鼠标键盘操作
<!-- confidence: EXTRACTED -->
- **缩放因子**: 处理高DPI显示

## 相关工具

<!-- confidence: EXTRACTED -->
- **PyAutoGUI**: 底层输入模拟
- **Tesseract/OCR**: 文字识别
- **mss**: 高性能屏幕截图

## 与其他方案对比

### vs UI-TARS
<!-- confidence: INFERRED -->
- Open Interpreter: 代码执行+Computer Use混合方案
- UI-TARS: 专注视觉语言模型的GUI Agent

### vs PyAutoGUI直接使用
<!-- confidence: EXTRACTED -->
- PyAutoGUI: 需手动编写坐标和操作逻辑
- Computer Use: AI自动分析屏幕并决策操作

## 相关页面

- [[桌面应用控制]] — 应用场景
- [[Open Interpreter]] — 上层框架
- [[PyAutoGUI]] — 底层依赖
- [[OCR技术]] — 文字识别能力
- [[屏幕截图]] — 视觉获取方法