---
tags: [硬件接口控制, 视频捕获, 官方文档]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-opencv-videocapture-official.md]
---

# OpenCV VideoCapture Class Reference

> OpenCV 官方视频捕获类，跨平台统一 API

## 基本信息

- **来源**: OpenCV 官方文档 (docs.opencv.org)
- **类型**: 官方文档
- **控制对象**: 硬件接口控制
- **技术层级**: 工具实现层

## 核心概述

OpenCV VideoCapture Class 是用于从视频文件、图像序列或摄像头捕获视频的统一 C++/Python API。它是计算机视觉应用中访问摄像头的主流方式。

## 关键能力

| 能力 | 说明 |
|------|------|
| 摄像头捕获 | `cv2.VideoCapture(index)` |
| 视频文件读取 | `cv2.VideoCapture(filename)` |
| 属性获取 | `get(propId)` |
| 属性设置 | `set(propId, value)` |
| 帧读取 | `read()` |

## Windows 后端

| API | 说明 | 状态 |
|-----|------|------|
| `CAP_MSMF` | Microsoft Media Foundation | **推荐** |
| `CAP_DSHOW` | DirectShow | 遗留 |
| `CAP_ANY` | 自动检测 | 默认 |

## 架构层次

```
应用层: VideoCapture API
    ↓
后端层: DShow / MSMF / V4L2
    ↓
系统层: Media Foundation / DirectShow
    ↓
驱动层: UVC 驱动
```

## 相关页面

- [[OpenCV]] — 跨平台计算机视觉库
- [[Media Foundation]] — Windows 多媒体框架
- [[DirectShow]] — 遗留视频捕获 API
- [[UVC]] — USB 视频类协议
