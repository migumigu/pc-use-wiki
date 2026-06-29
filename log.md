# 操作日志

> 记录知识库的所有变更历史

---

## 2026-06-29 — digest 深度综合：Tool Calling 对比 + Multi-Agent 协作

- **操作**：digest 深度综合分析报告生成（精简版自动研究工作流）
- **研究方向**：Agent 集成层深度综合（Tool Calling + Multi-Agent）
- **综合素材数量**：17篇（Tool Calling 12篇 + Multi-Agent 5篇）
- **触发原因**：知识库各分类素材已充足（10+），但存在两个"待生成"综合报告

**新增综合分析页面**：
- wiki/synthesis/Tool-Calling-对比报告.md — Anthropic Tool Use vs OpenAI Function Calling 深度对比
- wiki/synthesis/Multi-Agent协作-深度报告.md — LangGraph vs AutoGen 框架对比与架构分析

**核心发现**：

**Tool Calling 对比报告**：
- Anthropic 采用客户端+服务器双模式，降低简单场景开发成本
- OpenAI 保持完全客户端控制，开发者完全掌控执行逻辑
- Anthropic 的 input_examples 字段支持工具教学，利于复杂工具
- OpenAI 的流式处理支持更完善
- MCP 协议已成为事实标准，Anthropic 原生支持，OpenAI 需自行集成

**Multi-Agent 协作深度报告**：
- 三大架构模式：Network（去中心化）、Supervisor（集中控制）、Hierarchical（多层级）
- LangGraph 适合企业级精细控制，AutoGen 适合快速原型开发
- 五层防御错误恢复架构：预防→检测→恢复→旁路→修复
- LangGraph Checkpoint 机制支持状态快照和时间旅行调试

**更新页面**：
- index.md — 更新综合分析列表，移除"待生成"标记
- log.md — 记录本次操作

**状态**：完成

---

## 2026-06-29 — 自动研究工作流：CopilotKit & AG-UI Protocol

- **操作**：完整自动研究工作流（趋势分析 → 素材收集 → 报告生成 → 证伪验证 → digest 消化入库）
- **研究方向**：CopilotKit & AG-UI Protocol（Agent 前端基础设施）
- **素材数量**：2个（Tier1: 2）
- **素材列表**：
  - raw/articles/2026-06-29-copilotkit-github-readme.md — CopilotKit GitHub README
  - raw/articles/2026-06-29-ag-ui-protocol-readme.md — AG-UI Protocol GitHub README

**新增 Wiki 页面**：
- wiki/sources/2026-06-29-copilotkit-github-readme.md — CopilotKit 素材摘要
- wiki/sources/2026-06-29-ag-ui-protocol-readme.md — AG-UI Protocol 素材摘要
- wiki/entities/CopilotKit.md — CopilotKit 实体页
- wiki/entities/AG-UI-Protocol.md — AG-UI Protocol 实体页

**更新页面**：
- wiki/topics/Agent集成层.md — 添加 CopilotKit & AG-UI Protocol 到关键概念和素材表
- index.md — 添加新实体和素材条目，更新计数（85 素材，144 页面）

**证伪验证**：
- AG-UI 被 Google、LangChain、AWS、Microsoft、Mastra、PydanticAI 采纳 — ✅ 已验证
- CopilotKit 33k+ Stars — ✅ 已验证
- AG-UI 16+ 标准事件类型 — ✅ 已验证

**研究价值**：
- 填补 Agent 集成层中用户交互协议的空白
- CopilotKit 是 AI Agent 前端基础设施领域的重要框架
- AG-UI 协议已被主流厂商采纳，具有行业影响力

**知识积累成果**：
- Agent 集成层新增 CopilotKit（AI Agent 前端基础设施）
- Agent 集成层新增 AG-UI Protocol（Agent-User Interaction Protocol）
- 协议栈三大支柱完善：MCP（工具层）+ A2A（Agent通信层）+ AG-UI（用户交互层）

**状态**：完成

## 2026-06-29 — 自动研究工作流：Filesystem MCP 深度分析

- **操作**：完整自动研究工作流（趋势分析 → 素材收集 → 报告生成 → 证伪验证 → digest 消化入库）
- **研究方向**：Filesystem MCP（文件系统控制的协议层补充）
- **素材数量**：4个（Tier1: 3, Tier2: 1）
- **素材列表**：
  - raw/articles/2026-06-29-filesystem-mcp-server-github.md — 官方 GitHub README
  - raw/articles/2026-06-29-mcp-tools-protocol-spec.md — MCP Tools Protocol 规范
  - raw/articles/2026-06-29-mcp-roots-protocol.md — MCP Roots Protocol 规范
  - raw/articles/2026-06-29-filesystem-mcp-analysis.md — 技术深度分析

**新增 Wiki 页面**：
- wiki/sources/2026-06-29-filesystem-mcp-server-github.md — 官方实现摘要
- wiki/sources/2026-06-29-mcp-tools-protocol-spec.md — 工具协议规范摘要
- wiki/sources/2026-06-29-mcp-roots-protocol.md — Roots 机制摘要
- wiki/sources/2026-06-29-filesystem-mcp-analysis.md — 深度分析摘要
- wiki/entities/Filesystem-MCP.md — 文件系统 MCP 实体页

