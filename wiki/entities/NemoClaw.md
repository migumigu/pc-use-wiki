---
tags: [NemoClaw, OpenShell, 沙箱, Agent安全, NVIDIA, 企业级Agent]
created: 2026-07-02
updated: 2026-07-02
sources:
  - auto-20260702-nemo1
  - auto-20260702-nemo2
  - auto-20260702-nemo3
  - auto-20260702-nemo4
---

# NemoClaw — NVIDIA 企业级 AI Agent 安全运行时

> NVIDIA GTC 2026 发布的 OpenClaw 安全外壳，通过 OpenShell 内核级沙箱（Landlock + seccomp + netns）实现进程外安全执行，填补企业级 Agent 部署的安全合规空白

<!-- confidence: MEDIUM — 基于第三方技术博客和 GitHub 概览，官方文档未直接验证 -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **项目名** | NemoClaw |
| **发布方** | NVIDIA |
| **发布时间** | 2026-03-16（GTC 2026） |
| **GitHub Stars** | 13,900 - 14,554 <!-- confidence: UNVERIFIED — 不同来源数字不一致 --> |
| **Forks** | 约 1,300 - 1,418 |
| **开源协议** | Apache 2.0 <!-- confidence: UNVERIFIED — 单一来源，待官方确认 --> |
| **主要语言** | JavaScript (39.8%)、Shell (29.0%)、TypeScript (27.0%)、Python (3.4%) |
| **运行时依赖** | Node.js 20+、npm 10+ |
| **Python 侧** | uv 包管理 |
| **项目状态** | Alpha / 早期预览版 <!-- confidence: INFERRED — 多个来源提到 "Expect rough edges" --> |
| **GitHub 仓库** | https://github.com/NVIDIA/NemoClaw |

## 核心定位

NemoClaw 是 **OpenClaw 的安全外壳，不是它的替代品**。

它不编排 Agent 的行为逻辑，而是把 Agent 关进一个**内核级的安全沙箱**里运行。所有安全约束由独立进程管理，Agent 无法访问、修改或终止这个安全进程。

**核心设计原则**：安全执行的边界彻底移到 Agent 进程之外。

> 背景：OpenClaw 的安全检查运行在 Agent 进程内部（in-process），Agent 自己负责约束自己。一旦 Agent 被攻破，完全有能力绕过自己的安全规则。已发生的安全事件包括 CVE-2026-25253（17,500 个实例 RCE 风险）、ClawHavoc 供应链攻击（波及 9,000+ 实例）等。
> <!-- confidence: MEDIUM — 来自第三方技术分析文章 -->

## 两层架构

### 第一层：TypeScript CLI 插件

- 代码位置：`nemoclaw/` 目录
- 用 Commander.js 构建
- 在 OpenClaw CLI 下注册子命令
- **子命令**：
  - `nemoclaw onboard` — 交互式设置向导
  - `nemoclaw <name> connect` — 连接沙箱 Shell
  - `nemoclaw <name> status` — 健康检查
  - `nemoclaw <name> logs` — 日志流
- 结构：`commands/`（CLI处理器）+ `blueprint/`（蓝图解析、拉取、摘要验证、子进程执行）

### 第二层：Python Blueprint

- 代码位置：`nemoclaw-blueprint/` 目录
- 带版本号的 Python 产物
- **四阶段工作流** <!-- confidence: LOW — 仅单一来源描述，待源码验证 -->：
  1. **Resolve**：定位蓝图产物，检查版本兼容性（`min_openshell_version`、`min_openclaw_version`）
  2. **Verify**：校验产物摘要值（digest），防篡改
  3. **Plan**：确定需要创建/更新的 OpenShell 资源（网关、提供者、沙箱、推理路由、策略）
  4. **Apply**：调用 openshell CLI 落地资源

### 底层实现

所有组件运行在 **Docker 容器内的 K3s Kubernetes 集群**中，不需单独安装 K8s。沙箱镜像压缩后约 **2.4 GB**。

<!-- confidence: LOW — 仅单一深度技术分析文章提到，缺乏独立验证，Alpha 阶段实现可能变更 -->

