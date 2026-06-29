---
source_id: auto-2026-06-28-opencv-python-pypi
title: opencv-python PyPI Official Package
url: https://pypi.org/project/opencv-python/
source_type: official_docs
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# opencv-python PyPI Official Package

## 概述

opencv-python 是 OpenCV 的 Python 绑定包，提供预编译的二进制 wheels，无需手动编译即可使用。

## 版本信息

- **最新版本**: 4.13.0.92
- **发布日期**: 2026-02-05
- **许可证**: Apache 2.0
- **Python 要求**: >= 3.6

## 包选项

| 包名 | 说明 |
|------|------|
| `opencv-python` | 主模块包（推荐） |
| `opencv-contrib-python` | 完整包（含 extra modules） |
| `opencv-python-headless` | 无 GUI 版本（服务器/Docker） |
| `opencv-contrib-python-headless` | 完整无 GUI 版本 |

## 安装方式

```bash
# 标准桌面环境
pip install opencv-python

# 服务器/容器环境（无 GUI）
pip install opencv-python-headless
```

## Windows 依赖

1. **Visual C++ Redistributable 2015** - 必须安装
2. **Universal C Runtime** - Windows 10 以下需要
3. **Media Feature Pack** - Windows N/K 版本需要
4. **Media Foundation** - Windows Server 需要

## OpenCV 与 Media Foundation

根据 PyPI 文档:
- Windows Server 2012+ 需要安装 "Media Foundation" Feature
- opencv-python 的 `CAP_MSMF` 后端依赖 Media Foundation
- 缺少 Media Foundation 会导致 `ImportError: DLL load failed`

## 核心使用

```python
import cv2

# 打开摄像头
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)

if not cap.isOpened():
    print("无法打开摄像头")
    exit()

# 读取帧
ret, frame = cap.read()

# 设置属性
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)

# 释放
cap.release()
```

## AI Agent 集成价值

1. **跨平台一致性**: Windows/Linux/macOS 统一 API
2. **Python 生态**: 便于与 LangChain、AutoGPT 等集成
3. **预编译包**: 无需编译，直接 pip install
4. **Headless 支持**: 适合 Docker 容器化部署

## GitHub 数据

- **Stars**: 76K+ (主仓库 opencv/opencv)
- **维护者**: OpenCV Team
- **仓库**: https://github.com/opencv/opencv-python

## 与 Computer Use 的关系

opencv-python 提供的 VideoCapture 是实现 AI Agent 视觉输入的基础组件，可用于:
- 实时摄像头捕获作为 Agent 视觉输入
- 屏幕截图处理
- 视频流分析
