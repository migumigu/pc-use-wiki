---
source_id: auto-2026-06-29-a2a-python-sdk
title: A2A Python SDK Official Repository
url: https://github.com/a2aproject/a2a-python
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: tool_implementation
collected_date: 2026-06-29
collected_by: auto_research
confidence: high
---

# A2A Python SDK

## 核心信息

- **维护方**：a2aproject（Linux Foundation 项目）
- **最新版本**：v1.1.0（2026年5月29日）
- **协议版本**：A2A 1.0（兼容 v0.3）
- **许可证**：Apache 2.0
- **Python 版本**：3.10+
- **提交数**：720+ Commits

## 核心特性

1. **A2A 协议兼容**：构建符合 A2A 协议的 Agent 应用程序
2. **可扩展**：轻松添加不同通信协议和数据库后端支持
3. **异步**：基于现代异步 Python，高性能
4. **可选集成**：FastAPI、gRPC、OpenTelemetry、SQL 数据库

## 协议兼容性矩阵

| Spec Version | Transport | Client | Server |
|---|---|---|---|
| **1.0** | JSON-RPC | ✅ | ✅ |
| **1.0** | HTTP+JSON/REST | ✅ | ✅ |
| **1.0** | gRPC | ✅ | ✅ |
| **0.3** (compat) | JSON-RPC | ✅ | ✅ |
| **0.3** (compat) | HTTP+JSON/REST | ✅ | ✅ |
| **0.3** (compat) | gRPC | ✅ | ✅ |

## 安装选项

| Feature | uv Command | pip Command |
|---|---|---|
| Core SDK | `uv add a2a-sdk` | `pip install a2a-sdk` |
| All Extras | `uv add "a2a-sdk[all]"` | `pip install "a2a-sdk[all]"` |
| FastAPI | `uv add "a2a-sdk[fastapi]"` | `pip install "a2a-sdk[fastapi]"` |
| gRPC | `uv add "a2a-sdk[grpc]"` | `pip install "a2a-sdk[grpc]"` |
| PostgreSQL | `uv add "a2a-sdk[postgresql]"` | `pip install "a2a-sdk[postgresql]"` |

## 架构特点

- **核心**：纯 A2A 协议实现
- **HTTP Server**：可选 FastAPI/Starlette 集成
- **gRPC**：可选 gRPC 传输支持
- **Telemetry**：可选 OpenTelemetry 追踪
- **Encryption**：可选端到端加密
- **Database**：可选 SQL 数据库支持（PostgreSQL/MySQL/SQLite）

## 示例

```python
# 运行远程 Agent
git clone https://github.com/a2aproject/a2a-samples.git
cd a2a-samples/samples/python/agents/helloworld
uv run .

# 运行客户端
cd a2a-samples/samples/python/agents/helloworld
uv run test_client.py
```
