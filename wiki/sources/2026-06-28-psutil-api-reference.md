---
tags: [psutil, API参考, 系统监控, 进程管理]
created: 2026-06-28
updated: 2026-06-28
sources: [../raw/articles/2026-06-28-psutil-api-reference.md]
---

# psutil API Reference

> 完整 API 参考文档

## 一句话摘要

psutil 提供完整的系统监控和进程管理 API，涵盖 CPU、内存、磁盘、网络、传感器和 Windows 服务。

## 系统相关函数

**CPU：**
- `cpu_times()` — CPU 时间
- `cpu_percent(interval=1)` — CPU 利用率
- `cpu_count(logical=True)` — CPU 核心数
- `cpu_freq()` — CPU 频率

**内存：**
- `virtual_memory()` — 虚拟内存统计
- `swap_memory()` — 交换内存统计

**磁盘：**
- `disk_partitions()` — 所有磁盘分区
- `disk_usage(path)` — 磁盘使用统计
- `disk_io_counters()` — 磁盘 I/O 统计

**网络：**
- `net_io_counters(pernic=False)` — 网络 I/O 统计
- `net_connections(kind='inet')` — 网络连接
- `net_if_addrs()` — 网络接口地址
- `net_if_stats()` — 网络接口状态

**传感器：**
- `sensors_temperatures()` — 温度传感器
- `sensors_battery()` — 电池状态
- `sensors_fans()` — 风扇速度

## 进程管理

**Process 类：**
```python
p = psutil.Process(pid)
p.name()              # 进程名
p.exe()               # 可执行路径
p.pid                 # PID
p.ppid()              # 父进程 PID
p.status()           # 进程状态
p.cpu_percent()      # CPU 利用率
p.memory_info()      # 内存信息
p.terminate()         # 终止进程
p.kill()              # 杀死进程
```

**进程迭代：**
```python
for p in psutil.process_iter(['pid', 'name']):
    print(p.pid, p.name())
```

## Windows 服务

- `win_service_iter()` — 服务迭代
- `win_service_get(name)` — 获取服务

## 迁移注意

psutil 8.0 引入破坏性 API 变更，升级前需查看迁移指南。

## 相关页面

- [[psutil]] — 实体页
- [[系统服务控制]] — 主题页