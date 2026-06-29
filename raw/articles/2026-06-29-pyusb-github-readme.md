---
source_id: auto-20260629-pyusb-readme
title: PyUSB GitHub README
url: https://github.com/pyusb/pyusb
source_type: github_readme
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# PyUSB – Easy USB access for Python

## Introduction

PyUSB provides for easy access to the host machine's Universal Serial Bus (USB) system for Python 3.

Until 0.4 version, PyUSB used to be a thin wrapper over libusb. Starting with the 1.0 version, things changed considerably: now PyUSB is an API rich, backend neutral Python USB module easy to use.

## Key Features

1. **100% written in Python**: Unlike the 0.x version (written in C), 1.0 version is written in Python using ctypes.
2. **Platform neutrality**: Implements a frontend-backend scheme isolating the API from system-specific implementation details.
3. **Portability**: Runs on any platform with Python >= 3.9, ctypes, and at least one supported backend.
4. **Builtin backends**: Supports libusb 1.0, libusb 0.1, and OpenUSB.
5. **Support for isochronous transfers**: If the underlying backend supports it.

## Backend Support

| Backend | Status | Recommendation |
|---------|--------|----------------|
| libusb 1.0 | ✅ Active | Recommended |
| libusb 0.1 | ⚠️ Legacy | Not recommended |
| OpenUSB | ⚠️ Legacy | Not recommended |

## Platform Support

- **Linux**: libusb usually available via package manager
- **macOS**: `brew install libusb`
- **Windows**: Use pyocd/libusb-package or manually copy DLL

## Installation

```bash
pip install pyusb
```

## Usage Example

```python
import usb.core

# Find device
dev = usb.core.find(idVendor=0xfffe, idProduct=0x0001)

# Set configuration
dev.set_configuration()

# Write data
dev.write(1, 'test')
```

## Statistics

- Used by: 33,800+ GitHub projects
- Latest release: v1.3.1 (Jan 8, 2025)
- License: BSD-3-Clause