**更新页面**：
- wiki/topics/文件系统控制.md — 添加 Filesystem MCP 到协议/接口层
- index.md — 添加新实体和素材条目，更新计数

**证伪验证**：
- 48.5万安装量降级为"据报道，未经核实"
- 800 tokens 效率降级为"据报道，未经核实"
- 符号链接漏洞重新归类为"潜在风险"而非"已知问题"

**研究价值**：
- Filesystem MCP 是 Anthropic 官方维护的 MCP 参考实现
- 目录白名单 + Roots 协议是 Agent 文件系统安全的核心机制
- 补充了文件系统控制的协议层视角
- 知识库缺口补全：文件系统控制从 8 个素材增长到 12 个

**知识积累成果**：
- 文件系统控制新增协议/接口层：Filesystem MCP
- 分层安全模型：协议层（Roots）→ 实现层（白名单）→ 系统层（Docker）
- 明确了 Roots 是协调机制而非安全边界

**状态**：完成

## 2026-06-28 — 自动研究工作流：Playwright Test Agents 深度分析

- **操作**：完整自动研究工作流（趋势分析 → 素材收集 → 报告生成 → 证伪验证 → digest 消化入库）
- **研究方向**：Playwright Test Agents（官方 AI 测试智能体系统）
- **素材数量**：3个（Tier1: 1, Tier2: 2）
- **素材列表**：
  - raw/articles/2026-06-28-playwright-test-agents-official-docs.md — 官方文档
  - raw/articles/2026-06-28-playwright-test-agents-analysis.md — 深度分析
  - raw/articles/2026-06-28-playwright-test-agents-healer.md — Healer 机制分析

**新增 Wiki 页面**：
- wiki/entities/Playwright-Test-Agents.md — Playwright Test Agents 实体页
- wiki/sources/2026-06-28-playwright-test-agents-official-docs.md — 官方文档摘要
- wiki/sources/2026-06-28-playwright-test-agents-analysis.md — 深度分析摘要
- wiki/sources/2026-06-28-playwright-test-agents-healer.md — Healer 机制摘要

**更新页面**：
- wiki/entities/Playwright.md — 补充 Playwright Test Agents 部分
- index.md — 添加新实体和素材条目，更新计数

**证伪验证**：
- 所有声明均来自官方文档或技术博客，已验证
- MCP 协议依赖关系已确认
- VS Code 版本要求已确认

**研究价值**：
- Playwright Test Agents 是 Playwright 在 AI 测试智能化方向的重要升级
- 三 Agent 协作（Planner/Generator/Healer）实现"先规划、再生成、后修复"的智能测试工作流
- 基于 Playwright MCP Server，支持多种 AI 工具（VS Code、Claude Code、Codex、OpenCode）

**知识积累成果**：
- 浏览器控制领域新增 Playwright Test Agents 实体
- Agent 集成层新增 AI 测试智能体概念
- 扩展了 Playwright 在测试自动化领域的认知图谱

**状态**：完成

---

## 2026-06-28 — 自动研究工作流：文件系统控制深度分析

- **操作**：完整自动研究工作流（趋势分析 → 素材收集 → 报告生成 → 证伪验证 → digest 消化入库）
- **研究方向**：文件系统控制（素材不足，需补充）
- **素材数量**：5个（全部 Tier 1）
- **素材列表**：
  - raw/articles/2026-06-28-syncthing-github-readme.md — Syncthing GitHub README（73K+ Stars）
  - raw/articles/2026-06-28-syncthing-getting-started.md — Syncthing Getting Started Guide
  - raw/articles/2026-06-28-unison-github-readme.md — Unison GitHub README（25+ 年历史）
  - raw/articles/2026-06-28-filelock-official-docs.md — filelock 官方文档（723K+ 使用）
  - raw/articles/2026-06-28-shutil-python-docs.md — shutil Python 官方文档

**新增 Wiki 页面**：
- wiki/entities/Syncthing.md — P2P 持续文件同步实体页
- wiki/entities/Unison.md — 双向文件同步实体页
- wiki/entities/filelock.md — 跨平台文件锁实体页
- wiki/entities/shutil.md — Python 文件操作实体页
- wiki/sources/2026-06-28-syncthing-github-readme.md — Syncthing 素材摘要
- wiki/sources/2026-06-28-unison-github-readme.md — Unison 素材摘要
- wiki/sources/2026-06-28-filelock-official-docs.md — filelock 素材摘要
- wiki/sources/2026-06-28-shutil-python-docs.md — shutil 素材摘要
- wiki/synthesis/文件系统控制-深度报告.md — 综合分析报告（更新）

**更新页面**：
- wiki/topics/文件系统控制.md — 补充文件同步、文件锁、文件操作视角
- wiki/index.md — 添加新实体和素材条目

**证伪修正**：
- Syncthing Stars 数据更新：62.2K+ → 73,117（基于 GitHub API）

---

## 2026-06-28 — 批量消化 psutil + watchdog 素材（自动研究）

