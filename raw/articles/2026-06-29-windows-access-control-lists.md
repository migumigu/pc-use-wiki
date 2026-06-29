---
source_id: auto-20260629-a3
title: Windows Access Control Lists 官方文档
url: https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: system_foundation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Access Control Lists

> 来源：Microsoft Learn 官方文档
> URL：https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists

## 定义

访问控制列表（ACL）是访问控制条目（ACE）的列表。ACL 中的每个 ACE 标识一个受托人，并为该受托人指定允许、拒绝或审核的访问权限。

安全对象的安全描述符可以包含两种类型的 ACL：DACL 和 SACL。

## DACL vs SACL

### DACL（自由访问控制列表）
- 识别允许或拒绝访问安全对象的受托人
- 当进程尝试访问安全对象时，系统检查对象 DACL 中的 ACE 以确定是否授予访问权限
- **无 DACL**：系统授予所有人完全访问
- **无 ACE 的 DACL**：系统拒绝所有访问尝试
- 系统按顺序检查 ACE，直到找到允许所有请求访问权限的 ACE，或任何请求的访问权限被拒绝

### SACL（系统访问控制列表）
- 允许管理员记录访问受保护对象的尝试
- 每个 ACE 指定由指定受托人进行的访问尝试类型，使系统在安全事件日志中生成记录
- ACE 可以在访问尝试失败、成功或两者时生成审核记录

## 工作方式

**不要直接操作 ACL 内容**。为确保 ACL 在语义上正确，使用适当的函数创建和操作 ACL。

## 与 Active Directory 的关系

ACL 还提供对 Microsoft Active Directory 服务对象的访问控制。Active Directory Service Interfaces (ADSI) 包含创建和修改这些 ACL 内容的例程。

## Agent 应用价值

**系统基础层知识**：ACL 是 Windows 权限控制的核心机制
- Agent 需理解 ACL 结构才能判断文件访问权限
- DACL 控制访问权限，SACL 控制审核日志
- 与 Linux ACL 的概念相似，但实现方式不同（ACE vs ACL Entry）

## 相关链接

- [Security Descriptors](https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors)
- [DACLs and ACEs](https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces)
- [Access Control Entries](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-entries)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Microsoft Learn 官方文档 | Tier 1 | https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists | EXTRACTED |