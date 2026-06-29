---
tags: [dacl, windows, ACE, access-control, file-permissions]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a2, auto-20260629-a3]
---

# DACL — 自由访问控制列表

> Windows Security Descriptor 的核心组件，通过 ACE 控制对象访问权限

## 基本信息

| 属性 | 值 |
|------|-----|
| **平台** | Windows |
| **技术层级** | 系统基础层 |
| **所属结构** | Security Descriptor |
| **核心元素** | ACE（访问控制条目） |
| **作用** | 识别允许或拒绝访问的受托人 |

## DACL 行为

- **无 DACL**：系统授予所有人完全访问（高风险）
- **空 DACL**：系统拒绝所有访问尝试
- **ACE 顺序**：系统按顺序读取 ACE，直到授予或拒绝访问
- **隐式拒绝**：如果 DACL 的 ACE 允许有限用户访问，系统隐式拒绝所有未包含的用户

## ACE 顺序规则

- **顺序敏感**：系统按顺序读取 ACE，直到授予或拒绝访问
- **拒绝 ACE 优先**：拒绝访问 ACE 必须在允许访问 ACE 之前
- **示例**：如果要拒绝组中某个成员的访问，将拒绝 ACE 放在组的允许 ACE 之前

## Null DACL vs Empty DACL

- **Null DACL**：授予任何请求的用户完全访问（安全风险）
- **Empty DACL**：正确分配和初始化但没有 ACE 的 DACL，授予不访问对象

## Agent 应用价值

**系统基础层知识**：理解 DACL 行为是 Agent 安全判断 Windows 文件权限的基础
- Agent 需理解 Null DACL vs Empty DACL 的区别
- ACE 顺序规则影响权限判断结果
- DACL 为空 vs DACL 不存在的区别是关键安全知识

## 相关页面

- [[Security-Descriptor]] — 安全描述符
- [[SACL]] — 系统访问控制列表
- [[ACE]] — 访问控制条目
- [[ACL]] — POSIX ACL（对比）
- [[文件系统控制]] — 文件系统控制主题