- **操作**：批量ingest 6个素材文件（自动研究产出）
- **素材数量**：6个
- **素材列表**：
  - raw/articles/2026-06-28-psutil-github-readme.md — psutil GitHub README（340M+ 月下载）
  - raw/articles/2026-06-28-psutil-install-guide.md — psutil 安装指南
  - raw/articles/2026-06-28-psutil-api-reference.md — psutil API 参考
  - raw/articles/2026-06-28-watchdog-github-repo.md — watchdog GitHub Repository
  - raw/articles/2026-06-28-watchdog-install-guide.md — watchdog 安装指南
  - raw/articles/2026-06-28-watchdog-api-reference.md — watchdog API 参考

**新增 Wiki 页面**：

- 素材摘要页（6）：
  - wiki/sources/2026-06-28-psutil-github-readme.md
  - wiki/sources/2026-06-28-psutil-install-guide.md
  - wiki/sources/2026-06-28-psutil-api-reference.md
  - wiki/sources/2026-06-28-watchdog-github-repo.md
  - wiki/sources/2026-06-28-watchdog-install-guide.md
  - wiki/sources/2026-06-28-watchdog-api-reference.md

- 实体页（2）：
  - wiki/entities/psutil.md — 跨平台进程和系统监控库
  - wiki/entities/watchdog.md — Python 文件系统事件监控库

- 更新的页面：
  - wiki/topics/系统服务控制.md（新增 psutil 到工具实现层和对比表）
  - wiki/topics/文件系统控制.md（新增 watchdog 到工具实现层和相关实体）
  - index.md（新增实体 + 素材摘要条目 + 更新计数）

**研究价值**：
- psutil：填补系统服务控制素材缺口，提供跨平台进程监控能力
- watchdog：填补文件系统控制素材缺口，提供事件驱动文件监控能力

**证伪验证**：
- 所有 14 项声明均来自 Tier 1 官方来源，无需修正

**知识积累成果**：
- 系统服务控制新增 psutil（340M+ 月下载，770K+ 仓库使用）
- 文件系统控制新增 watchdog（跨平台文件监控，Observer 模式）
- 两个工具均支持 Agent 集成，可作为 AI Agent 的系统感知工具

**素材控制对象**：system_service + file_system
**技术层级**：tool_implementation

- **状态**：完成

---

## 2026-06-28 — 批量消化硬件接口控制素材（自动研究）

- **操作**：批量ingest 5个素材文件（自动研究产出）
- **素材数量**：5个
- **素材列表**：
  - raw/articles/2026-06-28-opencv-videocapture-official.md — OpenCV VideoCapture Class Reference
  - raw/articles/2026-06-28-media-foundation-av-capture.md — Audio/Video Capture in Media Foundation
  - raw/articles/2026-06-28-opencv-python-pypi.md — opencv-python PyPI Package
  - raw/articles/2026-06-28-directshow-legacy-api.md — DirectShow (Legacy API)
  - raw/articles/2026-06-28-opencv-github-repo.md — OpenCV GitHub Repository

**新增 Wiki 页面**：

- 素材摘要页（5）：
  - wiki/sources/2026-06-28-opencv-videocapture-official.md
  - wiki/sources/2026-06-28-media-foundation-av-capture.md
  - wiki/sources/2026-06-28-opencv-python-pypi.md
  - wiki/sources/2026-06-28-directshow-legacy-api.md
  - wiki/sources/2026-06-28-opencv-github-repo.md

- 实体页（5）：
  - wiki/entities/OpenCV.md — 世界最流行的开源计算机视觉库（88K+ Stars）
  - wiki/entities/VideoCapture.md — OpenCV 视频捕获统一 API
  - wiki/entities/Media-Foundation.md — Windows Vista+ 现代多媒体框架
  - wiki/entities/DirectShow.md — 遗留视频捕获 API
  - wiki/entities/UVC.md — USB Video Class 协议

- 主题页（1）：
  - wiki/topics/硬件接口控制.md — AI Agent 控制硬件设备的完整技术栈

**更新的页面**：
- index.md（新增实体 + 主题 + 素材摘要条目 + 更新计数）

**证伪修正**：
- OpenCV Stars 数据更新：76K+ → 88K+

**知识积累成果**：
- 填补知识库最大缺口：硬件接口控制（从 0 素材到 5 核心素材）
- 建立视频捕获技术栈：OpenCV → VideoCapture → Media Foundation/DirectShow → UVC
- 明确技术演进方向：DirectShow（遗留）→ Media Foundation（推荐）
- 新增控制对象分类：硬件接口控制

**素材控制对象**：hardware
**技术层级**：tool_implementation / protocol

- **状态**：完成

## 2026-06-28 — 批量消化 agent-browser 素材（自动研究）

- **操作**：批量ingest 3个素材文件（自动研究产出）
- **素材数量**：3个
- **素材列表**：
  - raw/articles/2026-06-28-agent-browser-github-readme.md — agent-browser GitHub README（37k+ Stars）
  - raw/articles/2026-06-28-agent-browser-commands-docs.md — agent-browser Commands 官方文档
  - raw/notes/2026-06-28-agent-browser-report-v1.1.md — agent-browser 技术分析报告（证伪修正版）

**新增 Wiki 页面**：

- 素材摘要页（3）：
  - wiki/sources/2026-06-28-agent-browser-github-readme.md
  - wiki/sources/2026-06-28-agent-browser-commands-docs.md
  - wiki/sources/2026-06-28-agent-browser-report.md

- 实体页（1）：
  - wiki/entities/agent-browser.md — Vercel Labs AI 原生 Rust CLI 浏览器自动化工具

