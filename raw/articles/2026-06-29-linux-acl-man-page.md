---
source_id: auto-20260629-a4
title: Linux ACL 官方手册页
url: https://man7.org/linux/man-pages/man5/acl.5.html
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: system_foundation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# ACL(5) — Linux Manual Page

> 来源：Linux 官方 man page
> URL：https://man7.org/linux/man-pages/man5/acl.5.html

## 核心定义

POSIX Access Control Lists 用于为文件和目录定义更细粒度的自主访问权限。

## ACL 类型

### ACL Entries 类型
- **ACL_USER_OBJ**：文件所有者的访问权限
- **ACL_USER**：指定用户的访问权限（需要 qualifier）
- **ACL_GROUP_OBJ**：文件所属组的访问权限
- **ACL_GROUP**：指定组的访问权限（需要 qualifier）
- **ACL_MASK**：所有 ACL_USER、ACL_GROUP、ACL_GROUP_OBJ 条目的有效权限掩码
- **ACL_OTHER**：其他用户的访问权限

### Minimum ACL vs Extended ACL
- **Minimum ACL**：仅包含 ACL_USER_OBJ、ACL_GROUP_OBJ、ACL_OTHER（对应传统文件权限位）
- **Extended ACL**：包含 ACL_USER、ACL_GROUP、ACL_MASK 条目

## Valid ACL 规则

### Valid ACL 必须满足
- 包含 ACL_USER_OBJ、ACL_GROUP_OBJ、ACL_OTHER 条目
- 如果包含 ACL_USER 或 ACL_GROUP 条目，必须包含 ACL_MASK 条目
- ACL_MASK 条目必须存在，如果至少有一个 ACL_USER 或 ACL_GROUP 条目
- ACL_USER 条目的 qualifier 必须唯一
- ACL_GROUP 条目的 qualifier 必须唯一

## Access Check Algorithm

系统按以下顺序检查访问权限：
1. 如果进程的用户 ID == 文件所有者 ID，检查 ACL_USER_OBJ 条目
2. 如果进程的用户 ID == 任何 ACL_USER 条目的 qualifier，检查该条目
3. 如果进程的任何组 ID == 文件所属组 ID，检查 ACL_GROUP_OBJ 条目
4. 如果进程的任何组 ID == 任何 ACL_GROUP 条目的 qualifier，检查该条目
5. 检查 ACL_OTHER 条目

## ACL Text Forms

### Short Text Form
```
u::rwx,g::r-x,o::---
user:joe:rwx,group:cool:r-x
```

### Long Text Form
```
user::rwx
user:joe:rwx
group::r-x
group:cool:r-x
mask::r-x
other::---
```

## Agent 应用价值

**系统基础层知识**：POSIX ACL 是 Linux 文件权限的核心机制
- Agent 需理解 ACL Entry 类型才能判断文件权限
- ACL_MASK 机制是理解有效权限的关键
- 与 Windows DACL 的顺序检查不同，Linux ACL 采用层级检查算法

## 相关链接

- [getfacl(1)](https://man7.org/linux/man-pages/man1/getfacl.1.html)
- [setfacl(1)](https://man7.org/linux/man-pages/man1/setfacl.1.html)
- [ACL Project](https://savannah.nongnu.org/projects/acl)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Linux 官方 man page | Tier 1 | https://man7.org/linux/man-pages/man5/acl.5.html | EXTRACTED |