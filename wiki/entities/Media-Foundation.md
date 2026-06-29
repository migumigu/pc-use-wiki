---
tags: [硬件接口控制, Windows, 多媒体, 官方文档]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-media-foundation-av-capture.md]
---

# Media Foundation

> Windows Vista+ 现代多媒体框架，推荐的视频捕获方案

## 概述

Microsoft Media Foundation 是 Windows Vista+ 的多媒体框架，提供音视频捕获、播放、编码等功能。是 DirectShow 的现代替代方案。

## 核心接口

| 接口 | 功能 |
|------|------|
| `IMFMediaSource` | 媒体源（代表捕获设备） |
| `IMFActivate` | 设备激活对象 |
| `IMFAttributes` | 属性存储 |
| Source Reader | 控制捕获、获取媒体样本 |
| Sink Writer | 编码写入文件 |

## 设备枚举

```cpp
// 1. 创建属性存储
IMFAttributes *pConfig = NULL;
MFCreateAttributes(&pConfig, 1);

// 2. 设置视频捕获类型
pConfig->SetGUID(
    MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE,
    MF_DEVSOURCE_ATTRIBUTE_SOURCE_TYPE_VIDCAP_GUID
);

// 3. 枚举设备
IMFActivate **ppDevices = NULL;
UINT32 count = 0;
MFEnumDeviceSources(pConfig, &ppDevices, &count);

// 4. 激活第一个设备
IMFMediaSource *pSource = NULL;
ppDevices[0]->ActivateObject(IID_PPV_ARGS(&pSource));
```

## 与 OpenCV 的关系

OpenCV 的 `CAP_MSMF` 后端底层调用 Media Foundation：

| OpenCV | Media Foundation |
|--------|-----------------|
| `cv2.CAP_MSMF` | Media Foundation API |
| 设备枚举 | `MFEnumDeviceSources` |
| 创建设备 | `MFCreateDeviceSource` |
| 获取帧 | Source Reader |

## DirectShow vs Media Foundation

| 方面 | DirectShow | Media Foundation |
|------|------------|------------------|
| 首次引入 | Windows 95 | Windows Vista |
| 状态 | Legacy | **推荐** |
| 64位支持 | 有限 | 完全支持 |
| UVC 支持 | 有限 | 完整 |

## AI Agent 应用

Media Foundation 是 Windows 平台 AI Agent 进行视频捕获的基础：

1. **企业级视频捕获**: 稳定可靠
2. **高清支持**: 720p/1080p/4K
3. **音频捕获**: 配合 WASAPI
4. **跨应用**: DirectX 显示、XWMA 编码

## 相关页面

- [[OpenCV]] — 使用 Media Foundation 的 CV 库
- [[VideoCapture]] — OpenCV 封装
- [[DirectShow]] — 遗留 API
- [[硬件接口控制]] — 所属主题
