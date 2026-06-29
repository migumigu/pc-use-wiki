---
source_id: auto-2026-06-28-watchdog-api
title: watchdog API Reference
url: https://python-watchdog.readthedocs.io/en/stable/api.html
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# watchdog API Reference

## watchdog.events Module

File system events and event handlers.

### Event Classes

**Base Event:**
```python
class FileSystemEvent(src_path)
    event_type      # Type of event (created, modified, moved, deleted)
    is_directory    # True if event was for a directory
    is_synthetic    # True if event was synthesized
    src_path        # Source path of the file system object
```

**Event Types:**
- `FileCreatedEvent` - File was created
- `FileModifiedEvent` - File was modified
- `FileDeletedEvent` - File was deleted
- `FileMovedEvent` - File was moved
- `DirCreatedEvent` - Directory was created
- `DirModifiedEvent` - Directory was modified
- `DirDeletedEvent` - Directory was deleted
- `DirMovedEvent` - Directory was moved

### EventHandler Classes

```python
class FileSystemEventHandler
    def on_created(event)      # Called when file/dir created
    def on_modified(event)     # Called when file/dir modified
    def on_deleted(event)      # Called when file/dir deleted
    def on_moved(event)        # Called when file/dir moved
    def on_any_event(event)    # Called on any event
```

**Built-in Handlers:**
- `LoggingEventHandler` - Logs all events to logging module

### Pattern Matching

```python
class PatternMatchingEventHandler(FileSystemEventHandler)
    def __init__(self, patterns=None, ignore_patterns=None,
                 ignore_directories=False, case_sensitive=False)
```

## watchdog.observers Module

Observer threads that schedule watching directories.

### Observer Class

```python
class Observer
    def schedule(event_handler, path, recursive=False)
        # Schedule watching a path with event handler
        # recursive=True watches subdirectories too

    def start()    # Start observer thread
    def stop()     # Stop observer thread
    def join(timeout=None)  # Wait for observer thread
    def isAlive() # Check if observer is running

    # Can be used as context manager:
    with Observer() as observer:
        observer.schedule(event_handler, path, recursive=True)
        observer.start()
```

### Polling Observer

```python
class PollingObserver(Observer)
    # Fallback observer that polls file system instead of using native APIs
```

### Inotify Observer (Linux-specific)

```python
class InotifyObserver(Observer)
    # Uses Linux inotify API directly
```

## watchdog.utils Module

### Directory Snapshots

```python
class DirectorySnapshot
    def __init__(self, path, recursive=False)
    def diff(other_snapshot)
        # Returns DirectorySnapshotDiff
```

### Process Event Handler

```python
class ProcessEventHandler(FileSystemEventHandler)
    # Handles process-related events
```

## watchmedo Commands

```bash
# Watch a directory and run a command on changes
watchmedo log --path .
watchmedo shell-command --command='echo "${watch_event_path}"'
watchmedo tricks-from-file --file tricks.yaml
```

## Platform-Specific Notes

### Linux (inotify)
- Limited by `fs.inotify.max_user_watches`
- Renaming as movement on Linux

### macOS (FSEvents/kqueue)
- FSEvents preferred
- kqueue uses file descriptors

### Windows
- Uses ReadDirectoryChangesW (Vista+)
- Cannot distinguish file/directory delete events
- Movement detection limited