---
source_id: auto-20260629-pyusb-tutorial
title: PyUSB 1.0 Tutorial
url: https://github.com/pyusb/pyusb/blob/master/docs/tutorial.rst
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Programming with PyUSB 1.0

## Module Structure

PyUSB modules are under the `usb` package:

| Module | Description |
|--------|-------------|
| core | Main USB module |
| util | Utility functions |
| control | Standard control requests |
| legacy | 0.x compatibility layer |
| backend | Builtin backends |

## Device Discovery

### Basic Usage

```python
import usb.core

# Find specific device
dev = usb.core.find(idVendor=0xfffe, idProduct=0x0001)

# Find all devices
devices = list(usb.core.find(find_all=True))

# Custom match function
class find_class(object):
    def __init__(self, class_):
        self._class = class_
    def __call__(self, device):
        if device.bDeviceClass == self._class:
            return True
        for cfg in device:
            intf = usb.util.find_descriptor(cfg, bInterfaceClass=self._class)
            if intf is not None:
                return True
        return False
```

## Device Configuration

```python
# Set first configuration
dev.set_configuration()

# Set specific configuration
dev.set_configuration(5)

# Access configuration
cfg = dev.get_active_configuration()
intf = cfg[(0, 0)]  # (interface_number, alternate_setting)
```

## USB Transfers

PyUSB supports all four USB transfer types:

1. **Control**: Standard USB control requests
2. **Bulk**: High-throughput data transfer
3. **Interrupt**: Low-latency, small data transfers
4. **Isochronous**: Real-time streaming

### Bulk Transfer Example

```python
# Write to endpoint
ep.write(data)

# Read from endpoint
data = ep.read(size)
```

## Error Handling

- All functions raise `usb.core.USBError` for USB-related errors
- Debug logging via `PYUSB_DEBUG` environment variable

## Key Concepts

- **bus/address**: Device location attributes for differentiating identical devices
- **Configuration**: Device must be configured before communication
- **Interface**: Logical device within a configuration
- **Alternate Setting**: Different modes for an interface (e.g., isochronous endpoints)
- **Endpoint**: Communication channel
