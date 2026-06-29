---
tags: [openclaw, sandbox, security, docker, ssh, openshell]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-kl12]
---

# OpenClaw Sandboxing & Security

> OpenClaw 沙箱安全体系：3 种后端、3 种模式、3 种作用域，精细权限控制

## 一句话摘要

OpenClaw 提供完整的沙箱安全体系，支持 Docker/SSH/OpenShell 三种后端，off/non-main/all 三种模式，agent/session/shared 三种作用域，以及工作区访问控制。

## 核心要点

- **沙箱对象**：工具执行（exec、文件操作等）+ 可选的浏览器沙箱
- **三种后端**：
  - Docker（默认）：本地容器隔离，支持浏览器沙箱
  - SSH：远程机器隔离，远程规范模型
  - OpenShell：托管沙箱，支持 mirror/remote 两种工作区模式
- **三种模式**：off（关闭）、non-main（非主会话）、all（全部）
- **三种作用域**：agent（每 Agent 一个）、session（每会话一个）、shared（共享）
- **工作区访问**：none（无）、ro（只读）、rw（读写）
- **浏览器沙箱**：Docker 专用，自动启动，noVNC 密码保护
- **Elevated exec**：特权提升路径，可绕过沙箱
- **安全说明**：不是完美安全边界，但能显著降低风险

## 关键概念

- [[OpenClaw]] — 本项目
- [[Agent]] — AI 智能体

## 相关页面

- [[系统服务控制]] — 系统服务控制主题
- [[Agent集成层]] — Agent 集成层主题
