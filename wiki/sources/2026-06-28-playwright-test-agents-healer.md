---
tags: [素材, 技术分析]
created: 2026-06-28
updated: 2026-06-28
sources:
  - raw/articles/2026-06-28-playwright-test-agents-healer.md
---

# Playwright 三大Agents自愈式E2E测试

> 三 Agent 协作实现 E2E 测试的自主运行与自我修复

## 一句话摘要

Playwright Test Agents 基于 Playwright MCP 服务器，实现了一套自主运行、自我修复的智能测试系统，Healer Agent 能自动修复因 UI 变化导致的测试失败。

## 关键信息

- **类型**：技术博客分析
- **URL**：http://m.toutiao.com/group/7649565202909430287/
- **控制对象**：浏览器控制
- **技术层级**：Agent 集成层

## 核心内容

### 三 Agent 详解

#### Planner（规划者）
- 探索应用程序
- 根据用户场景生成 Markdown 测试计划

#### Generator（生成器）
- 将 Markdown 计划转换为可执行 Playwright 测试代码
- 实时验证选择器和断言

#### Healer（修复师）
- 重放失败步骤
- 检查当前 UI 定位等效元素
- 建议补丁（定位器更新、等待调整等）
- 重新运行测试直到通过或护栏停止循环

### 技术基础

这些 Agents 建立在 **Playwright Model Context Protocol (MCP)** 服务器之上。

## 相关页面

- [[Playwright]]
- [[浏览器控制]]
- [[MCP]]
