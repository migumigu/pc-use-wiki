---
source_id: auto-2026-07-02-e2b-reference
title: E2B 沙箱云平台参考
url: https://e2b.dev/
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# E2B — AI Agent 的安全沙箱云平台

## 项目基本信息

- **GitHub**: https://github.com/e2b-dev
- **底层技术**: Firecracker microVM (AWS 开源, 35.2K Stars)
- **定位**: Agent Sandbox 生态的事实标准/参照系
- **用户**: 94% 的 Fortune 100 公司使用
- **规模**: 月下载量 700 万+，累计启动 10 亿+ 沙箱

## 核心能力

- **Firecracker microVM 隔离**: 每个沙箱独立 Linux 内核、独立内存空间
- **快速启动**: 同区域 < 200ms（安全启动 80ms）
- **长时间运行**: 最长 24 小时会话
- **LLM 无关**: 兼容 OpenAI、Anthropic、Llama、Mistral 等
- **全栈安全工具**: 代码执行、终端访问、浏览器操作、文件读写
- **自定义模板**: 创建自定义沙箱模板或运行时安装包
- **多部署模式**: BYOC (AWS/GCP/Azure)、VPC 内部署、自托管

## 典型客户案例

- **Hugging Face**: 用于 Replicate DeepSeek-R1，数百并发沙箱进行 RL 训练
- **Manus**: 27 种工具的完整虚拟计算机
- **Groq**: Compound AI 系统底层
- **Lindy**: AI 工作流代码执行

## SDK 使用

```python
from e2b_code_interpreter import Sandbox
with Sandbox.create() as sandbox:
    result = sandbox.run_code("print('Hello from E2B!')")
```

## 生态地位

E2B SDK 协议被 CubeSandbox、agent-sandbox/agent-sandbox 等项目作为兼容目标，已成为 Agent Sandbox 的事实标准。
