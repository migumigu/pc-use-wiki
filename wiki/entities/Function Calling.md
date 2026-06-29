---
tags: [核心概念, Agent集成层]
created: 2026-06-28
updated: 2026-06-28
sources:
  - wiki/sources/2026-06-28-openai-function-calling-intro.md
  - wiki/sources/2026-06-28-openai-function-calling-best-practices.md
  - wiki/sources/2026-06-28-openai-function-calling-2.0-updates.md
---

# Function Calling

> OpenAI的函数调用机制，将LLM与外部工具和API连接的核心技术

## 定义

Function Calling（函数调用）是OpenAI于2023年6月20日推出的功能，允许开发人员通过API向GPT描述函数，让模型智能输出包含参数的JSON对象来调用这些函数。是将GPT推理功能与外部工具及API连接的方法。<!-- confidence: EXTRACTED -->
- 证据：原文"Function calling 是一种将 GPT 的推理功能与外部工具及 API 连接起来的方法"

## 核心用途

### 五大应用场景

1. **使助手能够获取数据**：从内部系统获取客户数据，实现RAG方法<!-- confidence: EXTRACTED -->
2. **使助手能够采取行动**：根据偏好安排会议，执行表单提交、API调用<!-- confidence: EXTRACTED -->
3. **使助手能够执行计算**：数学辅导助手执行数学计算<!-- confidence: EXTRACTED -->
4. **构建丰富的流程**：数据提取管道，获取原始文本→转换为结构化数据→保存到数据库<!-- confidence: EXTRACTED -->
5. **修改应用程序UI**：根据用户输入更新UI，如地图渲染标记点<!-- confidence: EXTRACTED -->

### Function Calling 2.0两大核心应用

**数据获取（Fetching Data）**：
- 实时检索信息融入大模型响应
- 查询知识库和获取特定API数据（天气预报）
- 实现RAG方法<!-- confidence: EXTRACTED -->

**执行动作（Taking Action）**：
- 完成表单提交、API调用
- 改变应用状态（前端或后端）
- 执行Agent智能体工作流<!-- confidence: EXTRACTED -->

## 实现流程

标准实现流程：
1. 定义tools array（函数名、描述、参数schema）
2. 发送API请求，模型返回function call
3. 执行函数，返回结果给模型
4. 模型基于结果生成最终回答<!-- confidence: EXTRACTED -->

## 最佳实践

### 函数定义原则

**好的示例**：
```python
def get_weather(location: str):
    """获取指定位置的当前温度
    Args:
        location: 城市和国家，例如：'北京, 中国'
    """
    pass
```

**不好的示例**：
```python
def get_weather(city: str):
    """获取天气"""
    pass
```

关键要点：
- 编写清晰详细的函数名称、参数描述
- 明确描述函数目的和每个参数格式
- 使用直观参数名（`location`而非`l`)
- 提供参数示例（枚举值、格式说明）<!-- confidence: EXTRACTED -->

### 参数验证

需要对函数参数进行验证：
- 检查参数类型和格式
- 处理无效参数
- 异常情况处理<!-- confidence: EXTRACTED -->

## 与Tool Use的关系

Function Calling是OpenAI对Tool Use的实现命名：
- **Tool Use**（Anthropic）— Claude的工具调用机制
- **Function Calling**（OpenAI）— GPT的函数调用机制
- 核心概念相同，命名差异<!-- confidence: INFERRED -->

## 与AI Agent智能体

Function Calling是打造高效AI Agent智能体的核心技能：
- 正确运用对开发强大Agent应用至关重要
- 支持Agent工具调用、任务执行、状态改变<!-- confidence: EXTRACTED -->
- 证据：原文"作为打造高效 AI Agent 智能体的核心技能之一"

## 不同素材中的观点

| 素材 | 核心观点 |
|------|----------|
| [[OpenAI Function Calling Intro]] | 官方基础介绍：核心概念、五大用途、实现流程 |
| [[OpenAI Function Calling Best Practices]] | 最佳实践：函数定义原则、参数验证、错误处理 |
| [[OpenAI Function Calling 2.0 Updates]] | 2.0版本：两大核心应用（数据获取、执行动作）、全新最佳实践 |

## 相关页面

- [[Tool Use]]（实体页，已创建）— Anthropic的同类机制
- [[Agent]]（实体页，已存在）— Function Calling支持Agent构建
- [[Agent集成层]]（主题页，已存在）— Function Calling所属技术层级