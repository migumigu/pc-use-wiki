---
tags: [PyUSB, USB, Python, 硬件控制]
created: 2026-06-29
updated: 2026-06-29
sources: [wiki/sources/2026-06-29-pyusb-github-readme.md, wiki/sources/2026-06-29-pyusb-tutorial.md]
---

# PyUSB

> Python 生态中最主流的 USB 设备控制库，为 AI Agent 提供访问 USB 外设的核心能力

## 概述

PyUSB 是一个纯 Python 实现的 USB 设备访问库，通过后端抽象层支持跨平台 USB 设备控制。它是 AI Agent 硬件接口控制的关键基础设施，已被 33,800+ GitHub 项目依赖。

## 核心特性

| 特性 | 描述 |
|------|------|
| **纯 Python** | 使用 ctypes 调用 libusb，无需编译 |
| **后端中立** | 支持 libusb 1.0、libusb 0.1、OpenUSB |
| **跨平台** | Linux、macOS、Windows |
| **协议完整** | USB 1.0-4.0 全协议栈支持 |
| **传输类型** | Control、Bulk、Interrupt、Isochronous |

## 架构设计

```
┌─────────────────────────────────────────┐
│         Python 应用层 (Agent)          │
├─────────────────────────────────────────┤
│          PyUSB API 层                   │
│  usb.core | usb.util | usb.control     │
├─────────────────────────────────────────┤
│          后端抽象层 (IBackend)          │
│  libusb1 | libusb0 | openusb           │
├─────────────────────────────────────────┤
│           操作系统 USB 栈               │
└─────────────────────────────────────────┘
```

## 核心模块

| 模块 | 功能 | 核心函数/类 |
|------|------|-------------|
| **usb.core** | 设备发现与管理 | `find()`, `Device`, `Configuration` |
| **usb.util** | 工具函数 | `find_descriptor()`, endpoint 方向判断 |
| **usb.control** | 控制传输 | 标准 USB 控制请求封装 |
| **usb.backend** | 后端抽象 | `IBackend`, `libusb1.get_backend()` |

## 基本用法

```python
import usb.core

# 查找设备
dev = usb.core.find(idVendor=0xfffe, idProduct=0x0001)

# 设置配置
dev.set_configuration()

# 写入数据
dev.write(1, 'test')

# 读取数据
data = dev.read(0x81, 64)
```

## 局限性

- 需要安装 libusb 共享库
- Linux 需要 root 权限或 udev 规则
- Windows 需要特定 USB 驱动
- 纯 Python 实现，高频操作有性能开销
- 同步 API，需通过 asyncio.to_thread() 实现异步

## 与同类工具对比

| 工具 | 定位 | 适用场景 |
|------|------|----------|
| **PyUSB** | 通用 USB 访问 | Agent 硬件控制 |
| **hidapi** | HID 设备专用 | 键盘/鼠标/控制器 |
| **pySerial** | 串口设备 | USB 转串口 |
| **libusb** | C 语言库 | 高性能 C 应用 |

## 统计数据

- 依赖项目：33,800+
- 最新版本：v1.3.1（2025-01-08）
- 许可证：BSD-3-Clause

## 相关页面

- [[libusb]] — 底层 USB 库
- [[hidapi]] — USB HID 设备库
- [[pySerial]] — 串口通信库
- [[硬件接口控制]] — 主题页
