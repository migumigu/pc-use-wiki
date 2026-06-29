---
tags: [硬件接口控制, 计算机视觉, GitHub, 88KStars]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-opencv-github-repo.md]
---

# OpenCV GitHub Repository

> 世界最流行的开源计算机视觉库，88K+ Stars

## 基本信息

- **来源**: GitHub opencv/opencv
- **类型**: GitHub README
- **控制对象**: 硬件接口控制
- **技术层级**: 工具实现层
- **Stars**: 88K+（2026-06）

## 核心概述

OpenCV（Open Source Computer Vision Library）是跨平台计算机视觉和机器学习软件库，拥有超过 2500 个优化算法。

## 仓库结构

| 仓库 | 说明 |
|------|------|
| opencv | 核心仓库，稳定算法 |
| opencv_contrib | 实验性模块 |
| opencv_extra | 测试数据 |

## 版本信息

- **最新稳定版**: 4.13.0
- **文档**: https://docs.opencv.org/

## videoio 模块

`videoio` 是 OpenCV 处理视频捕获的核心模块：

```python
import cv2

# 打开摄像头（自动选择后端）
cap = cv2.VideoCapture(0)

# 强制使用 Media Foundation
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)

# 获取后端名称
print(cap.getBackendName())  # e.g., "MFVideoReader"
```

## 视频捕获后端支持

| 后端 | 平台 | 状态 |
|------|------|------|
| CAP_ANY | 全部 | 自动检测 |
| CAP_MSMF | Windows | **推荐** |
| CAP_DSHOW | Windows | 遗留 |
| CAP_V4L2 | Linux | **推荐** |
| CAP_AVFOUNDATION | macOS | **推荐** |

## AI Agent 集成价值

OpenCV 是实现 AI Agent 硬件感知能力的基础：
- 视觉输入：摄像头 → VideoCapture → Agent
- 跨平台：Windows/Linux/macOS 统一 API
- 生态成熟：88K+ Stars，社区完善

## 相关页面

- [[OpenCV]] — 计算机视觉库
- [[VideoCapture]] — 视频捕获类
- [[opencv-python]] — Python 绑定包
- [[Media Foundation]] — Windows 后端
