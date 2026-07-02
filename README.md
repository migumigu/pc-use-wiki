# AI Agent PC 控制知识库

> 系统研究 AI Agent 控制 PC 电脑的技术方案，构建可复用的知识体系
>
> 创建于 2026-06-27 | 最后更新：2026-07-02（Skyvern与Steel Browser研究）

## 项目简介

本知识库围绕 **AI Agent 如何控制 PC 电脑** 这一核心问题，系统性地研究各类开源项目与工具，分析技术方案的能力边界与适用场景，最终目标是为 Agent 实现对电脑软件、工具、系统资源的高效调用与控制提供参考。

## 知识库统计

| 类型 | 数量 |
|------|------|
| 素材摘要 | 179 |
| 实体页 | 112 |
| 主题页 | 6 |
| 对比分析 | 1 |
| 综合分析 | 12 |

## 研究范围

### 五大控制对象

| 控制对象 | 说明 | 主要技术 |
|---------|------|---------|
| 浏览器控制 | Web 自动化、CDP 协议、浏览器工具生态 | Playwright、browser-use、page-agent、Stagehand、Skyvern、Steel Browser |
| 桌面应用控制 | GUI 操作、Office/IDE/PS 等专业软件自动化 | PyAutoGUI、AutoHotkey、UI-TARS、CUA、Agent S、Hermes Agent |
| 系统服务控制 | 进程管理、网络配置、权限控制、系统监控 | PowerShell、WMI、systemd、psutil、Prefect |
| 文件系统控制 | 文件操作、目录管理、权限设置 | Filesystem MCP、watchdog、shutil、ACL、Security Descriptor |
| 硬件接口控制 | 摄像头、麦克风、传感器、外设调用 | OpenCV、DirectShow、libusb、pySerial、hidapi、SpeechRecognition |

### 技术层级

1. **系统基础层** — Windows API、COM 接口、进程通信机制
2. **协议/接口层** — CDP、WebDriver、UI Automation、WMI、MCP
3. **工具实现层** — 开源项目架构设计、能力边界分析
4. **Agent 集成层** — MCP 协议、Tool Calling 模式、多 Agent 协作、A2A 协议

## 知识库结构

```
wiki/
├── entities/      # 实体页：工具、技术概念（112个）
├── sources/       # 素材摘要：原始资料消化（179个）
├── topics/        # 主题页：按控制对象分类（6个）
├── comparisons/   # 对比分析：工具对比（1个）
├── synthesis/     # 深度报告：综合分析（12个）
└── index.md       # 知识库索引
```

## 关键技术栈

