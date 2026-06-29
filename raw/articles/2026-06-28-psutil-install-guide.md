---
source_id: auto-2026-06-28-psutil-install
title: psutil Installation Guide
url: https://psutil.readthedocs.io/latest/install.html
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# psutil Installation Guide

## Linux, Windows, macOS (wheels)

Pre-compiled wheels are distributed for these platforms, so you usually won't need a C compiler.

```bash
pip install psutil
```

Or with uv:

```bash
uv add psutil
```

## Compile psutil from source

### Linux

Debian / Ubuntu:
```bash
sudo apt install gcc python3-dev
pip install --no-binary :all: psutil
```

RedHat / CentOS:
```bash
sudo yum install gcc python3-devel
pip install --no-binary :all: psutil
```

### Windows

- Need Visual Studio 2017 or later
- Build from source tarball:
```bash
pip install --no-binary :all: psutil
```

### macOS

```bash
xcode-select --install
pip install --no-binary :all: psutil
```

## Supported Platforms

- Linux (all major distributions)
- Windows (Vista+)
- macOS
- FreeBSD, OpenBSD, NetBSD
- Sun Solaris
- AIX