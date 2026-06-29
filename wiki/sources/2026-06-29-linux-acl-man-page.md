---
tags: [linux, acl, posix, file-permissions, getfacl, setfacl]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a4]
---

# Linux ACL 官方手册页

> POSIX ACL（Access Control Lists）为文件和目录定义更细粒度的自主访问权限

## 一句话摘要

POSIX ACL 是 Linux 文件权限的核心机制，通过 6 种 ACL Entry 类型实现精细权限控制，包括 ACL_USER_OBJ、ACL_USER、ACL_GROUP_OBJ、ACL_GROUP、ACL_MASK、ACL_OTHER。

## 核心要点

- **Minimum ACL**：仅包含 ACL_USER_OBJ、ACL_GROUP_OBJ、ACL_OTHER（对应传统权限位）
- **Extended ACL**：包含 ACL_USER、ACL_GROUP、ACL_MASK 条目
- **ACL_MASK**：有效权限掩码，限制所有扩展 ACL 条目的有效权限
- **层级检查算法**：系统按优先级顺序检查权限（用户 ID → 组 ID → other）
- **默认 ACL**：仅目录可以有默认 ACL，定义新文件的初始权限
- **Text Forms**：支持短文本格式和长文本格式

## 关键概念

- [[ACL]] — Access Control Lists
- [[ACL-Entry]] — ACL 条目类型
- [[ACL-MASK]] — 权限掩码
- [[Default-ACL]] — 默认 ACL（目录继承）
- [[getfacl]] — 获取 ACL 命令
- [[setfacl]] — 设置 ACL 命令

## 相关页面

- [[Linux getfacl 命令官方手册页]] — getfacl 命令详解
- [[Linux setfacl 命令官方手册页]] — setfacl 命令详解
- [[文件系统控制]] — 文件系统控制主题