---
tags: [acl, linux, posix, acl-entry, mask, default-acl, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a4, auto-20260629-a5, auto-20260629-a6, auto-20260629-a7]
---

# ACL — POSIX Access Control Lists

> Linux 文件权限的核心机制，通过 ACL Entry 和 mask 实现精细权限控制

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Linux |
| **技术层级** | 系统基础层 |
| **标准** | POSIX 1003.1e draft standard 17 |
| **官方项目** | https://savannah.nongnu.org/projects/acl |
| **核心工具** | getfacl、setfacl、chacl |

## ACL Entry 类型

| 类型 | 描述 | 对应传统权限 |
|------|------|--------------|
| ACL_USER_OBJ | 文件所有者的访问权限 | user (rwx) |
| ACL_USER | 指定用户的访问权限 | 扩展权限 |
| ACL_GROUP_OBJ | 文件所属组的访问权限 | group (rwx) |
| ACL_GROUP | 指定组的访问权限 | 扩展权限 |
| ACL_MASK | 有效权限掩码 | 扩展权限掩码 |
| ACL_OTHER | 其他用户的访问权限 | other (rwx) |

## ACL 分类

- **Minimum ACL**：仅包含 ACL_USER_OBJ、ACL_GROUP_OBJ、ACL_OTHER（对应传统权限位）
- **Extended ACL**：包含 ACL_USER、ACL_GROUP、ACL_MASK 条目

## Access Check 算法

系统按以下优先级顺序检查权限：
1. 进程用户 ID == 文件所有者 ID → 检查 ACL_USER_OBJ
2. 进程用户 ID == ACL_USER qualifier → 检查该 ACL_USER
3. 进程组 ID == 文件所属组 ID → 检查 ACL_GROUP_OBJ
4. 进程组 ID == ACL_GROUP qualifier → 检查该 ACL_GROUP
5. 否则 → 检查 ACL_OTHER

## 默认 ACL

- 仅目录可以有默认 ACL
- 默认 ACL 定义新文件/目录的初始权限
- 非目录文件不能有默认 ACL

## 与 Windows Security Descriptor 的对比

| 对比维度 | POSIX ACL | Security Descriptor |
|----------|-----------|---------------------|
| **权限模型** | ACL Entry + mask | DACL + SACL + ACE |
| **权限检查** | 层级检查（层级优先） | 顺序匹配（顺序敏感） |
| **审计支持** | ❌ 无审核机制 | ✅ SACL 审核日志 |
| **权限继承** | ✅ 默认 ACL | ❌ 无默认 ACL |
| **权限拒绝** | ❌ 仅允许权限 | ✅ 显式拒绝 ACE |

## Agent 应用价值

**系统基础层知识**：理解 POSIX ACL 是 Agent 安全操作 Linux 文件的关键
- Agent 需理解 ACL Entry 类型才能判断文件权限
- ACL_MASK 机制是理解有效权限的关键
- 默认 ACL 是目录权限继承的核心机制

## Python 集成

- **subprocess**：Python subprocess 可调用 getfacl/setfacl 命令
- **文本格式**：getfacl 输出格式可直接用于 setfacl 输入
- **递归操作**：getfacl/setfacl 支持 -R 递归选项

## 相关页面

- [[getfacl]] — 获取 ACL 命令
- [[setfacl]] — 设置 ACL 命令
- [[ACL-MASK]] — 权限掩码
- [[Default-ACL]] — 默认 ACL
- [[Security-Descriptor]] — Windows 安全描述符
- [[文件系统控制]] — 文件系统控制主题