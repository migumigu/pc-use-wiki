---
tags: [py-cpuinfo, CPU信息, 硬件检测, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [../../raw/articles/2026-06-28-py-cpuinfo-github-readme.md]
---

# py-cpuinfo GitHub README

> 纯Python CPU信息检测库

## 核心信息

- **类型**：GitHub README
- **来源**：https://github.com/workhorsy/py-cpuinfo
- **置信度**：EXTRACTED

## 关键内容

### 功能定位
py-cpuinfo使用纯Python获取CPU信息，无需编译，支持多种架构和操作系统。

### 核心功能
- `get_cpu_info()`：返回CPU信息字典
- `get_cpu_info_json()`：返回JSON格式CPU信息

### 返回字段
- CPU型号、频率、架构
- 缓存信息（L1/L2/L3）
- 处理器数量、核心数
- CPU标志（flags）

### 平台支持
- Linux、Windows、macOS
- BSD、Solaris、Haiku

### 信息来源策略
- Windows Registry
- `/proc/cpuinfo`（Linux）
- `sysctl`（macOS）
- CPUID寄存器查询（Intel X86）

### 适用场景
- Agent检测硬件能力选择执行策略
- 系统信息收集和报告

## 相关页面

- [[py-cpuinfo]] — 实体页
- [[系统服务控制]] — 主题页
- [[psutil]] — 同类工具