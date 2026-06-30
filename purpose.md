# 研究目的与方向

## 核心目标
系统研究并积累 AI Agent 控制 PC 电脑的技术方案，分析各类开源项目与工具，构建一套可复用的 Agent 扩展 AI 能力的知识体系，最终目标是实现 Agent 对电脑各类软件、工具、系统资源的高效调用与控制。

## 关键问题
1. 当前有哪些成熟的开源框架或工具能让 Agent 控制 PC（如浏览器自动化、GUI 操作、API 调用、系统命令执行）？
2. 不同方案（如 Playwright、PyAutoGUI、AutoHotkey、Open Interpreter、Computer Use 等）各自的适用场景、能力边界和优缺点是什么？
3. 如何实现 Agent 对复杂桌面软件（如 Office、PS、IDE、专业工具）的精准控制与自动化？
4. 多 Agent 协作控制 PC 时，任务调度、状态同步、错误恢复的最佳实践是什么？
5. 在安全性、权限管理、隐私保护方面，Agent 控制 PC 有哪些关键风险与应对方案？

## 研究范围
**涵盖：**
- AI Agent 控制 PC 的开源项目与框架（如 Anthropic Computer Use、Open Interpreter、browser-use、omniparser 等）
- GUI 自动化工具（如 PyAutoGUI、AutoHotkey、Selenium、Playwright、Puppeteer 等）
- 系统级自动化方案（PowerShell、Bash、WMI、Windows API、AppleScript 等）
- Agent 与外部工具/API 的集成模式（MCP、Function Calling、Tool Use 等）
- 多模态输入（屏幕截图、UI 元素识别、OCR）在 Agent PC 控制中的应用
- 实际应用案例与最佳实践总结

**不涵盖：**
- 纯云端 Agent 服务（不涉及本地 PC 控制的）
- 与 PC 控制无关的通用 AI 模型训练或微调
- 盪件层面的机器人控制（如机械臂）

## 研究框架与分类方法

### 控制对象分类（主维度）
研究围绕五大控制对象展开，每个对象独立积累素材后进行深度综合分析：

1. **浏览器控制**：Web自动化、CDP协议、浏览器工具生态（Playwright、Puppeteer、Selenium、browser-use等）
2. **桌面应用控制**：GUI操作、Office/IDE/PS等专业软件自动化（PyAutoGUI、AutoHotkey、UI Automation等）
3. **系统服务控制**：进程管理、网络配置、权限控制、系统监控（PowerShell、WMI、Windows API等）
4. **文件系统控制**：文件操作、目录管理、权限设置
5. **硬件接口控制**：摄像头、麦克风、传感器、外设调用（DirectShow、Media Foundation等）

### 技术栈分层视角（深度维度）
针对每个控制对象，从四个技术层级进行深入研究：

**系统基础层**：
- Windows API、COM接口、消息队列、进程通信机制
- Linux system calls、IPC、dbus、内核接口
- macOS Cocoa、AppleScript、系统事件

**协议/接口层**：
- 浏览器协议（CDP、WebDriver、Marionette）
- 应用接口（UI Automation、Accessibility API、JAB）
- 系统服务接口（WMI、PowerShell、SSH、WINRM）

**工具实现层**：
- 每个开源项目的实现机制、架构设计、能力边界
- 工具的代码结构、核心模块、技术选型理由

**Agent 集成层**：
- MCP协议设计、Tool Calling模式、状态管理方案
- 多工具协同、错误恢复、权限安全机制

### 知识积累优先级
1. **优先积累基础层素材**：操作系统接口、底层机制的文档（Windows API、COM、进程通信）
2. **其次积累工具层素材**：开源项目源码分析、架构文档（Playwright、PyAutoGUI、Open Interpreter）
3. **最后积累集成层素材**：Agent调用模式、最佳实践案例（MCP、Tool Calling）
4. **定期触发深度综合**：每积累 5-10 篇素材后，运行 digest 生成技术栈全景报告

### 素材收集清单（待消化）

