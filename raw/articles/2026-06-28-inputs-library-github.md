---
source_id: auto-2026-06-28-inpu
title: inputs Python Library GitHub README
url: https://github.com/zeth/inputs
source_type: github_readme
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# inputs

**Inputs** aims to provide cross-platform Python support for keyboards, mice and gamepads.

## Key Features

- **Cross-platform**: Windows, Linux, macOS, Raspberry Pi, Chromebooks
- **Python 3+** and Python 2.7 supported
- **Event-based**: Listen for user input events
- **Multiple devices**: Support for multiple keyboards, mice, gamepads

## Installation

```bash
pip install inputs
```

## Quick Start

```python
from inputs import devices

# List all devices
for device in devices:
    print(device)

# Get events
from inputs import get_gamepad, get_keyboard, get_mouse
```

## Supported Devices

- **Keyboards**: Standard USB/PS2 keyboards
- **Mice**: Standard USB/PS2 mice
- **Gamepads**: Xbox 360 controller, PS3 controller, others

## Platform Notes

- **Windows**: Native API
- **Linux**: Uses /dev/input/event*
- **macOS**: HID Manager

## License

BSD-3-Clause