- 更新的页面：
  - wiki/topics/浏览器控制.md（新增 agent-browser 相关素材和关键概念）
  - index.md（新增实体 + 素材摘要条目 + 更新计数）
  - purpose.md（新增 agent-browser 相关条目）

**知识积累成果**：
- 浏览器控制领域新增现象级项目 agent-browser（37,353 Stars）
- 核心创新：refs 机制替代 CSS 选择器，Token 效率提升 90%+
- Rust 原生 CLI 架构，客户端-守护进程分离设计
- 完成证伪修正：更新 Stars 数据、修正项目年龄、删除未核实性能声明
- 浏览器控制工具实现层新增三大工具：browser-use / page-agent / agent-browser

**素材控制对象**：browser_control
**技术层级**：tool_implementation / agent_integration

- **状态**：完成

---

## 2026-06-28 — 批量消化 WMI、PowerShell Overview、pywin32 系统服务控制素材

- **操作**：批量ingest 3个素材文件
- **素材数量**：3个
- **素材列表**：
  - raw/articles/2026-06-28-wmi-official-docs.md — WMI Official Documentation
  - raw/articles/2026-06-28-powershell-overview.md — PowerShell Overview
  - raw/articles/2026-06-28-pywin32-github.md — pywin32 GitHub README

**新增 Wiki 页面**：

- 素材摘要页（3）：
  - wiki/sources/2026-06-28-wmi-official-docs.md
  - wiki/sources/2026-06-28-powershell-overview.md
  - wiki/sources/2026-06-28-pywin32-github.md

- 实体页（2）：
  - wiki/entities/WMI.md — Windows管理规范
  - wiki/entities/pywin32.md — Python Windows API扩展

- 更新的页面：
  - wiki/topics/系统服务控制.md（新增 pywin32、WMI 相关内容，更新 sources）
  - wiki/entities/PowerShell.md（添加 powershell-overview 来源）
  - index.md（新增条目 + 更新计数）
  - .wiki-cache.json（更新缓存）

**知识积累成果**：
- 系统服务控制领域新增 WMI（Windows管理规范）官方文档
- 系统服务控制领域新增 PowerShell Overview（三大核心组件概述）
- 系统服务控制领域新增 pywin32（Python Windows API 扩展）
- 技术栈分层完善：系统基础层（WMI/COM/pywin32）、协议接口层（PowerShell）、工具实现层

**素材控制对象**：system_service
**技术层级**：system_foundation / tool_implementation

- **状态**：完成

---

## 2026-06-28 — 批量消化文件系统控制与浏览器控制素材

- **操作**：批量ingest 2个素材文件
- **素材数量**：2个

**素材列表**：
  - raw/articles/2026-06-28-claude-code-agent-design.md — Claude Code Agent 设计分析
  - raw/articles/2026-06-28-playwright-mcp-official.md — Playwright MCP Server 官方文档

**新增 Wiki 页面**：

- 素材摘要页（2）：
  - wiki/sources/2026-06-28-claude-code-agent-design.md
  - wiki/sources/2026-06-28-playwright-mcp-official.md

- 主题页（1）：
  - wiki/topics/文件系统控制.md — 新增文件系统控制主题页

- 更新的页面：
  - wiki/topics/浏览器控制.md（添加 Playwright MCP 来源）
  - index.md（新增主题页 + 素材摘要）
  - log.md（更新缓存）

**知识积累成果**：
- 文件系统控制领域：新增 Claude Code Agent 设计分析，强调「极致克制」设计哲学和分而治之策略
- 浏览器控制领域：新增 Playwright MCP Server 官方文档，补充轻量级无障碍树方案
- 新增「文件系统控制」主题页，整合上下文管理相关素材

**素材控制对象**：
- claude-code-agent-design.md: file_system
- playwright-mcp-official.md: browser_control

**技术层级**：agent_integration

- **状态**：完成

---

## 2026-06-28 — 批量消化 CUA (Computer Use Agent) 素材

- **操作**：批量ingest 3个CUA素材文件
- **素材数量**：3个

**素材列表**：
  - raw/articles/2026-06-28-cua-github-readme.md — CUA GitHub README（开源基础设施，14.8k+ Stars）
  - raw/articles/2026-06-28-cua-sandbox-setup.md — CUA Sandbox 设置指南（5种沙箱部署方式）
  - raw/articles/2026-06-28-cua-analysis.md — CUA 深度解析（问题分析、四大组件解读）

**新增 Wiki 页面**：

- 素材摘要页（3）：
  - wiki/sources/2026-06-28-cua-github-readme.md
  - wiki/sources/2026-06-28-cua-sandbox-setup.md
  - wiki/sources/2026-06-28-cua-analysis.md

- 实体页（2）：
  - wiki/entities/CUA.md — Computer Use Agent 开源基础设施（四大组件：Drivers、Sandbox、Bench、Lume）
  - wiki/entities/Lume.md — macOS 虚拟化工具（Apple Silicon + Apple Virtualization.Framework）

**更新的页面**：
  - wiki/topics/桌面应用控制.md（添加 CUA 到 Agent 集成层）
  - index.md（新增 CUA 实体和素材摘要条目）
  - .wiki-cache.json（更新缓存）

