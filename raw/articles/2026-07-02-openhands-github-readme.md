---
source_id: auto-2026-07-02-openhands-readme
title: OpenHands GitHub README
url: https://github.com/All-Hands-AI/OpenHands
source_type: github_readme
tier: 1
control_object: Agent集成层
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# OpenHands: Code Less, Make More

## 项目基本信息

- **GitHub**: https://github.com/All-Hands-AI/OpenHands
- **Stars**: 75,782+ (截至 2026-06)
- **许可证**: MIT License
- **论文**: arXiv:2407.16741
- **官方文档**: https://docs.all-hands.dev
- **社区**: Slack + Discord + GitHub Issues

## 核心定位

> OpenHands agents can do anything a human developer can: modify code, run commands, browse the web, call APIs, and yes—even copy code snippets from StackOverflow.

一个平台级 AI 软件开发 Agent，从「辅助」到「自主」的完整工程栈。

## 五层架构

```
OpenHands 技术栈
├── Software Agent SDK    → 可组合 Python 库，Agent 定义引擎
├── CLI                    → 终端交互模式
├── Local GUI              → 本地桌面应用 (v0.20)
├── OpenHands Cloud        → 云端基础设施（Slack/Jira/Linear集成）
└── OpenHands Enterprise   → 企业级 VPC 自托管（Kubernetes）
```

## Quick Start

```bash
docker pull docker.all-hands.dev/all-hands-ai/runtime:0.20-nikolaik

docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.20-nikolaik \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ~/.openhands-state:/.openhands-state \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    docker.all-hands.dev/all-hands-ai/openhands:0.20
```

## 核心能力

- **修改代码**: 读写任意代码文件
- **运行命令**: 在沙箱环境执行终端命令
- **浏览网页**: Web 自动化能力
- **调用 API**: 外部服务集成
- **StackOverflow**: 代码片段搜索与应用

## 安全设计

> OpenHands is meant to be run by a single user on their local workstation. It is not appropriate for multi-tenant deployments where multiple users share the same instance.

单用户本地工作站设计，不支持多租户。企业场景需联系官方获取高级部署方案。

## 多模式运行

1. **连接本地文件系统**: `runtimes#connecting-to-your-filesystem`
2. **Headless 模式**: 脚本化无头运行
3. **CLI 模式**: 终端交互
4. **GitHub Action**: 标签 Issue 自动处理

## Model-Agnostic 设计

支持多种 LLM 提供商：
- Anthropic Claude 3.5 Sonnet (推荐)
- OpenAI GPT 系列
- 其他 LLM 提供商

## 引用

```bibtex
@misc{openhands,
      title={{OpenHands: An Open Platform for AI Software Developers as Generalist Agents}},
      author={Xingyao Wang and Boxuan Li and Yufan Song and Frank F. Xu and Xiangru Tang and Mingchen Zhuge and Jiayi Pan and Yueqi Song and Bowen Li and Jaskirat Singh and Hoang H. Tran and Fuqiang Li and Ren Ma and Mingzhang Zheng and Bill Qian and Yanjun Shao and Niklas Muennighoff and Yizhe Zhang and Binyuan Hui and Junyang Lin and Robert Brennan and Hao Peng and Heng Ji and Graham Neubig},
      year={2024},
      eprint={2407.16741},
      archivePrefix={arXiv},
}
```

## 关键实体提取

- **OpenHands**: 主实体，全栈 Agent 工程平台
- **Runtime**: 沙箱运行时环境
- **EventStream**: 事件流消息总线
- **Agent Controller**: Agent 控制器
- **Sandbox**: 安全沙箱隔离

## 主题关联

- [[Agent集成层]] - 主分类
- [[系统服务控制]] - 沙箱运行时
- [[桌面应用控制]] - CLI/GUI 模式