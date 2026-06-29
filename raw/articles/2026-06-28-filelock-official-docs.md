---
source_id: auto-2026-06-28-filelock-docs
title: filelock Official Documentation
url: https://py-filelock.readthedocs.io/en/latest/index.html
source_type: official_docs
tier: 1
control_object: file_system_control
tech_layer: protocol
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
used_by: 723k+
---

# filelock Official Documentation

## 项目概览

filelock 是一个跨平台的 Python 文件锁库，提供进程间同步能力。

**使用数**: 723k+ 项目
**最新版本**: 3.29.4 (2026-06-13)
**仓库**: https://github.com/tox-dev/filelock

## 安装

```bash
python -m pip install filelock
```

## 快速示例

```python
from filelock import FileLock

lock = FileLock("high_ground.txt.lock")
with lock:
    with open("high_ground.txt", "a") as f:
        f.write("You were the chosen one.")
```

## 锁类型

### FileLock

平台感知别名，使用 OS 级锁（`fcntl`/`msvcrt`），自动回退到软锁。

**特性**：
- ✓ 推荐的默认选择
- ✓ 生命周期过期，可取消获取
- ✓ 自死锁检测

### SoftFileLock

基于文件存在的锁，适用于任何文件系统（包括网络挂载）。

**特性**：
- ✓ 网络文件系统
- ✓ 过期检测
- ✓ 生命周期过期，可取消获取

### ReadWriteLock

SQLite 阻塞的多读者 + 单写者锁，默认单例。

**特性**：
- ✓ 并发读者
- ✓ 每个模式可重入
- ✓ 异步支持（AsyncReadWriteLock）

### SoftReadWriteLock

NFS 和 HPC 集群的读者/写者锁，带 TTL 跨主机过期检测。

**特性**：
- ✓ 适用于 NFS / Lustre / 共享存储
- ✓ 跨主机过期检测（基于心跳）
- ✓ 写者优先，无饥饿
- ✓ 异步支持（AsyncSoftReadWriteLock）

### AsyncFileLock

异步兼容变体，在线程池或自定义执行器中运行阻塞 I/O。

**特性**：
- ✓ Async/await 支持
- ✓ 所有锁类型
- ✓ 自定义执行器和事件循环

## 平台支持

### Windows

使用 `msvcrt.locking`，内核强制执行。

**特性**：
- ✓ 原生支持
- ✓ 最可靠

### Unix / macOS

使用 `fcntl.flock`，POSIX 标准，内核强制执行。

**特性**：
- ✓ 原生支持
- ✓ 过期检测

### 其他平台

自动回退到 `SoftFileLock`，跨所有文件系统可移植。

**特性**：
- ✓ 完全兼容
- ✓ 网络文件系统

## 文档结构

- **Tutorials**: 学习基础知识的实践示例
- **How-to guides**: 任务导向的解决方案
- **Concepts and design**: 设计决策和权衡
- **API Reference**: 完整技术文档

## 类似库对比

- [pid](https://pypi.org/project/pid/) - 进程 ID 文件锁
- [msvcrt](https://docs.python.org/3/library/msvcrt.html#msvcrt.locking) - Windows 文件锁（stdlib）
- [fcntl](https://docs.python.org/3/library/fcntl.html#fcntl.flock) - Unix 文件锁（stdlib）
- [flufl.lock](https://pypi.org/project/flufl.lock/) - 另一个文件锁库
- [fasteners](https://pypi.org/project/fasteners/) - 跨平台锁和同步

## 数据来源

本文档基于 filelock 官方文档 (https://py-filelock.readthedocs.io/en/latest/index.html) 提取，数据截至 2026-06-28。