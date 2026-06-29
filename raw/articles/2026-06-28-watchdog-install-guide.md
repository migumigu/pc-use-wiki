---
source_id: auto-2026-06-28-watchdog-install
title: watchdog Installation Guide
url: https://python-watchdog.readthedocs.io/en/stable/installation.html
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# watchdog Installation Guide

## Requirements

- Python 3.6+

## Installing from PyPI using pip

```bash
python -m pip install -U watchdog

# or to install the watchmedo utility:
python -m pip install -U watchdog[watchmedo]
```

## Installing from source tarballs

```bash
wget -c https://pypi.python.org/packages/source/w/watchdog/watchdog-2.1.5.tar.gz
tar zxvf watchdog-2.1.5.tar.gz
cd watchdog-2.1.5
python -m pip install -e .

# or to install the watchmedo utility:
python -m pip install -e ".[watchmedo]"
```

## Installing from code repository

```bash
git clone --recursive git://github.com/gorakhargosh/watchdog.git
cd watchdog
python -m pip install -e .

# or to install the watchmedo utility:
python -m pip install -e ".[watchmedo]"
```

## Supported Platforms

### Linux 2.6+
Uses **inotify** API.
- Max watches per user: 8192 (default)
- To increase: `fs.inotify.max_user_watches=16384` in /etc/sysctl.conf

### macOS / Darwin
Uses **FSEvents** or **kqueue**.
- FSEvents preferred over kqueue(2)

### BSD Unix variants
Uses **kqueue**.

### Windows Vista+
Uses **ReadDirectoryChangesW**.

### OS Independent Polling
Fallback implementation that polls directories for changes.

## Dependencies

### Core
No external dependencies required.

### watchmedo utility
- PyYAML
- argh