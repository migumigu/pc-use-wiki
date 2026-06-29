---
tags: [文件同步, 双向同步, 跨平台, OCaml]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-unison-github-readme.md]
url: https://github.com/bcpierce00/unison
license: GPL-3.0
history: 25+ years
---

# Unison

> 双向文件同步工具，25+ 年历史，精确规范 <!-- confidence: EXTRACTED -->

## 核心定位

Unison 是一个文件同步工具，支持 POSIX 系统（\*BSD、GNU/Linux、macOS）和 Windows，专注于**双向同步**。

**关键数据** <!-- confidence: EXTRACTED -->：
- 使用历史: 25+ 年
- 语言: OCaml (86.3%)
- 许可证: GPL-3.0
- 维护团队: 2.5 人，0.1 FTE

## 核心特性

### 双向同步 <!-- confidence: EXTRACTED -->

- 允许两个副本（文件和目录集合）存储在不同主机或不同磁盘上
- 可分别修改，然后通过传播每个副本的变更来更新
- **不同于简单镜像或备份工具**：可以处理分布式目录结构的双向更新
- 不冲突的更新可自动传播
- 冲突更新会被检测并显示

### 跨平台工作 <!-- confidence: EXTRACTED -->

- 支持 Windows 与 Unix 服务器同步
- 跨平台路径处理

### 离线工作能力 <!-- confidence: EXTRACTED -->

- **不同于网络文件系统**：复制数据，已同步数据可离线读写

### 用户级程序 <!-- confidence: EXTRACTED -->

- **不同于分布式文件系统**：
  - 只使用普通系统调用
  - 不需要修改内核
  - 不需要主机上的超级用户权限
  - 不需要 FUSE 实现

### 网络连接方式 <!-- confidence: EXTRACTED -->

- 可在任意通过互联网连接的机器之间工作
- **主要通信方式**: SSH
- **直接通信**: TCP
- **带宽优化**：对大文件的小更新使用类似 rsync 的压缩协议
- 在慢速链接上运行良好

### 容错能力 <!-- confidence: EXTRACTED -->

- 对故障具有弹性
- 在所有时间保持副本和自身私有结构在合理状态
- 即使异常终止或通信失败也能保持一致性

### 实时同步模式 <!-- confidence: EXTRACTED -->

- 可在 "repeat" 模式下运行
- 使用文件系统监视器
- 变更发生后很快同步

### 精确规范 <!-- confidence: EXTRACTED -->

- 有清晰和精确的规范

## 能力边界

### 支持的能力 <!-- confidence: EXTRACTED -->

- ✓ 双向同步（自动传播不冲突更新）
- ✓ 冲突检测（显示冲突更新）
- ✓ 离线工作（已同步数据可读写）
- ✓ 用户级程序（无需超级用户权限）
- ✓ SSH/TCP 通信
- ✓ repeat 模式（filesystem monitor + 快速同步）
- ✓ 精确规范

### 局限性 <!-- confidence: EXTRACTED -->

- 维护团队小（2.5 人，0.1 FTE）
- 早期版本不接受 bug 报告
- 必须使用最新版本

## 适用场景

**最适用场景** <!-- confidence: INFERRED -->：
- 双向同步需求
- 精确规范要求
- 慢速链接优化

**不适用场景** <!-- confidence: INFERRED -->：
- 大规模部署
- 快速迭代需求
- 现代 UI 需求

## 与 Syncthing 对比

| 维度 | Unison | Syncthing |
|------|--------|-----------|
| 架构 | SSH/TCP 客户端 | P2P 无服务器 |
| 同步模式 | 双向同步 | 持续实时同步 |
| 配置复杂度 | SSH 配置 | Device ID 双向配置 |
| 维护团队 | 2.5 人 0.1 FTE | 活跃开发 |
| 规范 | 精确规范 | 无明确规范文档 |

## Agent 集成视角

**Agent 可通过以下方式使用 Unison** <!-- confidence: INFERRED -->：
1. 调用 unison CLI 触发同步
2. 监控 unison 状态文件
3. 处理冲突检测结果

**集成挑战** <!-- confidence: INFERRED -->：
- SSH 配置需要处理
- 冲突检测需要用户干预
- 维护团队小，bug 修复慢

## 相关页面

- [[文件系统控制]] — 所属主题
- [[Syncthing]] — 同类工具对比
- [[watchdog]] — 文件监控工具