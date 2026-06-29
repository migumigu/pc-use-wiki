---
tags: [source, official_docs, file_lock, Python, cross_platform]
created: 2026-06-28
updated: 2026-06-28
source_type: official_docs
tier: 1
url: https://py-filelock.readthedocs.io/en/latest/index.html
used_by: 723k+
---

# filelock Official Documentation

> 跨平台 Python 文件锁库，723K+ 项目使用 <!-- confidence: EXTRACTED -->

## 来源概览

**来源类型**: 官方文档（Tier 1）
**URL**: https://py-filelock.readthedocs.io/en/latest/index.html
**使用数**: 723K+ 项目
**最新版本**: 3.29.4 (2026-06-13)
**仓库**: https://github.com/tox-dev/filelock

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

## 提取的实体

- [[filelock]] — 跨平台 Python 文件锁库

## 提取的主题

- [[文件系统控制]] — 文件锁机制

## 相关页面

- [[shutil]] — 文件操作库
- [[Syncthing]] — 文件同步工具