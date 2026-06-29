---
source_id: auto-2026-06-28-libw
title: libusb Official Website
url: https://libusb.info/
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# libusb - A cross-platform user library to access USB devices

## Overview

**libusb** is a C library that provides generic access to USB devices. It is intended to be used by developers to facilitate the production of applications that communicate with USB hardware.

## Key Characteristics

- **Portable**: Single cross-platform API for Linux, macOS, Windows, etc.
- **User-mode**: No special privilege or elevation required
- **Version-agnostic**: Supports USB 1.0 to USB 3.2 and USB 4.0

## Platform Support

- Linux
- macOS
- Windows (Vista and newer)
- Android
- OpenBSD/NetBSD
- Haiku
- Solaris

## Getting Started

### Linux
Most distributions include libusb by default. Just reference the header.

### Other Platforms
Download source from GitHub releases or compile from source.

## Documentation

- [libusb API (v1.0)](https://libusb.sourceforge.io/api-1.0/)
- [Wiki](https://github.com/libusb/libusb/wiki)
- [FAQ](https://github.com/libusb/libusb/wiki/FAQ)

## Resources

- Source Code: https://github.com/libusb/libusb
- Downloads: https://github.com/libusb/libusb/releases
- API Docs: http://api.libusb.info
- Mailing List: http://mailing-list.libusb.info/

## Python Bindings

Several Python bindings available:
- **PyUSB**: https://github.com/pyusb/pyusb
- **python-libusb1**: Pure Python wrapper
- **pywinusb**: Windows-specific
