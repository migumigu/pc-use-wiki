---
source_id: auto-20260629-a2
title: Windows DACLs and ACEs 官方文档
url: https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: system_foundation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# DACLs and ACEs

> 来源：Microsoft Learn 官方文档
> URL：https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces

## 核心原则

如果 Windows 对象没有 DACL，系统允许所有人完全访问。如果对象有 DACL，系统只允许 DACL 中 ACE 明确允许的访问。如果 DACL 中没有 ACE，系统不允许任何人访问。同样，如果 DACL 的 ACE 允许有限用户或组访问，系统隐式拒绝所有未包含在 ACE 中的受托人的访问。

## ACE 顺序的重要性

在大多数情况下，可以使用允许访问的 ACE 控制对象访问，无需显式拒绝。例外情况：当 ACE 允许组访问，但需要拒绝组中某个成员的访问时。为此，将用户的拒绝访问 ACE 放在组的允许访问 ACE 之前。

**关键原则**：ACE 的顺序很重要，因为系统按顺序读取 ACE，直到授予或拒绝访问。用户的拒绝访问 ACE 必须首先出现；否则，当系统读取组的允许访问 ACE 时，将授予受限用户访问权限。

## DACL 示例

DACL 拒绝一个用户访问，允许两个组访问：
- Group A 成员通过累积 Group A 允许的权利和 Everyone 允许的权利获得 Read、Write、Execute 访问权利
- 例外：Andrew 被拒绝访问，即使他是 Everyone Group 的成员

## Null DACL vs Empty DACL

- **Null DACL**：授予任何请求的用户完全访问（安全风险）
- **Empty DACL**：正确分配和初始化但没有 ACE 的 DACL，授予不访问对象

## Agent 应用价值

**系统基础层知识**：理解 DACL/ACE 机制是 Agent 安全判断文件权限的基础
- Agent 需理解 ACE 顺序规则才能正确判断权限
- DACL 为空 vs DACL 不存在的区别是关键安全知识
- 对比 Linux ACL 的权限掩码机制，Windows DACL 采用顺序匹配

## 相关链接

- [Security Descriptors](https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptors)
- [Access Control Lists](https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control-lists)
- [Order of ACEs in a DACL](https://learn.microsoft.com/en-us/windows/win32/secauthz/order-of-aces-in-a-dacl)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| Microsoft Learn 官方文档 | Tier 1 | https://learn.microsoft.com/en-us/windows/win32/secauthz/dacls-and-aces | EXTRACTED |