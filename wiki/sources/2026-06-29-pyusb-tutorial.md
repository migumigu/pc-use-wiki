---
tags: [PyUSB, USB, 教程]
created: 2026-06-29
updated: 2026-06-29
sources: [raw/articles/2026-06-29-pyusb-tutorial.md]
---

# PyUSB 1.0 Tutorial

> PyUSB 官方教程，详细介绍设备发现、配置和通信

## 核心模块

| 模块 | 功能 | 核心函数 |
|------|------|----------|
| usb.core | 设备发现与管理 | `find()`, `Device`, `Configuration` |
| usb.util | 工具函数 | `find_descriptor()`, endpoint 判断 |
| usb.control | 控制传输 | 标准 USB 控制请求 |
| usb.backend | 后端抽象 | `IBackend`, `libusb1.get_backend()` |

## 设备发现示例

```python
import usb.core

# 查找特定设备
dev = usb.core.find(idVendor=0xfffe, idProduct=0x0001)

# 查找所有设备
devices = list(usb.core.find(find_all=True))

# 自定义匹配（查找所有打印机）
class find_class(object):
    def __init__(self, class_):
        self._class = class_
    def __call__(self, device):
        if device.bDeviceClass == self._class:
            return True
        for cfg in device:
            intf = usb.util.find_descriptor(cfg, bInterfaceClass=self._class)
            if intf is not None:
                return True
        return False
```

## USB 传输类型

| 传输类型 | 用途 | 特点 |
|----------|------|------|
| Control | 设备管理 | 双向，低带宽 |
| Bulk | 数据传输 | 高带宽，无时序保证 |
| Interrupt | 状态更新 | 低延迟，小数据 |
| Isochronous | 流媒体 | 实时，带宽保证 |

## 关键概念

- **Configuration**：设备必须配置后才能通信
- **Interface**：配置内的逻辑设备（如打印机+扫描仪）
- **Alternate Setting**：接口的不同模式
- **Endpoint**：通信通道
- **bus/address**：设备位置标识（区分相同设备）

## 相关页面

- [[PyUSB]] — 实体页
- [[硬件接口控制]] — 主题页
