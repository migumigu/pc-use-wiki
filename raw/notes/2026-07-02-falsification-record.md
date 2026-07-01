---
source_id: auto-2026-07-02-falsification
title: 证伪验证记录
source_type: other
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# 证伪验证记录

## 验证时间：2026-07-02

| # | 声明 | 来源 | 验证结果 | 证据 | 修正 |
|---|------|------|----------|------|------|
| 1 | CubeSandbox 冷启动 < 60ms | CubeSandbox GitHub | ⚠️待验证 | 官方GitHub声称，P99 137ms说明并非所有情况都<60ms | 修正为"单并发<60ms，50并发P95 90ms，P99 137ms" |
| 2 | CubeSandbox 内存开销 < 5MB | CubeSandbox GitHub | ⚠️待验证 | 官方声称，缺乏独立benchmark | 标注为"官方声称，缺乏独立验证" |
| 3 | agent-sandbox 完全兼容 E2B SDK | agent-sandbox GitHub | ⚠️待验证 | 官方声称，项目尚在v0.7.0，兼容性可能不完整 | 标注为"官方声称v0.7.0，兼容性待生产验证" |
| 4 | Managed Agents 首 token 延迟 p50 降低 60% | Anthropic 官方 | ⚠️待验证 | Anthropic内部测试数据，缺乏外部验证 | 标注为"Anthropic内部测试，缺乏独立验证" |
| 5 | E2B 94% Fortune 100 公司使用 | E2B 官网 | ⚠️待验证 | 营销数据，"使用"定义不明确 | 标注为"营销数据，'使用'定义不明确" |
| 6 | E2B 月下载量 700万+ | E2B 官网 | ⚠️待验证 | 官方声称 | 标注为"官方声称" |
| 7 | E2B 累计启动 10亿+ 沙箱 | E2B 官网 | ⚠️待验证 | 官方声称 | 标注为"官方声称" |
| 8 | Harness 代码量可能不到 300 行 | 技术分析文章 | ⚠️待验证 | 推断，非官方确认 | 标注为"推断，非官方确认" |
| 9 | kubernetes-sigs 已升级至 v1beta1 | k8s-sigs GitHub | ✅已验证 | GitHub Tags确认 v0.4.6 使用 v1beta1 | 无需修正 |
| 10 | CubeSandbox 开源时间为2026年4月 | 技术文章 | ⚠️待验证 | 第三方报道 | 标注为"第三方报道" |
| 11 | Anthropic Managed Agents 发布于2026年4月8日 | Anthropic 官方 | ✅已验证 | Anthropic官方博客 | 无需修正 |
| 12 | Firecracker 35.2K Stars | E2B 参考 | ⚠️待验证 | 搜索结果数据，可能已过时 | 标注为"搜索结果数据" |
| 13 | Daytona 冷启动 < 90ms | 生态对比 | ⚠️待验证 | 第三方对比数据 | 标注为"第三方对比数据，待验证" |

## 证伪总结

- ✅已验证：2 项
- ⚠️待验证：11 项
- ❌伪：0 项

**核心发现**：
1. CubeSandbox 性能数据来自官方，需要区分"最佳情况"和"P99情况"
2. E2B 的用户数据属于营销口径，"94% Fortune 100"含义模糊
3. agent-sandbox 的 E2B 兼容性声明需要生产验证
4. Managed Agents 的延迟优化数据为 Anthropic 内部测试
