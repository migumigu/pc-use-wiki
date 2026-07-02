---
tags: [OpenShell, 沙箱, NVIDIA, NemoClaw, Landlock, seccomp, netns]
created: 2026-07-02
updated: 2026-07-02
sources:
  - auto-20260702-nemo1
  - auto-20260702-nemo2
  - auto-20260702-nemo3
  - auto-20260702-nemo4
---

# OpenShell — NVIDIA AI Agent 安全运行时

> NVIDIA 开发的 AI Agent 内核级安全沙箱运行时，Landlock + seccomp + netns 三重隔离，NemoClaw 的底层引擎

<!-- confidence: MEDIUM — 基于 NemoClaw 相关文章的间接描述，官方文档未直接验证 -->

## 基本信息

| 属性 | 值 |
|------|-----|
| **项目名** | OpenShell |
| **开发方** | NVIDIA |
| **定位** | AI Agent 安全沙箱运行时 |
| **隔离技术** | Landlock + seccomp + netns |
| **上层项目** | NemoClaw（OpenClaw 安全插件） |
| **生态归属** | NVIDIA Agent Toolkit |

## 核心定位

OpenShell 是 **NemoClaw 的底层沙箱引擎**，提供内核级的进程隔离和安全约束执行环境。

它不是一个独立的 Agent 框架，而是为 Agent 运行时提供安全执行边界的基础设施。

<!-- confidence: MEDIUM — 从 NemoClaw 架构描述中间接推断 -->

## 三层内核级隔离

OpenShell 不是在虚拟机里再跑系统，而是直接在 Linux 内核层做文章：

### 1. Landlock — 文件系统隔离

- Linux 5.13+ 内核自带安全模块
- 文件级访问控制（"文件级防火墙"）
- 默认 Agent 只能看见 /sandbox 和 /tmp 两个目录
- 其他系统路径对 Agent 完全不可见
- **限制**：创建时锁定，不支持热加载

### 2. seccomp — 系统调用过滤

- Secure Computing Mode
- 内核级系统调用白名单/黑名单
- 网络连接、shell 命令执行、摄像头访问都得过安检
- 防止提示词注入后 Agent 做出格的事
- **限制**：创建时锁定，不支持热加载

### 3. netns — 网络命名空间隔离

- Network Namespace
- 每个沙箱有独立的虚拟网卡，与宿主机网络逻辑隔离
- 配合策略引擎精确控制 Agent 能访问哪些外网 API
- 默认 deny-all，白名单模式
- **支持热加载**：策略更新无需重启沙箱

## 推理网关

OpenShell 内置推理拦截网关：

```
Agent → OpenShell 网关 → 推理提供者
```

- 拦截所有模型 API 调用
- 支持 Privacy Router（本地/云端路由）
- 每次调用记录供审计
- **支持热加载**

## 与 NemoClaw 的关系

- **OpenShell**：底层沙箱运行时引擎
- **NemoClaw**：OpenClaw 的安全外壳插件，调用 OpenShell 提供的能力

NemoClaw 通过 Blueprint 机制，将声明式 YAML 策略翻译为 OpenShell 资源（网关、提供者、沙箱、推理路由、策略）并落地执行。

## 平台支持

| 平台 | 支持程度 | 备注 |
|------|----------|------|
| Linux (Ubuntu 22.04+) | 原生支持 | Landlock/seccomp/netns 全部原生 |
| macOS | 模拟支持 | 通过 App Sandbox 模拟，隔离强度较弱 |
| Windows | WSL + Docker | 需要 WSL 环境 |

## 相关概念对比

| 隔离技术 | 隔离层级 | 性能开销 | 安全强度 |
|----------|----------|----------|----------|
| Docker 容器 | 进程级（共享内核） | 低 | 中 |
| gVisor / Kata | 内核级（用户态内核/轻量VM） | 中 | 高 |
| Firecracker microVM | 硬件级（KVM） | 中低 | 很高 |
| OpenShell (Landlock+seccomp+netns) | 内核原语级 | 很低 | 高（内核强制） |

## 相关页面

- [[NemoClaw]]
- [[OpenClaw]]
- [[E2B]]
- [[Agent-Sandbox]]
- [[CubeSandbox]]
- [[MCP]]
