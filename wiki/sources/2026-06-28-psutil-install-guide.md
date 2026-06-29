---
tags: [psutil, 安装指南, 跨平台]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-psutil-install-guide.md]
---

# psutil Installation Guide

> 多平台安装指南

## 一句话摘要

psutil 提供预编译 wheels，支持 pip 一键安装；也支持从源码编译。

## 安装方式

**pip 安装（推荐）：**
```bash
pip install psutil
# 或
uv add psutil
```

**从源码编译：**

Linux (Debian/Ubuntu):
```bash
sudo apt install gcc python3-dev
pip install --no-binary :all: psutil
```

Windows:
- 需要 Visual Studio 2017+
- `pip install --no-binary :all: psutil`

macOS:
```bash
xcode-select --install
pip install --no-binary :all: psutil
```

## 平台支持

- Linux (所有主流发行版)
- Windows (Vista+)
- macOS
- FreeBSD, OpenBSD, NetBSD
- Sun Solaris
- AIX

## 相关页面

- [[psutil]] — 实体页
- [[系统服务控制]] — 主题页