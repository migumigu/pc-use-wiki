---
source_id: auto-2026-06-28-opencv-github
title: OpenCV GitHub Repository & Wiki
url: https://github.com/opencv/opencv
source_type: github_readme
tier: 1
control_object: hardware
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# OpenCV GitHub Repository

## 项目概览

- **Stars**: 76K+
- **主仓库**: opencv/opencv
- **额外模块**: opencv/opencv_contrib
- **测试数据**: opencv/opencv_extra

## 核心仓库说明

| 仓库 | 说明 |
|------|------|
| opencv | 核心仓库，包含稳定算法、构建脚本 |
| opencv_contrib | 实验性/不稳定算法，需要主仓库 |
| opencv_extra | 测试数据和杂项文件 |

## 版本信息

- **最新稳定版**: 4.13.0
- **夜间构建**: 4.x, 5.x (开发中)
- **文档**: https://docs.opencv.org/

## OpenCV 架构

```
opencv (主仓库)
├── core/          - 核心类型和函数
├── imgproc/       - 图像处理
├── video/         - 视频分析
├── calib3d/       - 相机校准和3D重建
├── feature2d/      - 2D特征检测
├── objdetect/     - 对象检测
├── videoio/       - 视频捕获 ★ (本次研究重点)
├── highgui/       - GUI
└── ...
```

## VideoIO 模块 (视频捕获)

`videoio` 模块是 OpenCV 处理视频捕获的核心模块:

```python
import cv2

# 列出可用后端
backends = cv2.videoio_registry.getBackends()
print(backends)

# 打开摄像头
cap = cv2.VideoCapture(0, cv2.CAP_MSMF)  # Windows Media Foundation
# 或
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)  # DirectShow (legacy)

# 获取后端名称
print(cap.getBackendName())  # e.g., "MFVideoReader"
```

## VideoCapture 后端支持

| 后端 | 平台 | 状态 |
|------|------|------|
| CAP_ANY | 全部 | 自动检测 |
| CAP_MSMF | Windows | 推荐 (Win10+) |
| CAP_DSHOW | Windows | 遗留 (WinXP-era) |
| CAP_V4L/V4L2 | Linux | 推荐 |
| CAP_AVFOUNDATION | macOS/iOS | 推荐 |

## 与 AI Agent 的关联

OpenCV 是实现 AI Agent 硬件感知能力的基础:

1. **视觉输入**: 摄像头 → VideoCapture → Agent 视觉处理
2. **跨平台**: Windows/Linux/macOS 统一 API
3. **生态成熟**: 76K+ Stars，社区成熟，文档完善
4. **Python 优先**: opencv-python 使 AI Agent 集成更便捷

## 资源链接

- 官网: https://opencv.org/
- 论坛: https://forum.opencv.org/
- 许可证: Apache 2.0
