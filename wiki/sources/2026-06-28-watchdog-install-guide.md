---
tags: [watchdog, 安装指南, 跨平台]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-watchdog-install-guide.md]
---

# watchdog Installation Guide

> 多平台安装指南

## 一句话摘要

watchdog 支持 pip 一键安装，核心无依赖，watchmedo 工具可选安装。

## 安装方式

**pip 安装（推荐）：**
```bash
# 核心库
python -m pip install -U watchdog

# 含 watchmedo 工具
python -m pip install -U watchdog[watchmedo]
```

**源码安装：**
```bash
git clone --recursive git://github.com/gorakhargosh/watchdog.git
cd watchdog
python -m pip install -e .
```

## 平台支持

| 平台 | API | 备注 |
|------|-----|------|
| Linux 2.6+ | inotify | 最大 8192 watches |
| macOS | FSEvents/kqueue | FSEvents 优先 |
| Windows Vista+ | ReadDirectoryChangesW | 无法区分目录/文件删除 |
| BSD | kqueue | 需要调整 ulimit |

## 依赖

**核心**：无外部依赖

**watchmedo 工具**：
- PyYAML
- argh

## 相关页面

- [[watchdog]] — 实体页
- [[文件系统控制]] — 主题页