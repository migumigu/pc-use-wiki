# AI Agent PC 控制 — 知识库索引

> 创建于 2026-06-27 | 最后更新：2026-06-28

---

## 知识库概览

本知识库收集了关于 **AI Agent 控制 PC 电脑**的所有知识和素材，研究开源项目与工具，构建可复用的 Agent 扩展 AI 能力的知识体系。

---

## 控制对象分类

### 浏览器控制
- 主题页：[[浏览器控制]]
- 素材摘要：[[browser-use GitHub README]] [[browser-use 官方文档]] [[browser-use 技术架构分析]] [[browser-use vs Playwright MCP 对比]] [[Playwright MCP Server 官方文档]] [[page-agent GitHub README]] [[page-agent MCP Server 文档]] [[page-agent 技术分析报告]]
- 相关实体：[[browser-use]] [[Playwright]] [[浏览器自动化]] [[Agent]] [[LLM]] [[MCP]]

### 桌面应用控制
- 主题页：[[桌面应用控制]]
- 素材摘要：[[UI-TARS-desktop GitHub README]] [[UI-TARS-desktop 技术分析报告]] [[Windows UI Automation 官方文档]] [[PyAutoGUI 官方文档]] [[Open Interpreter GitHub README]] [[Open Interpreter Computer Use 文档]] [[pywinauto GitHub README]] [[Python-UIAutomation GitHub README]] [[Windows GUI 自动化工具对比分析报告]] [[CUA GitHub README]] [[CUA Sandbox 设置文档]] [[CUA 技术分析报告]] [[AutoHotkey GitHub README]] [[AutoHotkey Beginner Tutorial]]
- 相关实体：[[UI-TARS]] [[PyAutoGUI]] [[Pywinauto]] [[Python-UIAutomation]] [[Open Interpreter]] [[UI Automation]] [[Control-Patterns]] [[Automation-Element]] [[坐标系统]] [[屏幕截图]] [[OCR技术]] [[视觉语言模型]] [[AutoHotkey]]

### 系统服务控制
- 主题页：[[系统服务控制]]
- 深度报告：[[系统服务控制-深度报告]]
- 素材摘要：[[PowerShell 官方指南]] [[WMI 官方文档]] [[pywin32 GitHub README]] [[PowerShell Overview 文档]] [[pywinauto GitHub README]] [[Windows UI Automation 官方文档]] [[systemd.io 官方文档首页]] [[Prefect GitHub README]] [[pystemd GitHub README]]
- 相关实体：[[PowerShell]] [[Cmdlet]] [[WMI]] [[pywin32]] [[systemd]] [[Prefect]] [[pystemd]]

### 文件系统控制
- 主题页：[[文件系统控制]]
- 综合分析：[[文件系统控制-深度报告]]（新增）
- 素材摘要：[[File System as Meta Tool：AI Agent 基础设施新思路]] [[planning-with-files GitHub 项目分析]] [[AI代理的上下文工程：构建Manus的经验教训]] [[上下文工程终极指南：从提示工程到Claude Code]] [[Claude Code Agent 设计分析]]
- 相关实体：[[上下文工程]] [[状态显式化]] [[KV-Cache]] [[上下文窗口极简主义]] [[思考与行动分离]] [[掩码而非移除工具]] [[单一真理来源]]

### 硬件接口控制
- 主题页：[[硬件接口控制]]
- 素材摘要：[[OpenCV VideoCapture Class Reference]] [[Audio/Video Capture in Media Foundation]] [[opencv-python PyPI Package]] [[DirectShow (Legacy API)]] [[OpenCV GitHub Repository]] [[SpeechRecognition GitHub README]] [[SpeechRecognition PyPI Package]] [[pySerial GitHub README]] [[pySerial Short Introduction]] [[hidapi GitHub README]] [[Windows Sensor API 官方文档]] [[inputs Python Library GitHub README]] [[inputs Python Library Documentation]] [[libusb GitHub README]] [[libusb Official Website]]
- 相关实体：[[OpenCV]] [[SpeechRecognition]] [[pySerial]] [[VideoCapture]] [[语音识别]] [[串口通信]] [[PyAudio]] [[Whisper]] [[Vosk]] [[传感器]] [[Media Foundation]] [[DirectShow]] [[UVC]] [[hidapi]] [[Windows-Sensor-API]] [[inputs]] [[libusb]]

