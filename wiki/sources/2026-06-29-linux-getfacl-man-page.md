---
tags: [linux, getfacl, acl, command, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a5]
---

# Linux getfacl 命令官方手册页

> getfacl 命令用于获取文件和目录的访问控制列表（ACL）

## 一句话摘要

getfacl 是 Linux ACL 工具的核心命令，显示文件名、所有者、组和 ACL，支持默认 ACL 显示，输出格式可直接用于 setfacl 输入。

## 核心要点

- **输出格式**：文件名、所有者、组、flags、ACL 条目、默认 ACL
- **默认 ACL**：仅目录有默认 ACL，getfacl 会显示
- **传统权限**：在不支持 ACL 的文件系统上，显示传统权限位
- **关键选项**：-a（访问 ACL）、-d（默认 ACL）、-R（递归）、-n（数字 ID）
- **有效权限**：显示 #effective:r-x 注释
- **POSIX 标准**：POSIXLY_CORRECT 环境变量影响默认行为

## 关键概念

- [[getfacl]] — 本命令
- [[ACL]] — Access Control Lists
- [[setfacl]] — 设置 ACL 命令
- [[Default-ACL]] — 默认 ACL

## 相关页面

- [[Linux ACL 官方手册页]] — ACL 标准详解
- [[Linux setfacl 命令官方手册页]] — setfacl 命令详解
- [[文件系统控制]] — 文件系统控制主题