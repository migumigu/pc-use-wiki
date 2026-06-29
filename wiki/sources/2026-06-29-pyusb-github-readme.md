---
tags: [PyUSB, USB, 硬件控制]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-pyusb-github-readme.md]
---

# PyUSB GitHub README

> Python 生态中最主流的 USB 设备控制库，33,800+ GitHub 项目依赖

## 核心信息

**项目定位**：Python USB 设备访问库，为 AI Agent 提供控制 USB 外设的能力

**关键特性**：
- 100% Python 实现（使用 ctypes）
- 后端中立架构（支持 libusb 1.0/0.1、OpenUSB）
- 跨平台支持（Linux、macOS、Windows）
- 支持 USB 1.0-4.0 全协议栈

**统计数据**：
- 依赖项目：33,800+
- 最新版本：v1.3.1（2025-01-08）
- 许可证：BSD-3-Clause

## 安装方式

```bash
pip install pyusb
```

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

## 相关页面

- [[PyUSB]] — 实体页
- [[libusb]] — 底层 USB 库
- [[硬件接口控制]] — 主题页
