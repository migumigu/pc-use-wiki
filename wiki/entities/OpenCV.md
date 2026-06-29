---
tags: [硬件接口控制, 计算机视觉, 工具, 88KStars]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-opencv-github-repo.md, ../raw/articles/2026-06-28-opencv-python-pypi.md]
---

# OpenCV

> 世界最流行的开源计算机视觉库，88K+ Stars

## 概述

OpenCV（Open Source Computer Vision Library）是一个跨平台计算机视觉和机器学习软件库，拥有超过 2500 个优化算法。

## 关键数据

- **GitHub Stars**: 88K+（2026-06）
- **语言**: C++（核心）+ Python/JavaScript（绑定）
- **许可**: Apache 2.0
- **最新版本**: 4.13.0

## 核心模块

| 模块 | 功能 |
|------|------|
| core | 核心类型和函数 |
| imgproc | 图像处理 |
| video | 视频分析 |
| videoio | **视频捕获** ★ |
| calib3d | 相机校准和3D重建 |
| objdetect | 对象检测 |

## videoio 模块（视频捕获）

videoio 是 OpenCV 处理摄像头和视频文件捕获的核心模块：

```python
import cv2

# 打开摄像头
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)  # Windows Media Foundation

if not cap.isOpened():
    print("无法打开摄像头")

# 读取帧
ret, frame = cap.read()

# 设置分辨率
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)

cap.release()
```

## AI Agent 集成

OpenCV 是 AI Agent 实现硬件感知的基础：
- **视觉输入**: 摄像头捕获作为 Agent 视觉
- **跨平台**: Windows/Linux/macOS 统一 API
- **Python 友好**: opencv-python 包直接 pip install

## 技术栈定位

OpenCV 处于 AI Agent 技术栈的**工具实现层**：
- 系统基础层: Windows Media Foundation / Linux V4L2
- 协议接口层: UVC 协议
- **工具实现层**: OpenCV videoio
- Agent 集成层: Python + MCP

## 相关页面

- [[VideoCapture]] — OpenCV 视频捕获类
- [[opencv-python]] — Python 绑定包
- [[Media Foundation]] — Windows 底层框架
- [[硬件接口控制]] — 所属主题
