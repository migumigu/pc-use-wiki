---
tags: [工具, C, USB, 硬件控制]
created: 2026-06-28
updated: 2026-06-28
sources: [auto-2026-06-28-libu, auto-2026-06-28-libw]
---

# libusb

> 跨平台 USB 设备访问库，支持 Linux、macOS、Windows 等

## 定义

libusb 是一个 C 语言库，提供通用的 USB 设备访问能力，支持多种操作系统。

## 核心能力

| 能力 | 描述 |
|------|------|
| 设备枚举 | 发现连接的 USB 设备 |
| 配置管理 | USB 设备配置和接口管理 |
| 控制传输 | 发送控制请求 |
| 批量传输 | 高速数据传输 |
| 中断传输 | 实时数据传输 |
| 同步传输 | 等时数据传输 |
| 热插拔检测 | 检测设备连接/断开 |

## 技术特点

- **语言**：C/C++
- **许可证**：LGPL-2.1
- **平台**：Linux、macOS、Windows、Android、WebAssembly
- **USB 协议**：USB 1.0 到 USB 4.0
- **最新版本**：v1.0.30（May 17, 2026）

## 平台后端

| 平台 | 后端技术 |
|------|----------|
| Linux | usbfs |
| macOS | IOKit |
| Windows | WinUSB |
| Android | 原生 USB API |
| WebAssembly | WebUSB API |

## Python 绑定

| 绑定 | 特点 |
|------|------|
| PyUSB | 最常用的 Python 绑定 |
| python-libusb1 | 通过 ctypes 封装 |
| pywinusb | Windows 专用 |

## 适用场景

- USB 设备驱动开发
- USB 协议分析
- 硬件测试和调试
- 嵌入式设备通信

## 相关页面

- [[硬件接口控制]]
- [[hidapi]]
- [[libusb GitHub README]]
- [[libusb Official Website]]
