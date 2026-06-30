---
tags: [浏览器控制, 网络访问, MCP]
created: 2026-06-30
updated: 2026-06-30
sources:
  - wiki/sources/2026-06-30-agent-reach-github-readme.md
---

# Agent-Reach

> AI Agent全网搜索能力脚手架，支持15+平台零API费用访问

## 定义

Agent-Reach是一个为AI Agent提供互联网能力的一站式脚手架，通过安装和配置上游工具，让Agent能够零成本访问15+主流网络平台，解决Agent"上网难"问题。

## 核心能力

### 支持平台

**零配置**：
- 网页阅读（Jina Reader）
- YouTube字幕（yt-dlp）
- RSS/Atom订阅
- GitHub仓库
- 微信公众号
- 微博
- V2EX

**需配置Cookie**：
- Twitter/X（twitter-cli）
- Reddit（rdt-cli）
- 小红书（xhs-cli）
- 抖音（MCP server）
- LinkedIn（MCP server）
- 雪球
- 小宇宙播客

### 架构设计
- **脚手架定位**：安装和配置上游工具，Agent直接调用
- **可插拔渠道**：每个平台对应独立的channel文件
- **SKILL.md集成**：自动技能发现，无需记命令

### 安全机制
- Cookie本地存储（文件权限600）
- 安全模式安装
- 完全开源代码
- Dry Run预览

## 技术指标
- Stars：15.4K+（2026年6月数据）
- 许可证：MIT
- 主要语言：Python

## 生态位

Agent-Reach填补了AI Agent的"网络访问"缺口，通过整合多个上游工具，提供统一的网络访问能力，使Agent能够搜索和读取全网内容。

## 相关页面

- [[浏览器控制]]
- [[MCP]]
- [[Jina Reader]]
- [[Agent集成层]]