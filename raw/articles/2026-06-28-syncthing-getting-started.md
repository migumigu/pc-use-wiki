---
source_id: auto-2026-06-28-syncthing-start
title: Syncthing Getting Started Guide
url: https://docs.syncthing.net/intro/getting-started.html
source_type: official_docs
tier: 1
control_object: file_system_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Syncthing Getting Started Guide

## 安装

### 社区版本

查看 [Community Contributions](https://docs.syncthing.net/users/contrib.html#contributions) 选择最适合的场景：
- Syncthing-GTK (cross-platform GUI)
- Windows GUI
- Android App
- 其他特定版本

所有社区版本运行相同的 Syncthing 核心。

### 核心 Syncthing 安装

从 [latest release](https://github.com/syncthing/syncthing/releases/latest) 下载对应操作系统的版本。

**Debian/Ubuntu 用户**：可使用 [Debian repository](https://apt.syncthing.net/)

解压后会看到二进制文件 `syncthing` (Windows 上为 `syncthing.exe`)。

## 启动示例

首次启动 Syncthing 会：
1. 生成配置文件
2. 生成加密密钥
3. 在浏览器中启动管理 GUI

启动日志示例：
```
[monitor] 22:56:32 INFO: Log output saved to file "C:\Users\User\AppData\Local\Syncthing\syncthing.log"
[monitor] 22:56:32 INFO: Default folder created and/or linked to new config
[start] 22:56:32 INFO: syncthing v1.7.1 "Fermium Flea" (go1.14.4 windows-386)
[6FOKX] 22:56:33 INFO: My ID: 6FOKXKK-SKUBWFW-GSKX6IQ-ZC4SYUZ-5IEVZKE-TC42AAX-HW7IBW4-GAZFAQ7
[6FOKX] 22:56:34 INFO: Single thread SHA256 performance is 123 MB/s
[6FOKX] 22:56:34 INFO: Hashing performance is 106.31 MB/s
[6FOKX] 22:56:34 INFO: Overall send rate is unlimited, receive rate is unlimited
[6FOKX] 22:56:34 INFO: Ready to synchronize "Default Folder" (default) (sendreceive)
[6FOKX] 22:56:34 INFO: QUIC listener ([::]:22000) starting
[6FOKX] 22:56:34 INFO: TCP listener ([::]:22000) starting
[6FOKX] 22:56:34 INFO: GUI and API listening on 127.0.0.1:8384
```

## 默认配置

启动时会创建：
- **Default Folder**：位于用户目录的 `Sync` 文件夹（Windows 上为 `%USERPROFILE%\Sync`）
- GUI 监听地址：`127.0.0.1:8384`

## 配置设备连接

### Device ID 概念

Device ID 是唯一的、加密安全的标识符：
- 首次启动时生成（作为密钥生成的一部分）
- 打印在启动日志中
- 可在 GUI 中查看（Actions > Show ID）

**重要特性**：
- 两台设备只有在彼此配置对方的设备 ID 时才会连接
- 配置必须双向才能建立连接
- Device ID 不需要保密（本质上是公钥的一部分）

### 配置步骤

1. 在两台设备上点击 "Add Remote Device"
2. 输入对方的设备 ID
3. 选择要共享的文件夹
4. 设备名称可选（仅作显示用）
5. 点击 "Save"

配置完成后：
- 新设备出现在右侧（显示为 disconnected）
- 约一分钟后会连接
- **必须在另一台设备上重复此步骤**

## GUI 界面

访问地址：`http://localhost:8384/`

界面组成：
- **左侧**：文件夹列表（同步的目录）
- **右侧**：设备列表

初始状态：
- Default Folder 标记为 "Unshared"（未与其他设备共享）
- 设备列表只有本地设备

## 文件同步

两台设备共享空目录后，向任一设备的共享目录添加文件会自动同步到另一侧。

## 故障排查

连接问题排查：
1. 查看 [Firewall Setup](https://docs.syncthing.net/users/firewall.html#firewall-setup)
2. 检查 GUI 或控制台的错误消息
3. 配置变更不会立即反映——给 Syncthing 一些时间，尤其是重启后

## 视频教程

- [Ubuntu/Debian/Mint 安装](https://www.youtube.com/watch?v=foTxCfhxVLE)
- [Windows 安装](https://www.youtube.com/watch?v=2QcO8ikxzxA)

## 数据来源

本文档基于 Syncthing 官方文档 Getting Started Guide 提取，数据截至 2026-06-28。