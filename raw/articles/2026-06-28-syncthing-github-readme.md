---
source_id: auto-2026-06-28-syncthing-gh
title: Syncthing GitHub README
url: https://github.com/syncthing/syncthing
source_type: github_readme
tier: 1
control_object: file_system_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
stars: 62200+
license: MPLv2
language: Go
---

# Syncthing GitHub README

## 项目概览

Syncthing 是一个**持续文件同步程序**，在两台或多台计算机之间同步文件。

**Stars**: 62.2K+（2026-06数据）
**语言**: Go (84.5%) + HTML (7.2%) + JavaScript (5.7%)
**许可证**: MPLv2 License
**最新版本**: v2.1.0 (2026-05-12)

## 核心目标（按重要性排序）

1. **防止数据丢失（Safe From Data Loss）**
   保护用户数据是首要任务。采取一切合理预防措施避免损坏用户文件。

2. **防御攻击者（Secure Against Attackers）**
   无论其他目标如何，绝不允许用户数据被未授权方窃听或修改。

3. **易于使用（Easy to Use）**
   Syncthing 应该易于接近、理解和包容。

4. **自动化（Automatic）**
   只有在绝对必要时才需要用户交互。

5. **普遍可用（Universally Available）**
   Syncthing 应能在每台常见计算机上运行。

6. **面向个人（For Individuals）**
   主要关注为个人用户提供安全、易用的文件同步。

## 报告数据

- **Commits**: 8,098+
- **Branches**: 8
- **Tags**: 675
- **Issues**: 368 open
- **Releases**: 467

## 核心架构

Syncthing 使用 P2P（点对点）架构：
- 无需中央服务器
- 设备之间直接同步
- 全程加密传输

### 设备发现机制

Syncthing 使用 Device ID（设备标识符）进行设备发现：
- 唯一的、加密安全的标识符
- 首次启动时作为密钥生成的一部分生成
- 两台设备只有在彼此配置对方的设备 ID 时才会连接和对话

### 协议支持

- **QUIC listener** (`[::]:22000`)
- **TCP listener** (`[::]:22000`)
- **Relay listener** (dynamic+https://relays.syncthing.net/endpoint)

## 配置文件位置

默认配置和数据库目录位置：
- `$XDG_STATE_HOME/syncthing`
- `$HOME/.local/state/syncthing`
- `$HOME/Library/Application Support/Syncthing`
- `%LOCALAPPDATA%\Syncthing`

## 文档链接

- 官方文档：https://docs.syncthing.net/
- 快速开始：https://docs.syncthing.net/intro/getting-started.html
- Docker 指南：README-Docker.md
- 构建指南：https://docs.syncthing.net/dev/building.html

## 社区支持

- **论坛**：https://forum.syncthing.net/
- **Issues**：https://github.com/syncthing/syncthing/issues
- **安全漏洞报告**：security@syncthing.net

## 构建方式

从源码构建：
```bash
go run build.go
```

构建后的二进制文件位于 `./bin` 目录。

## 签名发布

- 发布二进制文件使用 GPG 签名（密钥来自 https://syncthing.net/security/）
- 内置自动升级机制（某些分发渠道禁用）使用编译的 ECDSA 签名
- macOS 和 Windows 二进制文件也经过代码签名

## GUI 实现

多个 GUI 包装器：
- Syncthing-GTK (cross-platform)
- Windows GUI
- Android App
- 其他社区实现

所有社区版本都运行相同的 Syncthing 核心。

## 数据来源

本文档基于 GitHub README (https://github.com/syncthing/syncthing) 提取，数据截至 2026-06-28。