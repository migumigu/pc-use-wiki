---
tags: [代码执行, Computer-Use, LLM应用框架]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-open-interpreter-github-readme.md]
---

# Open Interpreter

> 让LLM在本地运行代码的开源框架,支持Computer Use桌面自动化模式

## 基本信息

- **开源协议**: AGPL-3.0
- **GitHub Stars**: ~160K+
- **Commits**: 3,120+
- **项目地址**: https://github.com/openinterpreter/open-interpreter
- **Used by**: 750+ projects

## 核心能力

### 代码执行
<!-- confidence: EXTRACTED -->
- 支持Python、Javascript、Shell等多语言
- 本地执行,无需云端依赖
- ChatGPT-like交互界面

### 应用场景
<!-- confidence: EXTRACTED -->
- 文件处理(照片、视频、PDF)
- 浏览器控制(Chrome自动化)
- 数据分析(绘图、清洗、分析)
- **桌面自动化**(Computer Use模式)

## Computer Use模式

### 技术组成
<!-- confidence: EXTRACTED -->
- **屏幕截图**: mss / pyscreenshot
- **鼠标模拟**: PyAutoGUI
- **键盘模拟**: PyAutoGUI
- **OCR识别**: UI元素文字提取

### 启用方式
<!-- confidence: EXTRACTED -->
```bash
interpreter --computer-use-enabled
```

或:
```python
interpreter.computer_use = True
```

## 安全机制

<!-- confidence: EXTRACTED -->
- 执行前用户确认
- 实验性安全模式
- 支持隔离环境运行(Google Colab、Replit)

## 本地模型支持

<!-- confidence: EXTRACTED -->
- LM Studio
- Jan.ai
- Ollama

## 技术架构

<!-- confidence: EXTRACTED -->
为函数调用语言模型提供`exec()`函数接口,接收语言和代码参数执行,流式输出Markdown格式结果。

## 与其他工具对比

### vs PyAutoGUI
<!-- confidence: EXTRACTED -->
- PyAutoGUI: 底层API
- Open Interpreter: 高层Agent框架,调用PyAutoGUI

### vs UI-TARS
<!-- confidence: INFERRED -->
- Open Interpreter: 通用代码执行+Computer Use
- UI-TARS: 专注GUI Agent和VLM

## 社区活跃度

<!-- confidence: EXTRACTED -->
- 160K+ GitHub Stars
- 3,120+ Commits
- 750+ 项目使用
- 最后commit: 2026年5月

## 相关页面

- [[桌面应用控制]] — Computer Use应用
- [[PyAutoGUI]] — 底层依赖
- [[Agent集成层]] — 技术架构
- [[代码执行环境]] — 核心能力