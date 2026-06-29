---
tags: [psutil, 系统监控, 进程管理, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-psutil-github-readme.md]
---

# psutil GitHub README

> 跨平台进程和系统工具库，340+ million 月下载

## 一句话摘要

psutil 是一个跨平台的 Python 库，用于获取运行中进程和系统利用率（CPU、内存、磁盘、网络、传感器）信息，是系统监控和进程管理的核心工具。

## 核心要点

- **跨平台支持**：Linux、Windows、macOS、FreeBSD、Sun Solaris、AIX
- **生态系统**：每月 340+ million 下载，770,000+ GitHub 仓库使用，16,000+ 包依赖
- **功能覆盖**：进程管理、CPU/内存/磁盘/网络监控、传感器、电池

## 主要 API

**系统监控：**
- `cpu_percent()`, `cpu_count()`, `cpu_freq()`
- `virtual_memory()`, `swap_memory()`
- `disk_partitions()`, `disk_usage()`
- `net_io_counters()`, `net_connections()`

**进程管理：**
- `Process(pid)` — 进程对象
- `process_iter()` — 进程迭代
- `p.terminate()`, `p.kill()` — 进程控制

## 相关页面

- [[psutil]] — 实体页
- [[系统服务控制]] — 主题页