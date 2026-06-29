---
tags: [security-descriptor, windows, DACL, SACL, ACE, SID, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a1, auto-20260629-a2, auto-20260629-a3]
---

# Security-Descriptor — Windows 安全描述符

> Windows 安全对象的核心数据结构，包含 Owner SID、Primary Group SID、DACL、SACL

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Windows |
| **技术层级** | 系统基础层 |
| **结构名** | SECURITY_DESCRIPTOR |
| **核心组件** | Owner SID、Primary Group SID、DACL、SACL、Control Bits |

## 核心定义

Security Descriptor 是 Windows 安全对象的核心数据结构，包含以下安全信息：

1. **Owner SID**：对象所有者的安全标识符
2. **Primary Group SID**：主要组的安全标识符
3. **DACL**：自由访问控制列表，识别允许或拒绝访问的受托人
4. **SACL**：系统访问控制列表，记录访问尝试的审核日志
5. **Control Bits**：限定安全描述符含义的控制位

## DACL 行为

- **无 DACL**：系统授予所有人完全访问（高风险）
- **空 DACL**：系统拒绝所有访问尝试
- **ACE 顺序**：系统按顺序读取 ACE，直到授予或拒绝访问
- **拒绝 ACE 优先**：拒绝访问 ACE 必须在允许访问 ACE 之前

## 与 Linux ACL 的对比

| 对比维度 | Security Descriptor | POSIX ACL |
|----------|---------------------|-----------|
| **权限模型** | DACL + SACL + ACE | ACL Entry + mask |
| **权限检查** | 顺序匹配（顺序敏感） | 层级检查（层级优先） |
| **审计支持** | ✅ SACL 审核日志 | ❌ 无审核机制 |
| **权限继承** | ❌ 无默认 ACL | ✅ 默认 ACL |
| **权限拒绝** | ✅ 显式拒绝 ACE | ❌ 仅允许权限 |

## Agent 应用价值

**系统基础层知识**：理解 Security Descriptor 是 Agent 安全操作 Windows 文件的关键
- Agent 需理解 DACL/SACL 机制才能判断文件访问权限
- Null DACL vs Empty DACL 的区别是关键安全知识
- ACE 顺序规则影响权限判断结果

## Python 集成

- **pywin32**：win32security 模块提供 Security Descriptor 操作
- **GetNamedSecurityInfo**：获取对象的安全描述符
- **SetNamedSecurityInfo**：设置对象的安全描述符

## 相关页面

- [[DACL]] — 自由访问控制列表
- [[SACL]] — 系统访问控制列表
- [[ACE]] — 访问控制条目
- [[ACL]] — Access Control Lists（Linux）
- [[文件系统控制]] — 文件系统控制主题