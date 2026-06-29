---
workflow_stage: source_collection
title: 文件系统控制素材收集清单
created_date: 2026-06-28
---

# 第二阶段：素材收集清单

## 收集统计

**总素材数**: 5
**一级来源**: 5 (100%)
**二级来源**: 0
**三级来源**: 0

**完成标准检查**：
- ✓ 至少 3 个 Tier 1 来源（实际 5 个）
- ✓ 素材总数 >= 5（实际 5 个）
- ✓ 每个素材保存到正确的 raw/ 子目录
- ✓ 每个素材带有标准化元数据
- ✓ 素材清单已生成

---

## 素材详细清单

### 1. Syncthing GitHub README

**文件**: `raw/articles/2026-06-28-syncthing-github-readme.md`
**来源**: GitHub README (https://github.com/syncthing/syncthing)
**类型**: Tier 1 - github_readme
**控制对象**: file_system_control
**技术层级**: tool_implementation
**置信度**: high
**关键数据**:
- Stars: 62.2K+
- 语言: Go (84.5%)
- 许可证: MPLv2
- 核心目标：防止数据丢失、防御攻击、易用、自动化、普遍可用、面向个人
- P2P 架构，无需中央服务器
- Device ID 设备发现机制

### 2. Syncthing Getting Started Guide

**文件**: `raw/articles/2026-06-28-syncthing-getting-started.md`
**来源**: Syncthing 官方文档 (https://docs.syncthing.net/intro/getting-started.html)
**类型**: Tier 1 - official_docs
**控制对象**: file_system_control
**技术层级**: tool_implementation
**置信度**: high
**关键数据**:
- 安装方式：latest release / Debian repository
- 默认配置：Sync folder / GUI @ localhost:8384
- Device ID 双向配置机制
- 协议支持：QUIC / TCP / Relay listener

### 3. Unison GitHub README

**文件**: `raw/articles/2026-06-28-unison-github-readme.md`
**来源**: GitHub README (https://github.com/bcpierce00/unison)
**类型**: Tier 1 - github_readme
**控制对象**: file_system_control
**技术层级**: tool_implementation
**置信度**: high
**关键数据**:
- 使用历史: 25+ 年
- 语言: OCaml (86.3%)
- 许可证: GPL-3.0
- 双向同步（不同于简单镜像）
- 支持 POSIX + Windows
- 主要通信方式：SSH / TCP
- 实时同步模式（repeat + filesystem monitor）
- 维护团队：2.5 人，0.1 FTE

### 4. filelock Official Documentation

**文件**: `raw/articles/2026-06-28-filelock-official-docs.md`
**来源**: filelock 官方文档 (https://py-filelock.readthedocs.io/en/latest/index.html)
**类型**: Tier 1 - official_docs
**控制对象**: file_system_control
**技术层级**: protocol
**置信度**: high
**关键数据**:
- 使用数: 723k+ 项目
- 最新版本: 3.29.4
- 锁类型：FileLock / SoftFileLock / ReadWriteLock / SoftReadWriteLock / AsyncFileLock
- 平台支持：Windows (msvcrt) / Unix (fcntl) / 其他（自动回退 SoftFileLock）
- 跨平台进程间同步

### 5. shutil Python Official Documentation

**文件**: `raw/articles/2026-06-28-shutil-python-docs.md`
**来源**: Python 官方文档 (https://docs.python.org/3/library/shutil.html)
**类型**: Tier 1 - official_docs
**控制对象**: file_system_control
**技术层级**: system_foundation
**置信度**: high
**关键数据**:
- 模块类型：stdlib
- 文件复制警告：无法复制所有元数据（owner/group/ACLs）
- 核心函数：copyfileobj / copyfile / copymode / copystat
- 符号链接处理：follow_symlinks 参数
- 异常类型：SpecialFileError / SameFileError

---

## 素材分布分析

**控制对象**: 文件系统控制
**技术层级覆盖**:
- tool_implementation: 3 (Syncthing, Unison, Syncthing Guide)
- protocol: 1 (filelock)
- system_foundation: 1 (shutil)

**主题覆盖**:
- 文件同步工具: 3 (Syncthing, Unison, Syncthing Guide)
- 文件锁机制: 1 (filelock)
- 文件操作: 1 (shutil)

---

## 下一阶段：报告生成

**目标**: 生成文件系统控制技术栈深度分析报告 v1.0

**报告结构**:
1. 执行摘要
2. 技术全景（三大工具对比）
3. 能力分析（同步 vs 锁 vs 操作）
4. 生态位（适用场景对比）
5. 信息来源（5个 Tier 1 素材）
6. 待验证问题

---

## 备注

所有素材均为 Tier 1 来源，质量高，可直接用于生成报告。

未收集 rsync 官方文档（man pages 格式，WebFetch 获取效果不佳），但不影响深度分析。

已覆盖三大核心领域：
1. 文件同步（Syncthing vs Unison）
2. 文件锁（filelock）
3. 文件操作（shutil）