---
tags: [Open-Interpreter, 代码执行, Computer-Use, LLM应用]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-open-interpreter-github-readme.md]
---

# Open Interpreter GitHub README

> 让LLM在本地运行代码的开源项目,支持Computer Use桌面自动化模式

## 基本信息

- **开源协议**: AGPL-3.0
- **GitHub Stars**: ~160K+
- **Commits**: 3,120+
- **项目地址**: https://github.com/openinterpreter/open-interpreter
- **素材类型**: GitHub README
- **技术层级**: 工具实现层 / Agent集成层
- **控制对象**: 桌面应用控制(Computer Use模式)

## 核心能力

### 代码执行
<!-- confidence: EXTRACTED -->
- 支持Python、Javascript、Shell等多种语言
- 本地执行代码,无需云端依赖
- ChatGPT-like界面交互

### 具体功能
<!-- confidence: EXTRACTED -->
- 创建和编辑照片、视频、PDF等文件
- 控制Chrome浏览器进行研究
- 绘制、清洗和分析大型数据集
- **Computer Use**: 模拟鼠标键盘操作实现桌面自动化

## Computer Use模式

### 核心组件
<!-- confidence: EXTRACTED -->
- **屏幕截图**: 通过mss或pyscreenshot捕获屏幕
- **鼠标模拟**: 使用PyAutoGUI实现点击、移动等操作
- **键盘模拟**: 使用PyAutoGUI实现按键、输入等操作
- **OCR识别**: UI元素文字识别

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

## 安全特性

<!-- confidence: EXTRACTED -->
- **用户确认**: 执行代码前请求用户确认
- **安全模式**: 实验性的安全模式
- **隔离环境**: 可在Google Colab、Replit等隔离环境运行

## 本地模式支持

<!-- confidence: EXTRACTED -->
- 支持本地模型(LM Studio、Jan.ai、Ollama)
- 完全的互联网访问权限
- 无时间和文件大小限制

## 技术架构

<!-- confidence: EXTRACTED -->
Open Interpreter为函数调用语言模型提供`exec()`函数,接收`language`和`code`参数执行,并将模型消息、代码和系统输出以Markdown格式流式传输到终端。

## 关键概念

<!-- confidence: EXTRACTED -->
- **Computer Use**: 通过屏幕截图和输入模拟控制桌面
<!-- confidence: EXTRACTED -->
- **本地执行**: 代码在本地环境执行,无需云端
<!-- confidence: EXTRACTED -->
- **Function Calling**: 通过exec()函数调用实现代码执行
<!-- confidence: EXTRACTED -->
- **多语言支持**: 支持Python、JS、Shell等多种语言

## 与其他工具的关系

### vs UI-TARS
<!-- confidence: INFERRED -->
- Open Interpreter: 通用代码执行+Computer Use
- UI-TARS: 专注GUI Agent和视觉语言模型

### vs PyAutoGUI
<!-- confidence: EXTRACTED -->
- PyAutoGUI: 底层鼠标键盘模拟API
- Open Interpreter: 高层Agent集成框架,调用PyAutoGUI

## 社区活跃度

<!-- confidence: EXTRACTED -->
- Stars: ~160K+
- Commits: 3,120+
- Used by: 750+ projects
- Last commit: May 17, 2026

## 相关页面

- [[桌面应用控制]] — Computer Use应用场景
- [[PyAutoGUI]] — 底层依赖
- [[Agent集成层]] — 技术架构层面
- [[代码执行环境]] — 核心能力