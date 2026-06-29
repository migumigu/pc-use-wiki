---
tags: [硬件接口控制, USB, 视频协议]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-media-foundation-av-capture.md]
---

# UVC (USB Video Class)

> USB 摄像头通用协议，Media Foundation 支持的标准

## 概述

UVC（USB Video Class）是 USB 组织定义的 USB 设备类规范，用于 USB 视频设备（如摄像头）的标准化通信。

## 技术规格

- **版本**: UVC 1.1（当前主流）
- **兼容性**: USB 2.0/3.0/3.1
- **支持设备**: USB 摄像头、 webcam、视频采集卡

## Media Foundation 与 UVC

根据 Microsoft 官方文档：

> Video capture devices are supported through the **UVC class driver** and must be compatible with **UVC 1.1**.

这意味着：
1. UVC 摄像头即插即用
2. Media Foundation 提供统一接口
3. 无需厂商专用驱动

## 技术栈层次

```
AI Agent (VideoCapture API)
    ↓
OpenCV videoio 模块
    ↓
Media Foundation (CAP_MSMF)
    ↓
UVC Class Driver (系统内置)
    ↓
USB 摄像头硬件
```

## AI Agent 应用

对于 AI Agent，UVC 是摄像头连接的基础：

1. **即插即用**: 大多数 USB 摄像头支持 UVC
2. **跨平台**: Windows/Linux/macOS 都有 UVC 支持
3. **标准化**: 统一接口简化开发

## 相关页面

- [[Media Foundation]] — Windows UVC 上层接口
- [[VideoCapture]] — OpenCV 封装
- [[OpenCV]] — 跨平台 CV 库
- [[硬件接口控制]] — 所属主题
