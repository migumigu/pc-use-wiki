---
tags: [渗透测试, 安全工具, MCP, AI-Agent]
created: 2026-07-02
updated: 2026-07-02
sources:
  - wiki/sources/2026-07-02-vulnclaw-github-readme.md
  - wiki/sources/2026-07-02-vulnclaw-official-website.md
  - wiki/sources/2026-07-02-vulnclaw-technical-blog.md
---

# VulnClaw

> AI 驱动的渗透测试 CLI 工具，说人话，打漏洞

<!-- confidence: EXTRACTED -->
<!-- evidence: "AI 驱动的渗透测试 CLI 工具，说人话,打漏洞" -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **GitHub** | https://github.com/Unclecheng-li/VulnClaw |
| **Stars** | 1.5K+ |
| **PyPI** | vulnclaw v0.3.2 |
| **许可证** | MIT |
| **Python 版本** | 3.10+ |
| **LLM Provider** | 13+ (OpenAI/MiniMax/DeepSeek/智谱/Moonshot/千问等) |
| **MCP 服务** | 12+ |
| **渗透 Skill** | 21+ |
| **编解码工具** | 29+ |

## 核心定位

**说人话，打漏洞。**

基于 LLM Agent + MCP 工具链 + 渗透 Skill 编排，配合 OpenAI / MiniMax / DeepSeek 等兼容模型，自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。

<!-- confidence: EXTRACTED -->
<!-- evidence: "自然语言输入 → 自动完成信息收集 → 漏洞发现 → 漏洞利用 → 报告生成全流程" -->

## 核心架构特性

### 目标驱动求解引擎（默认）

- 抛弃固定轮数工作流，以「目标达成 / 探索前沿耗尽 / 安全预算」为终止条件
- 自动收敛，不再空跑验证轮

<!-- confidence: EXTRACTED -->
<!-- evidence: "目标驱动求解引擎，以目标达成/探索前沿耗尽/安全预算为终止条件" -->

### 黑板图状态空间搜索

把渗透建模为从 origin 向 goal 的搜索：

| 原语 | 含义 |
|------|------|
| **Fact** | 已被真实工具输出证实的客观事实（探索的落脚点） |
| **Intent** | 声明的探索方向（尚未执行的一步），从 Fact 出发，结论后产出新 Fact |

循环结构：
```
REASON(读全图)→ 目标达成? / 提出新探索方向 / 不提出
        │
EXPLORE(领一个 Intent)→ 用工具实际执行 → 把确认的结论写回为一个 Fact
        │
终止：目标达成 / 探索前沿耗尽 / 触达安全预算
```

<!-- confidence: EXTRACTED -->
<!-- evidence: "黑板图 + OODA 求解循环，Fact 和 Intent 双原语驱动" -->

### 证据级反幻觉闸门

- **结论闸门**：Explore 结论里声称的 flag，若未在真实工具输出里逐字符出现 → 判定幻觉、丢弃
- **完成闸门**：Reason 宣布"目标达成"时，若目标要 flag 但真实输出里从无 flag → 拒绝完成、继续探索
- **即时收敛**：一旦拿到经证据验证的 flag，立即完成

<!-- confidence: EXTRACTED -->
<!-- evidence: "证据级反幻觉闸门，声称的 flag/结论必须在真实工具输出里逐字符出现" -->

## MCP 工具链

### MCP 服务列表（核心 4 个）

| MCP 服务 | 功能 | 优先级 |
|----------|------|--------|
| `fetch` | HTTP 请求、指纹识别 | P0 |
| `memory` | 内存管理、状态持久化 | P0 |
| `chrome-devtools` | 浏览器自动化操控 | P0 |
| `burp` | Burp Suite 集成、HTTP 抓包重放 | P0 |

### MCP 工具定义

**fetch MCP 工具**：
- `http_request`：HTTP 请求发送
- `fingerprint_scan`：Web 指纹识别
- `port_scan`：端口扫描

**chrome-devtools MCP 工具**：
- `browser_navigate`：浏览器导航
- `browser_click`：点击元素
- `browser_type`：输入文本
- `browser_screenshot`：截图

**burp MCP 工具**：
- `burp_intercept`：拦截 HTTP 流量
- `burp_replay`：重放 HTTP 请求
- `burp_scan`：被动扫描

<!-- confidence: EXTRACTED -->
<!-- evidence: "MCP 服务列表 fetch/memory/chrome-devtools/burp" -->

## 内置 Skill（21 个）

### 核心 Skill（7 个）

