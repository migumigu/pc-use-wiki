---
source_id: auto-20260629-libusb-api
title: libusb 1.0 API Reference
url: https://libusb.sourceforge.io/api-1.0/
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: system_foundation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# libusb API Reference

## Overview

libusb is a C library providing generic access to USB devices from user space.

## Key Features

- **All transfer types**: Control, Bulk, Interrupt, Isochronous
- **Two transfer interfaces**: Synchronous and Asynchronous
- **Thread safe**: Thread-safe API design
- **Lightweight**: Lean API with minimal overhead
- **Cross-platform**: Linux, macOS, Windows, Android, OpenBSD/NetBSD, Haiku, Solaris
- **Hotplug support**: On some platforms
- **USB 1.0-4.0 support**: All USB protocol versions

## Transfer Types

| Transfer | Use Case | Characteristics |
|----------|----------|-----------------|
| Control | Device management | Bidirectional, low bandwidth |
| Bulk | Data transfer | High bandwidth, no timing guarantee |
| Interrupt | Status/control | Low latency, small data |
| Isochronous | Streaming | Real-time, guaranteed bandwidth |

## Synchronous vs Asynchronous

**Synchronous**:
- Simple API
- Blocking calls
- Suitable for simple use cases

**Asynchronous**:
- More powerful
- Non-blocking
- Event-driven
- Better for complex applications

## Error Handling

- Returns 0 on success
- Returns negative error codes on failure
- LIBUSB_ERROR constants for specific error types

## Debug Logging

- Controlled via `LIBUSB_DEBUG` environment variable
- Levels: NONE, ERROR, WARNING, INFO, DEBUG
- Messages sent to stderr

## Platform Notes

**Linux**: Requires udev rules for unprivileged access
**macOS**: Works out of the box
**Windows**: Requires driver installation (libusb-win32 or WinUSB)

## PyUSB Backend

PyUSB uses libusb as its primary backend through ctypes, providing a Pythonic API while leveraging libusb's mature USB protocol implementation.