**知识积累成果**：
- CUA 定位为 Computer Use 开源基础设施，与 Anthropic Computer Use 官方能力区分
- 四大核心组件：Drivers（后台agent）、Sandbox（隔离环境）、Bench（基准测试）、Lume（macOS虚拟化）
- 5种沙箱部署选项：Cloud Sandbox、Docker、QEMU VM、macOS Sandbox、Windows Sandbox
- CUA Drivers 支持 MCP Server 模式，可与 Claude Code、Cursor、Codex、OpenClaw 等集成

**素材控制对象**：desktop_app
**技术层级**：tool_implementation

- **状态**：完成

---

## 2026-06-28 — 批量消化 page-agent 素材

- **操作**：批量ingest 3个素材文件
- **素材数量**：3个
- **素材列表**：
  - raw/articles/2026-06-28-page-agent-github-readme.md — page-agent GitHub README
  - raw/articles/2026-06-28-page-agent-mcp-server.md — page-agent MCP Server 文档
  - raw/articles/2026-06-28-page-agent-analysis.md — page-agent 技术分析报告

**新增 Wiki 页面**：

- 素材摘要页（3）：
  - wiki/sources/2026-06-28-page-agent-github-readme.md
  - wiki/sources/2026-06-28-page-agent-mcp-server.md
  - wiki/sources/2026-06-28-page-agent-analysis.md

- 实体页（1）：
  - wiki/entities/page-agent.md — 页面内 GUI Agent（阿里巴巴）

- 更新的页面：
  - wiki/entities/browser-use.md（添加 vs page-agent 对比）
  - wiki/topics/浏览器控制.md（添加 page-agent 相关素材）
  - index.md（新增 page-agent 实体和素材摘要）
  - .wiki-cache.json（更新缓存）

**知识积累成果**：
- page-agent 是阿里巴巴开源的页面内 GUI Agent，20.2k+ Stars
- 核心创新：让 Agent 直接住进网页里，而非从外部操控浏览器
- 与 browser-use 的关系：构建于 browser-use 之上，但定位不同
- page-agent 面向 SaaS 产品开发者，browser-use 面向测试/爬虫
- MCP Server (Beta) 支持外部 Agent 控制浏览器

**素材控制对象**：browser_control
**技术层级**：tool_implementation / agent_integration

- **状态**：完成

---

## 2026-06-28 — 批量消化 Windows GUI 自动化工具 GitHub README 素材

- **操作**：批量ingest 4个素材文件
- **素材数量**：4个

**素材列表**：
  - raw/articles/2026-06-28-pywinauto-github-readme.md — pywinauto GitHub README
  - raw/articles/2026-06-28-python-uiautomation-github-readme.md — Python-UIAutomation GitHub README
  - raw/articles/2026-06-28-pyautogui-github-readme.md — PyAutoGUI GitHub README
  - raw/notes/2026-06-28-windows-gui-automation-comparison-report-v1.md — Windows GUI 自动化工具对比分析报告

**新增 Wiki 页面**：

- 素材摘要页（3）：
  - wiki/sources/2026-06-28-pywinauto-github-readme.md
  - wiki/sources/2026-06-28-python-uiautomation-github-readme.md
  - wiki/sources/2026-06-28-pyautogui-github-readme.md

- 实体页（2）：
  - wiki/entities/Pywinauto.md — Python Windows GUI自动化库
  - wiki/entities/Python-UIAutomation.md — Windows UI Automation Python封装

- 综合分析页（1）：
  - wiki/synthesis/Windows-GUI-自动化工具对比报告.md — 三工具深度对比

- 更新的页面：
  - wiki/entities/PyAutoGUI.md（追加新来源）
  - index.md（新增条目）
  - .wiki-cache.json（更新缓存）

**知识积累成果**：
- 桌面应用控制领域新增3个工具的GitHub README素材
- pywinauto：双后端支持（Win32 API + UIAutomation）
- Python-UIAutomation：专注UIAutomation，提供CLI工具
- PyAutoGUI：跨平台方案，基于图像识别
- 生成三工具对比综合分析报告

**素材控制对象**：desktop_app
**技术层级**：tool_implementation

- **状态**：完成

---

## 2026-06-28 digest | 桌面应用控制

- **操作**：深度综合分析报告生成（digest 工作流）
- **主题**：桌面应用控制
- **综合素材数量**：25篇（知识库全量素材）
- **核心素材来源**：
  - wiki/sources/2026-06-28-ui-tars-desktop-github-readme.md — UI-TARS GitHub README
  - wiki/sources/2026-06-28-pyautogui-official-docs.md — PyAutoGUI官方文档
  - wiki/sources/2026-06-28-open-interpreter-github-readme.md — Open Interpreter GitHub README
  - wiki/sources/2026-06-28-open-interpreter-computer-use.md — Open Interpreter Computer Use文档
  - wiki/sources/2026-06-28-windows-ui-automation-official.md — Windows UI Automation官方文档
  - wiki/synthesis/Computer-Use-深度报告.md — Computer Use深度报告（已存在）
  - wiki/entities/UI-TARS.md、PyAutoGUI.md、Open-Interpreter.md、UI-Automation.md等实体页
  - wiki/topics/桌面应用控制.md — 桌面应用控制主题页

**新增 Wiki 页面**：

