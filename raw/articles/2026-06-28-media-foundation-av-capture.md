---
source_id: auto-2026-06-28-media-foundation-av-capture
title: Audio/Video Capture in Media Foundation (Microsoft Official)
url: https://learn.microsoft.com/en-us/windows/win32/medfound/audio-video-capture-in-media-foundation
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: protocol
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# Audio/Video Capture in Media Foundation

## 概述

Microsoft Media Foundation 是 Windows Vista+ 的多媒体框架，支持音视频捕获。视频捕获通过 UVC 1.1 兼容驱动，音频捕获通过 WASAPI。

## 核心接口

### IMFMediaSource

捕获设备在 Media Foundation 中由 media source 对象表示，实现 `IMFMediaSource` 接口。

### 设备枚举流程

```cpp
// 1. 创建属性存储
MFCreateAttributes(&pConfig, 1);

// 2. 设置搜索条件
// 视频设备
pConfig->SetGUID(MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE, 
    MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_VIDCAP_GUID);
// 或音频设备
pConfig->SetGUID(MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE, 
    MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_AUDCAP_GUID);

// 3. 枚举设备
MFEnumDeviceSources(pConfig, &ppDevices, &count);

// 4. 激活设备
ppDevices[0]->ActivateObject(IID_PPV_ARGS(ppSource));
```

### 关键属性

| 属性 | 说明 |
|------|------|
| `MF_DEVSOURCE_ATTRIBUTE_FRIENDLY_NAME` | 设备显示名称 |
| `MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_VIDCAP_SYMBOLIC_LINK` | 视频设备符号链接（唯一标识） |
| `MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_AUDCAP_ENDPOINT_ID` | 音频端点 ID |

## 数据流架构

```
捕获设备 → IMFMediaSource → Source Reader → 应用程序
                              ↓
                         Sink Writer (文件捕获)
                         DirectX (视频预览)
                         WASAPI (音频预览)
```

## 与 OpenCV 的关系

OpenCV 的 `CAP_MSMF` 后端底层调用 Media Foundation:
- 枚举设备使用 `MFEnumDeviceSources`
- 创建媒体源使用 `MFCreateDeviceSource`
- 控制捕获使用 Source Reader

## AI Agent 应用场景

1. **企业级视频捕获**: 需要稳定可靠的音视频采集
2. **Windows 集成**: 与 Windows 系统深度集成
3. **高清捕获**: 支持高清和 4K 视频源
4. **音频处理**: 配合 WASAPI 实现复杂音频处理

## 历史演进

- **DirectShow**: Windows XP 及更早版本，已过时
- **Media Foundation**: Windows Vista+ 推荐方案
- **Modern APIs**: UWP `MediaCapture` API (Windows 10+)

## 注意事项

- 必须调用 `Shutdown()` 释放资源，否则内存泄漏
- 视频设备需兼容 UVC 1.1
- Windows N/K 版本需要安装 Media Feature Pack
