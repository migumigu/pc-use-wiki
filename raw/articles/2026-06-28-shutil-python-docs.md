---
source_id: auto-2026-06-28-shutil-docs
title: shutil Python Official Documentation
url: https://docs.python.org/3/library/shutil.html
source_type: official_docs
tier: 1
control_object: file_system_control
tech_layer: system_foundation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
module_type: stdlib
---

# shutil — High-level file operations

## 模块概览

shutil 模块提供文件和文件集合的高级操作，特别是支持文件复制和删除的函数。

**源码**: Lib/shutil.py
**Python 版本**: 3.14

## 重要警告

即使是高级文件复制函数（`shutil.copy()`, `shutil.copy2()`）也无法复制所有文件元数据：

- **POSIX 平台**：文件 owner 和 group 会丢失，ACLs 也会丢失
- **Mac OS**：resource fork 和其他元数据不使用，资源会丢失，文件类型和创建者代码不正确
- **Windows**：文件 owner、ACLs 和备用数据流不复制

## 目录和文件操作

### shutil.copyfileobj(fsrc, fdst[, length])

复制类文件对象 fsrc 的内容到类文件对象 fdst。

**参数**：
- `length`（可选）：缓冲区大小
- 负值表示不分块循环复制数据
- 默认分块读取以避免内存消耗失控

**注意**：
- 如果 fsrc 当前位置不是 0，只复制当前位置到文件末尾的内容
- 完成复制时不保证目标流已刷新

### shutil.copyfile(src, dst, *, follow_symlinks=True)

复制文件 src 的内容（不含元数据）到文件 dst，以最高效方式返回 dst。

**要求**：
- src 和 dst 是类路径对象或字符串路径名
- dst 必须是完整目标文件名
- 目标位置必须可写
- 如果 dst 已存在会被替换

**特性**：
- 如果 src 和 dst 是同一文件，抛出 `SameFileError`
- 特殊文件（字符/块设备、管道）无法复制
- `follow_symlinks=false` 时，如果 src 是符号链接，创建新符号链接而不是复制指向的文件

### shutil.copymode(src, dst, *, follow_symlinks=True)

从 src 复制权限位到 dst。

**不受影响**：文件内容、owner、group

**符号链接处理**：
- `follow_symlinks=false` 且 src 和 dst 都是符号链接时，尝试修改 dst 本身模式
- 此功能不是所有平台都可用

### shutil.copystat(src, dst, *, follow_symlinks=True)

复制权限位、最后访问时间、最后修改时间和标志从 src 到 dst。

**Linux 特性**：还复制"扩展属性"（如果可能）

**不受影响**：文件内容、owner、group

**符号链接处理**：
- `follow_symlinks=false` 且 src 和 dst 都是符号链接时，操作符号链接本身

## 平台能力检查

Python 可通过 `os.supports_follow_symlinks` 检查功能可用性：

- `os.chmod in os.supports_follow_symlinks` 为 True：可修改符号链接权限位
- `os.utime in os.supports_follow_symlinks` 为 True：可修改符号链接访问/修改时间

## 异常类型

### shutil.SpecialFileError

当 `copyfile()` 或 `copytree()` 尝试复制命名管道时抛出。

### shutil.SameFileError

如果 `copyfile()` 的源和目标是同一文件时抛出。

## 数据来源

本文档基于 Python 官方文档 shutil 模块 (https://docs.python.org/3/library/shutil.html) 提取，数据截至 2026-06-28。