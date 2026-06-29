---
tags: [硬件接口控制, Python, 官方文档]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-opencv-python-pypi.md]
---

# opencv-python PyPI Package

> OpenCV Python 绑定包，pip install 即可使用

## 基本信息

- **来源**: PyPI 官方页面
- **类型**: 官方文档
- **控制对象**: 硬件接口控制
- **技术层级**: 工具实现层
- **版本**: 4.13.0.92 (2026-02-05)

## 核心概述

opencv-python 是 OpenCV 的官方 Python 包，提供预编译二进制，无需手动编译即可在 Python 中使用 OpenCV 的全部功能。

## 包选项

| 包名 | 说明 |
|------|------|
| `opencv-python` | 主模块包（推荐） |
| `opencv-contrib-python` | 完整包（含 extra modules） |
| `opencv-python-headless` | 无 GUI 版本（服务器/Docker） |

## 安装

```bash
pip install opencv-python          # 标准桌面
pip install opencv-python-headless  # 服务器/容器
```

## Windows 依赖

- Visual C++ Redistributable 2015
- Media Feature Pack（Windows N 版本）
- Media Foundation（Windows Server）

## AI Agent 集成价值

1. **跨平台一致性**: Windows/Linux/macOS 统一 API
2. **Python 生态**: 便于与 LangChain、AutoGPT 等集成
3. **预编译包**: 无需编译，直接 pip install
4. **Headless 支持**: 适合 Docker 容器化部署

## 相关页面

- [[OpenCV]] — 核心计算机视觉库
- [[VideoCapture]] — 视频捕获 API
- [[OpenCV GitHub]] — 88K+ Stars 官方仓库