- 综合分析页（1）：
  - wiki/synthesis/桌面应用控制-深度报告.md

**核心发现**：

- **三种定位方法对比**：
  - 坐标系统：简单直接、跨平台、易失效（界面变化/DPI缩放）
  - UI Automation：稳定精准、仅Windows、需Accessibility API支持
  - 视觉理解：适用范围最广、成本高、精度受限（1280x720基准）

- **四种工具对比分析**：
  - PyAutoGUI：底层API、坐标驱动、Fail-Safe安全机制
  - UI Automation：协议层、元素属性定位、标准化控制模式
  - UI-TARS：Agent集成层、VLM驱动、自然语言接口、33K+ Stars
  - Open Interpreter：Agent集成层、代码执行+Computer Use混合、160K+ Stars
  - Computer Use（Anthropic）：Agent集成层、Claude官方能力、完善安全防御

- **点击精度核心发现**：
  - Claude 4.6系列：max长边1568px、max像素1.15MP
  - Opus 4.7：max长边2576px、max像素3.75MP
  - 推荐1280x720基准分辨率（使用80%像素预算）
  - 坐标缩放公式：`screen_x = int(api_x * (screen_w / display_w))`
  - Sonnet 4.6点击精度更高，Opus 4.7推理更强但精度持平

- **技术栈分层分析**：
  - 系统基础层：Windows API/macOS Cocoa/Linux X11
  - 协议/接口层：UI Automation协议/Java Access Bridge/Accessibility API
  - 工具实现层：PyAutoGUI/AutoHotkey/OCR工具/屏幕截图工具
  - Agent集成层：MCP协议/Agent Loop/Docker容器化/事件流驱动

- **实现方案选择建议**：
  - 固定布局界面 → PyAutoGUI
  - Windows应用长期自动化 → UI Automation
  - 跨平台GUI Agent → UI-TARS
  - 代码执行+桌面自动化混合 → Open Interpreter
  - Claude集成、高精度需求 → Computer Use
  - 安全敏感 → Computer Use Docker
  - 本地处理、隐私优先 → UI-TARS

- **技术栈组合建议**：
  - Windows精准控制：UI Automation + PyAutoGUI
  - 跨平台自然语言：UI-TARS Desktop + MCP集成
  - 代码执行混合：Open Interpreter + PyAutoGUI + OCR
  - Claude集成生产：Computer Use Docker + Claude API + 安全防御

- **5大待解决问题**：
  1. 跨平台标准化缺失（UI Automation仅限Windows）
  2. 视觉理解精度瓶颈（分辨率限制、小目标识别、高DPI缩放）
  3. 安全风险未根治（Prompt Injection约1% ASR）
  4. 生产部署指南缺失（参考实现标注教学用途）
  5. 上下文管理未成熟（Prompt caching/Image pruning需人工调优）

**更新页面**：
- index.md（新增综合分析条目）

- **状态**：完成

---

## 2026-06-28 digest | MCP Protocol

- **操作**：深度综合分析报告生成（digest 工作流）
- **主题**：MCP Protocol
- **综合素材数量**：8篇
  - wiki/sources/2026-06-28-mcp-anthropic-announcement.md — Anthropic官方MCP协议介绍
  - wiki/sources/2026-06-28-mcp-official-docs-home.md — "AI应用的USB-C接口"
  - wiki/sources/2026-06-28-mcp-servers-github.md — 参考实现集合
  - wiki/sources/2026-06-28-mcp-architecture.md — Client-server架构+双层设计
  - wiki/sources/2026-06-28-mcp-specification.md — JSON-RPC 2.0+安全原则
  - wiki/sources/2026-06-28-mcp-python-sdk.md — FastMCP简化开发
  - wiki/sources/2026-06-28-mcp-typescript-sdk.md — v2 pre-alpha,分包架构
  - wiki/sources/2026-06-28-mcp-claude-desktop-integration.md — Filesystem Server配置

**新增 Wiki 页面**：

- 综合分析页（1）：
  - wiki/synthesis/MCP-Protocol-深度报告.md

**核心发现**：
- **核心类比**："AI应用的USB-C接口"——标准化连接方式，替代碎片化集成
- **架构设计**：Client-Server + 双层协议（数据层JSON-RPC 2.0 + 传输层Stdio/HTTP）
- **核心原语**：Server三大原语（Tools/Resources/Prompts）+ Client三大原语（Sampling/Elicitation/Logging）
- **生态支持**：Claude Desktop、ChatGPT、VS Code、Cursor等AI应用；Block、Apollo早期采用
- **多语言SDK**：10种语言支持（Python FastMCP简化开发、TypeScript v2 pre-alpha）
- **安全原则**：用户同意、数据隐私、工具安全、LLM Sampling控制
- **历史关联**：受LSP启发，标准化AI应用与上下文/工具的集成
- **Agent集成层定位**：工具调用标准化、状态管理、多工具协同、安全边界

**不同视角对比**：
- 理论视角（协议规范）vs 实践视角（SDK实现）
- 官方视角（Anthropic）vs 第三方视角（Block、开发工具公司）
- 架构视角（协议层）vs 应用视角（集成层）

**6大待解决问题**：
1. MCP与其他工具调用协议对比（OpenAI Function Calling等）
2. 企业环境安全性保障机制（RBAC、合规性）
3. MCP servers开发复杂度和学习曲线
4. 性能与可扩展性边界
5. 跨平台兼容性问题
6. MCP Sampling滥用风险与防护机制

