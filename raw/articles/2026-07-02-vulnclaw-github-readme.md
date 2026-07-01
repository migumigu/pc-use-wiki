# VulnClaw GitHub README

**来源**: https://github.com/Unclecheng-li/VulnClaw
**获取日期**: 2026-07-02
**Stars**: 1.5K+

---

<div align="center">
# VulnClaw 🦞
> *AI 驱动的渗透测试 CLI 工具 — 说人话,打漏洞。*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python 3.10+](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![OpenAI Compatible](https://img.shields.io/badge/API-OpenAI_Compatible-green)](https://platform.openai.com/)
[![MCP](https://img.shields.io/badge/Toolchain-MCP-orange)](https://modelcontextprotocol.io/)
[![PyPI](https://img.shields.io/badge/PyPI-v0.3.2-blueviolet)](https://pypi.org/project/vulnclaw/)
[![Security](https://img.shields.io/badge/Scope-Authorized_Only-red)](#-安全声明)

🌐 **English version**: [`README_EN.md`](README_EN.md)

**本项目是可独立运行的 AI 渗透测试 Agent。**

项目官网：https://unclecheng-li.github.io/vulnclaw.com/

基于 LLM Agent + MCP 工具链 + 渗透 Skill 编排，
配合 OpenAI / MiniMax / DeepSeek 等兼容模型，
自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。

</div>

---

## 它能做什么

输入自然语言,AI 自动执行渗透测试全流程：

```
用户输入：帮我对 http://target.example.com 进行渗透测试

VulnClaw 自动执行：
  Round 1:  信息收集 → 指纹识别、端口扫描、目录枚举
  Round 2:  漏洞发现 → 检测注入点、已知 CVE、配置缺陷
  Round 3:  漏洞利用 → PoC 验证、权限获取
  Round 4:  报告生成 → 结构化报告 + Python PoC 脚本
```

适用于已授权的渗透测试、CTF 竞赛、安全教学、红队演练等场景。

---

## 特性

### 核心架构特性

- **目标驱动求解引擎(默认)** — 抛弃固定轮数工作流,以「目标达成 / 探索前沿耗尽 / 安全预算」为终止条件,自动收敛
- **黑板图状态空间搜索** — 把渗透建模为从 origin 向 goal 的搜索：Fact(已确认事实) + Intent(探索方向),结构上杜绝"原地打转"
- **证据级反幻觉闸门** — 声称的 flag/结论必须在真实工具输出里逐字符出现才被采信,杜绝凭空编造 flag 的假胜利

### 功能特性

- **自然语言驱动** — 用人话描述渗透意图,自动识别阶段和工具
- **13 个 LLM Provider** — OpenAI / MiniMax / DeepSeek / 智谱 / Moonshot / 千问 / SiliconFlow / 豆包 / 百川 / 阶跃星辰 / 商汤 / 零一万物,一键切换
- **MCP 工具链** — 4 个 MCP 服务：`fetch` / `memory` 本地实现开箱即用,`chrome-devtools` / `burp` 对接外部 MCP 服务实现浏览器自动化和 HTTP 抓包重放
- **AI Agent 核心** — OpenAI 兼容协议 + Tool Calling + 自主渗透循环
- **结构化推理 + 自适应反思** — 已知事实/约束/攻击链结构化沉淀；失败自动归类并按 L0-L4 渐进升级 payload 绕过策略
- **漏洞检测插件体系** — 低耦合插件运行时 + 内置只读 Web 插件,结果自动汇入报告链路(`vulnclaw plugins`)
- **21 个渗透 Skill** — 7 核心 + 14 专项 Skill(含 CTF Web/Crypto/Misc、osint-recon、secknowledge-skill),含 180 个参考文档
- **编解码/加解密工具** — 29 种操作(Base64/Hex/URL/AES/JWT/Morse 等),LLM 可精确调用,不再靠猜测
- **Python 代码执行** — 内置 `python_execute` 工具,适合 payload 构造和响应解析；当前仍属高风险实验能力,不应视为强隔离沙箱
- **持续性渗透测试** — 周期循环(默认 100 轮/周期 × 10 周期 = 1000 轮),每周期自动生成报告,直到手动终止
- **推理过程显示控制** — `think on/off` 一键切换 LLM 思考过程的显示/隐藏,默认关闭,干净输出只看结论
- **沙盒模式提示词** — 解锁 AI 安全测试能力,CTF / 授权渗透场景专用
- **自动报告 & PoC** — 生成结构化 Markdown 报告和可运行的 Python PoC 脚本
- **Web UI 模式** — `vulnclaw web` 启动本地 Web 界面,浏览器操作渗透测试全流程,默认 `127.0.0.1:7788`
- **安全知识库** — 已内置知识库模块与基础种子数据,CLI 可维护；检索增强正在逐步接入主流程

---

## 架构升级：从「固定轮数工作流」到「目标驱动求解」

旧版自主渗透是**固定轮数循环**(跑满 N 轮才停),在弱模型上容易陷入"反复请求同一页面、嘴上说要测注入却不发包"的死循环。新版把渗透重构为**状态空间搜索**,这是本次重构的核心。

### 黑板图 + OODA 求解循环(默认引擎 `solve`)

把渗透看作从 **origin**(目标)向 **goal**(拿到 flag / shell / 确认高危漏洞)的有向搜索,用两个原语驱动：

| 原语 | 含义 |
|------|------|
| **Fact** | 已被真实工具输出证实的客观事实(探索的落脚点) |
| **Intent** | 声明的探索方向(尚未执行的一步),从 Fact 出发,结论后产出新 Fact |

循环结构(`vulnclaw/agent/solver.py`)：

```
REASON(读全图)→ 目标达成? / 提出新探索方向 / 不提出
        │
EXPLORE(领一个 Intent)→ 用工具实际执行 → 把确认的结论写回为一个 Fact
        │
终止：目标达成 / 探索前沿耗尽(Reason 不再提方向)/ 触达安全预算
```

**为什么结构上杜绝打转**：一旦"首页是登录框"成为一个 Fact,Reason 就不会再提"去看首页",而是提"测 SQL 注入"；每个 Intent 领取一次、结论一次即标记 `concluded`/`abandoned`,**不可能重复**。终止由目标驱动,不再是数死轮数。

### 证据级反幻觉闸门

弱模型常凭空编造 flag。新引擎在 `solve()` 里录制**所有真实工具输出**(HTTP 响应体、`python_execute` 输出)作为唯一可信证据：

- **结论闸门**：Explore 结论里声称的 flag,若未在真实工具输出里逐字符出现 → 判定幻觉、丢弃、标记 `[未验证]`。
- **完成闸门**：Reason 宣布"目标达成"时,若目标要 flag 但真实输出里从无 flag → 拒绝完成、继续探索。
- **即时收敛**：一旦拿到经证据验证的 flag,立即完成,不再空跑验证轮。

这套机制对弱模型尤其友好：旧的固定轮数循环容易在重复请求里空转,而「目标驱动 + 证据反幻觉」会逼着 Agent 用真实工具输出一步步逼近目标,并拒绝任何无证据支撑的「完成」。

### 结构化推理 + 自适应反思

- **推理状态层**(`reasoning_state.py`)：已知事实(带置信度)、推理障碍(WAF/过滤等)、候选攻击链,结构化沉淀并注入提示词。
- **反思引擎**(`reflexion.py`)：失败自动归类(环境限制/路径错误/参数错误/信息不足),按 **L0-L4 渐进升级** payload 绕过策略(原始 → URL 编码 → 双写注释 → Unicode/hex → 多层混淆/换攻击面),persistent 模式跨周期保留失败记忆。

### 漏洞检测插件体系

低耦合插件运行时(`vulnclaw/plugins/`) + 内置只读 Web 插件(安全响应头 / JWT / JS 端点分析),插件结果可去重合并进 `SessionState.findings` 进入报告链路。

切回旧的固定轮数引擎：`vulnclaw config set session.engine rounds`

---

## 快速开始

### 安装

```bash
# 从 PyPI 安装(推荐)
pip install vulnclaw

# 从源码安装
git clone https://github.com/Unclecheng-li/VulnClaw.git
cd VulnClaw
pip install -e .
```

### Docker 运行(可选)

镜像已内置 Web UI 以及默认 MCP 服务所需的运行时(`npx` / `uvx`),所有状态(配置、会话、目标、报告)持久化到 `/data` 数据卷。

```bash
cp .env.example .env          # 填入 VULNCLAW_LLM_API_KEY 等
docker compose up --build      # 构建镜像并启动 Web UI
# 打开 http://127.0.0.1:7788
```

也可用纯 docker 运行某条 CLI 命令：

```bash
docker run --rm -it \
  -e VULNCLAW_LLM_API_KEY=sk-your-key-here \
  -v vulnclaw-data:/data \
  vulnclaw:latest scan <target>
```

⚠️ 容器内的 `localhost` 指向容器自身。扫描宿主机服务请使用 `host.docker.internal`,扫描其它容器请共享网络并用容器名访问。

### 四步启动

```bash
# 1. 选择提供商(自动填充 Base URL 和模型名)
vulnclaw config provider minimax   (或 openai/deepseek/zhipu/moonshot/qwen/siliconflow)

# 1.2(可选)自定义 Base URL 或模型名
vulnclaw config set llm.base_url https://your-own-api.example.com/v1 
vulnclaw config set llm.model your-model-name

# 2. 设置 API Key
vulnclaw config set llm.api_key sk-your-key-here
#    — 或改用 ChatGPT 订阅登录(无需 API Key)：
#      vulnclaw login   (浏览器登录；详见 docs/keyless-auth.md,注意 ToS 风险)

# 3. 默认：打开原 CLI / REPL
vulnclaw

# 4. 可选：打开 TUI 工作台
vulnclaw tui
```

### 环境检查

```bash
vulnclaw doctor
```

输出示例：

```
🦞 VulnClaw 环境检查
  Python: 3.14.4
  Node.js: v24.14.1
  npx: 已安装
  nmap: 已安装

LLM 配置:
  Provider: openai
  Auth Mode: static
  Credentials: configured
  Base URL: https://api.openai.com/v1
  Model: gpt-4o

MCP 服务:
  fetch: 已启用 [P0]
  memory: 已启用 [P0]
  ...

✅ 环境就绪,运行 vulnclaw 开始
```

---

## CLI 命令速查

`vulnclaw --help` 查看所有命令：

```bash
$ vulnclaw --help
🦞 VulnClaw — AI-powered penetration testing CLI

 Usage: vulnclaw [OPTIONS] COMMAND [ARGS]...

 Options:
   --version  Show version and exit.
   --help     Show version and exit.

 Commands:
   run           🚀 一键全流程渗透测试
   persistent    🔄 持续性渗透测试(100轮/周期)
   recon         🔍 仅信息收集阶段
   scan          🔎 执行漏洞扫描阶段
   exploit       💥 执行漏洞利用阶段
   report        📝 从会话记录生成报告
   repl          💬 启动经典 REPL 交互界面
   config        ⚙️  管理配置(set/get/list/provider)
   init          🔧 初始化配置
   doctor        🏥  检查运行环境
   tui           🖥️  打开终端图形化工作台
   web           🌐  启动本地 Web UI
```

### 命令详解

| 命令 | 说明 | 示例 |
|------|------|------|
| `vulnclaw` | 默认打开原 CLI / REPL 交互界面 | `vulnclaw` |
| `vulnclaw tui` | 显式打开终端图形化工作台 | `vulnclaw tui` / `vulnclaw tui --target target.com` |
| `vulnclaw repl` | 启动经典 REPL 交互界面 | `vulnclaw repl` |
| `vulnclaw solve <target>` | 目标驱动求解(无固定轮数,拿到目标即停) | `vulnclaw solve target.com --goal "拿到flag"` |
| `vulnclaw run <target>` | 一键全流程渗透(默认走 solve 引擎) | `vulnclaw run 192.168.1.1` |
| `vulnclaw persistent <target>` | 持续性渗透(100轮/周期) | `vulnclaw persistent 192.168.1.1` |
| `vulnclaw recon <target>` | 仅信息收集(不利用漏洞) | `vulnclaw recon target.com` |
| `vulnclaw scan <target>` | 漏洞扫描阶段 | `vulnclaw scan target.com --ports 80,443` |
| `vulnclaw exploit <target>` | 漏洞利用阶段 | `vulnclaw exploit target.com --cve CVE-2024-1234` |
| `vulnclaw report <session>` | 从会话 JSON 生成报告 | `vulnclaw report session_xxx.json` |
| `vulnclaw config set <key> <value>` | 设置配置项 | `vulnclaw config set llm.api_key sk-xxx` |
| `vulnclaw config get <key>` | 查看配置项 | `vulnclaw config get llm.model` |
| `vulnclaw config list` | 列出所有配置 | `vulnclaw config list` |
| `vulnclaw config provider <name>` | 切换 LLM 提供商 | `vulnclaw config provider minimax` |
| `vulnclaw init` | 初始化配置文件 | `vulnclaw init` |
| `vulnclaw doctor` | 检查运行环境 | `vulnclaw doctor` |
| `vulnclaw plugins list` | 列出漏洞检测插件 | `vulnclaw plugins list --stage discovery` |
| `vulnclaw plugins info <id>` | 查看插件元信息 | `vulnclaw plugins info builtin.web.headers` |
| `vulnclaw plugins run <id>` | 运行插件(仅分析传入数据) | `vulnclaw plugins run builtin.web.headers --input headers.json --session s.json` |
| `vulnclaw web` | 启动本地 Web UI | `vulnclaw web` / `vulnclaw web --port 8080` |

---

## 使用方式

### 方式一：原 CLI / REPL 交互模式(默认)

```bash
$ vulnclaw
```

无参数启动会进入原本的 🦞 交互界面,用自然语言对话：

```
🦞 vulnclaw> 对 192.168.1.100 进行渗透测试,这是我授权的靶场

[*] 进入自主渗透模式,按 Ctrl+C 可随时中断
── Round 1 ──
  [+] 目标: 192.168.1.100
  [+] 开放端口: 22, 80, 443, 8080
```

### 方式二：TUI 工作台(显式启用)

```bash
$ vulnclaw tui
```

TUI 会先展示目标、检查模式、运行概览和安全边界,让你确认授权范围后再启动任务：

```
VulnClaw TUI 工作台

授权目标        https://example.com
检查模式        快速摸底 / recon
运行概览        历史快照、风险数量、持久化约束、约束拦截
安全边界        仅测试端口 443,禁止 exploit/persistent/post_exploitation

1 设置授权目标
2 选择检查模式
3 设置测试范围
4 开始授权安全检查
8 模型/API 配置
```

### 方式三：经典 REPL 子命令

```bash
$ vulnclaw repl
```

进入经典 🦞 交互界面,用自然语言对话：

```
🦞 vulnclaw> 对 192.168.1.100 进行渗透测试,这是我授权的靶场

[*] 进入自主渗透模式,按 Ctrl+C 可随时中断
── Round 1 ──
  [+] 目标: 192.168.1.100
  [+] 开放端口: 22, 80, 443, 8080
  [+] Web 指纹: Apache/2.4.62
── Round 2 ──
  [+] 发现 /manager/html (Tomcat Manager)
  [+] 命中 CVE-202X-XXXX: Apache Tomcat 认证绕过
── Round 3 ──
  [+] 漏洞验证成功

🦞 192.168.1.100 | 报告> 生成渗透报告
[+] 报告已保存: ./reports/192.168.1.100_20260418.md
[+] PoC 脚本已保存: ./pocs/CVE-202X-XXXX.py
```

#### 经典 REPL 内置命令

| 命令                  | 说明                                       |
| --------------------- | ------------------------------------------ |
| `target <host>`       | 设置渗透测试目标                           |
| `status`              | 查看当前状态(目标、阶段、工具、推理显示) |
| `tools`               | 列出当前可用 MCP 工具                      |
| `think`               | 切换推理过程显示/隐藏                      |
| `think on` / `off`    | 精确控制推理过程显示                       |
| `persistent`          | 启动持续性渗透测试(100轮/周期,自动报告) |
| `persistent <host>`   | 对指定目标启动持续性渗透                   |
| `clear`               | 清空当前会话                               |
| `help`                | 显示帮助信息                               |
| `exit` / `quit` / `q` | 退出 VulnClaw                              |

---

## 内置 Skill

VulnClaw 内置 **21 个渗透 Skill**,覆盖渗透测试全流程：

### 核心 Skill (7 个)

| Skill | 功能 |
|-------|------|
| `pentest-flow` | 全流程编排,从信息收集到报告生成 |
| `recon` | 信息收集：端口扫描、指纹识别、目录枚举 |
| `vuln-discovery` | 漏洞发现：注入检测、CVE 匹配、配置缺陷 |
| `exploitation` | 漏洞利用：PoC 构造、权限获取 |
| `post-exploitation` | 后渗透：内网探测、横向移动 |
| `reporting` | 报告生成：结构化 Markdown 报告 |
| `waf-bypass` | WAF 绕过：L0-L4 渐进绕过策略 |

### 专项 Skill (14 个)

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

---

## MCP 集成

### MCP 服务列表

VulnClaw 集成 **4 个核心 MCP 服务**：

| MCP 服务 | 功能 | 优先级 |
|----------|------|--------|
| `fetch` | HTTP 请求、指纹识别 | P0 |
| `memory` | 内存管理、状态持久化 | P0 |
| `chrome-devtools` | 浏览器自动化操控 | P0 |
| `burp` | Burp Suite 集成、HTTP 抓包重放 | P0 |

### MCP 工具定义

每个 MCP 服务包含多个工具定义：

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

---

## 与传统工具对比

| 维度 | VulnClaw | 传统工具 |
|------|----------|----------|
| **学习成本** | 低,说人话就行 | 高,需要记忆大量命令 |
| **自动化程度** | 高,全流程 AI 驱动 | 低,需要手动切换工具 |
| **工具数量** | 统一入口,11 MCP 服务 | Nmap+Burp+SQLMap+… |
| **报告生成** | 自动,Markdown + PoC | 手动,耗时耗力 |
| **上下文保持** | 跨周期状态记忆 | 每次任务重头来 |
| **模型支持** | 13 种,灵活切换 | 固定工具集 |
| **扩展性** | Skill + MCP,插件化 | 依赖工具更新 |

---

## 安全声明

⚠️ **VulnClaw 仅用于已授权的安全测试**

使用前需确保：

- 已获得目标系统的**明确书面授权**
- 测试范围已与目标所有者**书面确认**
- 遵守**当地法律法规**

**未经授权进行渗透测试是违法行为。**

---

## 项目信息

- **GitHub**: https://github.com/Unclecheng-li/VulnClaw
- **官网**: https://unclecheng-li.github.io/vulnclaw.com/
- **PyPI**: https://pypi.org/project/vulnclaw/
- **License**: MIT
- **Python 版本**: 3.10+
- **当前版本**: v0.3.2

---

## 核心架构总结

### AI Agent + MCP 工具链 + 渗透 Skill 编排

**三层架构**：

1. **LLM Agent 层**：自然语言理解、任务规划、自主决策
2. **MCP 工具层**：工具调用、协议封装、状态管理
3. **Skill 编排层**：领域知识、流程编排、参考文档

### 工作流程

```
信息收集 → 漏洞发现 → 漏洞利用 → 报告生成
    ↓           ↓           ↓           ↓
  recon     vuln-discovery  exploitation  reporting
    ↓           ↓           ↓           ↓
  MCP工具     MCP工具      MCP工具      自动生成
```

### 能力边界

- **依赖 LLM 质量**：模型能力强,渗透效果好
- **需要授权环境**：仅限授权渗透测试
- **工具链完整性**：依赖 MCP 服务配置
- **证据验证机制**：杜绝幻觉,真实工具输出验证

---

**文档来源**: GitHub README (https://github.com/Unclecheng-li/VulnClaw)
**最后更新**: 2026-07-02