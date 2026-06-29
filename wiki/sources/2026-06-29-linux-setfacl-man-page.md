---
tags: [linux, setfacl, acl, command, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a6]
---

# Linux setfacl 命令官方手册页

> setfacl 命令用于设置文件和目录的访问控制列表（ACL）

## 一句话摘要

setfacl 是 Linux ACL 工具的核心命令，支持修改、删除、设置 ACL 条目，支持默认 ACL 和递归操作，ACL Entry 格式为 [d[efault]:] u[ser]:[user]:perms。

## 核心要点

- **-m 修改**：修改 ACL 条目
- **-x 删除**：删除 ACL 条目
- **-b 删除全部**：删除所有扩展 ACL 条目（保留基础条目）
- **-k 删除默认**：删除默认 ACL
- **-d 默认 ACL**：操作默认 ACL
- **-R 递归**：递归操作所有文件和目录
- **ACL Entry 格式**：[d[efault]:] u[ser]:[user]:perms

## 关键概念

- [[setfacl]] — 本命令
- [[ACL]] — Access Control Lists
- [[getfacl]] — 获取 ACL 命令
- [[Default-ACL]] — 默认 ACL

## 相关页面

- [[Linux ACL 官方手册页]] — ACL 标准详解
- [[Linux getfacl 命令官方手册页]] — getfacl 命令详解
- [[文件系统控制]] — 文件系统控制主题