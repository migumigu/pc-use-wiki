# VulnClaw 官方网站

**来源**: https://unclecheng-li.github.io/vulnclaw.com/
**获取日期**: 2026-07-02

---

# VulnClaw

v0.3.2 MVP | Python | MIT License

## AI 渗透测试从自然语言开始

基于 LLM Agent + MCP 工具链 + 渗透 Skill

描述目标,自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」

**说人话,打漏洞**

```bash
pip install vulnclaw
```

[GitHub](https://github.com/Unclecheng-li/VulnClaw)

## 项目统计

- 13+ LLM Provider
- 12+ MCP 服务
- 21+ 渗透 Skill
- 29+ 编解码工具

## 快速演示

```bash
$ pip install vulnclaw
Successfully installed vulnclaw-0.3.2

$ vulnclaw config set llm.api_key sk-***
# 配置完成,开始渗透测试

$ vulnclaw
🦞 VulnClaw v0.3.2 — AI 渗透测试助手
目标未设置 | 工具链就绪 | 知识库已加载

🦞 对 http://target.example.com 进行渗透测试
[*] 进入自主渗透模式,按 Ctrl+C 可随时中断

── Round 1 ── 信息收集
[+] 开放端口: 22, 80, 443, 8080
[+] Web 指纹: Apache/2.4.62

── Round 2 ── 漏洞发现
[+] 发现 /manager/html (Tomcat Manager)
[+] 命中 CVE-202X-XXXX: Apache Tomcat 认证绕过

── Round 3 ── 漏洞利用
[+] 漏洞验证成功 uid=0(root)

── Round 4 ── 报告生成
[+] 报告已保存: ./reports/target_20260419.md
[+] PoC 脚本已保存: ./pocs/CVE-202X-XXXX.py
```

---

## 实战演示

VulnClaw 的首份实战报告,仅 12 轮对话找到 flag,见证 AI 渗透测试全流程。

---

## 核心特性

开箱即用,让每一次渗透都有章可循

### 01. 自然语言驱动

用日常语言描述渗透意图,AI 自动识别阶段、选择工具、编排测试流程。

- 自动阶段识别与切换
- 上下文记忆与推理
- 多轮自主渗透循环

### 02. MCP 工具链

12 个安全 MCP 服务 + 23 个工具定义,开箱即用。

- fetch / Burp / Chrome DevTools
- Frida / ADB / JADX
- IDA Pro 二进制逆向

### 03. 21 个渗透 Skill

7 个核心 Skill 覆盖全流程,14 个专项 Skill 深入各场景。

- pentest-flow 全流程编排
- ctf-web / ctf-crypto / ctf-misc
- osint-recon 四维信息收集
- waf-bypass / crypto-toolkit

### 04. 高级 Agent 能力

持续性渗透测试 + 推理可视化 + Python 代码执行。

- 持续性渗透(100轮/周期)
- 推理过程 think on/off 控制
- python_execute 精确 payload
- 内置 CVE/知识库安全检索

---

## 快速开始

四步上手,3 分钟开始第一次渗透测试

### 01. 安装

```bash
$ pip install vulnclaw
```

### 02. 配置 Key

```bash
$ vulnclaw config set llm.api_key sk-xxx
```

### 03. 启动

```bash
$ vulnclaw
```

### 04. 渗透

```
🦞 对 target.com 进行渗透测试
```

---

## 完整工作流

```bash
$ pip install vulnclaw

$ vulnclaw config set llm.base_url https://api.minimaxi.com/v1
$ vulnclaw config set llm.model MiniMax-M2.7
$ vulnclaw config set llm.api_key sk-your-key-here

$ vulnclaw doctor  # 检查环境
🦞 VulnClaw 环境检查
  Python: 3.14.4
  Node.js: v24.14.1
  npx: 已安装
  nmap: 已安装

LLM 配置:
  Provider: minimax
  API Key: 已设置
  Model: MiniMax-M2.7

MCP 服务:
  fetch: 已启用 [P0]
  memory: 已启用 [P0]
  chrome-devtools: 已启用 [P0]
  burp: 已启用 [P0]
  frida-mcp: 已启用 [P1]
  jadx: 已启用 [P1]

✅ 环境就绪,运行 vulnclaw 开始
```

---

## 自主渗透工作流

LLM Agent 驂动的多轮渗透循环,发现即利用,利用即报告

### 信息收集
端口扫描、指纹识别
目录枚举、指纹分析

### 漏洞发现
CVE 匹配、Web 漏洞
配置缺陷、逻辑漏洞

### 漏洞利用
PoC 构造、WAF 绕过
命令执行、权限获取

### 后渗透
内网探测、横向移动
凭据窃取、权限维持

### 报告生成
Markdown 结构化报告
修复建议、风险评级

### PoC 输出
Python PoC 脚本
可复现漏洞验证

LLM Agent 自主循环 · 自动阶段切换 · Ctrl+C 中断

---

## 技术生态

兼容所有 OpenAI 协议模型,集成主流安全工具

- 13+ LLM Provider
- 12+ MCP 服务
- 21+ 渗透 Skill
- 29+ 编解码工具
- 180+ 参考文档
- 50+ 测试用例

### 支持的 LLM Provider

- OpenAI
- MiniMax
- DeepSeek
- 智谱 GLM
- Moonshot
- 通义千问
- SiliconFlow
- 豆包
- 百川
- 阶跃星辰
- 商汤
- 零一万物
- 自定义

---

## 实时统计

- 1025 GitHub Stars
- 142 GitHub Forks

---

## 加入社区

### 社区交流群

欢迎加入讨论分享,获取最新产品动态与使用技巧

QQ 群号：954402631

### 开发者群聊

加入我们,参与开源贡献与技术深度探讨

QQ 群号：1065858551

---

## 项目信息

AI 驂动的渗透测试 CLI 工具。

说人话,打漏洞。让每一次渗透都有章可循。

**作者**：网络小白_Uncle城

- Python 3.10+
- MIT License
- Open Source

---

**文档来源**: VulnClaw 官方网站 (https://unclecheng-li.github.io/vulnclaw.com/)
**最后更新**: 2026-07-02