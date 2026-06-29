---
source_id: auto-2026-06-28-e5f6
title: OpenAI Function Calling 2.0 重要更新与最佳实践
url: https://platform.openai.com/docs/guides/function-calling
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
related_urls:
  - https://blog.csdn.net/star_nwe/article/details/145210500
---

# OpenAI Function Calling 2.0 重要更新与最佳实践

**OpenAI 推出了全新的 AI Agent 智能体 Function Calling 2.0 使用指南**，此次更新使得文档篇幅缩减了一半，并且引入了一系列关键的最佳实践。**作为打造高效 AI Agent 智能体的核心技能之一**，正确运用 Function Calling 对于开发强大的 AI Agent 智能体应用具有至关重要的作用。

## 一、Function Calling 的两大核心应用

文章中清晰地阐述了 Function Calling 的**两个核心应用场景**：

### 第一、数据获取（Fetching Data）

- 实时检索信息并将其融入大模型的响应之中
- 适用于查询知识库和获取特定 API 数据（例如天气预报）
- 本质上是实现了一种 RAG（Retrieval Augmented Generation，检索增强生成）的方法

### 第二、执行动作（Taking Action）

- 完成表单提交、API 调用等操作
- 改变应用程序的状态（涉及前端或后端）
- 执行 AI Agent 智能体的工作流程步骤（例如对话中的任务转接）

## 二、全新的最佳实践

此次更新最为关键的是推出了一系列实用的**最佳实践**，下面我们来聚焦于其中的几项：

### 第一、编写明确的函数定义

**好的示例**：
```python
def get_weather(location: str):
    """获取指定位置的当前温度
    Args:
        location: 城市和国家，例如：'北京, 中国'
    """
    pass
```

**糟糕的示例**：
```python
def toggle_light_switch(on: bool, off: bool):
    """这个设计允许无效状态的存在"""
    pass
```

### 第二、遵循软件工程的最佳实践指南

- **确保函数直观易懂**，并遵循最小惊讶原则（Principle of least astonishment），详见链接：https://en.wikipedia.org/wiki/Principle_of_least_astonishment
- **采用枚举和对象结构**，以防止出现无效状态
- **通过"实习生测试"**：如果一名实习生仅凭函数定义就能正确地使用它，那么说明你的设计相当出色

### 第三、尽可能减少大模型的负担

**不推荐**：
```python
def get_orders(user_id: str):
    pass
```

**推荐**：
```python
def get_orders():
    # 在代码中传递 user_id，而不是让模型填写
    pass
```

### 第四、精简函数数量，维持高效性

- **推荐在任何时候使用的函数不超过 20 个**
- 若观察到有两个函数经常被同时调用，应考虑将它们合并为一个函数

## 三、重要的配置选项

### 第一、工具选择模式（tool_choice）

```python
# 自动模式（默认）
tool_choice="auto"  # 可以调用零个、一个或多个函数

# 强制模式
tool_choice="required"  # 必须调用至少一个函数

# 指定函数
tool_choice={
    "type": "function",
    "function": {"name": "get_weather"}
}  # 强制调用特定函数
```

### 第二、严格模式（Strict Mode）

```json
{
    "type": "function",
    "function": {
        "name": "get_weather",
        "strict": True,  # 启用严格模式
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string"
                },
                "units": {
                    "type": ["string", "null"],  # 可选参数
                    "enum": ["celsius", "fahrenheit"]
                }
            },
            "required": ["location", "units"],
            "additionalProperties": false
        }
    }
}
```

**严格模式的关键要求**：
- 所有参数必须在 `required` 中列出
- `additionalProperties` 必须设置为 `false`
- 可选参数使用 `["string", "null"]` 类型组合

## 四、流式处理的支持

OpenAI 进一步提升了**流式处理的能力**，使得能够即时展现函数调用的实时过程：

```python
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "北京今天天气如何？"}],
    tools=tools,
    stream=True
)

for chunk in stream:
    delta = chunk.choices[0].delta
    print(delta.tool_calls)  # 实时显示函数调用进度
```

## 五、Function Calling 2.0 的关键改进

### 1. 文档更加简洁高效
文档篇幅缩减了一半，但信息密度更高，更易于理解和实践。

### 2. 最佳实践更加具体
提供了明确的设计原则和代码示例，包括：
- 如何编写清晰的函数定义
- 如何应用软件工程最佳实践
- 如何减少大模型的负担
- 如何保持函数数量精简

### 3. 配置选项更加灵活
- 支持 `tool_choice` 的多种模式（auto、required、指定函数）
- 支持严格模式确保参数准确性
- 支持流式处理实现实时反馈

### 4. 强调两大核心应用
明确区分了"数据获取"和"执行动作"两种核心应用场景，帮助开发者更好地理解 Function Calling 的用途。

## 六、展望：2026 年见证真正的 AI Agent 智能体

此次更新主要目的是分享了一系列最佳实践。随着 o1-mini 即将实现对 Function Calling 的支持（已获官方确认），以及 tasks 功能的推出。因此，可以展望在**2026 年见证真正的 AI Agent 智能体的诞生**。

Function Calling 作为 AI Agent 的核心技能之一，其重要性不言而喻：
- **让大模型具备行动能力**：不再只是生成文本，而是能够实际执行操作
- **连接外部世界**：通过 API 调用连接数据库、服务、工具等外部系统
- **实现智能决策**：根据用户意图自动选择合适的工具和参数
- **支持复杂流程**：实现多工具协同、链式调用、条件判断等复杂逻辑

## 参考资料

- OpenAI 官方文档：https://platform.openai.com/docs/guides/function-calling
- OpenAI Function Calling 2.0 更新：https://openai.com/index/function-calling-and-other-api-updates/