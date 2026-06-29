---
tags: [sacl, windows, audit, access-control, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a1, auto-20260629-a3]
---

# SACL — 系统访问控制列表

> Windows Security Descriptor 的审核组件，记录访问尝试的审核日志

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Windows |
| **技术层级** | 系统基础层 |
| **所属结构** | Security Descriptor |
| **核心元素** | ACE（审核条目） |
| **作用** | 记录访问尝试的审核日志 |

## SACL 功能

- **审核记录**：允许管理员记录访问受保护对象的尝试
- **审核类型**：失败访问、成功访问、两者
- **日志位置**：安全事件日志
- **权限要求**：需要 SE_SECURITY_NAME 特权才能操作 SACL

## ACE 类型

- **审核失败访问**：记录失败的访问尝试
- **审核成功访问**：记录成功的访问尝试
- **审核两者**：记录成功和失败的访问尝试

## Agent 应用价值

**系统基础层知识**：理解 SACL 是 Agent 实现安全审计的关键
- Agent 可通过 SACL 实现操作审计
- 安全事件日志提供完整的访问记录
- 与 Linux ACL 不同，Windows 提供完整的审计机制

## 与 Linux ACL 的对比

| 对比维度 | SACL | POSIX ACL |
|----------|------|-----------|
| **审核支持** | ✅ 完整审核机制 | ❌ 无审核机制 |
| **日志位置** | 安全事件日志 | 无日志 |
| **审核类型** | 成功/失败/两者 | 无 |
| **权限要求** | SE_SECURITY_NAME 特权 | 无特权要求 |

## 相关页面

- [[Security-Descriptor]] — 安全描述符
- [[DACL]] — 自由访问控制列表
- [[ACE]] — 访问控制条目
- [[ACL]] — POSIX ACL（对比）
- [[文件系统控制]] — 文件系统控制主题