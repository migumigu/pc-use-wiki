---
tags: [硬件接口控制, 视频捕获, API]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-opencv-videocapture-official.md]
---

# VideoCapture

> OpenCV 视频捕获统一 API

## 概述

VideoCapture Class 是 OpenCV 用于从摄像头、视频文件或图像序列捕获视频的统一接口。

## 核心方法

| 方法 | 功能 |
|------|------|
| `open()` | 打开视频或摄像头 |
| `isOpened()` | 检查是否成功打开 |
| `read()` | 读取下一帧 |
| `grab()` | 抓取帧（多摄像头同步） |
| `retrieve()` | 解码抓取的帧 |
| `release()` | 关闭 |
| `get(propId)` | 获取属性 |
| `set(propId, value)` | 设置属性 |

## 构造函数

```python
# 打开摄像头
cv2.VideoCapture(index, apiPreference)

# 打开视频文件
cv2.VideoCapture(filename, apiPreference)

# 示例
cap = cv2.VideoCapture(0)                    # 自动选择
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)     # Media Foundation
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)    # DirectShow (遗留)
```

## Windows 后端选择

| 后端 | 推荐度 | 说明 |
|------|--------|------|
| `CAP_ANY` | ★★★ | 自动检测（默认） |
| `CAP_MSMF` | ★★★ | Media Foundation（**推荐**） |
| `CAP_DSHOW` | ★ | DirectShow（遗留，不推荐） |

## 属性

| 属性 | 说明 |
|------|------|
| `CAP_PROP_FRAME_WIDTH` | 帧宽度 |
| `CAP_PROP_FRAME_HEIGHT` | 帧高度 |
| `CAP_PROP_FPS` | 帧率 |
| `CAP_PROP_FORMAT` | 格式 |

## AI Agent 应用

VideoCapture 是 AI Agent 获取视觉输入的核心组件：

```python
import cv2

def capture_frame():
    cap = cv2.VideoCapture(0, cv2.CAP_MSMF)
    if not cap.isOpened():
        return None
    ret, frame = cap.read()
    cap.release()
    return frame if ret else None
```

## 相关页面

- [[OpenCV]] — 所属库
- [[Media Foundation]] — Windows 底层后端
- [[DirectShow]] — 遗留后端
- [[硬件接口控制]] — 所属主题
