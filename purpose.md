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

**2026年新趋势**：
- [x] **Qoder 官网** ✓ (2026-07-02) — 阿里巴巴 Agentic Platform，Computer Use + Browser Use
- [x] **Qoder Computer Use 技术实践** ✓ (2026-07-02) — 后台桌面控制，Mac + Windows 支持
- [x] **Kun/DeepSeek-GUI GitHub README** ✓ (2026-07-02) — 本地 Agent 工作台，4.1K+ Stars
- [x] **Kun Cache-First Agent Loop** ✓ (2026-07-02) — Token ROI 核心，90%+ 缓存命中率
- [x] **Mem0 GitHub README** ✓ (2026-07-02) — 通用 AI Agent 记忆层，41K-60K+ Stars
- [x] **Mem0 技术分析** ✓ (2026-07-02) — 事实提取范式演进，与 Memora 对比
- [x] **Memora ICML 2026** ✓ (2026-07-02) — 微软 Harmonic Memory，上下文减少 98%
- [x] **Memora 技术深度分析** ✓ (2026-07-02) — 消融实验，企业部署考量
- [x] **Eigent GitHub README** ✓ (2026-07-02) — 多智能体工作流桌面应用，5K-10K Stars
- [x] **Eigent 技术分析** ✓ (2026-07-02) — Workforce 引擎，与记忆系统互补
- [x] **Atlas Agent 记忆** — 三索引+MCP，企业级记忆方案 ✓ (2026-07-02)
- [x] **AionUi AI 桌面协作** — 24K+ Stars，AI 协作桌面应用 ✓ (2026-07-02)
- [x] **agency-agents GitHub README** ✓ (2026-07-02) — 122K+ Stars，16 Division 架构，51+ Agent
- [x] **Cognee GitHub README** ✓ (2026-07-02) — 24K+ Stars，三层存储架构，知识图谱引擎
- [x] **Orca GitHub README** ✓ (2026-07-02) — 7K+ Stars，并行 Agent 编排器，Git worktree 隔离