**更新页面**：
- index.md（新增综合分析条目）

- **状态**：完成

---

## 2026-06-28 digest | Computer Use

- **操作**：深度综合分析报告生成（digest 工作流）
- **主题**：Computer Use
- **综合素材数量**：5篇
  - wiki/sources/2026-06-28-claude-computer-use-github-demo.md — Docker容器化参考实现
  - wiki/sources/2026-06-28-claude-computer-use-best-practices-github.md — macOS最佳实践仓库
  - wiki/sources/2026-06-28-claude-computer-use-best-practices-blog.md — 点击精度优化核心研究
  - wiki/sources/2026-06-28-claude-computer-use-security-research.md — Prompt Injection防御机制
  - wiki/sources/2026-06-28-anthropic-build-with-claude-overview.md — Anthropic Academy开发者门户

**新增 Wiki 页面**：

- 综合分析页（1）：
  - wiki/synthesis/Computer-Use-深度报告.md

**核心发现**：
- **点击精度是基石**：分辨率和缩放是最主要影响因素，推荐1280x720基准分辨率
- **Prompt Injection最大威胁**：攻击成功率降至约1%，但仍需持续防御投资
- **Docker容器化架构优先**：生产环境推荐隔离方案，macOS方案仅限本地实验
- **模型选择需平衡**：Sonnet 4.6精度更高，Opus 4.7推理更强
- **5大待解决问题**：Prompt Injection未根治、跨平台支持受限、高分辨率瓶颈、生产部署指南缺失、上下文管理未成熟

**更新页面**：
- index.md（新增综合分析条目）

- **状态**：完成

---

## 2026-06-27 — 自动研究完成

- **操作**：全自动研究 + digest
- **研究方向**：browser-use（AI Agent 浏览器自动化）
- **素材数量**：6 个
  - raw/articles/2026-06-27-browser-use-github-readme.md
  - raw/articles/2026-06-27-browser-use-docs-index.md
  - raw/articles/2026-06-27-browser-use-architecture-analysis.md
  - raw/articles/2026-06-27-browser-use-vs-playwright-mcp.md
  - raw/notes/2026-06-27-browser-use-research-report.md
  - raw/notes/2026-06-27-research-direction.md

**新增 Wiki 页面**：

- 素材摘要页（5）：
  - wiki/sources/2026-06-27-browser-use-github-readme.md
  - wiki/sources/2026-06-27-browser-use-docs-index.md
  - wiki/sources/2026-06-27-browser-use-architecture-analysis.md
  - wiki/sources/2026-06-27-browser-use-vs-playwright-mcp.md
  - wiki/sources/2026-06-27-browser-use-research-report.md

- 实体页（6）：
  - wiki/entities/browser-use.md
  - wiki/entities/Playwright.md
  - wiki/entities/Agent.md
  - wiki/entities/LLM.md
  - wiki/entities/MCP.md
  - wiki/entities/浏览器自动化.md

- 主题页（2）：
  - wiki/topics/浏览器控制.md
  - wiki/topics/Agent集成层.md

- 综合分析（1）：
  - wiki/synthesis/2026-06-27-browser-use-research-report.md

**证伪修正**：
- 修正 ChatBrowserUse 模型不稳定问题（为模型选择问题）
- 补充 Chromium 版本兼容性说明
- 补充自定义浏览器集成挑战

- **状态**：完成

---

## 2026-06-28 — 批量消化桌面自动化与系统服务控制素材

- **操作**：批量ingest 6个素材文件
- **素材数量**：6个
  - raw/articles/2026-06-28-ui-tars-desktop-github-readme.md
  - raw/articles/2026-06-28-pyautogui-official-docs.md
  - raw/articles/2026-06-28-open-interpreter-github-readme.md
  - raw/articles/2026-06-28-open-interpreter-computer-use.md
  - raw/articles/2026-06-28-windows-ui-automation-official.md
  - raw/articles/2026-06-28-powershell-official-guide.md

**新增 Wiki 页面**：

- 素材摘要页（6）：
  - wiki/sources/2026-06-28-ui-tars-desktop-github-readme.md
  - wiki/sources/2026-06-28-pyautogui-official-docs.md
  - wiki/sources/2026-06-28-open-interpreter-github-readme.md
  - wiki/sources/2026-06-28-open-interpreter-computer-use.md
  - wiki/sources/2026-06-28-windows-ui-automation-official.md
  - wiki/sources/2026-06-28-powershell-official-guide.md

- 实体页（18）：
  - wiki/entities/UI-TARS.md — GUI Agent桌面应用
  - wiki/entities/视觉语言模型.md — Computer Use核心技术
  - wiki/entities/字节跳动.md — UI-TARS开发团队
  - wiki/entities/PyAutoGUI.md — Python GUI自动化库
  - wiki/entities/坐标系统.md — 屏幕坐标定位技术
  - wiki/entities/Open-Interpreter.md — 代码执行框架
  - wiki/entities/代码执行环境.md — LLM执行代码能力
  - wiki/entities/Computer-Use.md — AI桌面控制模式
  - wiki/entities/OCR技术.md — 文字识别技术
  - wiki/entities/屏幕截图.md — 视觉信息获取方法
  - wiki/entities/UI-Automation.md — Windows无障碍框架
  - wiki/entities/Control-Patterns.md — 标准化控制模式
  - wiki/entities/Automation-Element.md — UI元素抽象
  - wiki/entities/PowerShell.md — 系统自动化框架
  - wiki/entities/Cmdlet.md — PowerShell命令单元

