---
tags: [虚拟化, macOS, Apple-Silicon, 容器化]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-cua-github-readme.md
  - wiki/sources/2026-06-28-cua-sandbox-setup.md
---

# Lume

> macOS 虚拟化工具，使用 Apple Virtualization.Framework 在 Apple Silicon 上创建和管理 macOS/Linux VM，近原生性能。

## 简介

<!-- confidence: EXTRACTED -->
<!-- evidence: GitHub README 原文 "macOS 虚拟化。在 Apple Silicon 上使用 Apple Virtualization.Framework 创建和管理 macOS/Linux VM" -->

Lume 是 CUA 项目的组件之一，专注于 macOS 虚拟化。它利用 Apple Silicon 上的 Apple Virtualization.Framework 来创建和管理虚拟机，提供接近原生设备的性能。

## 关键信息

- **类型**：工具 / 虚拟化软件
- **领域**：macOS 虚拟化 / 容器化
- **技术基础**：Apple Virtualization.Framework
- **支持平台**：Apple Silicon (M1/M2/M3 系列)
- **相关项目**：[[CUA]] (Computer Use Agent)

## 核心能力

### VM 类型支持
- macOS VM
- Linux VM

### 技术特点
- **近原生性能**：利用 Apple 硬件虚拟化框架
- **Docker 兼容接口**：通过 lumier 提供 Docker 兼容接口
- **与 CUA 集成**：作为 CUA 四大组件之一，支持 macOS Sandbox 场景

## 与其他虚拟化方案的对比

| 方案 | 平台 | 性能 | 适用场景 |
|------|------|------|----------|
| Lume | macOS only | 近原生 | macOS Agent 测试 |
| Docker | 跨平台 | 容器级 | Linux 环境 |
| QEMU | 跨平台 | 模拟 | 全平台 VM |

## 相关页面

- [[CUA]] — Lume 是 CUA 的四大组件之一
- [[Sandbox]] — 虚拟化是沙箱实现方式之一
- [[Docker]] — 另一种容器化方案
