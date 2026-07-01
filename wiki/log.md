# 知识库操作日志

> 记录所有知识库的 ingest、digest、lint 等操作

---

## 2026-07-02（续）

### ingest | Skyvern + Steel Browser 研究（自动研究工作流）

新增页面：
- wiki/sources/2026-07-02-skyvern-github-readme.md
- wiki/sources/2026-07-02-steel-browser-github-readme.md
- wiki/entities/Skyvern.md
- wiki/entities/Steel-Browser.md

更新页面：
- wiki/topics/浏览器控制.md（添加 Skyvern、Steel-Browser）
- wiki/index.md（添加 2 个素材 + 2 个实体，更新统计）

知识库统计：
- 素材摘要：179（+2）
- 实体页：112（+2）
- 浏览器控制素材：33（+2）

素材内容：
- Skyvern：基于 LLM+计算机视觉的浏览器自动化，WebVoyager 85.85% SOTA，Playwright 兼容 SDK
- Steel Browser：专为 AI Agent 设计的开源浏览器 API，Puppeteer+CDP，支持 Playwright/Puppeteer/Selenium

证伪修正：
- Skyvern Stars 17.6K → 标注为"约17.6K+（第三方报道）"
- Steel Stars 6,475 → 标注为"约6,475+（第三方报道）"
- WebVoyager 85.8% → 修正为 85.85%（多源确认）

### ingest | Atlas Agent 记忆 + AionUi Cowork 平台（自动研究工作流）

新增页面：
- wiki/sources/2026-07-02-atlas-agent-memory-github-readme.md
- wiki/sources/2026-07-02-atlas-infoq-report.md
- wiki/sources/2026-07-02-aionui-github-readme.md
- wiki/sources/2026-07-02-aionui-eigent-comparison.md
- wiki/entities/Atlas.md
- wiki/entities/AionUi.md

更新页面：
- wiki/topics/Agent集成层.md（添加 Atlas）
- wiki/topics/桌面应用控制.md（添加 AionUi）
- wiki/index.md（添加 4 个素材 + 2 个实体，更新统计）

知识库统计：
- 素材摘要：177（+4）
- 实体页：110（+2）
- Agent 集成层素材：66（+2）
- 桌面应用控制素材：27（+2）

素材内容：
- Atlas：Elastic 开源 Agent 记忆系统，基于认知科学三重索引（Episodic/Semantic/Procedural），MCP 集成，Recall@10=0.89
- AionUi：iOfficeAI 开源 AI Agent Cowork 平台，17+ Agent 统一管理，Team 多Agent协作，内置 Office 文档生成

证伪修正：
- Atlas 仓库归属修正（个人仓库非 Elastic 官方组织）
- AionUi Stars 修正（24K+ 非 24.7K+）
- 框架归属澄清（CAMEL-AI 属于 Eigent 非 AionUi）

## 2026-07-02

### ingest | 2026年新趋势研究 — Qoder与Kun（自动研究工作流）

新增页面：
- wiki/sources/2026-07-02-qoder-official-site.md
- wiki/sources/2026-07-02-qoder-computer-use-tech.md
- wiki/sources/2026-07-02-deepseek-gui-readme.md
- wiki/sources/2026-07-02-kun-cache-optimization.md
- wiki/entities/Qoder.md
- wiki/entities/Kun.md

更新页面：
- wiki/topics/Agent集成层.md（添加 Qoder、Kun）
- wiki/index.md（添加 4 个素材 + 2 个实体，更新统计）

知识库统计：
- 素材摘要：173（+4）
- 实体页：108（+2）
- Agent 集成层素材：64（+4）

素材内容：
- Qoder：阿里巴巴 Agentic Platform，集成 Computer Use + Browser Use，后台桌面控制
- Kun：DeepSeek-GUI 本地 Agent 运行时，Cache-first agent loop，90%+ 缓存命中率
- 技术分析报告 v1.0：Qoder与Kun对比分析

证伪验证：
- "后台运行不打扰用户" → ⚠️ 待验证（标注官网声称）
- "90%+ cache hit 率" → ✅ 已验证
- "Windows Computer Use 支持" → ✅ 已验证

---

## 2026-07-01

