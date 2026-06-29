---
source_id: auto-20260629-a7
title: POSIX ACL 官方项目页面
url: https://savannah.nongnu.org/projects/acl
source_type: official_docs
tier: 1
control_object: file_system
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# ACL Project - Savannah

> 来源：POSIX ACL 官方项目
> URL：https://savannah.nongnu.org/projects/acl

## 项目信息

- **项目名称**：acl
- **描述**：Commands for Manipulating POSIX Access Control Lists
- **注册日期**：Fri 13 Mar 2009
- **许可证**：GNU General Public License v2 or later
- **开发状态**：Production/Stable
- **活跃成员**：3
- **类型**：非 GNU 软件和文档

## 项目管理者

- Andreas Gruenbacher（项目负责人）
- Brandon Philips

## 项目资源

- **Git Repository**：git://git.savannah.nongnu.org/acl.git
- **Bug Tracker**：14 个 open items，36 个 total items
- **Mailing Lists**：1 个公开邮件列表
- **Download Area**：https://savannah.nongnu.org/files/?group=acl

## 核心工具

该项目提供以下命令行工具：
- **getfacl**：获取文件访问控制列表
- **setfacl**：设置文件访问控制列表
- **chacl**：更改文件访问控制列表

## 标准符合性

项目遵循 POSIX 1003.1e draft standard 17 规范。

## Agent 应用价值

**工具实现层知识**：POSIX ACL 项目是 Linux ACL 工具的官方实现
- getfacl/setfacl/chacl 是 Linux 文件权限操作的核心工具
- Agent 需理解这些工具的实现才能正确调用
- 项目遵循 POSIX 标准，保证了跨 Unix 系统的可移植性

## 相关链接

- [Git Repository](https://git.savannah.nongnu.org/cgit/acl.git)
- [Bug Tracker](https://savannah.nongnu.org/bugs/?group=acl)

## 信息来源

| 来源类型 | Tier | URL | 置信度 |
|----------|------|-----|--------|
| POSIX ACL 官方项目 | Tier 1 | https://savannah.nongnu.org/projects/acl | EXTRACTED |