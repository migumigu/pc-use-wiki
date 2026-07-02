---
tags: [素材摘要, NemoClaw, NVIDIA, OpenShell, 沙箱, GitHub]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-nemo1]
---

# NemoClaw GitHub 项目概览

> NVIDIA GTC 2026 发布的企业级 AI Agent 安全运行时，OpenClaw 的安全外壳，OpenShell 内核级沙箱

<!-- confidence: MEDIUM — 基于 GitHub 概览和第三方报道 -->

## 核心内容

- **发布方**：NVIDIA，2026年3月 GTC 大会
- **GitHub Stars**：13,900 - 14,554（不同来源有差异）
- **开源协议**：Apache 2.0（待确认）
- **技术栈**：JavaScript 39.8%、Shell 29.0%、TypeScript 27.0%、Python 3.4%
- **定位**：OpenClaw 的安全外壳，不是替代品
- **核心机制**：进程外安全执行，Agent 无法修改或终止安全进程
- **两层架构**：TypeScript CLI 插件 + Python Blueprint
- **四层安全模型**：netns 网络隔离 + Landlock 文件系统 + seccomp 进程 + 推理拦截网关
- **系统要求**：4 vCPU / 8GB 内存 / 20GB 磁盘起，Ubuntu 22.04+ 原生支持
- **生态归属**：NVIDIA Agent Toolkit 平台的一部分

## 关键数据点

| 指标 | 数值 |
|------|------|
| Stars | 13,900 - 14,554 |
| Forks | 约 1,300 - 1,418 |
| Commits | 266 |
| 贡献者 | 24 人 |
| 沙箱镜像大小 | 约 2.4 GB（压缩后） |

## 相关页面

- [[NemoClaw]] — 实体页
- [[OpenClaw]] — 实体页
- [[OpenShell]] — 实体页
- [[E2B]] — 实体页
- [[Agent-Sandbox]] — 实体页
