---
source_id: auto-2026-06-28-cua-sandbox-setup
title: CUA Sandbox Setup Guide
url: https://cua.ai/docs/cua/guide/get-started/set-up-sandbox
source_type: official_docs
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# CUA Sandbox 设置指南

## 概述

CUA 提供多种沙箱选项供 computer-use agents 使用：

## 沙箱类型

### 1. Cloud Sandbox (cua.ai)

云端 Linux (Ubuntu), Windows, macOS 沙箱

- 需要在 cua.ai 创建 API Key
- 支持 CLI 和 Web Dashboard 管理

### 2. Docker (Linux)

本地 Linux 桌面环境

- **XFCE**: 轻量级，推荐大多数场景
- **KASM**: 全功能 Ubuntu 桌面

```bash
docker pull trycua/cua-xfce:latest
```

### 3. QEMU VM

完整 Linux, Windows, Android 虚拟机

- Linux: 需要准备 golden image
- Windows: 需要 Windows 11 ISO
- Android: 可直接启动

### 4. macOS Sandbox

仅 macOS 主机，使用 Lume CLI

### 5. Windows Sandbox

仅 Windows 10 Pro/Enterprise 或 Windows 11

## CLI 安装

**macOS/Linux:**
```bash
curl -LsSf https://cua.ai/cli/install.sh | sh
```

**Windows:**
```powershell
irm https://cua.ai/cli/install.ps1 | iex
```

## 下一步

设置完成后，参考 [Using the Computer SDK](https://cua.ai/docs/cua/guide/get-started/using-computer-sdk) 连接并开始交互。
