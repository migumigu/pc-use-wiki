---
tags: [windows, DACL, ACE, file-permissions, access-control]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-a2]
---

# Windows DACLs and ACEs 官方文档

> DACL（自由访问控制列表）通过 ACE（访问控制条目）控制对象访问权限，ACE 顺序至关重要

## 一句话摘要

DACL 是 Security Descriptor 的核心组件，通过 ACE 列表控制访问权限，ACE 的顺序决定权限判断结果，Null DACL 和 Empty DACL 有完全不同的行为。

## 核心要点

- **无 DACL = 完全开放**：如果对象没有 DACL，系统授予所有人完全访问
- **空 DACL = 完全拒绝**：如果 DACL 没有 ACE，系统拒绝所有访问尝试
- **ACE 顺序敏感**：系统按顺序读取 ACE，直到授予或拒绝访问
- **拒绝 ACE 优先**：拒绝访问 ACE 必须在允许访问 ACE 之前
- **显式拒绝**：当 ACE 允许组访问但需拒绝成员时，放置拒绝 ACE 在前
- **隐式拒绝**：如果 DACL 的 ACE 允许有限用户访问，系统隐式拒绝所有未包含的用户

## 关键概念

- [[DACL]] — 自由访问控制列表
- [[ACE]] — 访问控制条目
- [[Security-Descriptor]] — 安全描述符
- [[Null-DACL]] — 空 DACL（无 DACL）
- [[Empty-DACL]] — 空 DACL（无 ACE）

## 相关页面

- [[Windows Security Descriptors 官方文档]] — Security Descriptor 总览
- [[文件系统控制]] — 文件系统控制主题