### ingest | Stagehand/Browserbase 技术分析（自动研究工作流）

新增页面：
- wiki/sources/2026-07-01-stagehand-ai-browser-automation.md
- wiki/sources/2026-07-01-mcp-server-browserbase-performance.md
- wiki/sources/2026-07-01-stagehand-playwright-integration.md
- wiki/sources/2026-07-01-browserbase-ai-agent-browser.md

更新页面：
- wiki/index.md（添加 4 个素材 + 3 个实体，更新统计）

知识库统计：
- 素材摘要：169（+4）
- 实体页：106（+3）
- 浏览器控制素材：31（+4）

素材内容：
- Stagehand：AI与代码混合控制的浏览器自动化框架（20K+ Stars）
- mcp-server-browserbase：性能优化技巧（20-40% 速度提升）
- Playwright + AI 架构分析：三大核心API（act、extract、observe）
- Browserbase 架构解析：为 AI Agent 构建浏览器基础设施

---

### ingest | DeerFlow 研究（自动研究工作流）

新增页面：
- wiki/sources/2026-07-01-deerflow-github-readme.md
- wiki/entities/DeerFlow.md

更新页面：
- wiki/topics/Agent集成层.md（添加 DeerFlow）
- wiki/index.md（素材统计：165，实体统计：103）

### ingest | 2026年新趋势研究 — OpenCUA + real-browser-mcp + Computer-Use-Preview（自动研究工作流）

新增页面：
- wiki/sources/2026-07-01-opencua-github-readme.md
- wiki/sources/2026-07-01-real-browser-mcp-readme.md
- wiki/sources/2026-07-01-computer-use-preview-readme.md
- wiki/entities/OpenCUA.md
- wiki/entities/real-browser-mcp.md
- wiki/entities/Computer-Use-Preview.md

更新页面：
- wiki/topics/浏览器控制.md（添加 real-browser-mcp、Computer-Use-Preview）
- wiki/topics/桌面应用控制.md（添加 OpenCUA）
- wiki/index.md（添加 3 个素材 + 3 个实体，更新统计）

知识库统计：
- 素材摘要：164（+3）
- 实体页：102（+3）
- 浏览器控制素材：27（+2）
- 桌面应用控制素材：23（+1）

证伪验证：
- ✅ OpenCUA OSWorld 45.0% 验证通过（GitHub README）
- ✅ OpenCUA AgentNet 22.6K任务 验证通过（GitHub README + 论文）
- ✅ real-browser-mcp 18个工具 验证通过（GitHub README）
- ✅ Computer-Use-Preview 双后端架构 验证通过（GitHub README）

研究报告：
- raw/notes/2026-07-01-opencua-analysis.md
- raw/notes/2026-07-01-real-browser-mcp-analysis.md
- raw/notes/2026-07-01-computer-use-preview-analysis.md
- raw/notes/2026-07-01-falsification-record.md
- raw/notes/2026-07-01-trend-workflow-status.md

---

### ingest | CLI-Anything 深度研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-07-01-cli-anything-cli-hub-docs.md
- wiki/sources/2026-07-01-cli-anything-deep-analysis.md
- wiki/sources/2026-07-01-cli-anything-openclaw-integration.md

更新页面：
- wiki/entities/CLI-Anything.md（添加 3 个素材来源和相关页面）
- wiki/index.md（添加 CLI-Anything 素材和实体到桌面应用控制分类，更新统计）

知识库统计：
- 素材摘要：161（+3）
- 实体页：99（已更新）
- 桌面应用控制素材：22（+3）

证伪验证：
- ✅ Stars 43,937+ 验证通过（多个媒体来源确认）
- ✅ 支持 18+ 专业软件验证通过（README 明确列出）
- ✅ OpenClaw 集成可用验证通过（CLI-Hub 文档确认）
- ⚠️ 测试覆盖 1,774 项标注为"第三方估算"

研究报告：
- raw/notes/2026-07-01-cli-anything-report-v1.1.md
- raw/notes/2026-07-01-cli-anything-falsification-record.md

---

### ingest | Agent S 研究 — 首个 OSWorld 超越人类的 GUI Agent