| Skill | 功能 |
|-------|------|
| `pentest-flow` | 全流程编排，从信息收集到报告生成 |
| `recon` | 信息收集：端口扫描、指纹识别、目录枚举 |
| `vuln-discovery` | 漏洞发现：注入检测、CVE 匹配、配置缺陷 |
| `exploitation` | 漏洞利用：PoC 构造、权限获取 |
| `post-exploitation` | 后渗透：内网探测、横向移动 |
| `reporting` | 报告生成：结构化 Markdown 报告 |
| `waf-bypass` | WAF 绕过：L0-L4 渐进绕过策略 |

### 专项 Skill（14 个）

| Skill | 功能 |
|-------|------|
| `ctf-web` | CTF Web 题解题思路 |
| `ctf-crypto` | CTF Crypto 题解密思路 |
| `ctf-misc` | CTF Misc 题杂项思路 |
| `osint-recon` | OSINT 四维信息收集 |
| `secknowledge-skill` | 安全知识库检索 |
| `crypto-toolkit` | 加解密工具集 |
| `encoding-toolkit` | 编解码工具集 |
| `sql-injection` | SQL 注入专项 |
| `xss-attack` | XSS 攻击专项 |
| `file-upload` | 文件上传漏洞专项 |
| `auth-bypass` | 认证绕过专项 |
| `privilege-escalation` | 权限提升专项 |
| `lfi-rfi` | LFI/RFI 漏洞专项 |
| `ssrf-attack` | SSRF 攻击专项 |

<!-- confidence: EXTRACTED -->
<!-- evidence: "21 个渗透 Skill，7 核心 + 14 专项" -->

## 反思引擎：L0-L4 渐进升级

失败自动归类（环境限制/路径错误/参数错误/信息不足），按 L0-L4 渐进升级 payload 绕过策略：

| 级别 | 策略 |
|------|------|
| L0 | 原始 payload |
| L1 | URL 编码 |
| L2 | 双写注释 |
| L3 | Unicode/hex |
| L4 | 多层混淆/换攻击面 |

<!-- confidence: EXTRACTED -->
<!-- evidence: "L0-L4 渐进升级 payload 绕过策略" -->

## CLI 命令速查

| 命令 | 说明 |
|------|------|
| `vulnclaw` | 默认打开原 CLI / REPL 交互界面 |
| `vulnclaw tui` | 打开终端图形化工作台 |
| `vulnclaw solve <target>` | 目标驱动求解（无固定轮数） |
| `vulnclaw run <target>` | 一键全流程渗透 |
| `vulnclaw persistent <target>` | 持续性渗透（100轮/周期） |
| `vulnclaw recon <target>` | 仅信息收集 |
| `vulnclaw scan <target>` | 漏洞扫描阶段 |
| `vulnclaw exploit <target>` | 漏洞利用阶段 |
| `vulnclaw report <session>` | 从会话 JSON 生成报告 |
| `vulnclaw config provider <name>` | 切换 LLM 提供商 |
| `vulnclaw doctor` | 检查运行环境 |
| `vulnclaw web` | 启动本地 Web UI |

<!-- confidence: EXTRACTED -->
<!-- evidence: "CLI 命令列表 vulnclaw/run/solve/persistent/recon/scan/exploit/report" -->

## 与传统工具对比

| 维度 | VulnClaw | 传统工具 |
|------|----------|----------|
| **学习成本** | 低，说人话就行 | 高，需要记忆大量命令 |
| **自动化程度** | 高，全流程 AI 驱动 | 低，需要手动切换工具 |
| **工具数量** | 统一入口，12+ MCP 服务 | Nmap+Burp+SQLMap+… |
| **报告生成** | 自动，Markdown + PoC | 手动，耗时耗力 |
| **上下文保持** | 跨周期状态记忆 | 每次任务重头来 |
| **模型支持** | 13 种，灵活切换 | 固定工具集 |

<!-- confidence: EXTRACTED -->
<!-- evidence: "与传统工具对比表" -->

## 安全声明

⚠️ **VulnClaw 仅用于已授权的安全测试**

使用前需确保：
- 已获得目标系统的**明确书面授权**
- 测试范围已与目标所有者**书面确认**
- 遵守**当地法律法规**

**未经授权进行渗透测试是违法行为。**

<!-- confidence: EXTRACTED -->
<!-- evidence: "安全声明：仅用于已授权的安全测试" -->

## 适用场景

✅ **适合**：
- 已授权的渗透测试
- CTF 竞赛
- 安全教学
- 红队演练
- 安全研究与概念验证

❌ **不适合**：
- 未授权测试
- 生产环境直接使用
- 高精度图形操作

<!-- confidence: INFERRED -->
<!-- evidence: "基于设计定位推断适用场景" -->

## 相关页面

- [[MCP]] — 工具调用协议
- [[Agent集成层]] — 主题页
- [[chrome-devtools-mcp]] — 浏览器自动化 MCP
- [[浏览器自动化]] — 技术领域