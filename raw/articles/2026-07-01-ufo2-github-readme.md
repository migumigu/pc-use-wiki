---
source_id: auto-20260701-ufo1
title: UFO/UFO²/UFO³ GitHub README
url: https://github.com/microsoft/UFO
source_type: github_readme
tier: 1
control_object: desktop_app
tech_layer: tool_implementation
collected_date: 2026-07-01
collected_by: auto_research
confidence: high
---

# UFO³ 🌌: Weaving the Digital Agent Galaxy

*From Single Device Agent to Multi-Device Galaxy*

## 演进时间线

- 🎈 UFO — February 2024 — GUI Agent for Windows
- 🖥️ UFO² — April 2025 — Desktop AgentOS
- 🌌 UFO³ Galaxy — November 2025 — Multi-Device Orchestration

## 架构选择

### 🌌 UFO³ Multi-Device Agent Galaxy (NEW & RECOMMENDED)
- 跨设备协作工作流
- 复杂多步自动化
- DAG 任务编排
- 异构平台集成

**关键特性**:
- **Constellation**: 任务分解为可执行 DAG
- **Dynamic DAG editing**: 自适应工作流演化
- **Asynchronous execution**: 并行任务协调
- **Unified AIP protocol**: 安全 agent 通信

### 🪟 UFO² Desktop AgentOS (STABLE & BATTLE-TESTED)
- 单 Windows 自动化
- 快速任务执行
- 学习 agent 基础

**关键特性**:
- Deep Windows OS integration
- Hybrid GUI + API actions
- Speculative Multi-Action: 51% fewer LLM calls
- Visual + UIA Detection: 混合控件检测
- Knowledge Substrate: RAG 文档/演示/执行轨迹
- Device Agent Role: 可作为 Galaxy Windows 执行器

## UFO² vs UFO³ 对比

| 方面 | UFO² | UFO³ Galaxy |
|---|---|---|
| **架构** | Single Windows Agent | Multi-Device Orchestration |
| **任务模型** | Sequential ReAct Loop | DAG-based Constellation Workflows |
| **范围** | 单设备多应用 | 多设备跨平台 |
| **协调** | HostAgent + AppAgents | ConstellationAgent + TaskOrchestrator |
| **设备支持** | Windows Desktop | Windows, Linux, Android |
| **执行** | 顺序 | 并行 DAG 执行 |
| **跨设备协作** | ❌ | ✅ 核心特性 |
| **状态** | ✅ LTS | ⚡ 活跃开发 |

## UFO³ 五大设计原则

1. **声明式分解为动态 DAG** — 请求分解为结构化 DAG
2. **持续结果驱动的图演化** — 自适应执行反馈
3. **异构异步安全编排** — 基于能力的设备匹配
4. **统一 Agent 交互协议 (AIP)** — WebSocket 安全协调层
5. **模板驱动 MCP 赋能设备 Agent** — 快速 agent 开发工具包

## 快速启动

### Galaxy Quick Start
```bash
pip install -r requirements.txt
copy config\galaxy\agent.yaml.template config\galaxy\agent.yaml
# 编辑 config\galaxy\devices.yaml 注册设备
python -m galaxy --interactive
```

### UFO² Quick Start
```bash
pip install -r requirements.txt
copy config\ufo\agents.yaml.template config\ufo\agents.yaml
python -m ufo --task <task_name>
```

## 论文

- UFO³: arXiv:2511.11332 (2025)
- UFO²: arXiv:2504.14603 (2025)
- UFO: arXiv:2402.07939 (2024)

## Citation

```
@article{zhang2025ufo3,
  title={UFO$^3$: Weaving the Digital Agent Galaxy},
  author = {Zhang, Chaoyun and Li, Liqun and Huang, He and Ni, Chiming and Qiao, Bo and Qin, Si and Kang, Yu and Ma, Minghua and Lin, Qingwei and Rajmohan, Saravan and Zhang, Dongmei},
  journal = {arXiv preprint arXiv:2511.11332},
  year = {2025},
}

@article{zhang2025ufo2,
  title = {{UFO2: The Desktop AgentOS}},
  author = {Zhang, Chaoyun and Huang, He and Ni, Chiming and Mu, Jian and Qin, Si and He, Shilin and Wang, Lu and Yang, Fangkai and Zhao, Pu and Du, Chao and Li, Liqun and Kang, Yu and Jiang, Zhao and Zheng, Suzhen and Wang, Rujia and Qian, Jiaxu and Ma, Minghua and Lou, Jian-Guang and Lin, Qingwei and Rajmohan, Saravan and Zhang, Dongmei},
  journal = {arXiv preprint arXiv:2504.14603},
  year = {2025}
}
```