新增页面：
- wiki/sources/2026-07-01-agent-s-github-readme.md
- wiki/sources/2026-07-01-agent-s-technical-analysis.md
- wiki/entities/Agent-S.md

更新页面：
- wiki/topics/桌面应用控制.md（添加 Agent-S 到 Agent集成层、相关页面）
- wiki/index.md（添加 Agent S 素材和实体到桌面应用控制分类，更新统计）

知识库统计：
- 素材摘要：158（+2）
- 实体页：99（+1）
- 桌面应用控制素材：19（+2）

证伪验证：
- ✅ OSWorld 72.60% 超越人类基线 72.36% 验证通过
- ✅ 首个超越人类水平声明验证通过
- ✅ 三代演进时间线和分数验证通过
- ⚠️ Stars 11.7K 标注为"约 11.7K（第三方估算）"

研究报告：
- raw/notes/2026-07-01-agent-s-falsification-record.md

---

### ingest | GitHub MCP Server 官方研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-07-01-github-mcp-server-readme.md
- wiki/sources/2026-07-01-github-mcp-server-remote-docs.md
- wiki/sources/2026-07-01-github-mcp-server-architecture-analysis.md
- wiki/entities/GitHub-MCP-Server.md

更新页面：
- wiki/topics/Agent集成层.md（添加 GitHub MCP Server 到关键概念、Agent 核心、素材汇总表、相关页面）
- wiki/index.md（添加 GitHub MCP Server 素材和实体到 Agent 集成层分类，更新统计）

知识库统计：
- 素材摘要：156（+3）
- 实体页：98（+1）
- Agent 集成层素材：~26（+3）

证伪验证：
- ⚠️ Stars 30.6K → 标注为"约 30K+（第三方估算）"
- ✅ 22 个工具集验证通过（官方文档）
- ✅ 远程+本地双模式验证通过
- ✅ MIT 许可证验证通过

研究报告：
- raw/notes/2026-07-01-github-mcp-server-report-v1.1.md（证伪修正版）

---

## 2026-06-30

### ingest | Hermes Agent 研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-06-30-hermes-agent-github-readme.md
- wiki/sources/2026-06-30-hermes-agent-computer-use-tech.md
- wiki/entities/hermes-agent.md
- wiki/entities/cua-driver.md

更新页面：
- wiki/topics/桌面应用控制.md（添加 hermes-agent 和 cua-driver 到素材列表、Agent集成层、相关页面）
- wiki/index.md（添加 hermes-agent 和 cua-driver 到桌面应用控制和Agent集成层分类）

知识库统计：
- 素材摘要：153（+2）
- 实体页：97（+2）

证伪验证：
- ❌ Stars 101K → ✅ 修正为 204,328（GitHub API 验证）
- ⚠️ 发布日期：仓库创建于 2025-07-22，2026年2月可能是获得关注时间

---

### ingest | bb-browser 浏览器控制研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-06-30-bb-browser-github-readme.md
- wiki/sources/2026-06-30-bb-browser-analysis.md
- wiki/entities/bb-browser.md

更新页面：
- wiki/topics/浏览器控制.md（添加 bb-browser 到素材列表、关键概念、技术栈分层、相关页面）
- wiki/index.md（添加 bb-browser 素材和实体到浏览器控制分类）

知识库统计：
- 素材摘要：104（+2）
- 实体页：88（+1）
- 浏览器控制素材：24（+2）

证伪验证：
- ✅ v0.11.6 (2026-05-11) 验证通过
- ✅ 263 commits 验证通过
- ✅ TypeScript 83.7% 验证通过
- ✅ 36 平台 103 命令 验证通过
- ⚠️ Stars 数量标注为"第三方数据，待 GitHub API 验证"

---

## 2026-06-29

### ingest | 文件系统权限模型研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-06-29-windows-security-descriptors.md
- wiki/sources/2026-06-29-windows-dacls-aces.md
- wiki/sources/2026-06-29-linux-acl-man-page.md
- wiki/sources/2026-06-29-linux-getfacl-man-page.md
- wiki/sources/2026-06-29-linux-setfacl-man-page.md
- wiki/sources/2026-06-29-posix-acl-project.md
- wiki/entities/Security-Descriptor.md
- wiki/entities/ACL.md
- wiki/entities/DACL.md
- wiki/entities/SACL.md
- wiki/entities/getfacl.md
- wiki/entities/setfacl.md

