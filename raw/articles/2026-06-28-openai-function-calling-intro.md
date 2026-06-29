---
source_id: auto-2026-06-28-a1b2
title: OpenAI Function Calling 官方指南与基础介绍
url: https://platform.openai.com/docs/guides/function-calling
source_type: official_docs
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
related_urls:
  - https://testerhome.com/topics/41547/show_wechat
  - https://blog.csdn.net/sinat_28199083/article/details/150699139
---

# OpenAI Function Calling 官方指南与基础介绍

## 什么是 Function Calling

Function calling 是 2023 年 6 月 20 日，OpenAI 官方在 Chat Completions API 原有的三种不同角色设定（System, Assistant, User）基础上，新增的一个功能。

开发人员通过 API 调用的方式向 GPT 描述函数（对模型有限制，需要是 3.5 或者 4），让模型智能地选择输出一个包含参数的 JSON 对象来调用开发人员定义的这些函数。**是一种将 GPT 的推理功能与外部工具及 API 连接起来的方法。**

简单的说就是可以通过一个 JSON 定义你的函数及参数，然后通过语言对话的方式，让 GPT 模型输出你想调用的函数，并可以通过你的描述去构建函数的入参。

## 核心用途

Function calling 的核心用途是让大模型能够通过调用一些外部工具来完成工作，该技术最早由 OpenAI 于 2023 年 6 月 13 号正式提出。

## 使用场景示例

函数调用在许多用例中都非常有用，例如：

- **使助手能够获取数据**：当用户询问"我的最近订单是什么？"时，AI助手需要从内部系统中获取最新的客户数据，然后才能生成回应给用户。
- **使助手能够采取行动**：AI助手需要根据用户的偏好和日历的空闲时间来安排会议。
- **使助手能够执行计算**：一个数学辅导助手需要执行数学计算。
- **构建丰富的流程**：一个数据提取管道首先获取原始文本，然后将其转换为结构化数据并保存到数据库中。
- **修改应用程序的UI**：你可以使用函数调用根据用户输入更新UI，例如，在地图上渲染一个标记点。

## 基本示例：获取天气

### 定义函数

```python
from openai import OpenAI

client = OpenAI()

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get current temperature for a given location.",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City and country e.g. Bogotá, Colombia"
                }
            },
            "required": ["location"],
            "additionalProperties": False
        },
        "strict": True
    }
}]
```

这里定义了一个列表，里面只有一个字典对象，它就是我们定义的一个 function，它是一个获取天气的函数。我们可以在列表中添加很多的 function，通过语言描述，让大模型去判断我们想要调用哪个函数，我们的入参是什么。

关键字段说明：
- **name**: 函数的名称（例如 get_weather）
- **parameters**: 参数定义，是一个 JSON 对象，使用 JSON Schema 描述

### 调用 API

```python
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "What is the weather like in Paris today?"}],
    tools=tools
)

print(completion.choices[0].message.tool_calls)
```

这里我们使用自然语言问 GPT 模型，巴黎今天的天气怎么样？

### 模型返回结果

```json
[{
    "id": "call_12345xyz",
    "type": "function",
    "function": {
        "name": "get_weather",
        "arguments": "{\"location\":\"Paris, France\"}"
    }
}]
```

可以看到，这里返回的函数的 name 和 arguments 就是我们之前通过 JSON 发送给 GPT 大模型的函数名和入参。

## 函数调用的生命周期

当您使用具有函数调用的 OpenAI API 时，模型实际上从不自行执行函数，而是在第 3 步中，模型仅生成可以用来调用您的参数，您的代码可以选择如何处理，很可能是通过调用指示的函数。您的应用程序始终完全掌控。

### 函数调用步骤

**第 1 步：调用带有已定义函数的模型** —— 连同您的系统和用户消息。

```python
from openai import OpenAI
import json

client = OpenAI()

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "获取提供的坐标的当前温度（摄氏度）。",
        "parameters": {
            "type": "object",
            "properties": {
                "latitude": {"type": "number"},
                "longitude": {"type": "number"}
            },
            "required": ["latitude", "longitude"],
            "additionalProperties": False
        },
        "strict": True
    }
}]

input_messages = [{"role": "user", "content": "今天巴黎的天气怎么样？"}]

response = client.responses.create(
    model="gpt-4.1",
    input=input_messages,
    tools=tools,
)
```

