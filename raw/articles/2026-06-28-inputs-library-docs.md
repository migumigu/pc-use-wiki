---
source_id: auto-2026-06-28-indo
title: inputs Python Library Documentation
url: https://inputs.readthedocs.io/en/latest/
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# inputs Documentation

**Inputs** aims to provide cross-platform Python support for keyboards, mice and gamepads.

## User Guide

### Why Inputs?

- Cross-platform support (Windows, Linux, macOS)
- Simple API for listening to input events
- Support for multiple devices
- Works on Raspberry Pi and Chromebooks

### Installation

```bash
pip install inputs
```

### Platform Permissions

- **Windows**: No special permissions needed
- **Linux**: User needs access to /dev/input/event*
- **macOS**: Security & Privacy settings may need adjustment

### Quick Start

```python
from inputs import devices

# List all devices
for device in devices:
    print(device)

# Get specific device
from inputs import get_keyboard, get_mouse, get_gamepad

keyboard = get_keyboard()
mouse = get_mouse()
gamepad = get_gamepad()
```

### Hardware Support

- **Linux**: Full support for keyboards, mice, gamepads
- **Chromebook**: Works in developer mode
- **Raspberry Pi**: Full support
- **Windows**: Full support
- **macOS**: Limited support (High Sierra and newer)

## Advanced Topics

- Event filtering
- Multiple device handling
- Custom device support

## License

BSD-3-Clause
