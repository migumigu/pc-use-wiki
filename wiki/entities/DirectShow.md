---
tags: [硬件接口控制, Windows, 视频捕获, 遗留]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-directshow-legacy-api.md]
---

# DirectShow

> Windows 遗留视频捕获 API，已被 Media Foundation 取代

## 概述

DirectShow 是 Windows 平台的多媒体流架构，用于高质量视频和音频播放或捕获。是 Windows 95/XP 时代的主流方案。

## 官方状态

> **DirectShow is a legacy feature.** It has been superseded by MediaPlayer, IMFMediaEngine, and Audio/Video Capture in Media Foundation.

## 技术定位

| 方面 | DirectShow | Media Foundation |
|------|------------|-----------------|
| 首次引入 | Windows 95 | Windows Vista |
| 状态 | **Legacy** | 推荐 |
| 复杂度 | 较低 | 较高 |
| 64位支持 | 有限 | 完全支持 |

## OpenCV 中的 DirectShow

```python
import cv2

# 强制使用 DirectShow（不推荐）
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

# 推荐：使用 Media Foundation
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)
```

## 迁移建议

新项目应使用 Media Foundation：
- `MFEnumDeviceSources` 替代设备枚举
- `MFCreateDeviceSource` 替代媒体源创建
- Source Reader 替代捕获控制

## AI Agent 使用建议

- **不推荐用于新项目开发**
- **仅用于维护遗留系统**
- **Windows XP 等旧系统兼容**

## 相关页面

- [[Media Foundation]] — 推荐替代方案
- [[OpenCV]] — 底层使用这些 API
- [[VideoCapture]] — OpenCV 封装
- [[硬件接口控制]] — 所属主题
