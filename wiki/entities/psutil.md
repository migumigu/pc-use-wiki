---
tags: [psutil, 系统监控, 进程管理, Python库, 跨平台]
created: 2026-06-28
updated: 2026-06-28
sources: [
  ../raw/articles/2026-06-28-psutil-github-readme.md,
  ../raw/articles/2026-06-28-psutil-install-guide.md,
  ../raw/articles/2026-06-28-psutil-api-reference.md
]
---

# psutil

> 跨平台进程和系统工具库

## 基本信息

- **类型**：Python 库
- **GitHub**：github.com/giampaolo/psutil
- **文档**：psutil.readthedocs.io
- ** License**：BSD-3
- **活跃维护**：2026年6月16日提交

## 一句话摘要

psutil 是一个跨平台的 Python 库，用于获取运行中进程和系统利用率（CPU、内存、磁盘、网络、传感器）信息，是 AI Agent 进行系统感知和进程管理的核心工具。

## 核心能力

### 系统监控
- **CPU**：利用率、核心数、频率、统计
- **内存**：虚拟内存、交换内存
- **磁盘**：分区、使用量、I/O 统计
- **网络**：接口统计、连接、地址
- **传感器**：温度、电池、风扇

### 进程管理
- 进程列表和迭代
- 进程信息查询（PID、名称、路径、状态）
- 资源使用监控（CPU、内存）
- 进程控制（终止、杀死）
- 子进程管理

### Windows 服务
- 服务迭代和查询

## 生态系统

- **下载量**：每月 340+ million
- **GitHub 仓库**：770,000+ 使用
- **依赖包**：16,000+ 包依赖

## 平台支持

- Linux（全部主流发行版）
- Windows（Vista+）
- macOS
- FreeBSD、OpenBSD、NetBSD
- Sun Solaris
- AIX

## Agent 集成价值

psutil 可作为 AI Agent 的"系统感知眼睛"：

```python
# Agent 查询系统状态
cpu = psutil.cpu_percent(interval=1)
mem = psutil.virtual_memory()
procs = [p.info for p in psutil.process_iter(['pid', 'name', 'cpu_percent'])]
```

## 与同类工具对比

| 工具 | 跨平台 | 进程管理 | 系统监控 | Agent 集成 |
|------|--------|----------|----------|------------|
| **psutil** | ✅ 全部 | ✅ 完整 | ✅ 完整 | ✅ 简单 |
| pywin32 | ❌ 仅 Windows | ✅ 完整 | ⚠️ 有限 | ⚠️ 复杂 |
| WMI | ❌ 仅 Windows | ✅ 完整 | ✅ 完整 | ⚠️ COM |

## 相关页面

- [[系统服务控制]] — 主题页
- [[PowerShell]] — 相关工具
- [[WMI]] — 相关工具
- [[pywin32]] — 相关工具
- [[2026-06-28-psutil-github-readme]] — 素材摘要
- [[2026-06-28-psutil-install-guide]] — 素材摘要
- [[2026-06-28-psutil-api-reference]] — 素材摘要