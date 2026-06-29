---
tags: [setfacl, linux, command, acl, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a6]
---

# setfacl — Linux ACL 设置命令

> Linux ACL 工具的核心命令，设置文件和目录的访问控制列表

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Linux |
| **技术层级** | 协议/接口层 |
| **所属项目** | POSIX ACL Project |
| **命令类型** | ACL 工具 |

## 核心功能

- **修改 ACL**：通过 -m 选项修改 ACL 条目
- **删除 ACL**：通过 -x 选项删除 ACL 条目
- **删除全部**：通过 -b 选项删除所有扩展 ACL 条目
- **删除默认**：通过 -k 选项删除默认 ACL
- **递归操作**：通过 -R 选项递归操作所有文件和目录

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

## Python 集成

```python
import subprocess

# 给用户添加读写权限
subprocess.run(['setfacl', '-m', 'u:joe:rw', '/path/to/file'])

# 设置默认 ACL
subprocess.run(['setfacl', '-d', '-m', 'u:jane:rwx', '/path/to/directory'])
```

## 相关页面

- [[ACL]] — POSIX ACL
- [[getfacl]] — 获取 ACL 命令
- [[Default-ACL]] — 默认 ACL
- [[文件系统控制]] — 文件系统控制主题