---
tags: [硬件接口控制, 视频捕获, 官方文档, 遗留]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-directshow-legacy-api.md]
---

# DirectShow (Legacy API)

> Microsoft 遗留视频捕获 API，已被 Media Foundation 取代

## 基本信息

- **来源**: Microsoft Learn 官方文档
- **类型**: 官方文档（遗留）
- **控制对象**: 硬件接口控制
- **技术层级**: 协议接口层
- **状态**: Legacy（遗留）

## 官方声明

> **DirectShow is a legacy feature.** It has been superseded by MediaPlayer, IMFMediaEngine, and Audio/Video Capture in Media Foundation.

## 技术定位

| 方面 | DirectShow | Media Foundation |
|------|------------|------------------|
| 首次引入 | Windows 95 | Windows Vista |
| 状态 | 遗留 | 推荐 |
| 64位支持 | 有限 | 完全支持 |

## OpenCV 中的 DirectShow

```python
# 强制使用 DirectShow（不推荐）
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

# 推荐：使用 Media Foundation
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)
```

## 迁移指南

新代码应使用 Media Foundation：
- `MFEnumDeviceSources` 替代设备枚举
- `MFCreateDeviceSource` 替代媒体源创建
- Source Reader 替代捕获控制

## AI Agent 使用建议

- **不推荐用于新项目**
- **仅用于兼容旧系统**

## 相关页面

- [[Media Foundation]] — 推荐的新一代 API
- [[OpenCV]] — 底层使用这些 API
- [[VideoCapture]] — OpenCV 封装
