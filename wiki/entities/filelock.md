---
tags: [文件锁, 进程同步, 跨平台, Python]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-filelock-official-docs.md]
url: https://py-filelock.readthedocs.io/en/latest/index.html
used_by: 723k+
---

# filelock

> 跨平台 Python 文件锁库，723K+ 项目使用 <!-- confidence: EXTRACTED -->

## 核心定位

filelock 是一个跨平台的 Python 文件锁库，提供进程间同步能力。

**关键数据** <!-- confidence: EXTRACTED -->：
- 使用数: 723K+ 项目
- 最新版本: 3.29.4 (2026-06-13)
- 仓库: https://github.com/tox-dev/filelock

## 锁类型

### FileLock <!-- confidence: EXTRACTED -->

平台感知别名，使用 OS 级锁（`fcntl`/`msvcrt`），自动回退到软锁。

**特性**：
- ✓ 推荐的默认选择
- ✓ 生命周期过期，可取消获取
- ✓ 自死锁检测

### SoftFileLock <!-- confidence: EXTRACTED -->

基于文件存在的锁，适用于任何文件系统（包括网络挂载）。

**特性**：
- ✓ 网络文件系统
- ✓ 过期检测
- ✓ 生命周期过期，可取消获取

### ReadWriteLock <!-- confidence: EXTRACTED -->

SQLite 阻塞的多读者 + 单写者锁，默认单例。

**特性**：
- ✓ 并发读者
- ✓ 每个模式可重入
- ✓ 异步支持（AsyncReadWriteLock）

### SoftReadWriteLock <!-- confidence: EXTRACTED -->

NFS 和 HPC 集群的读者/写者锁，带 TTL 跨主机过期检测。

**特性**：
- ✓ 适用于 NFS / Lustre / 共享存储
- ✓ 跨主机过期检测（基于心跳）
- ✓ 写者优先，无饥饿
- ✓ 异步支持（AsyncSoftReadWriteLock）

### AsyncFileLock <!-- confidence: EXTRACTED -->

异步兼容变体，在线程池或自定义执行器中运行阻塞 I/O。

**特性**：
- ✓ Async/await 支持
- ✓ 所有锁类型
- ✓ 自定义执行器和事件循环

## 平台支持

### Windows <!-- confidence: EXTRACTED -->

使用 `msvcrt.locking`，内核强制执行。

**特性**：
- ✓ 原生支持
- ✓ 最可靠

### Unix / macOS <!-- confidence: EXTRACTED -->

使用 `fcntl.flock`，POSIX 标准，内核强制执行。

**特性**：
- ✓ 原生支持
- ✓ 过期检测

### 其他平台 <!-- confidence: EXTRACTED -->

自动回退到 `SoftFileLock`，跨所有文件系统可移植。

**特性**：
- ✓ 完全兼容
- ✓ 网络文件系统

## 使用示例

```python
from filelock import FileLock

lock = FileLock("high_ground.txt.lock")
with lock:
    with open("high_ground.txt", "a") as f:
        f.write("You were the chosen one.")
```

## 能力边界

### 支持的能力 <!-- confidence: EXTRACTED -->

- ✓ 跨平台文件锁
- ✓ 多种锁类型（FileLock/SoftFileLock/ReadWriteLock/SoftReadWriteLock/AsyncFileLock）
- ✓ 生命周期过期
- ✓ 自死锁检测
- ✓ 异步支持

### 局限性 <!-- confidence: INFERRED -->

- 网络文件系统上 SoftFileLock 可能不如本地文件系统可靠
- ReadWriteLock 需要 SQLite 支持

## 适用场景

**最适用场景** <!-- confidence: INFERRED -->：
- 进程间同步
- 跨平台锁需求
- 网络文件系统（SoftFileLock）
- 读写分离（ReadWriteLock）

**不适用场景** <!-- confidence: INFERRED -->：
- 简单单机应用
- 无并发需求
- 轻量级场景

## Agent 集成视角

**Agent 可通过以下方式使用 filelock** <!-- confidence: INFERRED -->：
1. 保护并发文件操作
2. 防止多个 Agent 同时修改同一文件
3. 实现跨进程状态同步

**集成建议** <!-- confidence: INFERRED -->：
- 默认使用 FileLock
- 网络文件系统使用 SoftFileLock
- 需要读写分离时使用 ReadWriteLock

## 相关页面

- [[文件系统控制]] — 所属主题
- [[shutil]] — 文件操作库