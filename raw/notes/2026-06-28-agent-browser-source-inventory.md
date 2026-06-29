# 素材清单

## agent-browser 研究素材

### 收集日期：2026-06-28

### 素材列表

| 文件名 | 标题 | URL | 类型 | Tier | 控制对象 | 技术层级 |
|--------|------|-----|------|------|----------|----------|
| [[auto-2026-06-28-agent-browser-github-readme]] | agent-browser GitHub README | https://github.com/vercel-labs/agent-browser | github_readme | 1 | browser_control | tool_implementation |
| [[auto-2026-06-28-agent-browser-commands-docs]] | agent-browser Commands Documentation | https://agent-browser.dev/commands | official_docs | 1 | browser_control | tool_implementation |
| (SKILL.md) | agent-browser Skill.md | https://raw.githubusercontent.com/vercel-labs/agent-browser/main/skills/agent-browser/SKILL.md | github_readme | 1 | browser_control | agent_integration |
| (Token对比) | Playwright vs Chrome DevTools vs Agent Browser | https://www.cnblogs.com/gyc567/p/19494419 | tech_blog | 2 | browser_control | tool_implementation |
| (深度分析) | 开源爆火！AI 浏览器自动化神器 agent-browser | http://m.toutiao.com/group/7631382427230798351/ | community | 2 | browser_control | tool_implementation |

### GitHub API 数据

```json
{
  "stargazers_count": 37353,
  "forks_count": 2398,
  "open_issues_count": 542,
  "language": "Rust",
  "created_at": "2026-01-11T05:38:15Z",
  "pushed_at": "2026-06-26T17:22:26Z"
}
```

### 报告列表

| 文件名 | 版本 | 说明 |
|--------|------|------|
| [[2026-06-28-agent-browser-report-v1]] | v1 | 初始版本 |
| [[2026-06-28-agent-browser-report-v1.1]] | v1.1 | 证伪修正版本 |
| [[2026-06-28-agent-browser-falsification]] | - | 证伪记录 |

### 质量指标

- **Tier 1 来源占比**: 3/5 (60%)
- **官方文档覆盖**: README + Commands Docs + SKILL.md
- **证伪完成度**: 已执行，发现 3 处问题并修正
- **Token 效率数据来源**: 第三方测试，置信度 INFERRED

### 控制对象关联

- **browser_control**: 5 个素材
- **desktop_app**: 0
- **system_service**: 0
- **file_system**: 0
- **hardware**: 0

### 知识库更新状态

- [x] 素材已保存到 raw/articles/
- [x] 报告已保存到 raw/notes/
- [ ] llm-wiki digest 待执行
