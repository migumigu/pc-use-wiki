---
tags: [硬件接口控制, 视频捕获, 官方文档, Windows]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-media-foundation-av-capture.md]
---

# Audio/Video Capture in Media Foundation

> Microsoft 官方多媒体捕获框架

## 基本信息

- **来源**: Microsoft Learn 官方文档
- **类型**: 官方文档
- **控制对象**: 硬件接口控制
- **技术层级**: 协议接口层

## 核心概述

Media Foundation 是 Windows Vista+ 的现代多媒体框架，支持音视频捕获。视频通过 UVC 1.1 驱动，音频通过 WASAPI。

## 关键 API

| 接口/函数 | 功能 |
|-----------|------|
| `IMFMediaSource` | 媒体源接口 |
| `MFEnumDeviceSources` | 枚举捕获设备 |
| `MFCreateDeviceSource` | 创建设备源 |
| `Source Reader` | 控制捕获、获取样本 |

## 设备枚举流程

```cpp
// 1. 创建属性存储
MFCreateAttributes(&pConfig, 1);

// 2. 设置设备类型
pConfig->SetGUID(MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE, 
    MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_VIDCAP_GUID);

// 3. 枚举设备
MFEnumDeviceSources(pConfig, &ppDevices, &count);

// 4. 激活设备
ppDevices[0]->ActivateObject(IID_PPV_ARGS(ppSource));
```

## 与 OpenCV 的关系

OpenCV 的 `CAP_MSMF` 后端底层调用 Media Foundation：
- 枚举设备 → `MFEnumDeviceSources`
- 创建设备 → `MFCreateDeviceSource`
- 控制捕获 → Source Reader

## 相关页面

- [[OpenCV]] — 使用 Media Foundation 的跨平台 CV 库
- [[VideoCapture]] — OpenCV 视频捕获类
- [[DirectShow]] — 遗留 API
- [[UVC]] — USB 视频类协议
