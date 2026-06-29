---
tags: [Computer-Use, Claude, best-practices, click-accuracy, resolution]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# Computer Use Best Practices — Anthropic 官方博客

> 一句话摘要：Anthropic官方Computer Use点击精度优化最佳实践,核心发现:分辨率和缩放是影响点击精度的最主要因素。

## 基本信息

- **来源**：Anthropic 官方博客 (https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude)
- **作者**：Anthropic
- **发布日期**：2026-05-13
- **素材类型**：官方技术博客
- **控制对象**：桌面应用控制
- **技术层级**：Agent集成层

## 核心观点

<!-- confidence: EXTRACTED -->

1. **点击精度基础**：点击准确性是Computer Use的核心,点击位置不对则下游全部失败。

2. **API限制**：
   - **Claude 4.6 family**: 最大长边1568px, 最大像素1.15MP
   - **Opus 4.7**: 最大长边2576px, 最大像素3.75MP
   - 超过限制会被自动缩放,导致坐标不匹配

3. **推荐分辨率**：
   - 默认1280x720(安全实用,使用80%像素预算)
   - Opus 4.7推荐1080p
   - "max API fit"算法:根据原始aspect ratio计算最优分辨率

4. **坐标缩放公式**：
   ```python
   scale_x = screen_w / display_w
   scale_y = screen_h / display_h
   screen_x = int(api_returned_x * scale_x)
   screen_y = int(api_returned_y * scale_y)
   ```

5. **内容顺序**：文本指令应在图片之前发送(模型知道要找什么)。

## 关键概念

- [[Click Accuracy]] — 点击精度,Computer Use的核心指标
- [[Resolution Scaling]] — 分辨率缩放处理
- [[API Limits]] — API图片处理限制(1568px/1.15MP for 4.6, 2576px/3.75MP for 4.7)
- [[Coordinate Scaling]] — 坐标缩放回原始分辨率
- [[Content Ordering]] — 消息数组内容顺序(text before image)
- [[compute_max_api_fit]] — 最优分辨率计算算法

## 点击问题诊断表

<!-- confidence: EXTRACTED -->

| 症状 | 可能原因 | 解决方案 |
|------|----------|----------|
| 点击单向偏移 | display尺寸不匹配/超过API限制/图片优先 | 确保尺寸匹配/预缩放/文本优先 |
| 大致位置正确但未命中 | 目标太小/高分辨率细节丢失/aspect ratio扭曲 | 启用zoom/降低DPI/保持aspect ratio |
| 点击错误元素 | 指令模糊/相似元素干扰/UI太复杂 | 更具体指令/分步操作/提供布局上下文 |
| 整体精度差 | 超过API限制/高分辨率压缩过度/分辨率太低 | 预缩放/用Opus 4.7/基准1280x720 |

## 模型选择建议

<!-- confidence: EXTRACTED -->

- **Sonnet 4.6**：点击精度更高,空间准确性好,对重度缩放更鲁棒
- **Opus 4.7**：推理能力更强,点击精度与Sonnet持平,更高像素预算减少缩放需求
- **Haiku 4.5**：延迟优先时的选择

**推荐**：大多数任务用Sonnet 4.6(精度/推理/成本平衡),高分辨率源图用Opus 4.7。

## 小目标处理策略

<!-- confidence: EXTRACTED -->

1. **启用zoom**：`enable_zoom: true`检查密集UI的特定区域
2. **增大目标**：降低系统DPI/浏览器缩放/UI缩放设置
3. **键盘替代**：极小元素(系统托盘图标)用键盘快捷键更可靠
4. **考虑源分辨率**：4K+显示器压缩到720p损失显著(16px checkbox→5px)

## 与其他素材的关联

- 与 [[Computer Use Best Practices GitHub]] 配套阅读(理论+代码)
- 与 [[Computer Use Demo]] 对应实际应用
- 与 [[桌面应用控制]] 主题核心技术

## 原文精彩摘录

> "Click accuracy is the foundation of any computer use integration. If clicks don't land where they should, nothing downstream works."

> "The single highest impact optimization is also one of the simplest: pre downscale your screenshots before sending them to the API."

> "When the coordinate space and the model's perceived image don't match, the model's predicted clicks land on a display scale different from the image it's actually seeing."

## 相关页面

- [[Computer Use]]
- [[Click Accuracy]]
- [[Resolution Scaling]]
- [[Coordinate Scaling]]
- [[桌面应用控制]]
- [[Claude Sonnet 4.6]]
- [[Claude Opus 4.7]]