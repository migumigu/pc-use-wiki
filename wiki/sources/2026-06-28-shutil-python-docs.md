---
tags: [source, official_docs, file_operations, Python, stdlib]
created: 2026-06-28
updated: 2026-06-28
source_type: official_docs
tier: 1
url: https://docs.python.org/3/library/shutil.html
module_type: stdlib
---

# shutil Python Official Documentation

> Python stdlib 高级文件操作库，无法复制完整元数据 <!-- confidence: EXTRACTED -->

## 来源概览

**来源类型**: Python 官方文档（Tier 1）
**URL**: https://docs.python.org/3/library/shutil.html
**源码**: Lib/shutil.py
**Python 版本**: 3.14

## 重要警告

**即使高级文件复制函数也无法复制所有文件元数据** <!-- confidence: EXTRACTED -->：

- **POSIX 平台**：文件 owner 和 group 会丢失，ACLs 也会丢失
- **Mac OS**：resource fork 和其他元数据不使用，资源会丢失，文件类型和创建者代码不正确
- **Windows**：文件 owner、ACLs 和备用数据流不复制

## 核心函数

### shutil.copyfileobj(fsrc, fdst[, length]) <!-- confidence: EXTRACTED -->

复制类文件对象 fsrc 的内容到类文件对象 fdst。

**参数**：
- `length`（可选）：缓冲区大小
- 负值表示不分块循环复制数据
- 默认分块读取以避免内存消耗失控

### shutil.copyfile(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

复制文件 src 的内容（不含元数据）到文件 dst。

**要求**：
- src 和 dst 是类路径对象或字符串路径名
- dst 必须是完整目标文件名
- 目标位置必须可写
- 如果 dst 已存在会被替换

### shutil.copymode(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

从 src 复制权限位到 dst。

**不受影响**：文件内容、owner、group

### shutil.copystat(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

复制权限位、最后访问时间、最后修改时间和标志从 src 到 dst。

**Linux 特性**：还复制"扩展属性"（如果可能）

## 提取的实体

- [[shutil]] — Python stdlib 高级文件操作库

## 提取的主题

- [[文件系统控制]] — 文件操作

## 相关页面

- [[filelock]] — 文件锁机制