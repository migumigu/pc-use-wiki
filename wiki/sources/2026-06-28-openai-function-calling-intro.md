---
tags: [素材摘要]
created: 2026-06-28
updated: 2026-06-28
sources: []
source_type: official_docs
source_path: raw/articles/2026-06-28-openai-function-calling-intro.md
images: 0
image_paths: []
---

# OpenAI Function Calling 官方指南

> OpenAI的Function Calling官方文档，介绍函数调用的核心概念、使用场景和基础实现方法

## 基本信息

- **来源类型**：官方文档（OpenAI Platform Docs）
- **原文位置**：raw/articles/2026-06-28-openai-function-calling-intro.md
- **消化日期**：2026-06-28
- **发布时间**：2023年6月20日（首次发布）

## 核心观点

1. **Function Calling的本质**：将GPT的推理功能与外部工具及API连接起来的方法，通过JSON描述函数及参数，让模型智能输出调用请求<!-- confidence: EXTRACTED -->
   - 证据：原文"Function calling 是一种将 GPT 的推理功能与外部工具及 API 连接起来的方法"

2. **五大核心用途**：
   - 使助手能够获取数据（从内部系统获取客户数据）
   - 使助手能够采取行动（根据偏好安排会议）
   - 使助手能够执行计算（数学辅导）
   - 构建丰富的流程（数据提取管道）
   - 修改应用程序UI（地图渲染标记点）<!-- confidence: EXTRACTED -->

3. **基础实现流程**：
   - 定义tools array（包含函数名、描述、参数schema）
   - 发送API请求，模型返回function call
   - 执行函数，返回结果给模型
   - 模型基于结果生成最终回答<!-- confidence: EXTRACTED -->

## 关键概念

- [[Function Calling]] — OpenAI的函数调用机制（待创建）
- [[Tool Schema]] — 函数定义的JSON结构（已关联）
- [[JSON Schema]] — 参数定义标准（已关联）
- [[tool_choice]] — 控制函数调用行为的参数（已关联）

## 与其他素材的关联

- **与 [[Tool Use]] 的关系**：Function Calling是OpenAI对Tool Use的实现命名<!-- confidence: INFERRED -->
- **与 [[OpenAI Function Calling Best Practices]] 的关系**：本文介绍基础概念，后续文档提供最佳实践<!-- confidence: EXTRACTED -->

## 相关页面

- [[Function Calling]]（实体页，待创建）
- [[Tool Use]]（实体页，已创建）
- [[Agent集成层]]（主题页，需更新）