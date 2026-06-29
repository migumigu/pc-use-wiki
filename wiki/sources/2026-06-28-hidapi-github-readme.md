---
tags: [hidapi, USB-HID, 跨平台库, C语言]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-hidapi-github-readme.md]
---

# hidapi GitHub README

> 跨平台 USB HID 设备通信库，支持 Windows、Linux、FreeBSD、macOS

## 核心信息

- **GitHub**: https://github.com/libusb/hidapi
- **Stars**: 2,500+
- **Version**: 0.16.0
- **License**: BSD-3-Clause / GPL-3.0 / Original
- **语言**: C (82.6%), CMake (6.2%)
- **维护方**: libusb organization（2019年6月迁移）

## 四个后端支持

| 后端 | 平台 | 实现方式 | 备注 |
|------|------|----------|------|
| **Windows** | Windows | hid.dll | Windows HID API |
| **Linux/hidraw** | Linux | Kernel hidraw driver | 支持 USB 和蓝牙 HID |
| **libusb** | Linux/BSD/UNIX | libusb-1.0 | 仅支持 USB，不支持蓝牙 |
| **macOS** | macOS | IOHidManager | macOS 原生 HID API |

## Linux 后端选择

在 Linux 上可选择 hidraw 或 libusb 后端：
- **hidraw**: 通过内核 hidraw 接口，支持 USB 和蓝牙 HID
- **libusb**: 直接 USB 通信，不支持蓝牙 HID

编译时通过链接不同库选择：`libhidapi-libusb` 或 `libhidapi-hidraw`

## 关键特性

1. **跨平台**: 单一 API，四个平台后端
2. **嵌入式支持**: 可直接嵌入源码（单头文件 + 单源文件）
3. **共享库**: 可编译为 `.so`, `.dll`, `.dylib`
4. **设备枚举**: 支持按 VID/PID/Serial 打开设备
5. **字符串查询**: 支持读取厂商、产品、序列号字符串

## API 示例

```c
#include <hidapi.h>

// 初始化
hid_init();

// 打开设备（VID:PID）
hid_device *handle = hid_open(0x4d8, 0x3f, NULL);

// 读取厂商字符串
wchar_t wstr[MAX_STR];
hid_get_manufacturer_string(handle, wstr, MAX_STR);

// 写入数据
buf[0] = 0x0;  // Report ID
buf[1] = 0x80; // Command
hid_write(handle, buf, 65);

// 读取数据
hid_read(handle, buf, 65);

// 关闭设备
hid_close(handle);
hid_exit();
```

## 安装方法

**Ubuntu/Debian**:
```bash
sudo apt install libhidapi-dev
```

**Windows/macOS**: 从源码编译

## udev 规则

Linux 上非 root 用户访问 HID 设备需要 udev 规则：
```
# 参考：udev/69-hid.rules
```

## AI Agent 应用场景

- **键鼠控制**: 通过 HID 协议控制键盘、鼠标
- **游戏手柄**: 读取手柄输入状态
- **工业设备**: USB HID 设备控制（测量仪器、打印机等）
- **自定义 HID**: 与自定义 HID 设备通信

## 相关实体

- [[hidapi]]
- [[USB-HID]]
- [[libusb]]
- [[硬件接口控制]]

## 相关页面

- [[2026-06-28-hidapi-github-readme]]（本页面）
- [[硬件接口控制]]