---
source_id: auto-20260629-a1
title: Windows Security Descriptors 官方文档
url: https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: system_foundation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# Security Descriptors

> 来源：Microsoft Learn 官方文档
> URL：https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors

## 核心内容

安全描述符包含与安全对象关联的安全信息。安全描述符由 SECURITY_DESCRIPTOR 结构及其相关的安全信息组成，可以包括以下安全信息：

- **安全标识符（SIDs）**：对象的所有者和主要组
- **DACL**：指定允许或拒绝特定用户或组的访问权限
- **SACL**：指定生成审核记录的访问尝试类型
- **控制位**：限定安全描述符或其各个成员的含义

## DACL 和 SACL

### DACL（自由访问控制列表）
- 识别允许或拒绝访问安全对象的受托人
- 如果对象没有 DACL，系统允许所有人完全访问
- 如果对象的 DACL 没有 ACE，系统拒绝所有访问尝试
- 系统按顺序检查 ACE，直到找到允许所有请求访问权限的 ACE，或拒绝任何请求的访问权限

### SACL（系统访问控制列表）
- 允许管理员记录访问受保护对象的尝试
- 每个 ACE 指定由指定受托人进行的访问尝试类型，使系统在安全事件日志中生成记录
- ACE 可以在访问尝试失败、成功或两者时生成审核记录

## 工作方式

应用程序不得直接操作安全描述符的内容。Windows API 提供用于设置和检索对象安全描述符中安全信息的函数。此外，还有用于为新对象创建和初始化安全描述符的函数。

## 与 Active Directory 的关系

在 Active Directory 对象上使用安全描述符的应用程序可以使用 Windows 安全函数或 ADSI 提供的安全接口。

## Agent 应用价值

**系统基础层知识**：理解 Windows 安全描述符是 Agent 安全操作文件的关键
- Agent 需理解 DACL/SACL 机制才能判断文件访问权限
- 知识库需补充 Windows 文件权限机制的完整知识
- 对比 Linux ACL，Windows Security Descriptor 提供更细粒度的控制

## 相关链接

- [DACLs and ACEs](https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces)
- [Access Control Lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists)
- [Security Identifiers](https://learn.microsoft.com/en-us/windows/win32/secauthz/security-identifiers)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Microsoft Learn 官方文档 | Tier 1 | https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors | EXTRACTED |