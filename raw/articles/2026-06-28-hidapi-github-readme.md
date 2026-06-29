---
source_id: auto-2026-06-28-hidapi-github
title: hidapi GitHub README
url: https://github.com/libusb/hidapi
source_type: github_readme
tier: 1
control_object: hardware_interface_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# HIDAPI library for Windows, Linux, FreeBSD and macOS

HIDAPI is a multi-platform library which allows an application to interface with USB and Bluetooth HID-Class devices on Windows, Linux, FreeBSD, and macOS. HIDAPI can be either built as a shared library (`.so`, `.dll` or `.dylib`) or can be embedded directly into a target application by adding a *single source* file (per platform) and a single header.

## Table of Contents

- [About](#about)
- [What Does the API Look Like?](#what-does-the-api-look-like)
- [License](#license)
- [Installing HIDAPI](#installing-hidapi)
- [Build from Source](#build-from-source)

## About

### HIDAPI has four back-ends:

- Windows (using `hid.dll`)
- Linux/hidraw (using the Kernel's hidraw driver)
- libusb (using libusb-1.0 - Linux/BSD/other UNIX-like systems)
- macOS (using IOHidManager)

On Linux, either the hidraw or the libusb back-end can be used. There are tradeoffs, and the functionality supported is slightly different. Both are built by default. It is up to the application linking to hidapi to choose the backend at link time by linking to either `libhidapi-libusb` or `libhidapi-hidraw`.

Note that you will need to install an udev rule file with your application for unprivileged users to be able to access HID devices with hidapi. Refer to the [69-hid.rules](https://github.com/libusb/hidapi/blob/master/udev/69-hid.rules) file in the `udev` directory for an example.

#### Linux/hidraw (`linux/hid.c`):

This back-end uses the hidraw interface in the Linux kernel, and supports both USB and Bluetooth HID devices. It requires kernel version at least 2.6.39 to build. In addition, it will only communicate with devices which have hidraw nodes associated with them. Keyboards, mice, and some other devices which are blacklisted from having hidraw nodes will not work. Fortunately, for nearly all the uses of hidraw, this is not a problem.

#### Linux/FreeBSD/libusb (`libusb/hid.c`):

This back-end uses libusb-1.0 to communicate directly to a USB device. This back-end will of course not work with Bluetooth devices.

## What Does the API Look Like?

The API provides the most commonly used HID functions including sending and receiving of input, output, and feature reports.

**Example code:**

```c
#include <stdio.h>
#include <wchar.h>
#include <hidapi.h>

#define MAX_STR 255

int main(int argc, char* argv[])
{
    int res;
    unsigned char buf[65];
    wchar_t wstr[MAX_STR];
    hid_device *handle;

    // Initialize the hidapi library
    res = hid_init();

    // Open the device using the VID, PID,
    // and optionally the Serial number.
    handle = hid_open(0x4d8, 0x3f, NULL);
    if (!handle) {
        printf("Unable to open device\n");
        hid_exit();
        return 1;
    }

    // Read the Manufacturer String
    res = hid_get_manufacturer_string(handle, wstr, MAX_STR);
    printf("Manufacturer String: %ls\n", wstr);

    // Read the Product String
    res = hid_get_product_string(handle, wstr, MAX_STR);
    printf("Product String: %ls\n", wstr);

    // Read the Serial Number String
    res = hid_get_serial_number_string(handle, wstr, MAX_STR);
    printf("Serial Number String: (%d) %ls\n", wstr[0], wstr);

    // Toggle LED (cmd 0x80). The first byte is the report number (0x0).
    buf[0] = 0x0;
    buf[1] = 0x80;
    res = hid_write(handle, buf, 65);

    // Request state (cmd 0x81)
    buf[0] = 0x0;
    buf[1] = 0x81;
    res = hid_write(handle, buf, 65);

    // Read requested state
    res = hid_read(handle, buf, 65);

    // Print out the returned buffer.
    for (int i = 0; i < 4; i++)
        printf("buf[%d]: %d\n", i, buf[i]);

    // Close the device
    hid_close(handle);

    // Finalize the hidapi library
    res = hid_exit();

    return 0;
}
```

## License

HIDAPI may be used by one of three licenses:
- BSD-3-Clause license
- GPL-3.0 license
- Original license (LICENSE-orig.txt)

## Installing HIDAPI

On Ubuntu, HIDAPI is available via APT:
```
sudo apt install libhidapi-dev
```

HIDAPI package name for other systems/package managers may differ.

## Build from Source

Check [BUILD.md](https://github.com/libusb/hidapi/blob/master/BUILD.md) for details.

## Project Info

- **Repository**: libusb/hidapi
- **Version**: 0.16.0 (as of 2026-06-28)
- **Languages**: C (82.6%), CMake (6.2%)
- **Stars**: 2,500+
- **Maintainers**: libusb organization
- **Original Developer**: Alan Ott (signal11)
- **Moved to libusb**: June 4th, 2019