更新页面：
- wiki/topics/文件系统控制.md（添加权限控制视角、更新技术栈分层、添加相关实体）
- wiki/index.md（添加新素材、新实体、更新统计）

知识库统计：
- 素材摘要：63（+6）
- 实体页：52（+6）
- 文件系统控制素材：11（达标）

### ingest | OpenClaw 全栈 AI Agent 研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-06-29-openclaw-github-readme.md
- wiki/sources/2026-06-29-openclaw-gateway-architecture.md
- wiki/sources/2026-06-29-openclaw-tools-overview.md
- wiki/sources/2026-06-29-openclaw-skills-system.md
- wiki/sources/2026-06-29-openclaw-browser-control.md
- wiki/sources/2026-06-29-openclaw-sandboxing-security.md
- wiki/entities/OpenClaw.md

更新页面：
- wiki/topics/浏览器控制.md（添加 OpenClaw、更新关键概念和技术栈）
- wiki/topics/系统服务控制.md（添加 OpenClaw、更新 Agent 集成层）
- wiki/topics/Agent集成层.md（添加 OpenClaw 系列素材、更新 Agent 核心）
- wiki/index.md（添加新素材、新实体、更新统计）

知识库统计：
- 素材摘要：57（+6）
- 实体页：46（+1）
- 浏览器控制素材：15
- 系统服务控制素材：12
- Agent 集成层素材：16

证伪验证：
- ✅ 25+ 消息平台验证通过
- ✅ 58,222 次提交验证通过
- ✅ v2026.6.1 最新版本验证通过
- ✅ 4.3k Issues 验证通过
- ✅ TypeScript 91.7% 验证通过
- ⚠️ Stars 数量添加置信度标注（20万+，第三方报道范围 20.9万~38万）

### ingest | chrome-devtools-mcp 浏览器控制研究 — 自动研究工作流

新增页面：
- wiki/sources/2026-06-29-chrome-devtools-protocol.md
- wiki/sources/2026-06-29-chrome-devtools-mcp-official.md
- wiki/sources/2026-06-29-chrome-devtools-mcp-analysis.md
- wiki/sources/2026-06-29-playwright-cdp-websocket.md
- wiki/sources/2026-06-29-playwright-github-readme.md
- wiki/entities/chrome-devtools-mcp.md

更新页面：
- wiki/topics/浏览器控制.md（添加新素材、更新关键概念）
- wiki/index.md（添加新素材、新实体、更新统计）

知识库统计：
- 素材摘要：51（+5）
- 实体页：45（+1）
- 浏览器控制素材：13

证伪验证：
- ✅ 44 个 MCP 工具验证通过
- ✅ 底层 Puppeteer 技术验证通过
- ⚠️ Stars 数量从 38,866 更新为 43,000+（持续增长）

### ingest | PyUSB 硬件接口控制研究（3个素材）— 自动研究工作流

新增页面：
- wiki/sources/2026-06-29-pyusb-github-readme.md
- wiki/sources/2026-06-29-pyusb-tutorial.md
- wiki/sources/2026-06-29-libusb-api-reference.md
- wiki/entities/PyUSB.md

更新页面：
- wiki/topics/硬件接口控制.md（添加 PyUSB、更新工具列表）
- wiki/index.md（添加新素材、新实体、更新统计）
- wiki/log.md（追加操作记录）

知识库统计：
- 素材摘要：88（+3）
- 实体页：82（+1）
- 硬件接口控制素材：8（接近目标）

证伪验证：
- ✅ USB 4.0 支持验证通过（通过 libusb 后端）
- ✅ asyncio 支持验证（可通过 to_thread() 实现）
- ⚠️ MCP 集成可行性待验证

### ingest | Playwright 实现原理分析（4个素材）— 自动研究工作流

新增页面：
- wiki/sources/2026-06-29-playwright-github-readme.md
- wiki/sources/2026-06-29-chrome-devtools-protocol.md
- wiki/sources/2026-06-29-playwright-library-docs.md
- wiki/sources/2026-06-29-playwright-cdp-websocket.md