## 四层内核级安全模型

与应用层软限制不同，NemoClaw 使用 **Linux 内核原语**做隔离和约束：

| 安全层 | 技术 | 策略 | 热加载 |
|--------|------|------|--------|
| 网络隔离 | netns（网络命名空间） | 默认 deny-all，策略 YAML 白名单 | ✅ 支持 |
| 文件系统隔离 | Landlock（Linux 5.13+ 内核安全模块） | 限制在 /sandbox 和 /tmp，敏感路径默认拒绝 | ❌ 创建时锁定 |
| 进程隔离 | seccomp（Secure Computing Mode） | 白名单二进制（node, python3），危险工具禁止 | ❌ 创建时锁定 |
| 推理拦截 | OpenShell 网关 | Agent → 网关 → 推理提供者 | ✅ 支持 |

**核心原则**：策略执行全部运行在 Agent 进程之外。

当 Agent 触发安全约束时，它可以"看到"被拒绝，甚至推理出原因并建议修改策略——但最终审批权在人手里。

### 三重沙箱类比

1. **Landlock**：文件系统的"紧箍咒" — 给每个房间装门禁卡，Agent 只能进客厅
2. **seccomp**：系统调用的"黑白名单" — 内核级安检门
3. **netns**：网络隔离的"单间" — 关进有单线电话的隔间，只能打允许的号码

> 三层组合效果：就算 Agent 内部的技能包被恶意篡改了，也只能在笼子里折腾，蹦不出沙箱边界。

<!-- confidence: MEDIUM — 综合多篇技术博客 -->

## 声明式策略配置

项目目录下生成 `openclaw-sandbox.yaml`：

```yaml
version: "1.0"
sandbox:
  name: "my-coding-assistant"
filesystem:
  read_only: ["/sandbox/code", "/sandbox/docs"]
  read_write: ["/sandbox/output", "/tmp"]
network:
  egress:
    allow:
      - "api.github.com:443"
      - "build.nvidia.com:443"
    deny:
      - "*:0-1024"  # 禁止访问特权端口
inference:
  provider: "nvidia/cloud"
  model: "nemotron-3-super-120b-a12b"
  temperature: 0.2
```

策略热重载：
```bash
nemoclaw my-coding-assistant apply -f openclaw-sandbox.yaml
```

不用重启 Agent，新约束立即生效。

<!-- confidence: MEDIUM — 来自开发教程文章 -->

## 推理路由与 Privacy Router

- **默认模型**：Nemotron 3 Super 120B（MoE 架构，120B 参数，每 token 激活约 12B）
- **默认推理端点**：NVIDIA 云端 API（build.nvidia.com）

**Privacy Router 功能**：
- 含 PII/私有代码/内部文档的请求 → 本地 Nemotron 模型
- 复杂任务 → 云端前沿模型
- 路由决策由用户策略驱动，不受 Agent 偏好影响
- 每次路由决策记录供审计

**当前状态**：
- 本地推理选项（Ollama、vLLM）仍处于**实验阶段**
- 完整 Privacy Router 能力需要 **NVIDIA GPU**
- 基础功能**硬件无关**（AMD、Intel、纯 CPU 均可）

<!-- confidence: MEDIUM — 来自深度技术分析 -->

## 系统要求与安装

### 系统要求

| 配置 | 最低 | 推荐 |
|------|------|------|
| CPU | 4 vCPU | 4+ vCPU |
| 内存 | 8 GB | 16 GB |
| 磁盘 | 20 GB | 40 GB |
| Linux | Ubuntu 22.04 LTS+（原生支持） | - |
| macOS | 需要 Colima 或 Docker Desktop | - |
| Windows | 需要 WSL + Docker Desktop | - |

### 安装方式

```bash
# 一键安装
curl -fsSL https://www.nvidia.com/nemoclaw.sh | bash

# npm 安装
npm install -g @openclaw/nemoclaw
```

安装向导自动完成：
- 检测 Node.js 环境
- 安装 OpenShell 运行时
- 拉取 Nemotron 3 Super 120B 配置模板
- 交互式设置（沙箱名字、NVIDIA API Key、网络策略）