**第 2 步：模型决定调用函数** —— 模型返回名称和输入参数。

```python
[{
    "type": "function_call",
    "id": "fc_12345xyz",
    "call_id": "call_12345xyz",
    "name": "get_weather",
    "arguments": "{\"latitude\":48.8566,\"longitude\":2.3522}"
}]
```

**第 3 步：执行函数代码** —— 解析模型的响应并处理函数调用。

```python
tool_call = response.output[0]
args = json.loads(tool_call.arguments)

result = get_weather(args["latitude"], args["longitude"])
```

**第 4 步：向模型提供结果** —— 以便它可以将结果整合到最终回复中。

```python
input_messages.append(tool_call)  # 追加模型的函数调用消息
input_messages.append({           # 追加结果消息
    "type": "function_call_output",
    "call_id": tool_call.call_id,
    "output": str(result)
})

response_2 = client.responses.create(
    model="gpt-4.1",
    input=input_messages,
    tools=tools,
)
print(response_2.output_text)
```

**第五步：模型回复** —— 将结果整合到其输出中。

"巴黎当前温度为 14°C (57.2°F)。"

## 发送邮件示例

使用 send_email 函数的函数调用示例：

```python
from openai import OpenAI

client = OpenAI()

tools = [{
    "type": "function",
    "function": {
        "name": "send_email",
        "description": "向指定收件人发送邮件，包含主题和正文。",
        "parameters": {
            "type": "object",
            "properties": {
                "to": {
                    "type": "string",
                    "description": "收件人邮箱地址"
                },
                "subject": {
                    "type": "string",
                    "description": "邮件主题"
                },
                "body": {
                    "type": "string",
                    "description": "邮件正文内容"
                }
            },
            "required": ["to", "subject", "body"],
            "additionalProperties": False
        }
    }
}]

response = client.responses.create(
    model="gpt-4.1",
    input=[{"role": "user", "content": "你能给 ilan@example.com 和 katia@example.com 发封邮件问好吗？"}],
    tools=tools
)
print(response.output)
```

模型返回的函数调用示例（并行调用多个函数）：

```json
[
    {
        "type": "function_call",
        "id": "fc_12345xyz",
        "call_id": "call_9876abc",
        "name": "send_email",
        "arguments": "{\"to\":\"ilan@example.com\",\"subject\":\"你好！\",\"body\":\"只是想打个招呼\"}"
    },
    {
        "type": "function_call",
        "id": "fc_12345xyz",
        "call_id": "call_9876abc",
        "name": "send_email",
        "arguments": "{\"to\":\"katia@example.com\",\"subject\":\"你好！\",\"body\":\"只是想打个招呼\"}"
    }
]
```

## 函数定义字段说明

| 字段 | 描述 |
|---|---|
| type | 应始终为 function |
| name | 函数的名称（例如 get_weather） |
| description | 何时以及如何使用该函数的详细信息 |
| parameters | 定义函数输入参数的 JSON 模式 |
| strict | 是否强制执行函数调用的严格模式 |

## Function calling 的工程意义

| 维度 | 价值 |
|---|---|
| 解耦 | 模型只负责要不要查，不负责怎么查 |
| 智能调度 | 实现多工具协同、条件判断、链式调用 |
| 易于扩展 | 新增工具无需修改逻辑、只需要注册 |
| 可观察性 | 追踪每一步决策和动作 |
| 安全性 | 可以在执行时检查 tool_call 参数 |
| 支持复杂流程 | 先查库存-计算价格-最后下单 |

## 重要说明

1. **模型不执行函数**：模型仅生成调用参数，您的代码负责实际执行
2. **完全掌控**：您的应用程序始终完全掌控函数调用过程
3. **支持多种 API**：在聊天补全 API、助手 API 以及批量 API 中都支持函数调用
4. **结构化输出**：2024年8月推出了结构化输出功能，通过设置 `strict: true` 确保参数完全符合 JSON 架构

## 参考资料

- OpenAI 官方文档：https://platform.openai.com/docs/guides/function-calling
- OpenAI Function Calling 更新公告：https://openai.com/index/function-calling-and-other-api-updates/