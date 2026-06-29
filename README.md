# AI Agent PC 控制知识库

> 系统研究 AI Agent 控制 PC 电脑的技术方案，构建可复用的知识体系

## 项目简介

本知识库围绕 **AI Agent 如何控制 PC 电脑** 这一核心问题，系统性地研究各类开源项目与工具，分析技术方案的能力边界与适用场景，最终目标是为 Agent 实现对电脑软件、工具、系统资源的高效调用与控制提供参考。

## 研究范围

### 五大控制对象

| 控制对象 | 说明 | 主要技术 |
|---------|------|---------|
| 浏览器控制 | Web 自动化、CDP 协议、浏览器工具生态 | Playwright、Puppeteer、Selenium、browser-use、agent-browser |
| 桌面应用控制 | GUI 操作、Office/IDE/PS 等专业软件自动化 | PyAutoGUI、AutoHotkey、UI Automation、pywinauto、UI-TARS |
| 系统服务控制 | 进程管理、网络配置、权限控制、系统监控 | PowerShell、WMI、Windows API、systemd、psutil |
| 文件系统控制 | 文件操作、目录管理、权限设置 | Filesystem MCP、watchdog、shutil、filelock |
| 硬件接口控制 | 摄像头、麦克风、传感器、外设调用 | OpenCV、DirectShow、Media Foundation、libusb、pySerial |

### 四层技术栈

1. **系统基础层** — Windows API、COM 接口、进程通信机制
2. **协议/接口层** — CDP、WebDriver、UI Automation、WMI
3. **工具实现层** — 开源项目架构设计、能力边界分析
4. **Agent 集成层** — MCP 协议、Tool Calling 模式、多 Agent 协作

## 知识库结构

```
wiki/
├── entities/     # 实体页：工具、技术概念（44个）
├── sources/      # 素材摘要：原始资料消化（46篇）
├── topics/       # 主题页：按控制对象分类（6个）
├── synthesis/    # 深度报告：综合分析（9篇）
├── comparisons/  # 对比分析：工具对比
└── index.md      # 知识库索引
```

## 核心成果

- **素材积累**：46+ 篇权威素材（GitHub README、官方文档、技术博客）
- **实体沉淀**：44+ 实体页（工具、概念、技术术语）
- **深度报告**：9 篇综合分析报告
- **覆盖领域**：浏览器自动化、桌面 GUI、系统服务、文件系统、硬件接口

## 关键技术栈

### 浏览器控制
- [Playwright](https://github.com/microsoft/playwright) — 37k+ Stars，微软主导
- [browser-use](https://github.com/browser-use/browser-use) — 37k+ Stars，AI 浏览器自动化
- [agent-browser](https://github.com/browser-use/agent-browser) — 37k+ Stars，命令驱动的浏览器 Agent
- [page-agent](https://github.com/browser-use/page-agent) — MCP 服务器实现

### 桌面应用控制
- [PyAutoGUI](https://github.com/asweigart/pyautogui) — Python GUI 自动化
- [AutoHotkey](https://github.com/AutoHotkey/AutoHotkey) — Windows 自动化脚本
- [UI-TARS](https://github.com/OpenGVLab/UI-TARS) — 多模态 GUI Agent
- [CUA](https://github.com/cua-agent/cua) — Anthropic 的 Computer Use Agent

### 系统服务与文件
- [PowerShell](https://learn.microsoft.com/powershell/) — Windows 系统管理
- [psutil](https://github.com/giampaolo/psutil) — 340M+ 月下载，系统监控
- [Filesystem MCP](https://github.com/modelcontextprotocol/servers) — MCP 文件系统协议
- [watchdog](https://github.com/gorakhargosh/watchdog) — 跨平台文件监控

### 硬件接口
- [OpenCV](https://github.com/opencv/opencv) — 88k+ Stars，计算机视觉
- [pySerial](https://github.com/pyserial/pyserial) — 103k+ 项目使用的串口库
- [libusb](https://github.com/libusb/libusb) — 跨平台 USB 底层库
- [hidapi](https://github.com/libusb/hidapi) — USB HID 设备库

### Agent 协议与集成
- [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) — Anthropic 主导的 Agent 工具协议
- [Computer Use](https://docs.anthropic.com/en/docs/claude-use) — Anthropic 的计算机控制方案
- [Open Interpreter](https://github.com/OpenInterpreter/open-interpreter) — 本地代码执行框架

## 研究方法

本知识库采用 **llm-wiki** 方法论构建：

1. **素材收集** — 从权威来源（官方文档、GitHub README、技术博客）收集原始资料
2. **自动消化** — 通过 `llm-wiki digest` 将素材编译为结构化 wiki
3. **证伪验证** — 对关键声明进行事实核查
4. **综合分析** — 定期生成深度报告，构建技术栈全景

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

## 统计信息

| 类型 | 数量 |
|------|------|
| 素材摘要 | 46+ |
| 实体页 | 44+ |
| 主题页 | 6 |
| 深度报告 | 9 |

## 相关链接

- GitHub: https://github.com/migumigu/pc-use-wiki
- 知识库索引: [wiki/index.md](wiki/index.md)
- 研究目的: [purpose.md](purpose.md)

---

*本知识库由 AI 自动维护，持续更新中*
