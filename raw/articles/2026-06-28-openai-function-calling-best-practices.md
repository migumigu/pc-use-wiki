---
source_id: auto-2026-06-28-c3d4
title: OpenAI Function Calling 最佳实践指南
url: https://platform.openai.com/docs/guides/function-calling
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
related_urls:
  - https://blog.csdn.net/mingupup/article/details/141646972
---

# OpenAI Function Calling 最佳实践指南

学习如何将大型语言模型连接到外部工具。

## 核心应用场景

函数调用在许多用例中都非常有用，例如：

### 1. 使助手能够获取数据
当用户询问"我的最近订单是什么？"时，AI助手需要从内部系统中获取最新的客户数据，然后才能生成回应给用户。

### 2. 使助手能够采取行动
AI助手需要根据用户的偏好和日历的空闲时间来安排会议。

### 3. 使助手能够执行计算
一个数学辅导助手需要执行数学计算。

### 4. 构建丰富的流程
一个数据提取管道首先获取原始文本，然后将其转换为结构化数据并保存到数据库中。

### 5. 修改应用程序的UI
你可以使用函数调用根据用户输入更新UI，例如，在地图上渲染一个标记点。

## 函数定义最佳实践

### 1. 编写清晰详细的函数名称、参数描述和说明

明确描述函数的目的和每个参数（及其格式），以及输出代表什么。

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

使用系统提示描述何时（以及何时不）使用每个函数。请告诉模型确切要做什么。包括示例和边缘案例，特别是为了纠正任何重复出现的故障。

**注意**：添加示例可能会损害推理模型的性能。

### 2. 应用软件工程最佳实践

#### 确保函数直观易懂
遵循最小惊讶原则（Principle of least astonishment），详见：https://en.wikipedia.org/wiki/Principle_of_least_astonishment

#### 采用枚举和对象结构
以防止出现无效状态。例如 `toggle_light(on: bool, off: bool)` 允许无效调用。

#### 通过"实习生测试"
如果一名实习生仅凭函数定义就能正确地使用它，那么说明你的设计相当出色。如果不能，他们问您什么问题？将答案添加到提示中。

### 3. 尽可能减少大模型的负担并使用代码

#### 不要让模型填写您已经知道的参数

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

如果您已经根据先前的菜单有 `order_id`，则不要设置 `order_id` 参数——而是设置无参数的 `submit_refund()`，并使用代码传递 `order_id`。

#### 合并总是按顺序调用的函数

如果您总是在 `query_location()` 之后调用 `mark_location()`，只需将标记逻辑移至查询函数调用中即可。

### 4. 保持函数数量较少以提高准确性

- 用不同数量的函数评估您的性能
- 目标是一次少于 20 个函数
- 若观察到有两个函数经常被同时调用，应考虑将它们合并为一个函数

### 5. 利用 OpenAI 资源

在 Playground 中生成和迭代函数模式。

## 函数调用生命周期详解

### 步骤详解：构建配送助手示例

#### 步骤 1：在您的代码库中选择一个模型应该能够调用的函数

假设你希望允许模型生成调用你代码库中 `get_delivery_date` 函数所需的参数。该函数接受一个 `order_id` 并查询你的数据库，以确定给定包裹的发货日期。

```python
# This is the function that we want the model to be able to call
def get_delivery_date(order_id: str) -> datetime:
    # Connect to the database
    conn = sqlite3.connect('ecommerce.db')
    cursor = conn.cursor()
    # ...
```

#### 步骤 2：向模型描述你的函数，以便它知道如何调用它

创建一个"函数定义"，向模型描述该函数。这个定义既描述了函数的作用（以及可能调用它的时机），也说明了调用该函数所需的参数。

```json
{
    "name": "get_delivery_date",
    "description": "Get the delivery date for a customer's order. Call this whenever you need to know the delivery date, for example when a customer asks 'Where is my package'",
    "parameters": {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "The customer's order ID.",
            },
        },
        "required": ["order_id"],
        "additionalProperties": false,
    }
}
```

函数定义中的参数部分应该使用 JSON Schema 来描述。如果模型生成了函数调用，它将根据您提供的架构来生成参数。

#### 步骤 3：将您的函数定义作为可用的"工具"传递给模型

在调用聊天完成 API 时，需要在提供的"工具"数组中给出我们的函数定义。

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_delivery_date",
            "description": "Get the delivery date for a customer's order. Call this whenever you need to know the delivery date, for example when a customer asks 'Where is my package'",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "The customer's order ID.",
                    },
                },
                "required": ["order_id"],
                "additionalProperties": False,
            },
        }
    }
]

messages = [
    {"role": "system", "content": "You are a helpful customer support assistant. Use the supplied tools to assist the user."},
    {"role": "user", "content": "Hi, can you tell me the delivery date for my order?"}
]

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
)
```

#### 步骤 4：接收并处理模型响应

**如果模型决定不调用任何函数**：

响应将包含一个直接的回复给用户：

```python
chat.completionsMessage(
    content='Hi there! I can help with that. Can you please provide your order ID?',
    role='assistant',
    function_call=None,
    tool_calls=None
)
```

在助手使用场景中，你通常会希望向用户展示这个回应，并让他们对其进行回复。

假设用户回应了他们的订单号，再次调用 API：

```python
messages.append({
    "role": "user",
    "content": "My order ID is ORD-12345"
})

response_2 = openai.chat.completions.create(
    model="gpt-4o",
    messages=messages,
    tools=tools,
)
```

## 重要配置选项

### 1. 工具选择模式（tool_choice）

控制模型如何选择使用工具：

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

# 不使用函数
tool_choice="none"  # 强制 API 不使用任何函数
```

### 2. 严格模式（Strict Mode）

启用严格模式可以确保模型生成的参数完全符合您提供的 JSON Schema：

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

**严格模式的限制**：
- 所有参数必须在 `required` 中列出
- `additionalProperties` 必须设置为 `false`
- 可选参数使用 `["string", "null"]` 类型

### 3. 结构化输出（Structured Outputs）

2024年8月，OpenAI 推出了结构化输出功能。当你在函数定义中通过设置 `strict: true` 来开启时，结构化输出确保模型为函数调用生成的参数完全符合你在函数定义中提供的 JSON 架构。

## 关键原则总结

1. **模型不执行函数**：模型仅生成调用参数，您的代码负责实际执行
2. **应用程序完全掌控**：始终由您的应用程序决定如何处理函数调用
3. **清晰的函数定义**：编写详细、直观的函数名称和参数描述
4. **遵循软件工程最佳实践**：避免无效状态，通过实习生测试
5. **减少模型负担**：不要让模型填写已知的参数
6. **保持函数数量精简**：目标少于 20 个函数
7. **使用系统提示**：明确告诉模型何时使用每个函数
8. **处理边缘案例**：包括示例和边缘情况描述

## 参考资料

- OpenAI 官方文档：https://platform.openai.com/docs/guides/function-calling
- OpenAI 官方最佳实践：https://platform.openai.com/docs/guides/function-calling/best-practices