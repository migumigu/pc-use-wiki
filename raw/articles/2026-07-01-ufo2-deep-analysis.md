---
source_id: auto-20260701-ufo2
title: UFO² 深度分析 - Windows桌面迈入AgentOS时代
url: https://view.inews.qq.com/k/20250506A066QU00
source_type: tech_blog
tier: 2
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# 微软正式开源UFO²，Windows桌面迈入「AgentOS 时代」

**来源**: 机器之心 | 2025-05-06
**论文**: UFO²: The Desktop AgentOS (arXiv:2504.14603)
**代码**: https://github.com/microsoft/UFO/
**文档**: https://microsoft.github.io/UFO/

## 背景

传统 RPA 工具依赖固定脚本，界面变化敏感、维护成本高。LLM 驱动的 CUA 虽有潜力，但多数停留在概念验证阶段，缺乏与操作系统深度集成的能力。

UFO² 是前代 UFO 的全面升级版，**业内首个深度集成 Windows 操作系统的桌面智能体平台**，以「AgentOS」理念设计。

## UFO² 五大核心突破

### 1. 统一 GUI–API 混合执行

- API 执行：精准高效，但覆盖范围有限
- GUI 执行：通用灵活，但步骤长，易受界面变动影响
- UFO² 通过统一 Puppeteer 接口，动态选择执行模式
- 智能判断优先使用 API 提高速度，API 不足时灵活转向 GUI

### 2. 混合控件感知

- 深度融合 Windows 原生 UI Automation (UIA) 接口 + OmniParser-v2 视觉识别
- 克服视觉识别准确性不足和纯系统 API 检测范围有限的瓶颈
- 在界面复杂、控件自定义或标准化程度低的场景下提高识别准确性

### 3. 持续增强的动态知识集成

- RAG 技术构建持续知识库
- 动态整合外部应用文档和历史执行日志
- 智能体实时获得最新应用使用方法和最佳实践
- 利用历史成功执行经验，实现"越用越强"

### 4. 高效的推测式多步执行

- 一次 LLM 调用预测多个后续步骤
- 实时界面状态校验逐步执行
- **减少 51.5% 的 LLM 调用次数**
- 大幅提升任务执行速度与系统响应能力

### 5. 无干扰的 PiP 虚拟桌面执行环境

- 深度利用 Windows 原生远程桌面服务
- 创建轻量级、独立、安全的虚拟桌面环境
- 智能体任务在虚拟桌面执行，避免与用户主桌面交互干扰
- 用户可在智能体执行任务时继续其他工作

## 性能评测

在 20+ 主流 Windows 应用（Excel、Outlook、Edge 等）中验证：
- **仅 GPT-4o，任务成功率相比 OpenAI Operator 提升超过 10%**
- 成功率：UFO² 30.5%/32.7% vs Operator 20.8%/14.3%
- 推测式多步执行减少 51.5% LLM 调用

## 多智能体架构

- **HostAgent**: 中央协调，自然语言任务解析与子任务分解
- **AppAgent**: 专属应用接口，为每个应用提供定制化 API 接入、界面感知与交互能力
- 两者协同实现任务精准分解与灵活执行

## 关键人物

第一作者 Chaoyun Zhang（微软 DKI 团队），UFO 核心开发者，90+ 页 GUI Agent 综述文章主要撰写者。
