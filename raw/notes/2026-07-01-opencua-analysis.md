---
report_id: 2026-07-01-opencua-v1.0
title: OpenCUA 技术分析报告 v1.0
created_date: 2026-07-01
source_count: 3
---

# OpenCUA 技术分析报告 v1.0

## 1. 执行摘要

OpenCUA是由香港大学XLANG Lab联合月之暗面（Moonshot AI）、斯坦福大学等顶尖机构于2025年8月发布的开源CUA（Computer-Using Agent，计算机使用智能体）框架。该框架在OSWorld-Verified基准测试中创下45.0%的成功率，确立了开源模型的新SOTA（State-of-the-Art）地位。

**核心突破**：
- 发布首个大规模跨平台计算机使用数据集AgentNet（22.6K任务，覆盖Windows/macOS/Ubuntu及200+应用）
- 提出三层推理架构：Action Reduction → State-Action Matching → Reflective Long CoT
- 开源全套工具链：标注工具、数据处理管道、模型权重（7B/32B/72B）、评估基准

## 2. 技术全景

### 2.1 项目背景

**发布机构**：
- 主导：香港大学XLANG Lab
- 合作：月之暗面（Moonshot AI/Kimi）、斯坦福大学
- 论文：arXiv:2508.09123 (2025-08-12)

**开源协议**：MIT License（支持研究、教育和商业用途）

**定位**：解决商业CUA系统（如Claude Computer Use、OpenAI CUA）技术封闭问题，提供完整的开源基础设施。

### 2.2 架构组成

OpenCUA框架包含四大核心模块：

#### 2.2.1 AgentNet 数据集
- **规模**：22.6K人工标注任务
- **覆盖范围**：
  - 操作系统：Windows、macOS、Ubuntu
  - 应用场景：200+应用和网站
- **数据内容**：
  - 同步录制的屏幕视频
  - 鼠标/键盘事件
  - 辅助功能树（Accessibility Trees）
