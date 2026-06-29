---
tags: [GPUtil, GPU监控, NVIDIA, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../../raw/articles/2026-06-28-gputil-github-readme.md]
---

# GPUtil GitHub README

> Python模块，通过nvidia-smi获取NVIDIA GPU状态

## 核心信息

- **类型**：GitHub README
- **来源**：https://github.com/anderskm/gputil
- **置信度**：EXTRACTED

## 关键内容

### 功能定位
GPUtil是一个Python模块，用于通过`nvidia-smi`获取NVIDIA GPU状态，定位可用GPU并返回有序列表。

### 核心功能
- `getAvailable()`：根据负载和内存阈值筛选可用GPU
- `getFirstAvailable()`：获取首个可用GPU，支持重试机制
- `showUtilization()`：格式化输出GPU使用状态
- `getGPUs()`：返回所有GPU对象列表

### GPU类属性
- `id`：GPU索引
- `load`：相对负载(0-1)
- `memoryUtil`：相对内存使用(0-1)
- `memoryTotal/Used/Free`：内存信息
- `driver`：驱动版本
- `name`：产品名称

### 平台支持
- Linux、Windows
- 依赖NVIDIA驱动和nvidia-smi

### 适用场景
- AI Agent选择可用GPU执行深度学习任务
- 多GPU环境资源分配决策

## 相关页面

- [[GPUtil]] — 实体页
- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具