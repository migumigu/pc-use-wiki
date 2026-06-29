---
tags: [watchdog, 文件监控, Python库, 跨平台, Observer模式]
created: 2026-06-28
updated: 2026-06-28
sources: [
  ../raw/articles/2026-06-28-watchdog-github-repo.md,
  ../raw/articles/2026-06-28-watchdog-install-guide.md,
  ../raw/articles/2026-06-28-watchdog-api-reference.md
]
---

# watchdog

> Python 文件系统事件监控库

## 基本信息

- **类型**：Python 库
- **GitHub**：github.com/gorakhargosh/watchdog
- **文档**：python-watchdog.readthedocs.io
- **版本**：6.0.0 (2024年11月发布)
- **Python**：3.6+
- **活跃维护**：2026年6月19日提交

## 一句话摘要

watchdog 是一个 Python API 库和命令行工具，用于监控文件系统事件，支持跨平台（Linux/macOS/Windows/BSD），通过封装原生 API 实现高效监控。

## 核心架构

采用 **Observer 模式**：
1. `Observer` — 观察者线程，调度监控
2. `FileSystemEventHandler` — 事件处理器
3. `Emitter` — 平台原生实现（inotify/FSEvents/RDC/kqueue）

## 核心能力

### 事件监控
- 文件创建、修改、删除、移动
- 目录创建、修改、删除、移动
- 递归监控子目录
- 模式匹配过滤

### 平台原生 API
- **Linux**：inotify
- **macOS**：FSEvents / kqueue
- **Windows**：ReadDirectoryChangesW
- **BSD**：kqueue

## 事件类型

| 事件 | 说明 |
|------|------|
| `FileCreatedEvent` | 文件创建 |
| `FileModifiedEvent` | 文件修改 |
| `FileDeletedEvent` | 文件删除 |
| `FileMovedEvent` | 文件移动 |
| `DirCreatedEvent` | 目录创建 |
| `DirModifiedEvent` | 目录修改 |
| `DirDeletedEvent` | 目录删除 |
| `DirMovedEvent` | 目录移动 |

## Agent 集成价值

watchdog 可作为 AI Agent 的"文件系统耳朵"：

```python
class AgentEventHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        if event.event_type == 'created':
            # Agent 响应新文件创建
            pass

observer = Observer()
observer.schedule(AgentEventHandler(), path, recursive=True)
observer.start()
```

## 与同类工具对比

| 工具 | 跨平台 | 性能 | 事件类型 | Agent 集成 |
|------|--------|------|----------|------------|
| **watchdog** | ✅ 全部 | 高 | 全部 | ✅ 简单 |
| pyinotify | ❌ 仅 Linux | 高 | 全部 | ⚠️ 仅 Linux |
| inotify-tools | ❌ 仅 Linux | 高 | CLI | ❌ 不适合 |

## 局限性

- Linux inotify 默认最大 8192 watches
- Windows 无法区分文件/目录删除
- BSD kqueue 需要调整文件描述符限制

## 相关页面

- [[文件系统控制]] — 主题页
- [[2026-06-28-watchdog-github-repo]] — 素材摘要
- [[2026-06-28-watchdog-install-guide]] — 素材摘要
- [[2026-06-28-watchdog-api-reference]] — 素材摘要