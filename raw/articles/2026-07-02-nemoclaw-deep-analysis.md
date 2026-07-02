---
source_id: auto-20260702-nemo2
title: NemoClaw 深度技术分析 — NVIDIA 为自主 AI Agent 构建的安全运行时
url: https://netmag.tw/2026/03/17/nvidia-launches-openclaw-platform-with-privacy-controls
source_type: tech_blog
tier: 2
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: medium
---

# NemoClaw 深度技术分析

> NVIDIA 为自主 AI Agent 构建的安全运行时
> 发布日期：2026年3月16日 GTC 大会
> 上线一周 GitHub Stars 约 13,900

## 为什么需要 NemoClaw？OpenClaw 的安全困境

OpenClaw 作为开源 AI Agent 平台增长惊人，GitHub Star 突破 32 万，ClawHub 上有 5000+ 技能插件。但伴随爆发式增长的是严重安全事件：

- **CVE-2026-25253**：约 17,500 个实例存在远程代码执行风险
- **Bitdefender 报告**：ClawHub 上发现 824+ 恶意技能插件
- **ClawHavoc 供应链攻击**：波及 9,000+ 安装实例

根本原因：OpenClaw 的安全检查运行在 Agent 进程内部（in-process），Agent 自己负责约束自己。一旦 Agent 被攻破，完全有能力绕过自己的安全规则。

NemoClaw 的设计出发点：把安全执行的边界彻底移到 Agent 进程之外。

## 两层架构详解

### TypeScript CLI 插件
- 代码位置：nemoclaw/ 目录
- Commander.js 构建
- 子命令：
  - `nemoclaw onboard` — 交互式设置向导
  - `nemoclaw <name> connect` — 连接沙箱 Shell
  - `nemoclaw <name> status` — 健康检查
  - `nemoclaw <name> logs` — 日志流
- 结构：commands/（CLI处理器）+ blueprint/（蓝图解析、拉取、摘要验证、子进程执行）

### Python Blueprint
- 代码位置：nemoclaw-blueprint/ 目录
- 带版本号的 Python 产物
- 四阶段工作流：
  1. **Resolve**：定位蓝图产物，检查版本兼容性（min_openshell_version、min_openclaw_version）
  2. **Verify**：校验产物摘要值（digest），防篡改
  3. **Plan**：确定需要创建/更新的 OpenShell 资源（网关、提供者、沙箱、推理路由、策略）
  4. **Apply**：调用 openshell CLI 落地资源

### 预设集成
已有 Discord、Slack、Telegram、Jira、Docker Hub、Hugging Face、npm、PyPI、Outlook 等平台的集成预设。

### 底层实现
所有组件运行在 Docker 容器内的 K3s Kubernetes 集群中，不需单独安装 K8s。沙箱镜像压缩后约 2.4 GB。

## 四层内核级安全模型

与应用层软限制不同，NemoClaw 使用 Linux 内核原语做隔离和约束：

| 安全层 | 技术 | 策略 | 热加载 |
|--------|------|------|--------|
| 网络隔离 | netns | 默认 deny-all，策略 YAML 白名单 | ✅ 支持 |
| 文件系统隔离 | Landlock | 限制 /sandbox 和 /tmp，敏感路径默认拒绝 | ❌ 创建时锁定 |
| 进程隔离 | seccomp | 白名单二进制（node, python3），危险工具禁止 | ❌ 创建时锁定 |
| 推理拦截 | OpenShell 网关 | Agent → 网关 → 推理提供者 | ✅ 支持 |

**核心原则**：策略执行全部运行在 Agent 进程之外。

当 Agent 触发安全约束时，它可以"看到"被拒绝，甚至推理出原因并建议修改策略——但最终审批权在人手里。

## 推理路由与 Privacy Router

- **默认模型**：Nemotron 3 Super 120B（MoE 架构，120B 参数，每 token 激活约 12B）
- **默认推理端点**：NVIDIA 云端 API（build.nvidia.com）

**Privacy Router 功能**：
- 含 PII/私有代码/内部文档的请求 → 本地 Nemotron 模型
- 复杂任务 → 云端前沿模型
- 路由决策由用户策略驱动，不受 Agent 偏好影响
- 每次路由决策记录供审计

**当前状态**：本地推理选项（Ollama、vLLM）仍处于实验阶段。完整 Privacy Router 能力需要 NVIDIA GPU。基础功能硬件无关（AMD、Intel、纯 CPU 均可）。

## 与其他 Agent 框架的关系

| 维度 | NemoClaw / OpenShell | LangChain / CrewAI / AutoGen |
|------|---------------------|------------------------------|
| 安全执行方式 | 进程外，内核级 | 进程内，应用级 |
| 默认策略 | 全部拒绝，按需开放 | 默认开放，按需限制 |
| 沙箱支持 | 完整容器 + Landlock + seccomp | 无内置沙箱 |
| 网络管控 | 策略驱动出口控制 + 人工审批 | 无原生隔离 |
| 审计日志 | 内核级，防篡改 | 应用日志 |

**重要限制**：NemoClaw 目前与 OpenClaw 紧密耦合，是 OpenClaw CLI 的插件，不是通用的 Agent 沙箱工具。

**相关项目**：NVIDIA NeMo Agent Toolkit — 提供 Agent 性能加速原语，支持 LangChain、CrewAI、Agno 等框架，支持 MCP 和 A2A 协议。

## 产业背景

- NVIDIA 承诺未来五年向开源生态投入 260 亿美元
- Nemotron Coalition 联盟：Mistral AI、Perplexity、Cursor、LangChain 等八家
- NVIDIA 的策略："卖铲子"——从模型到运行时到安全层的完整工具链

## 开发者观察

1. **"进程外安全执行"是有价值的架构思路** — 违反最小特权原则的 in-process 安全模型从根上就是错的
2. **Privacy Router 对合规行业有明确吸引力** — 但本地推理仍在实验阶段
3. **Alpha 状态的限制** — 无第三方安全审计、无生产实战验证、沙箱开销和策略执行延迟无公开性能数据
4. **生态锁定担忧** — NVIDIA 做开源的目的终归是生态锁定

## 趋势判断

> Agent 安全正在从应用层下沉到基础设施层。

就像十年前容器安全从应用配置演变为 Kubernetes 原生能力一样，Agent 安全也在走类似的路。进程外隔离和内核级策略执行很可能会成为行业标准。
