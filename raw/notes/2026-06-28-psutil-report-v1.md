---
report_id: auto-2026-06-28-psutil-report
title: psutil 技术分析报告
version: v1.0
created_date: 2026-06-28
updated_date: 2026-06-28
source_count: 3
source_breakdown: Tier1: 3, Tier2: 0, Tier3: 0
---

# psutil 技术分析报告 v1.0

> 生成日期：2026-06-28
> 来源：3 个（Tier1: 3, Tier2: 0, Tier3: 0）
> 报告版本：v1.0

## 1. 执行摘要

psutil 是一个跨平台的 Python 库，用于获取运行中进程和系统利用率（CPU、内存、磁盘、网络、传感器）信息。主要用于系统监控、性能分析和进程管理。

**核心价值**：
- 跨平台支持（Linux/Windows/macOS/FreeBSD/Sun Solaris/AIX）
- 每月 340+ million 下载
- 770,000+ GitHub 仓库使用
- 16,000+ 包依赖

## 2. 技术全景

### 2.1 核心架构

psutil 采用分层架构：

```
┌─────────────────────────────────────┐
│         psutil API (Python)          │
├─────────────────────────────────────┤
│   System Calls / Native APIs        │
│   (OpenProcess, /proc, sysctl)       │
├─────────────────────────────────────┤
│      Platform-Specific Backends     │
│   (Windows, Linux, macOS, BSD)       │
└─────────────────────────────────────┘
```

### 2.2 技术栈分层

| 层级 | 组件 | 说明 |
|------|------|------|
| 系统基础层 | Windows API, /proc, sysctl | 底层系统调用 |
| 协议接口层 | N/A | 直接系统调用，无协议层 |
| 工具实现层 | psutil.Process, cpu_*, memory_* | 核心 API 实现 |
| Agent 集成层 | Tool Calling 模式 | 可作为 Agent 工具调用 |

### 2.3 关键组件

**系统监控 API：**
- `cpu_times()` / `cpu_percent()` — CPU 利用率
- `cpu_count()` / `cpu_freq()` — CPU 核心数和频率
- `virtual_memory()` / `swap_memory()` — 内存信息
- `disk_partitions()` / `disk_usage()` — 磁盘信息
- `net_io_counters()` / `net_connections()` — 网络统计
- `sensors_temperatures()` / `sensors_battery()` — 传感器

**进程管理 API：**
- `Process(pid)` — 进程对象
- `process_iter()` — 进程迭代器
- `p.name()`, `p.exe()`, `p.pid` — 基本信息
- `p.cpu_percent()`, `p.memory_info()` — 资源使用
- `p.terminate()`, `p.kill()` — 进程控制

**Windows 服务 API：**
- `win_service_iter()` — 服务迭代器
- `win_service_get(name)` — 获取服务

## 3. 能力分析

### 3.1 支持的能力

| 能力 | 平台支持 | 置信度 |
|------|----------|--------|
| CPU 利用率监控 | 全部 | EXTRACTED |
| 内存监控 | 全部 | EXTRACTED |
| 磁盘 I/O 统计 | 全部 | EXTRACTED |
| 网络接口统计 | 全部 | EXTRACTED |
| 进程列表 | 全部 | EXTRACTED |
| 进程资源限制 | Linux | EXTRACTED |
| 传感器温度 | Linux/Windows | EXTRACTED |
| 电池状态 | Linux/Windows | EXTRACTED |
| Windows 服务管理 | Windows | EXTRACTED |

### 3.2 局限性

- **进程资源限制**：Windows 不支持 `prlimit()`（需使用 job objects）
- **传感器支持**：macOS 不支持 `sensors_temperatures()`
- **电池状态**：macOS 不支持 `sensors_battery()`

### 3.3 已知问题

- psutil 8.0 引入破坏性 API 变更，需参考迁移指南
- 某些信息需要 root 权限（如其他用户的进程）

## 4. 生态位

### 4.1 与同类工具对比

| 工具 | 跨平台 | 进程管理 | 系统监控 | Agent 集成 |
|------|--------|----------|----------|------------|
| **psutil** | ✅ 全部 | ✅ 完整 | ✅ 完整 | ✅ 简单 |
| pywin32 | ❌ 仅 Windows | ✅ 完整 | ⚠️ 有限 | ⚠️ 复杂 |
| WMI | ❌ 仅 Windows | ✅ 完整 | ✅ 完整 | ⚠️ COM |
| PowerShell | ✅ 全部 | ✅ 完整 | ✅ 完整 | ⚠️ 脚本 |

### 4.2 适用场景

- **系统监控**：实时监控系统资源
- **性能分析**：分析进程资源占用
- **进程管理**：启动/停止/监控进程
- **Agent 工具**：作为 AI Agent 的系统感知工具

### 4.3 不适用场景

- 需要图形界面的交互式操作
- 需要模拟用户输入的自动化

## 5. AI Agent 集成价值

### 5.1 集成模式

psutil 可作为 Agent 的"系统感知眼睛"：

```python
# Agent 可以查询系统状态
cpu_usage = psutil.cpu_percent(interval=1)
memory = psutil.virtual_memory()
processes = [p.info for p in psutil.process_iter(['pid', 'name', 'cpu_percent'])]
```

### 5.2 与现有知识库工具的互补

- 与 **PowerShell/WMI** 互补：提供更高级的 Python API
- 与 **pywin32** 互补：跨平台，API 更简洁
- 与 **Open Interpreter** 互补：作为系统感知层

## 6. 信息来源

| 来源 | 类型 | 置信度 | 主要贡献 |
|------|------|--------|----------|
| [[auto-2026-06-28-psutil-gh]] | Tier 1 | EXTRACTED | 项目概览、统计数据 |
| [[auto-2026-06-28-psutil-install]] | Tier 1 | EXTRACTED | 安装指南、平台支持 |
| [[auto-2026-06-28-psutil-api]] | Tier 1 | EXTRACTED | API 详细参考 |

## 7. 待验证问题

（无待验证问题，所有声明来自 Tier 1 官方来源）