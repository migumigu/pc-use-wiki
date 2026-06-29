---
source_id: auto-20260629-a6
title: Linux setfacl 命令官方手册页
url: https://man7.org/linux/man-pages/man1/setfacl.1.html
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: protocol
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# setfacl(1) — Linux Manual Page

> 来源：Linux 官方 man page
> URL：https://man7.org/linux/man-pages/man1/setfacl.1.html

## 命令定义

setfacl - set file access control lists

## 用法

```bash
setfacl [-bkndRLPvh] [{-m|-x} acl_spec] [{-M|-X} acl_file] file ...
setfacl --restore={file|-}
```

## 描述

此工具设置文件和目录的访问控制列表（ACL）。在命令行上，命令序列后跟文件序列（可以再跟另一个命令序列...）。

- `-m` 和 `-x` 选项期望命令行上的 ACL
- `-M` 和 `-X` 选项从文件或标准输入读取 ACL
- `--set` 和 `--set-file` 选项设置文件或目录的 ACL，替换以前的 ACL

## 关键选项

- `-m, --modify`：修改文件的 ACL
- `-x, --remove`：从文件的 ACL 中删除条目
- `-b, --remove-all`：删除所有扩展 ACL 条目（保留基础条目）
- `-k, --remove-default`：删除默认 ACL
- `-n, --no-mask`：不重新计算有效权限掩码
- `-R, --recursive`：递归操作所有文件和目录
- `-d, --default`：操作默认 ACL

## ACL Entry 格式

```
[d[efault]:] u[ser]:[user]:perms
[d[efault]:] g[roup]:[group]:perms
[d[efault]:] m[ask]:perms
[d[efault]:] o[ther]:perms
```

## 示例

```bash
# 给用户 joe 添加读写权限
setfacl -m u:joe:rw file.txt

# 删除用户 joe 的 ACL 条目
setfacl -x u:joe file.txt

# 删除所有扩展 ACL 条目
setfacl -b file.txt

# 设置默认 ACL（目录继承）
setfacl -d -m u:jane:rwx directory/
```

## Agent 应用价值

**协议/接口层知识**：setfacl 是 Agent 修改 Linux 文件 ACL 的主要工具
- Agent 可通过 subprocess 调用 setfacl 设置文件权限
- 理解 ACL Entry 格式才能构造正确的命令
- 默认 ACL 是实现目录权限继承的关键

## 相关链接

- [getfacl(1)](https://man7.org/linux/man-pages/man1/getfacl.1.html)
- [acl(5)](https://man7.org/linux/man-pages/man5/acl.5.html)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Linux 官方 man page | Tier 1 | https://man7.org/linux/man-pages/man1/setfacl.1.html | EXTRACTED |