**浏览器控制**：
- [x] **Skyvern GitHub README** ✓ (2026-07-02) — LLM+CV浏览器自动化，WebVoyager 85.85% SOTA
- [x] **Steel Browser GitHub README** ✓ (2026-07-02) — AI Agent浏览器API，Puppeteer+CDP
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
- [x] **real-browser-mcp GitHub README** ✓ (2026-07-01) — 会话状态复用的 MCP 服务器（18个工具）
- [x] **Computer-Use-Preview GitHub README** ✓ (2026-07-01) — Google 官方 Gemini CUA 实现，双后端架构
- [x] **Stagehand GitHub README** ✓ (2026-07-01) — AI+代码混合控制浏览器自动化，20K+ Stars
- [x] **Stagehand Official Docs** ✓ (2026-07-01) — 四大API详解
- [x] **Stagehand Quickstart Guide** ✓ (2026-07-01) — 快速入门指南
- [x] **BrowserBase MCP Server README** ✓ (2026-07-01) — 官方 MCP 服务器，6工具
- [x] **BrowserBase Official Homepage** ✓ (2026-07-01) — 云浏览器平台，36M+月活会话
- [x] **BrowserBase API Reference** ✓ (2026-07-01) — Sessions API 文档
- [x] **Stagehand技术分析** ✓ (2026-07-01) — AI+代码混合新范式
- [x] **MCP-Server-Browserbase性能优化** ✓ (2026-07-01) — 20-40%性能提升
- [x] **Stagehand+Playwright集成** ✓ (2026-07-01) — 100%兼容性分析
- [x] **BrowserBase AI Agent基础设施** ✓ (2026-07-01) — Web as API新趋势
- [x] **Nanobrowser GitHub README** ✓ (2026-07-02) — 开源AI网页自动化工具，Planner+Navigator双智能体协作系统
- [x] **Nanobrowser 技术架构分析** ✓ (2026-07-02) — TypeScript/React/Vite技术栈，Chrome Extension Manifest V3
- [x] **Nanobrowser 使用案例** ✓ (2026-07-02) — 新闻摘要、数据收集、价格监控等场景
- [x] **Nanobrowser 与其他浏览器自动化工具对比** ✓ (2026-07-02) — 与browser-use/Playwright/agent-browser横向对比

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
- [x] **Agent S GitHub README** ✓ (2026-07-01) — 首个 OSWorld 超越人类的 GUI Agent
- [x] **Agent S 技术深度分析** ✓ (2026-07-01) — bBoN 机制、三代演进
- [x] **CLI-Anything CLI-Hub 官方文档** ✓ (2026-07-01) — CLI 包管理器和注册中心
- [x] **CLI-Anything 深度解析** ✓ (2026-07-01) — Agent-Native 软件世界观
- [x] **CLI-Anything + OpenClaw 集成** ✓ (2026-07-01) — 全自动数字员工组合
- [x] **OpenCUA GitHub README** ✓ (2026-07-01) — 港大+月之暗面完整CUA框架，OSWorld SOTA 45.0%，AgentNet 22.6K任务
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
- [x] **E2B 沙箱云平台** ✓ (2026-07-02) — Firecracker microVM，Agent Sandbox 事实标准
- [x] **agent-sandbox/agent-sandbox** ✓ (2026-07-02) — E2B 开源替代，K8s 云原生 Agent 运行时
- [x] **CubeSandbox** ✓ (2026-07-02) — 60ms 启动 Rust+KVM 硬件级隔离沙箱（腾讯云）
- [x] **kubernetes-sigs/agent-sandbox** ✓ (2026-07-02) — K8s SIG Apps 官方 Agent 沙箱 CRD
- [x] **NemoClaw (NVIDIA)** ✓ (2026-07-02) — 企业级 Agent 安全运行时，OpenClaw 安全外壳，OpenShell 内核级沙箱
- [x] **OpenShell (NVIDIA)** ✓ (2026-07-02) — AI Agent 内核级沙箱运行时，Landlock+seccomp+netns 三重隔离
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
- [x] **Refly.AI** ✓ (2026-07-01) — 全球首个 Vibe Workflow 开源平台，自然语言驱动工作流编排，2个素材
- [x] **Anthropic Managed Agents** ✓ (2026-07-02) — Brain-Hands-Session 三层解耦架构，托管式 Agent 运行平台，1个素材
- [x] **MCP-Link** ✓ (2026-07-01) — OpenAPI 到 MCP Server 自动化转换工具，零代码配置，2个素材
- [x] **Vibe Workflow** ✓ (2026-07-01) — 自然语言驱动的工作流编排范式，核心概念实体
- [x] **DeerFlow** ✓ (2026-07-01) — 字节跳动开源 SuperAgent Harness，72K+ Stars，登顶 GitHub Trending #1，14层 Middleware + Sub-Agent 编排，4个素材
- [x] **Headroom** ✓ (2026-07-01) — AI Agent 上下文压缩层，24,534+ Stars，CCR可逆压缩，60-95% Token节省，跨Agent共享记忆，3个素材
- [x] **Context-mode** ✓ (2026-07-01) — MCP 上下文管理框架，15,616+ Stars，98% Token压缩，Session Continuity，Think in Code范式，3个素材
- [x] **trycua/cua** ✓ (2026-07-01) — Computer-Use Agent 基础设施，后台桌面控制（no-foreground），三模态捕获，MCP集成，3个素材（补充已有 cua-driver）
- [x] **OmniParser** ✓ (2026-07-01) — Microsoft 纯视觉 GUI 截图解析工具，V2.0 SOTA ScreenSpot Pro 39.6%，视觉理解基础设施，3个素材
- [x] **UFO²/UFO³** ✓ (2026-07-01) — Microsoft Windows 桌面 AgentOS，GUI+API混合执行，推测式多步执行(-51.5% LLM调用)，UFO³ Galaxy多设备编排，2个素材
- [x] **OpenHands** ✓ (2026-07-02) — 75.9K Stars 全栈 AI Coding Agent 平台，SWEBench 77.6% SOTA，五层架构 + 三层 Harness（SDK/CLI/GUI/Cloud/Enterprise + EventStream/Runtime/Sandbox），2个素材

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
