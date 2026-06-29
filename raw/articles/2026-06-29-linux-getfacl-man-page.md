---
source_id: auto-20260629-a5
title: Linux getfacl 命令官方手册页
url: https://man7.org/linux/man-pages/man1/getfacl.1.html
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# getfacl(1) — Linux Manual Page

> 来源：Linux 官方 man page
> URL：https://man7.org/linux/man-pages/man1/getfacl.1.html

## 命令定义

getfacl - get file access control lists

## 用法

```bash
getfacl [-aceEsRLPtpndvh] file ...
getfacl [-aceEsRLPtpndvh] -
```

## 描述

对于每个文件，getfacl 显示文件名、所有者、组和访问控制列表（ACL）。如果目录有默认 ACL，getfacl 也会显示默认 ACL。非目录不能有默认 ACL。

如果在不支持 ACL 的文件系统上使用 getfacl，getfacl 显示由传统文件模式权限位定义的访问权限。

## 输出格式

```
1: # file: somedir/
2: # owner: lisa
3: # group: staff
4: # flags: -s-
5: user::rwx
6: user:joe:rwx #effective:r-x
7: group::rwx #effective:r-x
8: group:cool:r-x
9: mask::r-x
10: other::r-x
11: default:user::rwx
12: default:user:joe:rwx #effective:r-x
13: default:group::r-x
14: default:mask::r-x
15: default:other::---
```

- 第 1-3 行：文件名、所有者、所属组
- 第 4 行：setuid (s)、setgid (s)、sticky (t) 位
- 第 5、7、10 行：基础 ACL 条目（对应传统权限位）
- 第 6、8 行：命名用户和命名组条目
- 第 9 行：有效权限掩码
- 第 11-15 行：目录的默认 ACL

## 关键选项

- `-a, --access`：显示文件访问控制列表
- `-d, --default`：显示默认访问控制列表
- `-c, --omit-header`：不显示注释头（前三行）
- `-e, --all-effective`：打印所有有效权限注释
- `-E, --no-effective`：不打印有效权限注释
- `-s, --skip-base`：跳过仅有基础 ACL 条目的文件
- `-R, --recursive`：递归列出所有文件和目录的 ACL
- `-n, --numeric`：列出数字用户和组 ID

## POSIX 1003.1e Draft Standard 17

如果定义了环境变量 POSIXLY_CORRECT，getfacl 的默认行为会改变：除非另有规定，只打印 ACL。默认 ACL 仅在给出 -d 选项时打印。

## Agent 应用价值

**协议/接口层知识**：getfacl 是 Agent 读取 Linux 文件 ACL 的主要工具
- Agent 可通过 subprocess 调用 getfacl 读取文件权限
- 理解输出格式才能解析 ACL 信息
- 默认 ACL 是目录权限继承的关键概念

## 相关链接

- [setfacl(1)](https://man7.org/linux/man-pages/man1/setfacl.1.html)
- [acl(5)](https://man7.org/linux/man-pages/man5/acl.5.html)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Linux 官方 man page | Tier 1 | https://man7.org/linux/man-pages/man1/getfacl.1.html | EXTRACTED |