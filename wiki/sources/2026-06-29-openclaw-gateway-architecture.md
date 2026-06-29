---
tags: [openclaw, gateway, architecture, websocket, protocol]
created: 2026-06-29
updated: 2026-06-29
sources: [auto-20260629-cd34]
---

# OpenClaw Gateway Architecture

> OpenClaw 核心架构文档：Gateway 中心化设计，WebSocket 协议，多组件协作模型

## 一句话摘要

OpenClaw 采用 Gateway 中心化架构，单一长生命周期守护进程管理所有消息平台连接，客户端和节点通过 WebSocket API 连接，提供请求/响应/事件模型。

## 核心要点

- **Gateway 守护进程**：维护所有消息平台连接，暴露类型化 WS API，验证入站帧
- **客户端**：macOS app、CLI、Web UI，通过 WS 发送请求订阅事件
- **节点**：macOS/iOS/Android/无头设备，声明 role: node，提供设备能力
- **WebSocket 协议**：JSON 帧，connect 握手，请求/响应/事件三种消息类型
- **设备配对**：所有连接需要设备身份，新设备需配对批准，支持 nonce 签名
- **远程访问**：推荐 Tailscale/VPN，备选 SSH 隧道，支持 TLS 和证书固定
- **不变量**：单 Gateway 单会话，握手强制，事件不重放

## 关键概念

- [[OpenClaw]] — 本项目
- [[Agent]] — AI 智能体
- [[MCP]] — 工具调用协议对比

## 相关页面

- [[系统服务控制]] — 系统服务控制主题
- [[Agent集成层]] — Agent 集成层主题
