---
tags: [source, github_readme, file_sync, OCaml, bidirectional]
created: 2026-06-28
updated: 2026-06-28
source_type: github_readme
tier: 1
url: https://github.com/bcpierce00/unison
license: GPL-3.0
history: 25+ years
---

# unison GitHub README

> 双向文件同步，25+ 年历史，精确规范 <!-- confidence: EXTRACTED -->

## 来源概览

**来源类型**: GitHub README（Tier 1）
**URL**: https://github.com/bcpierce00/unison
**使用历史**: 25+ 年
**语言**: OCaml (86.3%)
**许可证**: GPL-3.0

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

## 关键信息

### 维护团队 <!-- confidence: EXTRACTED -->

- 估计 2.5 人，0.1 FTE
- 对 bug 报告和增强报告的处理有重大影响

### 版本要求 <!-- confidence: EXTRACTED -->

- 应使用最新正式发布版本或 git 上更新的版本
- 早期版本不再维护，不接受早期版本的 bug 报告

## 提取的实体

- [[Unison]] — 双向文件同步工具

## 提取的主题

- [[文件系统控制]] — 文件同步工具

## 相关页面

- [[Syncthing]] — 同类工具对比
- [[filelock]] — 文件锁机制