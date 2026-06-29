---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-cua-sandbox-setup.md
images: 0
image_paths: []
---

# CUA Sandbox 设置指南

> CUA 提供多种沙箱选项供 computer-use agents 使用，包括云端沙箱、Docker、QEMU VM、macOS 和 Windows Sandbox。

## 基本信息

- **来源类型**：official_docs（官方文档）
- **原文位置**：raw/articles/2026-06-28-cua-sandbox-setup.md
- **消化日期**：2026-06-28
- **来源URL**：https://cua.ai/docs/cua/guide/get-started/set-up-sandbox

## 核心观点

1. **Cloud Sandbox (cua.ai)**：
   - 提供云端 Linux (Ubuntu)、Windows、macOS 沙箱
   - 需要在 cua.ai 创建 API Key
   - 支持 CLI 和 Web Dashboard 管理

2. **Docker (Linux)**：
   - 本地 Linux 桌面环境
   - XFCE：轻量级，推荐大多数场景
   - KASM：全功能 Ubuntu 桌面
   - 获取方式：`docker pull trycua/cua-xfce:latest`

3. **QEMU VM**：
   - 完整 Linux、Windows、Android 虚拟机
   - Linux：需要准备 golden image
   - Windows：需要 Windows 11 ISO
   - Android：可直接启动

4. **macOS Sandbox**：
   - 仅 macOS 主机
   - 使用 Lume CLI

5. **Windows Sandbox**：
   - 仅 Windows 10 Pro/Enterprise 或 Windows 11

6. **CLI 安装**：
   - macOS/Linux：`curl -LsSf https://cua.ai/cli/install.sh | sh`
   - Windows：`irm https://cua.ai/cli/install.ps1 | iex`

## 关键概念

- [[Sandbox]] — 隔离环境，AI Agent 在其中操作不影响真实系统
- [[Docker]] — 容器化隔离环境
- [[Lume]] — macOS 虚拟化工具，CUA 生态组成部分
- [[QEMU]] — 虚拟机管理工具
- [[KASM]] — Docker 沙箱选项之一

## 与其他素材的关联

- 与 [[CUA GitHub README]] 的关系：本文档是 CUA Sandbox 组件的详细配置指南
- 与 [[CUA 深度解析]] 的关系：深度解析报告引用了沙箱相关内容
- 与 [[Computer-Use-深度报告]] 的关系：Docker 容器化方案在 Computer Use 中的应用

## 原文精彩摘录

> CUA 提供多种沙箱选项供 computer-use agents 使用：

```bash
# Docker 方式
docker pull trycua/cua-xfce:latest
```

> 适用于任何 OS 的 Agent 就绪沙箱。支持的平台：Linux container/VM, macOS, Windows, Android, BYOI

## 相关页面

- [[Sandbox]]
- [[Docker]]
- [[Lume]]
- [[CUA GitHub README]]
- [[CUA 深度解析]]
