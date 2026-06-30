---
tags: [桌面应用控制, CLI工具, Agent集成]
created: 2026-07-01
updated: 2026-07-01
sources: [2026-07-01-cli-anything-github-readme]
---

# CLI-Anything

> 香港大学数据科学实验室开发的开源项目，通过全自动流水线将任意 GUI 软件转化为 AI Agent 可精准调用的命令行接口

## 核心概述

CLI-Anything 是 HKUDS（香港大学数据科学实验室）开发的开源项目，定位为"Making ALL Software Agent-Native"。项目通过 7 阶段 Harness 生成流水线，将任意 GUI 软件（如 GIMP、Blender、LibreOffice）转化为 AI Agent 可用的标准化 CLI 接口。

**关键数据：**
- **Stars**: 43,937+
- **License**: Apache-2.0
- **Commits**: 745+
- **首次提交**: 2026-03-08
- **语言**: Python

## 核心创新

### 7 阶段 Harness 生成流水线

| 阶段 | 名称 | 描述 |
|------|------|------|
| Phase 1 | 工具包安装 | 安装目标软件的 CLI 工具 |
| Phase 2 | 命令发现 | 自动发现软件的所有 CLI 命令 |
| Phase 3 | 接口标准化 | 统一输出格式（JSON） |
| Phase 4 | Skill 生成 | 生成 SKILL.md 供 Agent 发现 |
| Phase 5 | 验证测试 | E2E 测试确保可用性 |
| Phase 6 | 安全加固 | XML/SVG 解析安全 |
| Phase 6.5 | Skill.md 生成 | AI 可发现的技能定义 |
| Phase 7 | 发布到 Hub | 社区共享 |

### CLI-Hub 生态

`pip install cli-anything-hub` 后可通过 `cli-hub install <name>` 安装社区构建的 CLI 工具。

**支持的软件生态（部分）：**
- **创意工具**: GIMP, Blender, Krita, Inkscape, MuseScore, Sketch, Draw.io
- **专业软件**: LibreOffice, QGIS, FreeCAD, Unreal Engine, Godot
- **生产力**: Obsidian, Zotero, Joplin
- **开发工具**: Git, VSCode（调试）, LLDB
- **媒体**: FFmpeg, Audacity, OBS-Studio, Shotcut, Kdenlive

## 技术特性

### 安全机制

- XML/SVG 解析使用 `defusedxml` 防止 XXE 攻击
- 路径遍历防护，防止 `../` 逃逸
- Token 文件处理安全加固
- Claude Code 签名验证

### 与 Agent 框架集成

支持 OpenClaw、Pi、Cursor、Claude Code 等主流 Agent 框架。

## 生态位

### 与同类工具对比

| 维度 | CLI-Anything | PyAutoGUI | UI Automation |
|------|---------------|-----------|----------------|
| **定位** | Agent-Native CLI 生成 | 坐标级 GUI 控制 | 系统级无障碍 API |
| **控制粒度** | 命令级 | 像素级 | 元素级 |
| **适用场景** | 专业软件自动化 | 简单自动化 | 企业应用 |

## 相关页面

- [[OpenFang]] — Agent 操作系统，另一个新兴方向
- [[PyAutoGUI]] — 传统 GUI 自动化工具
- [[桌面应用控制]] — 主题页
