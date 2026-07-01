---
source_id: auto-2026-07-01-falsification
title: DeerFlow 报告证伪验证记录
collected_date: 2026-07-01
collected_by: auto_research
workflow_type: falsification
tier: 1
---

# DeerFlow 报告证伪验证记录

## 证伪时间

2026-07-01

## 验证方法

- GitHub API 数据验证
- 多来源交叉验证
- 官方文档确认

## 证伪结果

### P1 高优先级声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "72K+ Stars" | GitHub README | ✅已验证 | 多来源确认：7.2万（2026年7月）、59K（6月）、57K | 保留，标注为"7.2万+ Stars（2026年7月）" |
| "登顶 GitHub Trending #1" | 官方网站 | ✅已验证 | README 明确标注："On February 28th, 2026, DeerFlow claimed the 🏆 #1 spot on GitHub Trending" | 无需修正 |
| "推荐配置 16 vCPU + 32 GB RAM" | README | ✅已验证 | README 明确列出部署规格表 | 无需修正 |

### P2 中优先级声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "14层 Middleware" | 技术博客 | ⚠️待验证 | 技术博客列出14层，但未找到官方源码确认 | 保留，标注为"根据技术博客分析" |
| "支持飞书/Slack集成" | README | ✅已验证 | README 包含 IMMiddleware 说明 | 无需修正 |
| "AIO Sandbox 官方推荐" | 官方网站 | ⚠️待验证 | 官方网站推荐，但 `agent-inra/sandbox` URL 无法访问 | 修正为"官方网站推荐 AIO Sandbox" |

## 数据增长历史

| 时间 | Stars | 来源 |
|------|-------|------|
| 2026年2月28日 | 0 → 47K+ | 多来源确认 |
| 2026年3月 | 48K+ | 技术博客 |
| 2026年3月 | 52K+ | 技术博客 |
| 2026年6月 | 57K → 59K+ | 技术博客 |
| 2026年7月 | 7.2万+ | 最新搜索结果 |

## 验证结论

### 已验证声明

1. **Stars 数据准确**：7.2万+ Stars（2026年7月），数据持续增长
2. **Trending #1 确认**：官方 README 明确标注2026年2月28日登顶
3. **部署规格准确**：README 明确列出最低/推荐配置
4. **飞书/Slack集成确认**：README 包含 IMMiddleware 说明

### 待验证声明

1. **14层 Middleware 具体层级**：技术博客列出14层，但需源码确认
2. **AIO Sandbox 仓库地址**：官方推荐但 URL 可能不正确

### 无需修正的声明

所有核心声明经验证均准确，无需修正。仅需要：
- Stars 数据标注时间点（"7.2万+ Stars（2026年7月）"）
- Middleware 数据标注来源（"根据技术博客分析"）

## 下一步

更新报告为 v1.1，添加置信度标注。