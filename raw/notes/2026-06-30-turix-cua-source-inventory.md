# TuriX-CUA 研究素材清单

**研究日期**：2026-06-30
**研究对象**：TuriX-CUA
**素材总数**：3 个

## 素材详情

| 素材ID | 标题 | 类型 | Tier | 控制对象 | 技术层级 | 置信度 |
|--------|------|------|------|----------|----------|--------|
| auto-2026-06-30-turix-cua-readme | TuriX-CUA GitHub README | github_readme | 1 | desktop_app | tool_implementation | high |
| auto-2026-06-30-turix-cua-readme-zh | TuriX-CUA GitHub 中文自述 | github_readme | 1 | desktop_app | tool_implementation | high |
| auto-2026-06-30-turix-cua-technical-analysis | AI Agent 新突破！TuriX-CUA 技术分析 | tech_blog | 2 | desktop_app | tool_implementation | medium |

## Tier 1 来源（必备）

1. **GitHub README (EN)**: https://github.com/TurixAI/TuriX-CUA
   - 核心数据：OSWorld 64.2% 成功率、80% Mac 成功率
   - 技术架构：多模型设计、Skills 系统
   - 使用说明：安装配置指南

2. **GitHub README (中文)**: https://github.com/TurixAI/TuriX-CUA/blob/main/README.zh-CN.md
   - 补充中文技术细节
   - 发展历程和路线图

## Tier 2 来源（重要）

3. **技术分析文章**: http://m.toutiao.com/group/7620352674357903878/
   - 项目背景和定位
   - 竞品对比（UI-TARS）
   - 适用场景分析

## 素材质量评估

- **Tier 1 数量**：2 个 ✅
- **Tier 2 数量**：1 个 ✅
- **总素材数**：3 个 ⚠️（建议补充 2 个以上 Tier 1 来源）

## 待补充素材

- [ ] 官方技术报告 PDF（https://turix.ai/technical-report/）
- [ ] OSWorld Benchmark 官方页面
- [ ] OpenClaw 集成文档

## 控制对象分类

- **主分类**：桌面应用控制（Computer Use Agent）
- **技术层级**：工具实现层
- **契合度**：高

## 关键信息提取

### 核心能力
- 屏幕截图 → 多模态大模型理解 → 鼠标键盘操作
- 支持 macOS/Windows/Linux 全平台
- OSWorld Benchmark 第3名（64.2%）

### 技术亮点
- 多模型架构（brain/actor/memory/planner）
- 热插拔 "brain" - 可更换 VLM
- Skills 系统 - Markdown 剧本
- MCP 协议集成
- 可恢复的记忆系统

### 局限性和挑战
- 需要 API 密钥（官方 API 或本地 Ollama）
- macOS 需要授予辅助功能权限
- 复杂任务成功率有限
