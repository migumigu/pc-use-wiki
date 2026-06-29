---
source_id: auto-2026-06-28-directshow-legacy
title: DirectShow (Legacy) - Microsoft Official Documentation
url: https://learn.microsoft.com/en-us/windows/win32/directshow/directshow
source_type: official_docs
tier: 2
control_object: hardware
tech_layer: protocol
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# DirectShow (Legacy API)

## 官方立场

> **DirectShow is a legacy feature.** It has been superseded by MediaPlayer, IMFMediaEngine, and Audio/Video Capture in Media Foundation. Microsoft strongly recommends that new code use **MediaPlayer**, **IMFMediaEngine** and **Audio/Video Capture in Media Foundation** instead of DirectShow, when possible.

## 概述

DirectShow 是 Windows 平台的多媒体流架构，用于高质量视频和音频播放或捕获。

## 技术定位

| 方面 | DirectShow | Media Foundation |
|------|------------|------------------|
| 首次引入 | Windows 95 | Windows Vista |
| 状态 | 遗留（Legacy） | 推荐 |
| 复杂度 | 较低 | 较高 |
| 64位支持 | 有限 | 完全支持 |

## OpenCV 中的 DirectShow

在 OpenCV 中，`CAP_DSHOW` 后端使用 DirectShow:

```python
import cv2

# 强制使用 DirectShow
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
```

## API 标识

```cpp
// OpenCV VideoCaptureAPIs
CAP_DSHOW  // DirectShow (via videoInput)
CAP_MSMF   // Microsoft Media Foundation
```

## Windows SDK 位置

DirectShow 头文件、库、SDK 工具和示例位于 Windows SDK。

**历史**: 早期版本在 DirectX SDK 中，最后一个包含 DirectShow 的版本是 DirectX 9.0 SDK Update (February 2005)。

## AI Agent 使用建议

### 不推荐用于新项目

1. **维护状态**: Microsoft 明确表示是遗留功能
2. **64位问题**: 64位应用程序支持有限
3. **未来兼容**: 可能在未来 Windows 版本中移除

### 兼容场景

- 遗留系统维护
- 旧硬件设备兼容
- 需要 CAM_DSHOW 特定行为时

## 迁移指南

```cpp
// DirectShow (旧)
IMFMediaSource *pSource = NULL;
// ... 使用 DirectShow API ...

// Media Foundation (新 - 推荐)
IMFMediaSource *pSource = NULL;
// ... 使用 MFEnumDeviceSources + MFCreateDeviceSource ...
```

## 结论

对于 AI Agent 开发，**应使用 Media Foundation (CAP_MSMF)** 而非 DirectShow (CAP_DSHOW)。DirectShow 仅在需要兼容旧系统时使用。
