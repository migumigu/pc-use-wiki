---
tags: [文件操作, stdlib, Python, 元数据]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-shutil-python-docs.md]
url: https://docs.python.org/3/library/shutil.html
module_type: stdlib
---

# shutil

> Python stdlib 高级文件操作库，无法复制完整元数据 <!-- confidence: EXTRACTED -->

## 核心定位

shutil 模块提供文件和文件集合的高级操作，特别是支持文件复制和删除的函数。

**关键数据** <!-- confidence: EXTRACTED -->：
- 源码: Lib/shutil.py
- Python 版本: 3.14
- 模块类型: stdlib

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

**注意**：
- 如果 fsrc 当前位置不是 0，只复制当前位置到文件末尾的内容
- 完成复制时不保证目标流已刷新

### shutil.copyfile(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

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

### shutil.copymode(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

从 src 复制权限位到 dst。

**不受影响**：文件内容、owner、group

**符号链接处理**：
- `follow_symlinks=false` 且 src 和 dst 都是符号链接时，尝试修改 dst 本身模式
- 此功能不是所有平台都可用

### shutil.copystat(src, dst, *, follow_symlinks=True) <!-- confidence: EXTRACTED -->

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

### shutil.SpecialFileError <!-- confidence: EXTRACTED -->

当 `copyfile()` 或 `copytree()` 尝试复制命名管道时抛出。

### shutil.SameFileError <!-- confidence: EXTRACTED -->

如果 `copyfile()` 的源和目标是同一文件时抛出。

## 能力边界

### 支持的能力 <!-- confidence: EXTRACTED -->

- ✓ 文件内容复制
- ✓ 权限位复制
- ✓ 时间戳复制（最后访问、最后修改）
- ✓ 标志复制
- ✓ 扩展属性复制（Linux）
- ✓ 符号链接处理

### 局限性 <!-- confidence: EXTRACTED -->

- ❌ 无法复制完整元数据
  - POSIX: owner/group/ACLs 丢失
  - Mac OS: resource fork 丢失
  - Windows: owner/ACLs/备用数据流丢失

## 适用场景

**最适用场景** <!-- confidence: INFERRED -->：
- Python 文件操作
- 单机复制移动删除
- 符号链接处理

**不适用场景** <!-- confidence: INFERRED -->：
- 完整元数据复制
- 权限完整性要求
- 跨平台权限同步

## Agent 集成视角

**Agent 使用 shutil 的注意事项** <!-- confidence: INFERRED -->：

1. **权限丢失风险**：使用 shutil 复制文件时，owner/group/ACLs 会丢失，需要额外处理
2. **补充方案**：需要完整元数据时，应使用 `os.chown()`、ACLs API
3. **跨平台差异**：不同平台的元数据丢失内容不同，需要针对性处理

## 相关页面

- [[文件系统控制]] — 所属主题
- [[filelock]] — 文件锁机制