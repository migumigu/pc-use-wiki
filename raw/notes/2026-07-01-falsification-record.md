---
source_id: auto-20260701-falsify
title: 证伪验证记录 - OmniParser + UFO²/UFO³
created_date: 2026-07-01
collected_by: auto_research
---

# 证伪记录

## P1 高优先级声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| OmniParser 21.7K+ Stars | 腾讯云文章 | ⚠️待验证 | 多个来源数据不一致（18.3K/21.7K），GitHub 页面未显示精确数字 | 修正为"18K-22K+，数据来源不一致" |
| V2延迟降低60% | Microsoft 官方博客 | ✅已验证(官方) | 官方博客明确声称，但无第三方独立验证 | 标注"官方声称，缺乏独立验证" |
| ScreenSpot Pro 39.6% | Microsoft 官方博客 | ✅已验证(官方) | 官方博客+论文，ScreenSpot Pro 公开基准 | 无需修正 |
| UFO²成功率30.5%/32.7% | 机器之心文章 | ⚠️待验证 | 引用论文数据，但评测范围和标准不明确 | 标注"论文数据，评测细节需确认" |
| UFO²减少51.5% LLM调用 | GitHub README + 文章 | ✅已验证(官方) | 官方 README 和论文均确认 | 无需修正 |

## P2 中优先级声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| 训练数据67K截图+7K图标 | 论文/Project Page | ✅已验证 | 官方论文和 Project Page 确认 | 无需修正 |
| UFO²集成OmniParser-v2 | 文章 + README | ✅已验证 | 机器之心文章和 README 均确认 | 无需修正 |
| UFO³支持Linux/Android | GitHub README | ✅已验证 | README 明确列出设备支持 | 无需修正 |
| OmniParser即插即用 | 论文/Project Page | ✅已验证 | 论文展示了GPT-4V/Phi-3.5-V/Llama-3.2-V结果 | 无需修正 |
| UFO³ AIP协议与MCP关系 | GitHub README | ⚠️待验证 | README 提到"Unified AIP protocol"和"MCP-Empowered"，但未明确两者关系 | 标注"AIP与MCP关系待确认，可能是互补而非替代" |

## P3 低优先级声明

| 声明 | 来源 | 验证结果 | 证据 | 修正 |
|------|------|----------|------|------|
| OmniParser曾为HuggingFace #1趋势 | GitHub README | ✅已验证 | 官方 README 记录 | 无需修正 |
| UFO论文第一作者为Chaoyun Zhang | 机器之心文章 | ✅已验证 | 论文作者列表确认 | 无需修正 |

## 证伪总结

- ✅已验证：7/10
- ⚠️待验证：3/10
- ❌伪：0/10

**需要修正的声明**：
1. OmniParser Stars 数据修正为"18K-22K+"（来源不一致）
2. V2延迟降低60%添加"官方声称，缺乏独立验证"标注
3. AIP与MCP关系添加"待确认"标注