更新页面：
- wiki/entities/Playwright.md（添加实现原理内容）
- wiki/index.md（添加新素材、更新统计）
- wiki/log.md（追加操作记录）

知识库统计：
- 素材摘要：83（+4）
- 实体页：140（+0，仅更新）
- 浏览器控制素材：18（达标）

证伪验证：
- 已验证主要声明（GitHub commits、CDP 协议结构、Auto-wait、多客户端支持）
- 性能对比 Selenium 标注为"社区反馈"

## 2026-06-28

### ingest | 系统服务控制-硬件资源监控（3个素材）— 自动研究工作流 v7

新增页面：
- wiki/sources/2026-06-28-gputil-github-readme.md
- wiki/sources/2026-06-28-netifaces-github-readme.md
- wiki/sources/2026-06-28-py-cpuinfo-github-readme.md
- wiki/entities/GPUtil.md
- wiki/entities/netifaces.md
- wiki/entities/py-cpuinfo.md

更新页面：
- wiki/topics/系统服务控制.md（添加 GPUtil、netifaces、py-cpuinfo）
- wiki/index.md（添加新素材、新实体、更新统计）

知识库统计：
- 素材摘要：59（+3）
- 实体页：52（+3）
- 系统服务控制素材：10（达标）

### ingest | 填补知识缺口研究（6个素材）— 自动研究工作流 v6

新增页面：
- wiki/sources/2026-06-28-autohotkey-github-readme.md
- wiki/sources/2026-06-28-autohotkey-tutorial.md
- wiki/sources/2026-06-28-inputs-library-github.md
- wiki/sources/2026-06-28-inputs-library-docs.md
- wiki/sources/2026-06-28-libusb-github-readme.md
- wiki/sources/2026-06-28-libusb-official-website.md
- wiki/entities/AutoHotkey.md
- wiki/entities/inputs.md
- wiki/entities/libusb.md

更新页面：
- wiki/topics/桌面应用控制.md（添加 AutoHotkey，更新工具对比表）
- wiki/topics/硬件接口控制.md（添加 inputs、libusb）
- wiki/index.md（添加新素材、新实体、更新统计）

知识库统计：
- 素材摘要：46（+6）
- 实体页：44（+3）
- 桌面应用控制素材：14（达标）
- 硬件接口控制素材：15（达标）

### ingest | 系统服务控制补充研究（2个素材）— 自动研究工作流 v5

新增页面：
- wiki/sources/2026-06-28-prefect-github-readme.md
- wiki/sources/2026-06-28-pystemd-github-readme.md
- wiki/entities/Prefect.md
- wiki/entities/pystemd.md

更新页面：
- wiki/topics/系统服务控制.md（添加 Prefect、pystemd，更新工具对比表）
- wiki/index.md（添加新素材、新实体、更新统计）
- purpose.md（更新素材收集清单）

知识库统计：
- 素材摘要：40（+2）
- 实体页：41（+2）
- 系统服务控制素材：10（达标）

### ingest | 补充研究（3个素材）— 自动研究工作流 v4

新增页面：
- wiki/sources/2026-06-28-hidapi-github-readme.md
- wiki/sources/2026-06-28-windows-sensor-api.md
- wiki/sources/2026-06-28-systemd-io-homepage.md
- wiki/entities/hidapi.md
- wiki/entities/Windows-Sensor-API.md
- wiki/entities/systemd.md

更新页面：
- wiki/topics/硬件接口控制.md（添加 hidapi、Windows Sensor API）
- wiki/topics/系统服务控制.md（添加 systemd）
- wiki/index.md（添加新素材、新实体、更新统计）
- purpose.md（更新素材收集清单）

### ingest | 硬件接口控制素材（4个）— 自动研究工作流

新增页面：
- wiki/sources/2026-06-28-speech-recognition-github-readme.md
- wiki/sources/2026-06-28-speech-recognition-pypi.md
- wiki/sources/2026-06-28-pyserial-github-readme.md
- wiki/sources/2026-06-28-pyserial-shortintro.md
- wiki/entities/SpeechRecognition.md
- wiki/entities/pySerial.md
- wiki/entities/语音识别.md
- wiki/entities/串口通信.md
- wiki/entities/PyAudio.md
- wiki/entities/Whisper.md
- wiki/entities/Vosk.md
- wiki/entities/传感器.md

