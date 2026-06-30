# 证伪记录 — 2026-07-01 MAF + Windows Agent 研究

## 声明分类与验证

| 声明 | 来源 | 优先级 | 验证结果 | 证据 | 修正 |
|------|------|--------|----------|------|------|
| "MAF 是 Semantic Kernel 和 AutoGen 的统一继承者" | 架构分析文章 | P1 | ✅ 已验证 | Microsoft Developer Blog 确认、GitHub 仓库文档确认 | 无需修正 |
| "累计 75,000+ GitHub Stars" | 架构分析文章 | P1 | ⚠️ 待验证 | 文章声称但未提供官方链接 | 需核实 Stars 数量 |
| "2026 年 4 月 3 日正式发布 MAF 1.0 GA" | 架构分析文章 | P1 | ✅ 已验证 | Microsoft Developer Blog 文章日期一致 | 无需修正 |
| "MAF 1.0 支持 MCP + A2A 协议原生集成" | 架构分析文章 | P1 | ✅ 已验证 | GitHub README 确认 | 无需修正 |
| "CodeAct 性能提升：时间 -52.4%，Token -63.9%" | 架构分析文章 | P2 | ⚠️ 待验证 | 文章提供数据但未提供原始 benchmark 来源 | 标注为"来自第三方分析" |
| "Windows 11 原生集成 AI 代理运行时环境" | Build 2026 报道 | P1 | ✅ 已验证 | Build 2026 主题演讲确认 | 无需修正 |
| "Scout 是永远在线的 AI 助理" | Build 2026 报道 | P2 | ⚠️ 待验证 | 文章描述但未提供官方规格 | 标注为"媒体报道" |
| "Python 51.3%, C# 45.6%" | GitHub README | P1 | ✅ 已验证 | GitHub 仓库语言统计直接显示 | 无需修正 |
| "2,435 Commits, 97 Releases" | GitHub README | P1 | ✅ 已验证 | GitHub 仓库主页直接显示 | 无需修正 |

## 验证总结

### ✅ 已验证声明（无需修正）
1. MAF 是 Semantic Kernel 和 AutoGen 的统一继承者
2. 2026 年 4 月 3 日正式发布 MAF 1.0 GA
3. MAF 1.0 支持 MCP + A2A 协议原生集成
4. Windows 11 原生集成 AI 代理运行时环境
5. Python 51.3%, C# 45.6%（语言占比）
6. 2,435 Commits, 97 Releases

### ⚠️ 待验证声明（需降级置信度）
1. "累计 75,000+ GitHub Stars" — 需标注为"来自第三方估算"
2. "CodeAct 性能提升数据" — 需标注为"来自第三方分析"
3. "Scout 是永远在线的 AI 助理" — 需标注为"来自媒体报道"

## 证伪结论

报告 v1.0 中的核心声明基本可靠，主要降级点：
- GitHub Stars 数据需标注为估算
- Scout Agent 描述需降级为媒体报道
- CodeAct 性能数据需标注来源

建议更新报告为 v1.1，添加置信度标注。
