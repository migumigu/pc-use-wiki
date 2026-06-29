---
tags: [hidapi, USB-HID, 跨平台库, C语言, 硬件接口]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-hidapi-github-readme.md]
---

# hidapi

> 跨平台 USB HID 设备通信库，支持 Windows、Linux、FreeBSD、macOS

## 基本信息

- **GitHub**: https://github.com/libusb/hidapi
- **Stars**: 2,500+
- **Version**: 0.16.0
- **License**: BSD-3-Clause / GPL-3.0 / Original
- **语言**: C (82.6%), CMake (6.2%)
- **维护方**: libusb organization（2019年6月迁移）
- **原始开发者**: Alan Ott (signal11)

## 类型定位

- **控制对象**: 硬件接口控制（USB HID 设备）
- **技术层级**: 工具实现层
- **项目状态**: Production/Stable

## 四个后端支持

| 后端 | 平台 | 实现方式 | HID 类型支持 |
|------|------|----------|--------------|
| **Windows** | Windows | hid.dll | USB HID |
| **Linux/hidraw** | Linux | Kernel hidraw driver | USB + Bluetooth HID |
| **libusb** | Linux/BSD/UNIX | libusb-1.0 | 仅 USB HID |
| **macOS** | macOS | IOHidManager | USB HID |

## 核心能力

### 设备访问
- 按 VID/PID/Serial Number 打开设备
- 设备枚举和发现
- 支持热插拔设备

### 数据通信
- Input Reports（输入报告）
- Output Reports（输出报告）
- Feature Reports（特性报告）

### 设备信息
- Manufacturer String（厂商字符串）
- Product String（产品字符串）
- Serial Number（序列号）
- Indexed String（索引字符串）

## AI Agent 应用场景

### 键鼠控制
通过 HID 协议控制键盘、鼠标输入，实现自动化操作。

### 游戏手柄读取
读取游戏手柄输入状态，用于游戏自动化或测试。

### 工业设备控制
- USB HID 测量仪器
- USB HID 打印机
- 自定义 HID 设备

### 嵌入式设备通信
与 Arduino、STM32 等 HID 设备通信。

## 安装方法

**Ubuntu/Debian**:
```bash
sudo apt install libhidapi-dev
```

**Windows/macOS**: 从源码编译

**嵌入源码**:
单头文件 `hidapi.h` + 单源文件（按平台）

## API 核心函数

```c
// 初始化
hid_init()
hid_exit()

// 设备管理
hid_open(vid, pid, serial)
hid_open_path(path)
hid_close(handle)

// 数据读写
hid_write(handle, data, length)
hid_read(handle, data, length)
hid_read_timeout(handle, data, length, timeout)

// 设备信息
hid_get_manufacturer_string(handle, string, maxlen)
hid_get_product_string(handle, string, maxlen)
hid_get_serial_number_string(handle, string, maxlen)
```

## udev 规则（Linux）

非 root 用户访问 HID 设备需要 udev 规则：
```
# 参考：udev/69-hid.rules
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", MODE="0664", GROUP="plugdev"
```

## 相关实体

- [[USB-HID]] - HID 协议标准
- [[libusb]] - USB 底层库
- [[硬件接口控制]] - 研究主题
- [[串口通信]] - 另一种硬件通信方式

## 相关页面

- [[2026-06-28-hidapi-github-readme]] - 素材来源
- [[硬件接口控制]] - 所属主题