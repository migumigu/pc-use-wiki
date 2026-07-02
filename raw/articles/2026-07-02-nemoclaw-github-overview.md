---
source_id: auto-20260702-nemo1
title: NemoClaw GitHub 项目概览 — NVIDIA 企业级 Agent 安全运行时
url: https://github.com/NVIDIA/NemoClaw
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: medium
---

# NemoClaw — NVIDIA 企业级 AI Agent 安全运行时

## 项目概览

**NemoClaw** 是 NVIDIA 于 2026 年 3 月 16 日 GTC 大会上开源发布的企业级 AI Agent 安全运行时项目。它定位为 OpenClaw 的"安全外壳"，通过 OpenShell 沙箱运行时将 AI Agent 限制在内核级隔离环境中。

## 核心数据

| 指标 | 数值 |
|------|------|
| ⭐ Stars | 13,900 - 14,554 |
| Forks | 约 1,300 - 1,418 |
| Commits | 266 |
| 贡献者 | 24 人 |
| 开放 Issue | 约 105 个 |
| 开放 PR | 约 173 个 |
| 许可协议 | Apache 2.0 |
| 创建日期 | 2026-03-15 |

## 技术栈

- **主要语言**：JavaScript (39.8%)、Shell (29.0%)、TypeScript (27.0%)、Python (3.4%)
- **运行时依赖**：Node.js 20+、npm 10+
- **Python 侧包管理**：uv
- **测试框架**：Vitest
- **代码质量**：ESLint、Prettier、commitlint

## 核心定位

> NemoClaw 是 OpenClaw 的安全外壳，不是它的替代品。

它不编排 Agent 的行为逻辑，而是把 Agent 关进一个内核级的安全沙箱里运行。所有安全约束由独立进程管理，Agent 无法访问、修改或终止这个安全进程。

## 两层架构

### 第一层：TypeScript CLI 插件
- 用 Commander.js 构建
- 在 OpenClaw CLI 下注册子命令
- 子命令：onboard、connect、status、logs
- 负责解析用户指令、拉取蓝图、交付出执行

### 第二层：Python Blueprint
- 带版本号的 Python 产物
- 四阶段执行：Resolve → Verify → Plan → Apply
- 包含声明式 YAML 策略文件
- 定义网络出口和文件系统访问规则

## 四层安全模型

1. **网络隔离**：netns（网络命名空间），默认 deny-all，策略 YAML 控制白名单
2. **文件系统隔离**：Landlock，限制在 /sandbox 和 /tmp，敏感路径默认拒绝
3. **进程隔离**：seccomp，阻止特权提升和危险系统调用
4. **推理拦截**：OpenShell 网关拦截所有模型 API 调用

## 系统要求

- **最低**：4 vCPU、8GB 内存、20GB 磁盘
- **推荐**：4+ vCPU、16GB 内存、40GB 磁盘
- **Linux**：Ubuntu 22.04 LTS+，原生支持
- **macOS**：需要 Colima 或 Docker Desktop
- **Windows**：需要 WSL + Docker Desktop

## 安装方式

```bash
# 一键安装
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash

# npm 安装
npm install -g @openclaw/nemoclaw
```

## 生态归属

NemoClaw 是 NVIDIA Agent Toolkit 平台的一部分，该平台还包括：
- **OpenShell**：安全运行时（沙箱引擎）
- **AI-Q**：Agent 搜索参考蓝图
- **Nemotron 模型族**：从 4B 到 120B 的 MoE 模型

## 合作伙伴

首发合作方包括：Box、Cisco AI Defense、CrowdStrike、LangChain。

Nemotron Coalition 联盟成员：Mistral AI、Perplexity、Cursor、LangChain 等八家 AI 实验室。
