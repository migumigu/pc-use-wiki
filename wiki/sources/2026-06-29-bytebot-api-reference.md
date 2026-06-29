---
tags: [official_docs, api, mcp]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-bytebot-api]
---

# Bytebot API Reference

> Bytebot API 参考文档，Agent API 和 Desktop API 两套接口详解

## Bytebot API 总览

Bytebot 提供两组 API 用于程序化控制：

### 1. Agent API（任务管理）
运行在端口 9991，提供高级任务管理：
- 任务管理：创建、管理、监控 AI 驱动的任务
- UI 集成：WebSocket 连接和实时更新

**基础 URL**: `http://localhost:9991`

**创建任务示例**:
```bash
curl -X POST http://localhost:9991/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Download invoices from webmail and organize by date",
    "priority": "HIGH"
  }'
```

### 2. Desktop API（直接控制）
运行在端口 9990，提供低级桌面控制：
- 计算机控制：直接控制鼠标、键盘、截屏
- 使用示例：常见自动化场景代码示例

**基础 URL**: `http://localhost:9990`

**桌面控制示例**:
```bash
curl -X POST http://localhost:9990/computer-use \
  -H "Content-Type: application/json" \
  -d '{"action": "screenshot"}'
```

### MCP 支持

Desktop API 还暴露 MCP（模型上下文协议）端点：
`http://localhost:9990/mcp`

连接 MCP 客户端通过 SSE 访问桌面控制工具。

## 认证

- **本地访问**：默认无需认证
- **远程访问**：根据安全要求配置认证
- **生产环境**：实现 API 密钥、OAuth 或其他认证方法

## 响应格式

### Agent API 响应
```json
{
  "id": "task-123",
  "status": "RUNNING",
  "description": "Your task description",
  "messages": [...],
  "createdAt": "2024-01-01T00:00:00Z"
}
```

### Desktop API 响应
```json
{
  "success": true,
  "data": { ... },
  "error": null
}
```

## 错误处理

两组 API 均使用标准 HTTP 状态码：

| 状态码 | 描述 |
|--------|------|
| 200 | 成功 |
| 201 | 已创建（新资源） |
| 400 | 错误请求 - 参数无效 |
| 401 | 未授权 - 认证失败 |
| 404 | 未找到 - 资源不存在 |
| 500 | 内部服务器错误 |

## 速率限制

- **Agent API**：无硬性限制，但需考虑任务队列容量
- **Desktop API**：无速率限制，但快速动作可能影响桌面性能

## 最佳实践

1. **高级自动化用 Agent API** — 让 AI 处理复杂性
2. **精确控制用 Desktop API** — 需要精确动作时
3. **组合使用两组 API** — 通过 Agent API 创建任务，通过 Desktop API 监控
4. **优雅处理错误** — 为瞬时失败实现重试逻辑
5. **监控资源使用** — 两组 API 都可能资源密集

## 相关页面

- [[Bytebot]]
- [[MCP]]
- [[桌面应用控制]]
- [[Computer-Use]]