<!-- confidence: MEDIUM — 来自开发教程和项目概览 -->

## 生态归属与合作伙伴

NemoClaw 是 **NVIDIA Agent Toolkit** 平台的一部分：

- **OpenShell**：安全运行时（沙箱引擎）
- **NemoClaw**：OpenClaw 安全插件
- **AI-Q**：Agent 搜索参考蓝图
- **Nemotron 模型族**：从 4B 到 120B 的 MoE 模型

**首发合作方**：Box、Cisco AI Defense、CrowdStrike、LangChain

**Nemotron Coalition 联盟**：Mistral AI、Perplexity、Cursor、LangChain 等八家 AI 实验室

**产业背景**：NVIDIA 承诺未来五年向开源生态投入 260 亿美元

<!-- confidence: MEDIUM — 来自多篇报道 -->

## 预设集成

已有 Discord、Slack、Telegram、Jira、Docker Hub、Hugging Face、npm、PyPI、Outlook 等平台的集成预设。

## 与其他 Agent 框架的对比

| 维度 | NemoClaw / OpenShell | LangChain / CrewAI / AutoGen |
|------|---------------------|------------------------------|
| 安全执行方式 | 进程外，内核级 | 进程内，应用级 |
| 默认策略 | 全部拒绝，按需开放 | 默认开放，按需限制 |
| 沙箱支持 | 完整容器 + Landlock + seccomp | 无内置沙箱 |
| 网络管控 | 策略驱动出口控制 + 人工审批 | 无原生隔离 |
| 审计日志 | 内核级，防篡改 | 应用日志 |

**重要限制**：NemoClaw 目前与 OpenClaw 紧密耦合，是 OpenClaw CLI 的插件，**不是通用的 Agent 沙箱工具**。

<!-- confidence: MEDIUM — 来自深度技术分析 -->

## 应用场景

### 金融行业智能客服
- 挑战：客户数据敏感，AI 交互需要严格审计
- 方案：NemoClaw + OpenShell 提供隔离环境，所有对话可追溯

### 医疗影像 AI 辅助诊断
- 挑战：模型推理需要高性能 GPU，同时保证数据不出域
- 方案：本地部署 NemoClaw，托管推理服务处理影像分析

### 多租户 SaaS 平台
- 挑战：不同客户的 AI 任务需要资源隔离
- 方案：每个租户独立的 OpenShell 沙箱实例

<!-- confidence: LOW — 来自营销类文章，无实际案例验证 -->

## 已知局限与风险

> 目前还是 Alpha/早期预览版，"Expect rough edges"

1. **本地推理吃显存**：Nemotron 3 Super 120B 需至少 8GB 显存（或 24GB 内存 CPU offload），笔记本核显建议改用云推理模式
2. **macOS Landlock 支持有限**：macOS 上是模拟实现（通过 App Sandbox），不如 Linux 原生硬核 <!-- confidence: LOW — 仅教程提到，待官方文档确认 -->
3. **技能包供应链安全**：能装 OpenClaw 社区技能包，但第三方技能代码质量参差不齐，建议开启技能签名验证
4. **审计日志持久化**：默认日志存在沙箱内部，重启就丢，生产环境需配外置日志收集
5. **无第三方安全审计**：Alpha 状态，无生产实战验证
6. **沙箱开销和性能数据缺失**：无公开的策略执行延迟和性能基准数据
7. **生态锁定担忧**：NVIDIA 做开源的目的终归是生态锁定

<!-- confidence: MEDIUM — 综合多篇技术分析 -->

## 趋势判断

> Agent 安全正在从应用层下沉到基础设施层。

就像十年前容器安全从应用配置演变为 Kubernetes 原生能力一样，Agent 安全也在走类似的路。进程外隔离和内核级策略执行很可能会成为行业标准。

## 相关页面

- [[OpenClaw]]
- [[E2B]]
- [[Agent-Sandbox]]
- [[CubeSandbox]]
- [[OpenShell]]
- [[MCP]]