---

## 技术层级

### Agent 集成层
- 主题页：[[Agent集成层]]
- 素材摘要：[[MCP 协议基础]] [[MCP 协议设计文档]] [[Anthropic Computer Use 实现原理]] [[Open Interpreter Computer Use API]]
- 相关实体：[[MCP]] [[Computer-Use]] [[Agent]] [[LLM]]

---

## 素材统计

| 类型 | 数量 |
|------|------|
| 素材摘要 | 46 |
| 实体页 | 44 |
| 主题页 | 6 |
| 对比分析 | 1 |
| 综合分析 | 3 |

---

## 最近更新

- **2026-06-28**：填补知识缺口研究（自动研究工作流 v6）
  - 收集 6 个官方素材（AutoHotkey×2、inputs×2、libusb×2）
  - 创建 6 个素材摘要页
  - 创建 3 个实体页（AutoHotkey、inputs、libusb）
  - 更新主题页（桌面应用控制、硬件接口控制）
  - 执行证伪验证（所有声明已验证）
  - 知识库素材：46（+6）
  - 知识库实体：44（+3）
  - 桌面应用控制素材：14（达标）
  - 硬件接口控制素材：15（达标）

- **2026-06-28**：补充研究（自动研究工作流 v5）
  - 收集 2 个官方素材（Prefect GitHub README、pystemd GitHub README）
  - 创建 2 个素材摘要页
  - 创建 2 个实体页（Prefect、pystemd）
  - 更新主题页（系统服务控制）
  - 知识库素材：40（+2）
  - 知识库实体：41（+2）
  - 系统服务控制素材：10（达标）

- **2026-06-28**：补充研究（自动研究工作流 v4）
  - 收集 3 个官方素材（hidapi GitHub README、Windows Sensor API、systemd.io）
  - 创建 3 个素材摘要页
  - 创建 3 个实体页（hidapi、Windows-Sensor-API、systemd）
  - 更新主题页（硬件接口控制、系统服务控制）
  - 知识库素材：38（+3）
  - 知识库实体：39（+3）

- **2026-06-28**：完成硬件接口控制研究（自动研究工作流）
  - 收集 4 个权威素材（SpeechRecognition GitHub README、PyPI、pySerial GitHub README、Short Introduction）
  - 创建 4 个素材摘要页
  - 创建 7 个实体页（SpeechRecognition、pySerial、语音识别、串口通信、PyAudio、Whisper、Vosk、传感器）
  - 更新主题页（硬件接口控制）
  - 执行证伪验证（所有声明已验证）

- **2026-06-28**：完成文件系统控制深度研究
  - 收集 4 个权威素材（技术博客、GitHub README、官方博客）
  - 创建 4 个素材摘要页
  - 创建 7 个实体页（上下文工程、状态显式化、KV-Cache、上下文窗口极简主义、思考与行动分离、掩码而非移除工具）
  - 创建 1 个主题页（文件系统控制）
  - 更新素材收集清单（purpose.md）

- **2026-06-28**：完成系统服务控制研究
  - 收集 5 个权威素材
  - 创建 5 个素材摘要页
  - 创建 2 个实体页（PowerShell、Cmdlet）
  - 创建 1 个主题页（系统服务控制）

- **2026-06-28**：完成 MCP Protocol 深度研究
  - 收集 8 个权威素材
  - 创建 8 个素材摘要页
  - 创建 1 个综合分析页（MCP-Protocol 深度报告）

- **2026-06-27**：完成 browser-use 深度研究
  - 收集 6 个权威素材（GitHub README、官方文档、技术分析等）
  - 创建 5 个素材摘要页
  - 创建 6 个实体页（browser-use、Playwright、Agent、LLM、MCP、浏览器自动化）
  - 创建 2 个主题页（浏览器控制、Agent集成层）

---

## 快速导航

- [[素材摘要]]
- [[实体页]]
- [[主题页]]
- [[对比分析]]
- [[综合分析]]