### 浏览器控制
- [Playwright](https://github.com/microsoft/playwright) — 微软主导的浏览器自动化框架
- [browser-use](https://github.com/browser-use/browser-use) — AI 浏览器自动化
- [page-agent](https://github.com/alanliang/page-agent) — 页面级浏览器 Agent
- [Stagehand](https://github.com/frdel/stagehand) — 浏览器自动化的新革命
- [Skyvern](https://github.com/Skyvern-AI/skyvern) — AI 驱动的浏览器自动化
- [Steel Browser](https://github.com/steel-dev/steel-browser) — 自动化浏览器工具
- [Browserbase](https://browserbase.com/) — 浏览器基础设施平台
- [Chrome DevTools MCP](https://github.com/modelcontextprotocol/servers) — CDP 协议 MCP Server
- [OpenClaw](https://github.com/openclaw/openclaw) — 全栈 AI Agent 框架
- [bb-browser](https://github.com/bytebot-ai/bb-browser) — Bytebot 浏览器组件
- [Agent-Reach](https://github.com/agent-reach/agent-reach) — 浏览器 Agent 工具

### 桌面应用控制
- [PyAutoGUI](https://github.com/asweigart/pyautogui) — Python GUI 自动化
- [AutoHotkey](https://github.com/AutoHotkey/AutoHotkey) — Windows 自动化脚本
- [UI-TARS](https://github.com/OpenGVLab/UI-TARS) — 多模态 GUI Agent
- [CUA](https://github.com/cua-agent/cua) — Anthropic 的 Computer Use Agent
- [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) — 本地代码执行框架
- [Agent S](https://github.com/simular-ai/Agent-S) — 首个超越人类的 GUI Agent（OSWorld）
- [Hermes Agent](https://github.com/NousResearch/Hermes-Function-Calling) — 开源 Computer Use Agent
- [CLI-Anything](https://github.com/cli-anything/cli-anything) — CLI 驱动的应用控制
- [OpenCUA](https://github.com/opencua/opencua) — 开源 CUA 实现
- [pywinauto](https://github.com/pywinauto/pywinauto) — Windows GUI 自动化
- [Python-UIAutomation](https://github.com/yinkaisheng/Python-UIAutomation-for-Windows) — UI Automation Python 封装

### 系统服务控制
- [PowerShell](https://learn.microsoft.com/powershell/) — Windows 系统管理
- [WMI](https://learn.microsoft.com/windows/wmi/) — Windows 管理规范
- [systemd](https://systemd.io/) — Linux 系统与服务管理器
- [psutil](https://github.com/giampaolo/psutil) — 跨平台系统监控
- [pywin32](https://github.com/mhammond/pywin32) — Windows API Python 绑定
- [Prefect](https://github.com/PrefectHQ/prefect) — 工作流编排
- [pystemd](https://github.com/facebookincubator/pystemd) — systemd Python 绑定

### 文件系统控制
- [Filesystem MCP](https://github.com/modelcontextprotocol/servers) — MCP 文件系统协议
- [watchdog](https://github.com/gorakhargosh/watchdog) — 跨平台文件监控
- [shutil](https://docs.python.org/3/library/shutil.html) — Python 文件操作库
- [filelock](https://github.com/tox-dev/py-filelock) — 跨平台文件锁
- [ACL](<https://en.wikipedia.org/wiki/Access-control_list>) — 访问控制列表
- [Security Descriptor](https://learn.microsoft.com/windows/win32/secauthz/security-descriptors) — Windows 安全描述符
- [POSIX ACL](https://savannah.nongnu.org/projects/acl) — Linux POSIX ACL 工具

### 硬件接口控制
- [OpenCV](https://github.com/opencv/opencv) — 计算机视觉库
- [pySerial](https://github.com/pyserial/pyserial) — 串口通信
- [libusb](https://github.com/libusb/libusb) — 跨平台 USB 底层库
- [hidapi](https://github.com/libusb/hidapi) — USB HID 设备库
- [SpeechRecognition](https://github.com/Uberi/speech_recognition) — 语音识别库
- [Media Foundation](https://learn.microsoft.com/windows/win32/medfound/microsoft-media-foundation-sdk) — Windows 媒体框架
- [DirectShow](https://learn.microsoft.com/windows/win32/directshow/directshow) — Windows 多媒体 API
- [inputs](https://github.com/zeth/inputs) — 跨平台输入设备库
- [PyUSB](https://github.com/pyusb/pyusb) — Python USB 访问
- [Windows Sensor API](https://learn.microsoft.com/windows/win32/sensorsapi/sensors-api-start-page) — Windows 传感器 API

### Agent 协议与集成
- [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) — Anthropic 主导的 Agent 工具协议
- [A2A (Agent-to-Agent)](https://a2a.agentlabs.ai/) — Agent 间通信协议
- [Computer Use](https://docs.anthropic.com/en/docs/claude-use) — Anthropic 的计算机控制方案
- [OpenClaw](https://github.com/openclaw/openclaw) — 全栈 AI Agent 框架
- [codebase-memory-mcp](https://github.com/codebase-ai/codebase-memory-mcp) — 代码库记忆 MCP Server
- [GitHub MCP Server](https://github.com/github/github-mcp-server) — GitHub 官方 MCP Server
- [DeerFlow](https://github.com/deer-flow/deerflow) — Agent 工作流框架
- [CopilotKit](https://github.com/CopilotKit/CopilotKit) — AI Copilot 框架
- [Superpowers](https://github.com/superpowers-ai/superpowers) — Agent 工具集
- [Qoder](https://qoder.ai/) — AI 编程助手
- [Gemini 3.5 Flash](https://deepmind.google/technologies/gemini/flash/) — Google 多模态模型

## 研究方法

本知识库采用 **llm-wiki** 方法论构建：

1. **素材收集** — 从权威来源（官方文档、GitHub README、技术博客）收集原始资料
2. **自动消化** — 通过 `llm-wiki digest` 将素材编译为结构化 wiki
3. **证伪验证** — 对关键声明进行事实核查
4. **综合分析** — 定期生成深度报告，构建技术栈全景

## 最近更新

- **2026-07-02**：Skyvern与Steel Browser研究
  - 收集 2 个素材（Skyvern ×1、Steel Browser ×1）
  - 创建 2 个实体页（Skyvern、Steel-Browser）
  - 更新浏览器控制分类

- **2026-07-02**：Qoder与Kun研究
  - 收集 4 个素材（Qoder ×2、Kun ×2）
  - 创建 2 个实体页（Qoder、Kun）
  - 更新 Agent 集成层

- **2026-07-01**：Stagehand/Browserbase 技术分析
  - 收集 4 个素材（Stagehand ×2、Browserbase ×2）
  - 创建 3 个实体页（Stagehand、Browserbase、mcp-server-browserbase）

- **2026-07-01**：2026年新趋势研究
  - 收集 3 个素材（OpenCUA ×1、real-browser-mcp ×1、Computer-Use-Preview ×1）
  - 创建 3 个实体页

- **2026-07-01**：Agent S 研究
  - 首个 OSWorld 超越人类的 GUI Agent
  - 创建 1 个实体页（Agent-S）

- **2026-07-01**：GitHub MCP Server 官方研究
  - 收集 3 个素材
  - 创建 1 个实体页（GitHub-MCP-Server）

## 关键问题

1. 当前有哪些成熟框架能让 Agent 控制 PC？
2. 不同方案的适用场景、能力边界和优缺点是什么？
3. 如何实现对复杂桌面软件（Office、PS、IDE）的精准控制？
4. 多 Agent 协作控制 PC 的最佳实践是什么？
5. 安全性、权限管理、隐私保护的风险与应对方案？

## 使用说明

### 查看知识库

```bash
# 克隆仓库
git clone git@github.com:migumigu/pc-use-wiki.git

# 使用 Obsidian 打开 wiki/ 目录
# 或直接浏览 wiki/ 目录下的 markdown 文件
```

### 更新知识库

```bash
# 添加新素材到 raw/ 目录
# 使用 llm-wiki digest 消化素材
llm-wiki digest <素材文件>

# 检查知识库健康度
llm-wiki lint
llm-wiki status
```

## 相关链接

- GitHub: https://github.com/migumigu/pc-use-wiki
- 知识库索引: [wiki/index.md](wiki/index.md)
- 研究目的: [purpose.md](purpose.md)
- 更新日志: [wiki/log.md](wiki/log.md)

---

*本知识库由 AI 自动维护，持续更新中*
