---
tags: [CLI-Anything, HKUDS, 桌面应用控制, Agent集成]
created: 2026-07-01
updated: 2026-07-01
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
confidence: high
---

# CLI-Anything GitHub README

> 香港大学数据科学实验室（HKUDS）开发的开源项目，通过全自动流水线将任意 GUI 软件转化为 AI Agent 可精准调用的命令行接口

## 素材摘要

CLI-Anything 定位为"Making ALL Software Agent-Native"，通过 7 阶段 Harness 生成流水线，将任意 GUI 软件（如 GIMP、Blender、QGIS）转化为 AI Agent 可用的标准化 CLI 接口。项目核心价值在于让专业软件天然具备 Agent 控制能力，无需针对每个软件单独开发适配层。

**关键数据：**
- **Stars**: 43,937+
- **License**: Apache-2.0
- **首次提交**: 2026-03-08
- **Commits**: 745+

## 核心要点

1. **CLI-Hub 生态**: 社区驱动的 CLI 注册中心，支持 `pip install cli-anything-hub` 一键安装
2. **7 阶段流水线**: 从工具安装到社区发布的完整自动化
3. **多软件支持**: GIMP、Blender、LibreOffice、Obsidian、Zoom 等 50+ 软件
4. **安全加固**: defusedxml 防 XXE、路径遍历防护、签名验证

## 技术层级

- **工具实现层**: Python 实现，标准化 CLI 接口生成
- **Agent 集成层**: SKILL.md 生成，原生支持 OpenClaw、Claude Code

## 关联实体

- [[CLI-Anything]] — 实体页
- [[桌面应用控制]] — 主题页

## 相关页面

- [[OpenFang]] — 另一个 Agent OS 方向
- [[PyAutoGUI]] — 传统 GUI 自动化
