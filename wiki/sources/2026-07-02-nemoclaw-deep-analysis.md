---
tags: [素材摘要, NemoClaw, NVIDIA, 安全运行时, 架构分析, 沙箱]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-nemo2]
---

# NemoClaw 深度技术分析

> NVIDIA 为自主 AI Agent 构建的安全运行时，进程外隔离 + 内核级策略执行，填补企业级 Agent 安全空白

<!-- confidence: MEDIUM — 第三方深度技术分析文章 -->

## 核心内容

### 背景：OpenClaw 的安全困境
- OpenClaw 安全检查在 Agent 进程内部（in-process），自己约束自己
- 已发生安全事件：CVE-2026-25253（17,500实例 RCE）、ClawHavoc 供应链攻击（9,000+实例）
- 根本设计缺陷：违反最小特权原则

### 两层架构详解
- TypeScript CLI 插件：Commander.js 构建，子命令 onboard/connect/status/logs
- Python Blueprint：四阶段工作流 Resolve → Verify → Plan → Apply
- 底层：Docker 容器内的 K3s Kubernetes 集群（单一来源，待验证）

### 四层内核级安全模型
1. **网络隔离**：netns，默认 deny-all，策略 YAML 白名单，支持热加载
2. **文件系统隔离**：Landlock，限制 /sandbox 和 /tmp，创建时锁定
3. **进程隔离**：seccomp，白名单二进制，创建时锁定
4. **推理拦截**：OpenShell 网关，支持热加载

### Privacy Router
- 默认模型：Nemotron 3 Super 120B（MoE，每 token 激活约 12B）
- 含 PII 的请求 → 本地模型，复杂任务 → 云端模型
- 路由决策由用户策略驱动，不受 Agent 偏好影响
- 本地推理（Ollama/vLLM）仍在实验阶段
- 完整能力需 NVIDIA GPU，基础功能硬件无关

### 产业观察
- NVIDIA 五年投入 260 亿美元开源生态
- Nemotron Coalition 联盟八家成员
- 趋势：Agent 安全从应用层下沉到基础设施层

## 关键观点

> "进程外安全执行"是有价值的架构思路 — 违反最小特权原则的 in-process 安全模型从根上就是错的

> Agent 安全正在从应用层下沉到基础设施层，就像十年前容器安全的演进路径

## 相关页面

- [[NemoClaw]] — 实体页
- [[OpenClaw]] — 实体页
- [[MCP]] — 实体页
- [[Agent-Sandbox]] — 实体页
- [[E2B]] — 实体页