**浏览器控制**：
- [x] browser-use GitHub README ✓
- [x] browser-use 官方文档 ✓
- [x] browser-use 技术架构分析 ✓
- [x] browser-use vs Playwright MCP 对比 ✓
- [ ] Chromium 源码架构文档
- [x] Chrome DevTools Protocol 官方文档 ✓ (2026-06-29) — 已消化
- [x] Playwright 实现原理分析 ✓ (2026-06-29) — 新增
- [ ] Puppeteer vs Selenium 对比文章
- [x] Playwright MCP Server 官方文档 ✓ (2026-06-28)
- [x] page-agent GitHub README ✓ (2026-06-28) — 已消化
- [x] page-agent MCP Server 文档 ✓ (2026-06-28) — 已消化
- [x] page-agent 技术分析报告 ✓ (2026-06-28) — 已消化
- [x] **agent-browser GitHub README** ✓ (2026-06-28) — 37k+ Stars 现象级项目
- [x] **agent-browser Commands 文档** ✓ (2026-06-28) — 官方命令参考
- [x] **agent-browser 技术分析报告** ✓ (2026-06-28) — 已证伪修正
- [x] **agent-browser Token 效率对比** ✓ (2026-06-28) — 第三方测试数据
- [x] **Playwright Test Agents 官方文档** ✓ (2026-06-28) — 三 Agent 智能测试系统
- [x] **Playwright Test Agents 深度分析** ✓ (2026-06-28) — UI 自动化工作流演进
- [x] **Playwright Test Agents 自愈式测试** ✓ (2026-06-28) — Healer 机制详解
- [x] **chrome-devtools-mcp GitHub README** ✓ (2026-06-29) — 43k+ Stars 官方 MCP Server
- [x] **chrome-devtools-mcp 技术深度分析** ✓ (2026-06-29) — 44 个工具详细解析
- [x] **Playwright CDP/WebSocket 架构分析** ✓ (2026-06-29) — Playwright 与 CDP 关系
- [x] **Playwright GitHub README** ✓ (2026-06-29) — 官方项目数据
- [x] **OpenClaw GitHub README** ✓ (2026-06-29) — 20万+ Stars 全栈 AI Agent
- [x] **OpenClaw Gateway 架构** ✓ (2026-06-29) — 中心化架构
- [x] **OpenClaw Tools 概览** ✓ (2026-06-29) — 10+ 工具类别
- [x] **OpenClaw Skills 系统** ✓ (2026-06-29) — AgentSkills 规范
- [x] **OpenClaw 浏览器控制** ✓ (2026-06-29) — 内置 CDP 浏览器模块
- [x] **OpenClaw 沙箱安全** ✓ (2026-06-29) — 3 种沙箱后端
- [x] **浏览器控制深度综合报告** ✓ (2026-06-29) — 已完成 digest
- [x] **bb-browser GitHub README** ✓ (2026-06-30) — 复用登录态的 MCP 浏览器控制
- [x] **bb-browser 技术分析** ✓ (2026-06-30) — 12 大核心能力详解

**桌面应用控制**：
- [x] UI-TARS-desktop GitHub README ✓ (2026-06-28)
- [x] UI-TARS-desktop 技术分析报告 ✓ (2026-06-28)
- [x] Windows UI Automation 官方文档 ✓ (2026-06-28)
- [x] PyAutoGUI 官方文档 ✓ (2026-06-28)
- [x] Open Interpreter GitHub README ✓ (2026-06-28)
- [x] Open Interpreter Computer Use 文档 ✓ (2026-06-28)
- [x] pywinauto GitHub README ✓ (2026-06-28)
- [x] Python-UIAutomation GitHub README ✓ (2026-06-28)
- [x] Windows GUI 自动化工具对比分析报告 ✓ (2026-06-28)
- [x] **CUA GitHub README** ✓ (2026-06-28) — 新增
- [x] **CUA Sandbox 设置文档** ✓ (2026-06-28) — 新增
- [x] **CUA 技术分析报告** ✓ (2026-06-28) — 新增
- [x] **AutoHotkey GitHub README** ✓ (2026-06-28) — 新增
- [x] **AutoHotkey 官方教程** ✓ (2026-06-28) — 新增
- [x] **Goose GitHub README** ✓ (2026-06-29) — 49.7K+ Stars
- [x] **Goose Getting Started** ✓ (2026-06-29) — 安装配置指南
- [x] **Goose 官方教程索引** ✓ (2026-06-29) — 20+ 教程
- [x] **Goose 深度解析** ✓ (2026-06-29) — 架构与竞品分析
- [x] **Hermes Agent GitHub README** ✓ (2026-06-30) — 204K+ Stars 自进化 AI Agent
- [x] **Hermes Agent Computer Use 技术文档** ✓ (2026-06-30) — cua-driver 跨平台桌面控制
- [ ] Office 自动化最佳实践（Excel、Word VBA调用）
- [ ] Accessibility API 跨平台对比

