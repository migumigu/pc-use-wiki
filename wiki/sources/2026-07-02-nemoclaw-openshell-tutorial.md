---
tags: [素材摘要, NemoClaw, OpenShell, 沙箱教程, Landlock, seccomp, netns]
created: 2026-07-02
updated: 2026-07-02
sources: [auto-20260702-nemo3]
---

# NemoClaw OpenShell 三重沙箱隔离开发教程

> 英伟达 GTC 2026 发布，三重内核级沙箱隔离，硬件无关，YAML 声明式策略

<!-- confidence: MEDIUM — 第三方技术教程 -->

## 核心内容

### OpenShell 三重沙箱详解
1. **Landlock**：Linux 5.13+ 内核安全模块，文件级防火墙，默认只能访问 /sandbox 和 /tmp
2. **seccomp**：系统调用过滤，网络连接/shell命令/摄像头访问都要过安检
3. **netns**：网络命名空间，每个沙箱独立虚拟网卡，配合 Privacy Router 控制外网访问

### 安装方式
- 一键安装：`curl -fsSL https://nvidia.com/nemoclaw.sh | bash`
- 自动检测 Node.js，安装 OpenShell，拉取 Nemotron 配置模板
- 交互式向导：沙箱名字、NVIDIA API Key、网络策略

### YAML 声明式策略示例
- 配置文件：`openclaw-sandbox.yaml`
- 支持文件系统读写控制、网络出口白名单、推理配置
- 策略热重载：`nemoclaw <name> apply -f <yaml>`

### C# 项目对接示例
- 暴露本地 HTTP 接口（默认 localhost:8585）
- Bearer Token 认证
- `/v1/agent/chat` 端点

### 生产环境避坑指南
1. 本地推理吃显存（至少 8GB 显存或 24GB 内存）
2. macOS Landlock 是模拟实现，不如 Linux 原生
3. 技能包供应链安全，建议开启签名验证
4. 审计日志默认沙箱内，需外置收集

## 关键观点

> "没有沙箱策略的 Agent，就像没有刹车的特斯拉"

> NemoClaw 的出现标志着 AI Agent 从"野生野长"的玩具，正式迈向"可治理"的生产工具

## 相关页面

- [[NemoClaw]] — 实体页
- [[OpenShell]] — 实体页
- [[OpenClaw]] — 实体页
- [[Agent-Sandbox]] — 实体页
- [[PowerShell]] — 实体页
