---
source_id: auto-2026-06-28-opencv-videocapture
title: OpenCV VideoCapture Class Reference
url: https://docs.opencv.org/4.x/d8/dfe/classcv_1_1VideoCapture.html
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# OpenCV VideoCapture Class Reference

## 概述

OpenCV VideoCapture Class 用于从视频文件、图像序列或摄像头捕获视频。是计算机视觉应用中访问摄像头的主流方式。

## 核心 API

### 构造函数与 open()

```cpp
// 打开摄像头
VideoCapture(int index, int apiPreference = CAP_ANY)
VideoCapture(const String& filename, int apiPreference = CAP_ANY)

// Python
cv.VideoCapture(index[, apiPreference])
cv.VideoCapture(filename[, apiPreference])
```

### 核心方法

| 方法 | 功能 |
|------|------|
| `open()` | 打开视频文件或摄像头 |
| `isOpened()` | 检查是否成功打开 |
| `read()` | 抓取并返回下一帧 |
| `grab()` | 抓取下一帧（多摄像头同步用） |
| `retrieve()` | 解码并返回抓取的帧 |
| `release()` | 关闭视频或摄像头 |
| `get(propId)` | 获取属性值 |
| `set(propId, value)` | 设置属性值 |

### Windows 后端选项

| API | 说明 |
|-----|------|
| `CAP_DSHOW` | DirectShow (via videoInput) |
| `CAP_MSMF` | Microsoft Media Foundation (Windows 10/11 默认) |
| `CAP_ANY` | 自动检测 |

## 关键属性 (VideoCaptureProperties)

- `CAP_PROP_FRAME_WIDTH` - 帧宽度
- `CAP_PROP_FRAME_HEIGHT` - 帧高度
- `CAP_PROP_FPS` - 帧率
- `CAP_PROP_FORMAT` - 格式
- `CAP_PROP_MODE` - 模式

## 架构层次

```
应用层: VideoCapture API
    ↓
后端层: DShow / MSMF / V4L2 / AVFoundation
    ↓
系统层: Windows Media Foundation / Linux V4L2 / macOS AVFoundation
    ↓
驱动层: UVC 驱动 / 硬件设备驱动
```

## AI Agent 应用场景

1. **视觉输入源**: 作为 Computer Use Agent 的摄像头输入
2. **多模态感知**: 为 GUI Agent 提供实时视觉反馈
3. **屏幕录制**: 结合窗口捕获实现桌面监控
4. **视频分析**: 人脸识别、物体检测等 AI 能力的基础

## 相关链接

- 官方文档: https://docs.opencv.org/4.x/d8/dfe/classcv_1_1VideoCapture.html
- GitHub: https://github.com/opencv/opencv
- opencv-python: https://pypi.org/project/opencv-python/
