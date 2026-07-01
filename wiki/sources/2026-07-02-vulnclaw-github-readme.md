---
tags: [素材摘要, 渗透测试, GitHub-README]
created: 2026-07-02
updated: 2026-07-02
sources: []
---

# VulnClaw GitHub README

> AI 驱动的渗透测试 CLI 工具，说人话，打漏洞

<!-- confidence: EXTRACTED -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **来源** | GitHub README (https://github.com/Unclecheng-li/VulnClaw) |
| **收集日期** | 2026-07-02 |
| **Stars** | 1.5K+ |
| **许可证** | MIT |

## 核心定位

基于 LLM Agent + MCP 工具链 + 渗透 Skill 编排，自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程。

<!-- confidence: EXTRACTED -->

## 核心架构特性

### 目标驱动求解引擎（默认）
- 以「目标达成 / 探索前沿耗尽 / 安全预算」为终止条件
- 自动收敛，不再空跑验证轮

### 黑板图状态空间搜索
| 原语 | 含义 |
|------|------|
| **Fact** | 已被真实工具输出证实的客观事实 |
| **Intent** | 声明的探索方向（尚未执行） |

### 证据级反幻觉闸门
- 声称的 flag 必须在真实工具输出里逐字符出现
- 杜绝凭空编造 flag 的假胜利

## MCP 服务列表

| MCP 服务 | 功能 |
|----------|------|
| `fetch` | HTTP 请求、指纹识别 |
| `memory` | 内存管理、状态持久化 |
| `chrome-devtools` | 浏览器自动化操控 |
| `burp` | Burp Suite 集成 |

## 内置 Skill（21 个）

### 核心 Skill（7 个）
- pentest-flow, recon, vuln-discovery, exploitation, post-exploitation, reporting, waf-bypass

### 专项 Skill（14 个）
- ctf-web, ctf-crypto, ctf-misc, osint-recon, sql-injection, xss-attack, file-upload...

## LLM Provider 支持

13+ Provider：OpenAI, MiniMax, DeepSeek, 智谱, Moonshot, 千问, SiliconFlow, 豆包, 百川...

## CLI 命令

| 命令 | 说明 |
|------|------|
| `vulnclaw run <target>` | 一键全流程渗透 |
| `vulnclaw solve <target>` | 目标驱动求解 |
| `vulnclaw recon <target>` | 仅信息收集 |
| `vulnclaw config provider <name>` | 切换 LLM |

## 安全声明

⚠️ **仅用于已授权的安全测试**

## 相关页面

- [[VulnClaw]] — 实体页
- [[MCP]] — 协议层
- [[chrome-devtools-mcp]] — 浏览器自动化