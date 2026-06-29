---
source_id: auto-2026-06-28-libu
title: libusb GitHub README
url: https://github.com/libusb/libusb
source_type: github_readme
tier: 1
control_object: hardware
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# libusb

libusb is a library for USB device access from Linux, macOS, Windows, OpenBSD/NetBSD, Haiku, Solaris userspace, and WebAssembly via WebUSB.

## Key Features

- **Cross-platform**: Linux, macOS, Windows, OpenBSD/NetBSD, Haiku, Solaris, WebAssembly
- **User-mode**: No special privilege required
- **USB Protocol Support**: USB 1.0 to USB 4.0
- **Hotplug Support**: Detect device plug/unplug events
- **Transfer Types**: Control, bulk, interrupt, isochronous

## Technical Details

- **Language**: C (92.2%), C++ (4.7%)
- **License**: LGPL-2.1
- **Latest Release**: v1.0.30 (May 17, 2026)
- **Commits**: 2,038 total commits

## API Documentation

http://api.libusb.info/

## Platform Backends

- **Linux**: uses kernel usbfs
- **macOS**: IOKit
- **Windows**: WinUSB, libusbK
- **Android**: native USB API
- **WebAssembly**: WebUSB API

## Common Use Cases

- USB device drivers in user space
- USB protocol analysis
- Hardware testing and debugging
- Embedded device communication

## Support

- GitHub Issues: https://github.com/libusb/libusb/issues
- Mailing List: http://mailing-list.libusb.info/
