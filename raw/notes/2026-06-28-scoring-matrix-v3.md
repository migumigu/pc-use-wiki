# 自动研究评分矩阵 v3

> 生成日期：2026-06-28
> 研究缺口分析：系统服务控制(5篇)、文件系统控制(5篇)、硬件接口控制(5篇) 均不足10篇

## 候选研究方向

| 方向 | 类型 | 热度指标 | 契合度 | 可获取性 | 研究价值 | 总分 | 排名 |
|------|------|----------|--------|----------|----------|------|------|
| **psutil** | 系统服务控制 | 10 (破万 Stars, 340M+ 月下载) | 10 (进程/系统管理) | 10 (官方文档+GitHub) | 9 (跨平台监控) | **9.65** | **1** |
| **watchdog** | 文件系统控制 | 6 (~4K Stars) | 10 (文件系统监控) | 10 (官方文档+PyPI) | 8 (跨平台文件监控) | **8.40** | **2** |
| **systemd** | 系统服务控制 | N/A (Linux基础设施) | 10 (服务管理) | 8 (man pages) | 10 (核心组件) | **8.30** | **3** |

## 评分依据

### psutil
- **热度**：GitHub Stars 破万，PyPI 每月 340+ million 下载，770,000+ 仓库使用，16,000+ 包依赖
- **契合度**：直接对应"系统服务控制"分类，支持进程管理、系统监控
- **可获取性**：官方文档 psutil.readthedocs.io + GitHub giampaolo/psutil + 活跃维护(2026年6月16日提交)
- **研究价值**：跨平台(Linux/Windows/macOS)、进程管理、CPU/内存/磁盘/网络/传感器监控

### watchdog
- **热度**：GitHub ~4K Stars（估计），PyPI 广泛使用
- **契合度**：直接对应"文件系统控制"分类，实时文件监控
- **可获取性**：官方文档 python-watchdog.readthedocs.io + GitHub gorakhargosh/watchdog + 活跃维护(2026年6月19日提交)
- **研究价值**：跨平台文件监控、事件驱动、Python API

### systemd
- **热度**：Linux 基础设施组件，非传统开源项目
- **契合度**：直接对应"系统服务控制"分类
- **可获取性**：官方 man7.org Linux man pages
- **研究价值**：Linux 服务管理标准、watchdog、journalctl 等核心工具

## 选定方向

**TOP 1: psutil** — 系统服务控制 + 进程管理
- 补充系统服务控制素材缺口
- 与现有 PowerShell、WMI、pywin32 形成完整覆盖

**TOP 2: watchdog** — 文件系统监控
- 补充文件系统控制素材缺口
- 与现有 File System as Context 研究形成互补

## 选择理由

1. **psutil 优先级最高**：
   - 填补系统服务控制素材缺口
   - 跨平台能力对 Agent PC 控制至关重要
   - 与现有 Windows 工具(PowerShell、WMI)形成互补

2. **watchdog 次之**：
   - 填补文件系统控制素材缺口
   - 实时监控能力对 Agent 响应式场景有价值

3. **systemd 延后**：
   - 虽然是核心基础设施
   - 但主要面向 Linux，Windows Agent 场景优先级较低