**系统服务控制**：
- [x] PowerShell 官方指南 ✓ (2026-06-28)
- [x] WMI 官方文档 ✓ (2026-06-28) — 新增
- [x] pywin32 GitHub README ✓ (2026-06-28) — 新增
- [x] PowerShell Overview 文档 ✓ (2026-06-28) — 新增
- [x] 系统服务控制技术栈分析报告 ✓ (2026-06-28) — 新增
- [x] **psutil GitHub README** ✓ (2026-06-28) — 340M+ 月下载
- [x] **psutil Installation Guide** ✓ (2026-06-28) — 多平台安装
- [x] **psutil API Reference** ✓ (2026-06-28) — 完整 API
- [x] **systemd.io 官方文档首页** ✓ (2026-06-28) — Linux 主流 init 系统
- [x] **Prefect GitHub README** ✓ (2026-06-28) — 17k+ Stars 工作流编排框架
- [x] **pystemd GitHub README** ✓ (2026-06-28) — systemd 官方 Python 集成库
- [x] **GPUtil GitHub README** ✓ (2026-06-28) — NVIDIA GPU 状态监控
- [x] **netifaces GitHub README** ✓ (2026-06-28) — 跨平台网络接口信息
- [x] **py-cpuinfo GitHub README** ✓ (2026-06-28) — 纯 Python CPU 信息检测
- [x] **WMI Reference 官方文档** ✓ (2026-06-30) — WMI 参考文档完整参考，包含类、提供商、API
- [ ] 进程通信机制深度解析

**文件系统控制**：
- [x] File System as Agent Context 深度分析 ✓ (2026-06-28) — 新增
- [x] planning-with-files GitHub 项目分析 ✓ (2026-06-28) — 新增
- [x] Manus Context Engineering 官方博客 ✓ (2026-06-28) — 新增
- [x] Claude Code Agent 设计分析 ✓ (2026-06-28) — 新增
- [x] 上下文工程终极指南 ✓ (2026-06-28) — 新增
- [x] **watchdog GitHub Repository** ✓ (2026-06-28) — 跨平台文件监控
- [x] **watchdog Installation Guide** ✓ (2026-06-28) — 多平台安装
- [x] **watchdog API Reference** ✓ (2026-06-28) — 完整 API
- [x] **Syncthing GitHub README** ✓ (2026-06-28) — P2P 文件同步（73K+ Stars）
- [x] **Unison GitHub README** ✓ (2026-06-28) — 双向同步（25+ 年历史）
- [x] **filelock Official Documentation** ✓ (2026-06-28) — 跨平台文件锁（723K+ 使用）
- [x] **shutil Python Official Documentation** ✓ (2026-06-28) — Python stdlib 文件操作
- [x] **Filesystem MCP Server GitHub README** ✓ (2026-06-29) — 官方 MCP 文件系统服务器
- [x] **MCP Tools Protocol Specification** ✓ (2026-06-29) — MCP 工具协议规范
- [x] **MCP Roots Protocol** ✓ (2026-06-29) — MCP Roots 协调机制
- [x] **Filesystem MCP 深度解析** ✓ (2026-06-29) — 技术分析与安全评估
- [x] **Windows Security Descriptors 官方文档** ✓ (2026-06-29) — DACL/SACL/ACE
- [x] **Windows DACLs and ACEs 官方文档** ✓ (2026-06-29) — ACE 顺序规则
- [x] **Linux ACL 官方手册页** ✓ (2026-06-29) — POSIX ACL Entry 类型
- [x] **Linux getfacl 命令官方手册页** ✓ (2026-06-29) — ACL 获取工具
- [x] **Linux setfacl 命令官方手册页** ✓ (2026-06-29) — ACL 设置工具
- [x] **POSIX ACL 官方项目页面** ✓ (2026-06-29) — getfacl/setfacl/chacl
- [ ] 文件系统权限模型（ACL、POSIX） — 已完成（2026-06-29）
- [ ] 跨平台文件操作最佳实践 — 待补充

