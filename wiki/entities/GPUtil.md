---
tags: [GPUtil, GPU监控, NVIDIA, Python库, 系统监控]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-gputil-github-readme.md]
---

# GPUtil

> Python模块，通过nvidia-smi获取NVIDIA GPU状态

## 基本信息

- **类型**：Python库
- **GitHub**：github.com/anderskm/gputil
- **License**：MIT
- **维护状态**：活跃（最近提交2026年4月）

## 一句话摘要

GPUtil是一个纯Python模块，通过解析nvidia-smi输出获取NVIDIA GPU状态，支持GPU可用性检测和多GPU管理，是AI Agent进行GPU资源感知和分配的核心工具。

## 核心能力

### GPU状态监控
- 获取所有GPU的负载、内存使用情况
- 获取GPU型号、驱动版本、UUID

### 可用性检测
- `getAvailable()`：根据负载和内存阈值筛选可用GPU
- `getFirstAvailable()`：获取首个可用GPU，支持重试机制

### 格式化输出
- `showUtilization()`：显示所有GPU使用状态

## GPU类属性

| 属性 | 描述 |
|------|------|
| `id` | GPU索引（重启后可能变化） |
| `uuid` | 全局唯一标识符 |
| `load` | 相对负载（0-1） |
| `memoryUtil` | 相对内存使用（0-1） |
| `memoryTotal` | 总内存 |
| `memoryUsed` | 已用内存 |
| `memoryFree` | 可用内存 |
| `driver` | 驱动版本 |
| `name` | 产品名称 |

## 平台支持

- Linux、Windows
- 依赖NVIDIA驱动和nvidia-smi

## 局限性

- 仅支持NVIDIA GPU
- 不支持AMD/Intel GPU
- 不支持GPU性能指标实时监控

## Agent集成价值

GPUtil可作为AI Agent的"GPU资源感知器"：

```python
# Agent选择可用GPU
import GPUtil
deviceIDs = GPUtil.getAvailable(maxLoad=0.5, maxMemory=0.5)
if deviceIDs:
    os.environ["CUDA_VISIBLE_DEVICES"] = str(deviceIDs[0])
```

## 与同类工具对比

| 工具 | GPU监控 | 跨平台 | 纯Python | 维护状态 |
|------|---------|--------|----------|----------|
| **GPUtil** | ✅ 专业 | ⚠️ NVIDIA | ✅ | ✅ 活跃 |
| psutil | ❌ | ✅ | ✅ | ✅ 活跃 |
| pywin32 | ❌ | ❌ Windows | ❌ | ⚠️ 稳定 |

## 相关页面

- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具
- [[2026-06-28-gputil-github-readme]] — 素材摘要