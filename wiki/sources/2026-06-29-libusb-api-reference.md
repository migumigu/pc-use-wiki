---
tags: [libusb, USB, 系统基础]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-libusb-api-reference.md]
---

# libusb 1.0 API Reference

> 跨平台 USB 设备访问的底层 C 库，PyUSB 的核心依赖

## 核心特性

- **跨平台**：Linux、macOS、Windows、Android、BSD
- **用户态**：无需特殊权限或驱动
- **协议完整**：支持 USB 1.0-4.0
- **线程安全**：异步接口设计

## 传输类型支持

| 传输类型 | 同步接口 | 异步接口 |
|----------|----------|----------|
| Control | ✅ | ✅ |
| Bulk | ✅ | ✅ |
| Interrupt | ✅ | ✅ |
| Isochronous | ✅ | ✅ |

## PyUSB 集成

PyUSB 通过 ctypes 调用 libusb，提供 Pythonic API：

```python
# PyUSB 使用 libusb 作为后端
import usb.core
from usb.backend import libusb1

be = libusb1.get_backend()
dev = usb.core.find(backend=be)
```

## 平台注意事项

| 平台 | 安装方式 | 特殊配置 |
|------|----------|----------|
| Linux | `apt install libusb-1.0-0-dev` | udev 规则 |
| macOS | `brew install libusb` | 无 |
| Windows | 下载 DLL | 驱动安装 |

## 相关页面

- [[libusb]] — 实体页
- [[PyUSB]] — Python 封装库
- [[硬件接口控制]] — 主题页