**硬件接口控制**：
- [x] DirectShow API 文档与视频捕获 ✓ (2026-06-28) — 已填补知识空白
- [x] Media Foundation 指南 ✓ (2026-06-28) — 已填补知识空白
- [x] OpenCV VideoCapture 官方文档 ✓ (2026-06-28) — 88K+ Stars 核心工具
- [x] opencv-python PyPI 包文档 ✓ (2026-06-28) — Python 集成
- [x] OpenCV GitHub 仓库 ✓ (2026-06-28) — 项目概览
- [x] **SpeechRecognition GitHub README** ✓ (2026-06-28) — 8,969 Stars 多引擎语音识别
- [x] **SpeechRecognition PyPI Package** ✓ (2026-06-28) — 14+ 引擎支持
- [x] **pySerial GitHub README** ✓ (2026-06-28) — 103k+ 项目使用的串口库
- [x] **pySerial Short Introduction** ✓ (2026-06-28) — API 快速入门
- [x] **hidapi GitHub README** ✓ (2026-06-28) — 2,500+ Stars USB HID 设备库
- [x] **Windows Sensor API 官方文档** ✓ (2026-06-28) — 已弃用，历史参考
- [x] **inputs 库 GitHub README** ✓ (2026-06-28) — 跨平台输入设备库
- [x] **inputs 库官方文档** ✓ (2026-06-28) — 键盘/鼠标/游戏手柄控制
- [x] **libusb GitHub README** ✓ (2026-06-28) — 跨平台 USB 底层库
- [x] **libusb 官方网站** ✓ (2026-06-28) — USB 1.0-4.0 支持
- [x] **PyUSB GitHub README** ✓ (2026-06-29) — 33,800+ 依赖的 Python USB 库
- [x] **PyUSB 官方教程** ✓ (2026-06-29) — API 使用指南
- [x] **libusb 1.0 API Reference** ✓ (2026-06-29) — 底层 USB 协议规范
- [x] **硬件接口控制深度综合报告** ✓ (2026-06-29) — 已完成 digest

**Agent 集成层**：
- [x] MCP 协议基础 ✓（browser-use 文档中涉及）
- [x] MCP 协议设计文档（完整版） ✓ (2026-06-28) — 已消化8个素材，生成综合报告
- [x] Anthropic Computer Use 实现原理 ✓ (2026-06-28) — 已消化5个素材，生成综合报告
- [x] Open Interpreter Computer Use API ✓ (2026-06-28)
- [x] Tool Calling 最佳实践与错误处理 ✓ (2026-06-28) — 已消化12个素材（Anthropic 9个、OpenAI 3个），生成深度分析报告和对比报告
- [x] 多 Agent 协作模式与状态同步 ✓ (2026-06-28) — 已消化5个素材（LangGraph 2个、AutoGen 1个、分析2个），生成技术分析报告和深度综合报告
- [x] **A2A Protocol** ✓ (2026-06-29) — Google 官方 Agent 间通信协议，4个素材
- [x] **OpenClaw 全栈 AI Agent** ✓ (2026-06-29) — 20万+ Stars，Gateway 架构 + Skills + 沙箱，6个素材
- [x] **codebase-memory-mcp** ✓ (2026-06-30) — 高性能代码智能 MCP Server，纯 C 实现，知识图谱索引，3个素材
- [x] **gstack** ✓ (2026-06-30) — YC CEO Garry Tan 的 Claude Code 团队扩展，104K+ Stars，23个 slash commands
- [x] **Hermes Agent** ✓ (2026-06-30) — Nous Research 自进化 AI Agent，204K Stars，内置学习闭环，支持 cua-driver 跨平台桌面控制
- [x] **GitHub MCP Server** ✓ (2026-07-01) — GitHub 官方 MCP Server，22 个工具集，远程+本地双模式，3个素材
- [x] **Microsoft Agent Framework** ✓ (2026-07-01) — 微软统一 Semantic Kernel + AutoGen 的企业级 Agent 框架，MAF 1.0 GA，五层架构，3个素材

### digest 提取指导原则

当 digest 处理素材时，应优先考虑：

1. **实体提取优先级**：
   - 优先提取工具名称（如 Playwright、PyAutoGUI）
   - 其次提取技术概念（如 CDP、UI Automation）
   - 最后提取实现细节（如坐标映射、元素定位）

2. **主题关联原则**：
   - 每个素材至少关联一个控制对象分类
   - 明确标注所属技术层级（系统层/协议层/工具层/Agent层）
   - 多个素材涉及同一控制对象时，建议生成综合分析

3. **别名识别建议**：
   - 发现同义词关系时，主动建议添加到别名词表
   - 格式：`术语 = 同义词1 = 同义词2`

### 知识库维护规范

**严格遵守 llm-wiki 规范**：
- 所有素材先保存到 `raw/` 对应目录
- 绝不手动创建或编辑 `wiki/` 下的任何文件
- 所有知识编译通过 `llm-wiki digest` 工作流完成
- 定期运行 `lint` 和 `status` 检查知识库健康度

**进度跟踪**：
- 每次消化素材后，更新素材收集清单的完成状态
- 每5个素材消化后，生成进度报告
- 达到10个素材后，触发深度综合分析
