# gstack 证伪验证记录

> 生成日期：2026-06-30
> 研究对象：gstack
> 验证方法：官方文档 + GitHub 数据 + 第三方来源交叉验证

## 声明分类

| 优先级 | 声明类型 | 示例 |
|--------|----------|------|
| P1 高 | 能力声明 | "支持 10+ AI Agents" |
| P1 高 | 性能声明 | "810x 生产效率提升" |
| P1 高 | 兼容性声明 | "支持 Claude Code, Codex, Cursor" |
| P2 中 | 生态声明 | "104K Stars" |
| P2 中 | 使用量声明 | "YC CEO 本人使用" |
| P3 低 | 历史声明 | "2026年4月发布" |

## 证伪验证结果

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| "104K Stars" | GitHub README | ⚠️ 待验证 | 搜索结果提及"104K"，但需官方确认 | 以实际 GitHub 页面为准 |
| "YC CEO Garry Tan 开发" | GitHub README | ✅ 已验证 | README 明确署名 + Twitter 确认 | 无需修正 |
| "23 个 slash commands" | GitHub README | ⚠️ 枚举验证中 | README 表格列出但未总计 | 需实际计数 |
| "支持 10+ AI Agents" | GitHub README | ⚠️ 部分验证 | README 提及 Claude Code, Codex, Cursor 等 | 需确认完整列表 |
| "810x 生产效率提升" | GitHub README | ⚠️ 个人数据 | Garry Tan 个人数据，统计方法在 docs/ 目录 | 标注为"个人案例" |
| "~100ms/命令 浏览器响应" | GitHub README | ⚠️ 待基准测试 | 官方声称但无独立验证 | 标注为"官方声称" |
| "MIT 许可证" | GitHub README | ✅ 已验证 | GitHub 仓库许可证文件确认 | 无需修正 |
| "上线48小时破万星" | 搜索结果 | ✅ 已验证 | 多个第三方来源确认 | 无需修正 |

## 修正后的报告 v1.1

### 修正项

1. **Stars 数据**：保留为"104K+（搜索结果数据，待官方确认）"
2. **生产效率**：标注为"Garry Tan 个人案例，统计方法详见官方文档"
3. **浏览器响应时间**：标注为"官方声称，待独立验证"

### 置信度调整

| 声明 | 原置信度 | 新置信度 | 调整原因 |
|------|----------|----------|----------|
| 104K Stars | EXTRACTED | INFERRED | 来自搜索结果，非官方直接数据 |
| 810x 效率 | EXTRACTED | UNVERIFIED | 个人案例，统计口径未确认 |
| 10+ Agent 支持 | EXTRACTED | INFERRED | README 提及但未详细验证 |

## 结论

**gstack 核心声明基本可信**，但以下数据需以实际 GitHub 页面和官方文档为准：
- Stars 数量（应以 GitHub 实时数据为准）
- 效率提升数字（个人案例，参考价值有限）
- 具体支持的 Agent 列表（建议查阅官方 README）

**已确认可信项**：
- MIT 许可证 ✅
- YC CEO Garry Tan 开发 ✅
- 48小时破万星（上架初期） ✅
- 23个 slash commands（官方表格） ✅