更新页面：
- wiki/topics/硬件接口控制.md（更新研究范围、工具实现层、相关实体、相关素材）
- wiki/index.md（添加硬件接口控制条目、更新统计）
- purpose.md（更新素材收集清单）

### digest | 文件系统控制深度报告

生成综合分析：
- wiki/synthesis/文件系统控制-深度报告.md

更新页面：
- wiki/index.md（添加综合分析链接）

### ingest | 文件系统控制素材（4个）

新增页面：
- wiki/sources/2026-06-28-file-system-as-meta-tool.md
- wiki/sources/2026-06-28-planning-with-files-github.md
- wiki/sources/2026-06-28-manus-context-engineering.md
- wiki/sources/2026-06-28-context-engineering-guide.md
- wiki/entities/上下文工程.md
- wiki/entities/状态显式化.md
- wiki/entities/KV-Cache.md
- wiki/entities/上下文窗口极简主义.md
- wiki/entities/思考与行动分离.md
- wiki/entities/掩码而非移除工具.md
- wiki/topics/文件系统控制.md

更新页面：
- wiki/index.md（更新素材收集清单和索引）
- purpose.md（更新素材收集清单）

### ingest | 系统服务控制素材（5个）

新增页面：
- wiki/sources/2026-06-28-powershell-official-guide.md
- wiki/sources/2026-06-28-windows-ui-automation-official.md
- wiki/sources/2026-06-28-open-interpreter-computer-use.md
- wiki/sources/2026-06-28-open-interpreter-github-readme.md
- wiki/sources/2026-06-28-pyautogui-official-docs.md
- wiki/entities/PowerShell.md
- wiki/entities/Cmdlet.md
- wiki/topics/系统服务控制.md

### synthesis | 系统服务控制深度报告

新增页面：
- wiki/synthesis/系统服务控制-深度报告.md

更新页面：
- wiki/index.md（添加深度报告链接、更新素材统计）

---

## 2026-06-27

### ingest | MCP Protocol 综合研究（8个素材）

新增页面：
- wiki/sources/2026-06-27-mcp-specification.md
- wiki/sources/2026-06-27-mcp-architecture.md
- wiki/sources/2026-06-27-mcp-servers-github.md
- wiki/sources/2026-06-27-mcp-official-docs-home.md
- wiki/sources/2026-06-27-mcp-anthropic-announcement.md
- wiki/sources/2026-06-27-mcp-typescript-sdk.md
- wiki/sources/2026-06-27-mcp-python-sdk.md
- wiki/sources/2026-06-27-mcp-claude-desktop-integration.md
- wiki/entities/MCP.md
- wiki/topics/Agent集成层.md
- wiki/synthesis/MCP-Protocol-深度报告.md

### ingest | Anthropic Computer Use 综合研究（5个素材）

新增页面：
- wiki/sources/2026-06-27-claude-computer-use-github-demo.md
- wiki/sources/2026-06-27-claude-computer-use-best-practices-github.md
- wiki/sources/2026-06-27-claude-computer-use-best-practices-blog.md
- wiki/sources/2026-06-27-claude-computer-use-security-research.md
- wiki/sources/2026-06-27-anthropic-build-with-claude-overview.md
- wiki/entities/Computer-Use.md
- wiki/synthesis/Anthropic-Computer-Use-深度报告.md

### ingest | browser-use 研究（6个素材）

新增页面：
- wiki/sources/2026-06-27-browser-use-github-readme.md
- wiki/sources/2026-06-27-browser-use-docs-index.md
- wiki/sources/2026-06-27-browser-use-architecture-analysis.md
- wiki/sources/2026-06-27-browser-use-vs-playwright-mcp.md
- wiki/sources/2026-06-27-browser-use-research-report.md
- wiki/entities/browser-use.md
- wiki/entities/Playwright.md
- wiki/entities/浏览器自动化.md
- wiki/topics/浏览器控制.md
