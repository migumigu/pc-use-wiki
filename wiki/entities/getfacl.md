---
tags: [getfacl, linux, command, acl, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a5]
---

# getfacl — Linux ACL 获取命令

> Linux ACL 工具的核心命令，获取文件和目录的访问控制列表

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Linux |
| **技术层级** | 协议/接口层 |
| **所属项目** | POSIX ACL Project |
| **命令类型** | ACL 工具 |

## 核心功能

- **获取 ACL**：显示文件名、所有者、组和 ACL
- **默认 ACL**：显示目录的默认 ACL
- **传统权限**：在不支持 ACL 的文件系统上，显示传统权限位
- **有效权限**：显示 #effective:r-x 注释

## 关键选项

- `-a, --access`：显示文件访问控制列表
- `-d, --default`：显示默认访问控制列表
- `-c, --omit-header`：不显示注释头（前三行）
- `-e, --all-effective`：打印所有有效权限注释
- `-E, --no-effective`：不打印有效权限注释
- `-s, --skip-base`：跳过仅有基础 ACL 条目的文件
- `-R, --recursive`：递归列出所有文件和目录的 ACL
- `-n, --numeric`：列出数字用户和组 ID

## 输出格式

```
# file: somedir/
# owner: lisa
# group: staff
# flags: -s-
user::rwx
user:joe:rwx #effective:r-x
group::rwx #effective:r-x
group:cool:r-x
mask::r-x
other::r-x
default:user::rwx
default:user:joe:rwx #effective:r-x
default:group::r-x
default:mask::r-x
default:other::---
```

## Agent 应用价值

**协议/接口层知识**：getfacl 是 Agent 读取 Linux 文件 ACL 的主要工具
- Agent 可通过 subprocess 调用 getfacl 读取文件权限
- 理解输出格式才能解析 ACL 信息
- 默认 ACL 是目录权限继承的关键概念

## Python 集成

```python
import subprocess

# 获取文件 ACL
result = subprocess.run(['getfacl', '/path/to/file'], capture_output=True, text=True)
acl_info = result.stdout
```

## 相关页面

- [[ACL]] — POSIX ACL
- [[setfacl]] — 设置 ACL 命令
- [[ACL-MASK]] — 权限掩码
- [[文件系统控制]] — 文件系统控制主题