---
tags: [windows, security-descriptor, DACL, SACL, ACE, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a1]
---

# Windows Security Descriptors 官方文档

> Windows 安全描述符（Security Descriptor）包含安全对象的所有安全信息，包括所有者、DACL、SACL

## 一句话摘要

Security Descriptor 是 Windows 安全对象的核心数据结构，包含 Owner SID、Primary Group SID、DACL（自由访问控制列表）、SACL（系统访问控制列表）和控制位。

## 核心要点

- **Owner SID**：对象所有者的安全标识符
- **Primary Group SID**：主要组的安全标识符
- **DACL**：自由访问控制列表，识别允许或拒绝访问的受托人
- **SACL**：系统访问控制列表，记录访问尝试的审核日志
- **Control Bits**：限定安全描述符含义的控制位
- **无 DACL**：系统授予所有人完全访问（高风险）
- **空 DACL**：系统拒绝所有访问尝试
- **Win32 API**：使用 GetSecurityInfo/SetSecurityInfo 操作

## 关键概念

- [[Security-Descriptor]] — 本文档核心
- [[DACL]] — 自由访问控制列表
- [[SACL]] — 系统访问控制列表
- [[ACE]] — 访问控制条目
- [[SID]] — 安全标识符

## 相关页面

- [[文件系统控制]] — 文件系统控制主题
- [[Windows DACLs and ACEs 官方文档]] — DACL/ACE 详细文档