---
tags: [watchdog, 文件监控, 跨平台, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-watchdog-github-repo.md]
---

# watchdog GitHub Repository

> Python 文件系统事件监控库

## 一句话摘要

watchdog 是一个 Python API 库和命令行工具，用于监控文件系统事件，支持跨平台（Linux/macOS/Windows/BSD），通过封装原生 API 实现高效监控。

## 核心要点

- **跨平台**：Linux (inotify)、macOS (FSEvents/kqueue)、Windows (ReadDirectoryChangesW)、BSD (kqueue)
- **Python 3.6+**
- **版本**：6.0.0 (2024年11月发布)
- **核心组件**：Observer、FileSystemEventHandler、Emitter

## 主要组件

**事件类：**
- `FileSystemEvent` — 基类
- `FileCreatedEvent`, `FileDeletedEvent`, `FileModifiedEvent`, `FileMovedEvent`
- `DirCreatedEvent`, `DirDeletedEvent`, `DirModifiedEvent`, `DirMovedEvent`

**处理器：**
- `FileSystemEventHandler` — 可继承自定义
- `LoggingEventHandler` — 内置日志
- `PatternMatchingEventHandler` — 模式匹配

**观察者：**
- `Observer` — 主观察者线程
- `PollingObserver` — 轮询回退

## 相关页面

- [[watchdog]] — 实体页
- [[文件系统控制]] — 主题页