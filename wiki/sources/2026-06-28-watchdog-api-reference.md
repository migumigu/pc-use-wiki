---
tags: [watchdog, API参考, 文件监控, Observer模式]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-watchdog-api-reference.md]
---

# watchdog API Reference

> 完整 API 参考文档

## 一句话摘要

watchdog 提供完整的事件驱动文件监控 API，基于 Observer 模式，支持跨平台原生 API 封装。

## 核心 API

### watchdog.events

**事件类：**
```python
class FileSystemEvent(src_path)
    event_type      # created, modified, deleted, moved
    is_directory    # True if directory
    is_synthetic   # Synthesized event
    src_path       # Source path
```

**事件类型：**
- `FileCreatedEvent`, `FileModifiedEvent`, `FileDeletedEvent`, `FileMovedEvent`
- `DirCreatedEvent`, `DirModifiedEvent`, `DirDeletedEvent`, `DirMovedEvent`

**处理器类：**
```python
class FileSystemEventHandler:
    def on_created(event)
    def on_modified(event)
    def on_deleted(event)
    def on_moved(event)
    def on_any_event(event)
```

**内置处理器：**
- `LoggingEventHandler` — 记录所有事件
- `PatternMatchingEventHandler` — 模式匹配过滤

### watchdog.observers

**Observer 类：**
```python
class Observer:
    def schedule(event_handler, path, recursive=False)
    def start()
    def stop()
    def join(timeout=None)
    def isAlive()
```

**PollingObserver** — 轮询回退实现

### 使用示例

```python
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler

observer = Observer()
observer.schedule(LoggingEventHandler(), path, recursive=True)
observer.start()
try:
    while observer.isAlive():
        observer.join(1)
finally:
    observer.stop()
    observer.join()
```

## 相关页面

- [[watchdog]] — 实体页
- [[文件系统控制]] — 主题页