- 主题页（2）：
  - wiki/topics/桌面应用控制.md — 桌面应用自动化技术栈
  - wiki/topics/系统服务控制.md — 系统服务管理技术栈

**知识积累成果**：
- 完成桌面应用控制领域的技术栈梳理（坐标系统、UI Automation、Computer Use三大方法）
- 完成系统服务控制领域的基础工具积累（PowerShell框架）
- 新增3个控制对象分类素材积累（桌面应用控制、系统服务控制）
- 素材总数从6增长到12，Wiki页面从13增长到35

- **状态**：完成

---

## 2026-06-28 — 批量消化 MCP Protocol 与 Computer Use 素材

- **操作**：批量ingest 13个素材文件
- **素材数量**：13个（MCP Protocol 8个 + Computer Use 5个）

**MCP Protocol系列素材（8个）**：
  - raw/articles/2026-06-28-mcp-anthropic-announcement.md — MCP发布公告
  - raw/articles/2026-06-28-mcp-official-docs-home.md — 官方文档索引
  - raw/articles/2026-06-28-mcp-servers-github.md — Servers GitHub仓库
  - raw/articles/2026-06-28-mcp-architecture.md — 架构概览
  - raw/articles/2026-06-28-mcp-specification.md — 协议规范
  - raw/articles/2026-06-28-mcp-python-sdk.md — Python SDK
  - raw/articles/2026-06-28-mcp-typescript-sdk.md — TypeScript SDK
  - raw/articles/2026-06-28-mcp-claude-desktop-integration.md — Claude Desktop集成

**Computer Use系列素材（5个）**：
  - raw/articles/2026-06-28-claude-computer-use-github-demo.md — Docker Demo
  - raw/articles/2026-06-28-claude-computer-use-best-practices-github.md — macOS最佳实践
  - raw/articles/2026-06-28-claude-computer-use-best-practices-blog.md — 点击精度优化
  - raw/articles/2026-06-28-claude-computer-use-security-research.md — Prompt Injection防御
  - raw/articles/2026-06-28-anthropic-build-with-claude-overview.md — Anthropic Academy门户

**新增 Wiki 页面**：

- 素材摘要页（13）：
  - wiki/sources/2026-06-28-mcp-anthropic-announcement.md
  - wiki/sources/2026-06-28-mcp-official-docs-home.md
  - wiki/sources/2026-06-28-mcp-servers-github.md
  - wiki/sources/2026-06-28-mcp-architecture.md
  - wiki/sources/2026-06-28-mcp-specification.md
  - wiki/sources/2026-06-28-mcp-python-sdk.md
  - wiki/sources/2026-06-28-mcp-typescript-sdk.md
  - wiki/sources/2026-06-28-mcp-claude-desktop-integration.md
  - wiki/sources/2026-06-28-claude-computer-use-github-demo.md
  - wiki/sources/2026-06-28-claude-computer-use-best-practices-github.md
  - wiki/sources/2026-06-28-claude-computer-use-best-practices-blog.md
  - wiki/sources/2026-06-28-claude-computer-use-security-research.md
  - wiki/sources/2026-06-28-anthropic-build-with-claude-overview.md

- 实体页（2，更新）：
  - wiki/entities/MCP.md — 完整MCP协议体系（已更新）
  - wiki/entities/Computer-Use.md — Computer Use完整技术架构（已更新）

- 主题页（1，更新）：
  - wiki/topics/Agent集成层.md — MCP + Computer Use完整体系（已更新）

- 索引页（1，更新）：
  - index.md — 新增13个素材摘要 + 新实体分类（已更新）

**知识积累成果**：
- **MCP Protocol完整体系**：
  - Client-server架构 + 双层设计（数据层/传输层）
  - Server原语（Tools/Resources/Prompts）+ Client原语（Sampling/Elicitation/Logging）
  - 多语言SDK（10种）+ 预构建Servers（Google Drive/Slack/GitHub等）
  - 生态系统支持（Claude Desktop/ChatGPT/VS Code/Cursor）
  - Claude Desktop集成实践（Filesystem Server配置）

- **Computer Use完整体系**：
  - Docker容器化架构（X11 + VNC + Streamlit）vs macOS本地架构（pyautogui + sandbox-exec）
  - 点击精度优化（分辨率缩放、坐标映射、API限制）
  - 性能优化（Prompt Caching + Image Pruning + Autocompaction）
  - 安全风险（Prompt Injection防御、VM隔离必要性）
  - 模型选择建议（Sonnet 4.6精度更高，Opus 4.7推理更强）

- **素材总数增长**：从12增长到25（+13）
- **Wiki页面总数增长**：从35增长到50（+15）
- **Agent集成层知识体系完善**：MCP协议 + Computer Use能力两大支柱

- **状态**：完成

---

## 2026-06-27 — 初始化

- **操作**：创建知识库
- **主题**：pc-use-wiki
- **状态**：完成