- **在线查看**：[AgentNet Data Viewer](https://agentnet_data_viewer.xlang.ai/)

#### 2.2.2 AgentNetTool 标注工具
- **功能**：跨平台GUI记录器，无侵入运行于标注员机器
- **支持平台**：Windows、macOS、Ubuntu
- **输出**：
  - 同步屏幕视频
  - 鼠标/键盘事件流
  - 辅助功能树快照
  - 浏览器内审查、修剪、提交流程

#### 2.2.3 数据处理管道

**第一层：Action Reduction（动作精简）**
- 目标：将数千个底层事件精简为语义有意义的PyAutoGUI动作
- 操作：
  - 合并鼠标移动 → 点击事件
  - 聚合滚动操作
  - 分组按键序列 → 文本输入或快捷键

**第二层：State-Action Matching（状态-动作匹配）**
- 目标：为每个精简动作对齐最后一个视觉差异帧
- 关键原则：避免未来信息泄露
- 输出：紧凑的状态-动作对

**第三层：CoT Generator（反思性长链推理）**
- 目标：为每步轨迹合成反思性推理链
- 内容包含：
  - 对前一步动作的反思
  - 当前观察和历史下选择该动作的原因
  - 潜在替代动作分析
  - 预期下一状态预测
- 作用：提升模型鲁棒性和泛化能力

#### 2.2.4 AgentNetBench 离线评估器
- **功能**：对比模型预测的低级动作与人类真实轨迹
- **动作类型**：click、moveTo、write、press、scroll、terminate等
- **输出**：详细指标报告

### 2.3 OpenCUA模型系列

**模型规格**：
- OpenCUA-7B
- OpenCUA-32B
- OpenCUA-72B

**技术特点**：
- 基于Qwen-VL架构，采用Kimi-VL的Tokenizer和ChatTemplate
- 替换M-RoPE为1D RoPE以适配训练基础设施
- 端到端Agent模型，直接输出可执行动作

**部署支持**：
- HuggingFace Transformers
- vLLM（0.12.0+，已官方集成）
- exl2量化版本（社区贡献）

## 3. 能力分析

### 3.1 性能基准

#### 3.1.1 OSWorld-Verified 在线评估

| 模型 | 15 Steps | 50 Steps | 100 Steps |
|------|---------|---------|----------|
| **闭源模型** | | | |
| OpenAI CUA | 26.0 | 31.3 | 31.4 |
| Claude 3.7 Sonnet | 27.1 | 35.8 | 35.9 |
| Claude 4 Sonnet | 31.2 | 43.9 | 41.5 |
| **开源模型** | | | |
| Qwen 2.5-VL-72B-Instruct | 4.4 | — | 5.0 |
| UI-TARS-72B-DPO | 24.0 | 25.8 | 27.1 |
| UI-TARS-1.5-7B | 24.5 | 27.3 | 27.4 |
| **OpenCUA-7B** | 24.3 | 27.9 | 26.6 |
| **OpenCUA-32B** | 29.7 | 34.1 | 34.8 |
| **OpenCUA-72B** | 39.0 | 44.9 | **45.0** |

**关键发现**：
- OpenCUA-72B超越Claude 3.7 Sonnet（45.0% vs 35.9%）
- OpenCUA-32B在开源模型中领先（34.8%）
- OpenCUA-7B与UI-TARS-1.5-7B性能相当（27.9% vs 27.4%）

#### 3.1.2 GUI Grounding性能

| 模型 | OSWorld-G | ScreenSpot-V2 | ScreenSpot-Pro | UI-Vision |
|------|-----------|---------------|----------------|-----------|
| Qwen2.5-VL-7B | 31.4 | 88.8 | 27.6 | 0.85 |
| UI-TARS-72B | 57.1 | 90.3 | 38.1 | 25.5 |
| **OpenCUA-7B** | 55.3 | 92.3 | 50.0 | 29.7 |
| **OpenCUA-32B** | 59.6 | 93.4 | 55.3 | 33.3 |
| **OpenCUA-72B** | 59.2 | 92.9 | **60.8** | **37.3** |

**关键发现**：
- OpenCUA-72B在ScreenSpot-Pro达到60.8%（SOTA）
- OpenCUA-72B在UI-Vision达到37.3%（SOTA）
- OpenCUA系列在grounding能力上显著优于UI-TARS

#### 3.1.3 AgentNetBench 离线评估

| 模型 | Coordinate Actions | Content Actions | Function Actions | Average |
|------|-------------------|----------------|------------------|---------|
| Qwen2.5-VL-32B | 66.6 | 47.2 | 41.5 | 64.8 |
| OpenAI CUA | 71.7 | 57.3 | 80.0 | 73.1 |
| **OpenCUA-7B** | 79.0 | 62.0 | 44.3 | 75.2 |
| **OpenCUA-32B** | 81.9 | 66.1 | 55.7 | 79.1 |

**关键发现**：
- OpenCUA-32B超越OpenAI CUA（79.1% vs 73.1%）
- Coordinate Actions能力突出（81.9%）

### 3.2 支持的能力

**核心能力**：
1. **跨平台操作**：Windows、macOS、Ubuntu
2. **多应用覆盖**：200+应用和网站
3. **端到端控制**：直接输出PyAutoGUI可执行动作
4. **长链推理**：Reflective Long CoT提升决策质量
5. **GUI Grounding**：精确的屏幕元素定位

**推理配置**：
- 默认使用3张截图（历史上下文）
- L2 CoT格式（二级推理链）
- 支持最大100步任务执行

**部署方式**：
- 单GPU运行OpenCUA-7B
- 多GPU并行运行OpenCUA-32B/72B（tensor parallel + data parallel）
- vLLM生产级服务

### 3.3 局限性

**技术限制**：
1. **Function Actions相对较弱**：OpenCUA-32B的Function Actions（55.7%）显著低于OpenAI CUA（80.0%），表明在需要调用特定函数/工具的场景下能力不足
2. **训练基础设施依赖**：模型基于Kimi训练基础设施，开源训练代码仍在开发中
3. **长任务性能下降**：15步到100步的性能提升有限（OpenCUA-72B：39.0% → 45.0%），超长任务可能遇到瓶颈

**使用限制**：
1. **不可用于非法用途**：明确禁止违反法律法规的活动
2. **无担保条款**：作者不对滥用造成的损害负责
3. **名称使用限制**："OpenCUA"名称/标志使用需书面许可

**数据集潜在问题**：
- 22.6K任务虽然规模大，但相对于实际计算机使用的无限场景仍有限
- 人工标注可能引入偏差
- 跨平台一致性未详细说明

## 4. 生态位

### 4.1 CUA领域定位

**OpenCUA vs 其他CUA项目**：

| 维度 | OpenCUA | UI-TARS | Claude Computer Use | OpenAI CUA |
|------|---------|---------|---------------------|-----------|
| 开源程度 | 完全开源 | 模型开源 | 闭源 | 闭源 |
| 数据集 | AgentNet (22.6K) | 未公开 | 未公开 | 未公开 |
| 工具链 | 完整 | 部分 | 无 | 无 |
| OSWorld性能 | 45.0% (72B) | 27.1% (72B) | 35.9% (3.7) | 31.4% |
| 许可证 | MIT | 待确认 | 商业 | 商业 |

**差异化优势**：
1. **首个完整开源CUA基础设施**：数据+工具+模型+评估全链路
2. **跨平台数据集**：唯一公开的大规模跨OS CUA数据集
3. **性能领先**：开源模型中OSWorld SOTA

### 4.2 技术创新点

**相对于UI-TARS**：
- 更强的数据规模化能力（22.6K vs 未公开）
- 更完善的标注工具链
- 反思性CoT推理链
- 更好的grounding能力（ScreenSpot-Pro: 60.8% vs 38.1%）

**相对于闭源系统**：
- 完全透明的技术栈
- 可本地部署
- 支持定制化训练
- 研究友好

### 4.3 社区生态

**已建立的生态**：
- **vLLM官方支持**：OpenCUA-7B/32B/72B已集成到vLLM主分支
- **社区贡献**：
  - OpenCUA-7B-exl2量化版本（Sujit Vasanth贡献）
  - Meituan EvoCUA团队贡献vLLM集成
- **在线工具**：
  - AgentNet Data Viewer
  - AgentNetTool文档站点

**引用要求**：
- 学术/技术报告中需明确致谢
- 需引用OpenCUA论文

## 5. 信息来源

| 来源 | 类型 | 置信度 | 访问日期 | 核心内容 |
|------|------|--------|----------|----------|
| [arXiv:2508.09123](https://arxiv.org/abs/2508.09123) | 论文 | 高 | 2026-07-01 | 项目架构、技术方法、实验结果 |
| [GitHub xlang-ai/OpenCUA](https://github.com/xlang-ai/OpenCUA) | 官方仓库 | 高 | 2026-07-01 | 完整README、性能数据、使用指南 |
| [OpenCUA项目主页](https://opencua.xlang.ai/) | 官方站点 | 高 | 2026-07-01 | 项目概览（访问超时，信息来源于GitHub） |

**补充来源**（置信度：中）：
- CSDN技术报道：《港大月之暗面开源OpenCUA》（2025-08）
- 多篇中文技术解读文章

## 6. 关键技术细节

### 6.1 模型训练技术栈

**基础架构**：
- 模型基座：Qwen-VL系列
- Tokenizer/ChatTemplate：Kimi-VL
- 位置编码：1D RoPE（替换原M-RoPE）

**训练数据流**：
```
人类演示 → AgentNetTool录制 → Action Reduction
→ State-Action Matching → CoT Generator
→ 训练数据集
```

**训练基础设施**：
- 主导方：月之暗面（Kimi Team）
- 开源训练代码：开发中（截至2026-01）

### 6.2 Agent架构

**OpenCUAAgent设计**（基于OSWorld实现）：
```python
# 迭代感知-推理-执行循环
while not done:
    # 1. 感知：截图捕获当前环境
    screenshot = capture_screen()

    # 2. 推理：生成反思性长CoT作为内在独白
    cot = model.generate_reflective_cot(
        screenshot,
        history,
        task_goal
    )

    # 3. 动作预测：输出PyAutoGUI可执行动作
    action = model.predict_action(cot)

    # 4. 执行
    execute(action)

    # 5. 更新历史（默认保留3张截图）
    history.update(screenshot, action)
```

**关键参数**：
- 历史长度：3张截图
- CoT格式：L2（二级推理链）
- 最大步数：100步
- 坐标系统：qwen25格式

### 6.3 评估指标体系

**AgentNetBench维度**：
1. **Coordinate Actions**：精确定位屏幕坐标的能力
2. **Content Actions**：生成正确文本内容的能力
3. **Function Actions**：调用正确函数/工具的能力

**OSWorld评估**：
- 任务成功率（Success Rate）
- 不同步数限制下的表现（15/50/100 steps）
- 真实环境在线执行

## 7. 实践建议

### 7.1 快速入门

**模型下载**：
```python
from huggingface_hub import snapshot_download

snapshot_download(
    repo_id="xlangai/OpenCUA-7B",
    local_dir="OpenCUA-7B",
    local_dir_use_symlinks=False
)
```

**vLLM服务部署**：
```bash
# OpenCUA-7B单GPU
vllm serve xlangai/OpenCUA-7B \
  --trust-remote-code \
  --served-model-name opencua-7b

# OpenCUA-72B多GPU（8卡）
vllm serve xlangai/OpenCUA-72B \
  --trust-remote-code \
  --tensor-parallel-size 2 \
  --data-parallel-size 4
```

### 7.2 适用场景

**推荐使用**：
- 学术研究（透明、可复现）
- 本地化部署需求
- 定制化CUA训练
- 计算机使用行为研究

**暂不推荐**：
- 需要Function Actions为主的场景（OpenAI CUA更优）
- 缺乏GPU资源的生产环境（最小需7B模型）
- 需要官方技术支持的商业项目

### 7.3 硬件需求

**推理**：
- OpenCUA-7B：单卡（显存需求未明确，建议16GB+）
- OpenCUA-32B：4卡tensor parallel
- OpenCUA-72B：8卡（tp=2, dp=4）

**训练**：
- 开源训练代码尚未发布
- 依赖Kimi训练基础设施

## 8. 总结

OpenCUA代表了CUA领域开源生态的重要突破，首次提供了从数据标注到模型部署的完整工具链。其核心贡献在于：

1. **填补空白**：打破商业CUA系统技术封闭，建立开源基准
2. **性能领先**：OSWorld-Verified 45.0%确立开源SOTA
3. **方法创新**：三层推理架构（Action Reduction + State-Action Matching + Reflective CoT）
4. **社区友好**：MIT许可、完整工具链、vLLM集成

**未来方向**：
- 等待训练代码开源（当前缺失）
- Function Actions能力提升
- 更大规模数据集
- 跨语言/跨文化适配

**研究价值**：OpenCUA为研究社区提供了深入探索CUA能力边界、安全风险、泛化性能的可靠基础，有望推动CUA领域快速发展。