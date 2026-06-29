---
source_id: auto-2026-06-28-unison-gh
title: Unison GitHub README
url: https://github.com/bcpierce00/unison
source_type: github_readme
tier: 1
control_object: file_system_control
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
license: GPL-3.0
language: OCaml
---

# Unison GitHub README

## 项目概览

Unison 是一个文件同步工具，支持 POSIX 系统（\*BSD、GNU/Linux、macOS）和 Windows。

**使用历史**: 25+ 年
**许可证**: GNU Public License, Version 3
**语言**: OCaml (86.3%) + Objective-C (6.0%) + C (5.7%)
**最新版本**: v2.54.0 (2026-05-01)

## 核心特性

### 双向同步

- 允许两个副本（文件和目录集合）存储在不同主机或不同磁盘上
- 可分别修改，然后通过传播每个副本的变更来更新
- **不同于简单镜像或备份工具**：可以处理分布式目录结构的双向更新
- 不冲突的更新可自动传播
- 冲突更新会被检测并显示

### 跨平台工作

- 支持 Windows 与 Unix 服务器同步
- 跨平台路径处理

### 离线工作能力

- **不同于网络文件系统**：复制数据，已同步数据可离线读写

### 用户级程序

- **不同于分布式文件系统**：
  - 只使用普通系统调用
  - 不需要修改内核
  - 不需要主机上的超级用户权限
  - 不需要 FUSE 实现

### 网络连接方式

- 可在任意通过互联网连接的机器之间工作
- **主要通信方式**: SSH
- **直接通信**: TCP
- **带宽优化**：对大文件的小更新使用类似 rsync 的压缩协议
- 在慢速链接上运行良好

### 容错能力

- 对故障具有弹性
- 在所有时间保持副本和自身私有结构在合理状态
- 即使异常终止或通信失败也能保持一致性

### 实时同步模式

- 可在 "repeat" 模式下运行
- 使用文件系统监视器
- 变更发生后很快同步

### 规范明确

- 有清晰和精确的规范

## 项目数据

- **Commits**: 2,267+
- **Branches**: 4
- **Tags**: 26
- **Issues**: 88 open
- **Releases**: 21
- **维护团队**: 估计 2.5 人，0.1 FTE

## 获取 Unison

### 源码

Unison 项目提供源码。

### 二进制包

许多打包系统（包括 GNU/Linux 发行版）提供 Unison 二进制包。

### CI 构建

CI 构建结果可用于测试，但平台有限。

### 构建指令

参见 [INSTALL.md](https://github.com/bcpierce00/unison/blob/master/INSTALL.md)。

## 版本建议

应使用最新正式发布版本或 git 上更新的版本。

早期版本不再维护，不接受早期版本的 bug 报告。

## 社区支持

### 邮件列表

- `unison-users@`：适合寻求帮助
- `unison-hackers@`：适合涉及源码阅读的讨论

### GitHub

- 代码、Issues、Wiki：https://github.com/bcpierce00/unison/

### 已弃用

不再维护的 FAQ：[old UPenn site](http://www.cis.upenn.edu/~bcpierce/unison)

## 贡献指南

**重要提示**：
- 只有极少数人积极维护 Unison（估计 2.5 人，0.1 FTE）
- 对 bug 报告和增强报告的处理有重大影响
- 高质量 bug 报告、修复和建议的变更非常欢迎
- 在邮件列表回答问题也欢迎
- 不要在 bug tracker 中回答问题（这违背 bug tracker 使用指南）

参见 `CONTRIBUTING.md`。

## 数据来源

本文档基于 GitHub README (https://github.com/bcpierce00/unison) 提取，数据截至 2026-06-28。