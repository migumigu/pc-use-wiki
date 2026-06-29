---
source_id: auto-2026-06-28-watchdog-github
title: watchdog GitHub Repository
url: https://github.com/gorakhargosh/watchdog
source_type: github_readme
tier: 1
control_object: file_system
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# watchdog GitHub Repository

Python API library and shell utilities to monitor file system events.

## Project Info

- **Repository**: github.com/gorakhargosh/watchdog
- **Documentation**: python-watchdog.readthedocs.io
- **Latest Version**: 6.0.0 (released Nov 1, 2024)
- **Python Support**: 3.6+

## Installation

```bash
pip install watchdog
```

## Core Components

### watchdog.events
File system events and event handlers.

**Event Classes:**
- `FileSystemEvent` - Base class for all events
- `FileMovedEvent` - File was moved
- `FileCreatedEvent` - File was created
- `FileDeletedEvent` - File was deleted
- `FileModifiedEvent` - File was modified
- `DirMovedEvent`, `DirCreatedEvent`, `DirDeletedEvent`, `DirModifiedEvent`

**EventHandler Classes:**
- `FileSystemEventHandler` - Base class for custom handlers
- `LoggingEventHandler` - Built-in logging handler

### watchdog.observers
Observer threads that schedule watching directories.

**Observer Classes:**
- `Observer` - Main observer thread class
- `PollingObserver` - Fallback polling observer

### watchdog.utils
Utility modules.

## Quick Example

```python
import sys
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    event_handler = LoggingEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while observer.isAlive():
            observer.join(1)
    finally:
        observer.stop()
        observer.join()
```

## Platform Support

- **Linux 2.6+**: Uses inotify API
- **macOS**: Uses FSEvents or kqueue
- **Windows**: Uses ReadDirectoryChangesW (Vista+)
- **BSD**: Uses kqueue

## Dependencies

### Core (no dependencies)
watchdog core has no external dependencies.

### watchmedo utility
- PyYAML
- argh