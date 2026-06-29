---
source_id: auto-2026-06-28-h8j3
title: LangGraph Checkpoint持久化机制详解
url: https://juejin.cn/post/7573597479981121572
source_type: tech_blog
tier: 2
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# LangGraph 如何通过 Checkpoint 实现持久化

随着 LLM 系统越来越多地用于对话、代理、任务型工作流等场景，持久化（persistent state）渐渐成为关键需求。LangGraph 提供了内置的持久化层，通过"检查点 (checkpointer)"机制，在执行图 (graph) 的每一步 (super-step) 保存状态，从而支持 **记忆 (memory)、容错 (fault-tolerance)、时间旅行 (time travel)、人机协作 (human-in-the-loop)** 等能力。

## 一、持久化层总览

- LangGraph 有内置的 **checkpointer 接口**，它负责在图执行过程中保存状态快照。
- 当你编译一个 StateGraph（或其他图）时，只要传入一个 checkpointer，LangGraph 就会在每个 super-step 自动创建 checkpoint。
- 这些 checkpoint 被归档到一个 "线程 (thread)" 中。每个线程有自己的 ID (thread_id)，代表一个逻辑执行序列。
- 通过线程，可以在执行结束后访问状态 (历史 / 当前)，从而实现状态追踪、恢复等。

## 二、核心概念详解

### 1. 线程 (Thread)

- **线程 (Thread)** 是用于标识一系列检查点 (checkpoints) 的逻辑单元。
- 当你调用图 (invoke graph) 时，需要在 `config` 的 `configurable` 部分指定一个 `thread_id`：

```python
config = {"configurable": {"thread_id": "1"}}
```

- 执行过程中，图状态会随着 super-step 存储到该线程对应的存储中。
- 之后可以通过该 thread 来读取历史状态，查看执行历史、回溯等。

### 2. 检查点 (Checkpoint)

- **Checkpoint** 是某一时刻图状态的快照 (snapshot)，由 checkpointer 保存。
- LangGraph 使用一个 `StateSnapshot` 对象来表达 checkpoint，它包含以下关键信息：
  - `config`：当时的 config (如 thread_id, checkpoint_id)
  - `metadata`：一些元数据信息 (例如每一步是谁写了什么)
  - `values`：所有 state channel（你的 TypedDict 状态）在该点的值
  - `next`：接下来应该执行哪些节点 (node 名称)
  - `tasks`：如果有任务 (task, PregelTask)，也会记录；若之前失败或中断，还会反映错误 / 中断信息

- 这些 checkpoint 是持久化的，因此你可以 **恢复 (restore)** 或 **回放 (replay)**。

### 3. 获取状态 (Get State)

可以通过 `graph.get_state(config)` 获取最近 (或指定 checkpoint) 的状态快照：

```python
snapshot = graph.get_state({"configurable": {"thread_id": "1"}})
```

返回一个 `StateSnapshot` 对象，里面有 `values`、`metadata`、`next` 等。

如果你想访问历史状态 (所有 checkpoint 历史)，可以调用 `graph.get_state_history(config)`：

```python
history = list(graph.get_state_history({"configurable": {"thread_id": "1"}}))
```

返回一个 `StateSnapshot` 列表 (按时间顺序)，最新的 checkpoint 通常位于列表开头。

### 4. 时间旅行 / 回放 (Replay)

LangGraph 支持 **时间旅行 (time travel)**：你可以在调用图的时候指定 `checkpoint_id`，从历史某个检查点继续执行。

例如：

```python
config = {
    "configurable": {
        "thread_id": "1",
        "checkpoint_id": "some-checkpoint-uuid"
    }
}
graph.invoke(input, config)
```

当你从某个 checkpoint 恢复时：

- **Checkpoint 之前已经执行的节点** 会被 "回放 (replay)" — 这部分不会重新执行，只是恢复状态。
- **Checkpoint 之后的新节点** 会根据当前图走新的路径 (可能是新的分支) — 相当于 "从该历史点分叉 (fork)"。

### 5. 更新状态 (Update State)

除了通过节点执行 (node) 更新状态，你还可以 **手动更新状态**：使用 `graph.update_state(config, values)`。

重要：如果你的状态通道 (state 字段) 有定义 "reducer (合并策略)"，update_state 会遵循这些 reducer，而不是简单覆盖。

## 三、更多强大能力 (Capabilities)

通过 checkpoint 机制，LangGraph 解锁以下高级功能：

### 1. 人机协作 (Human-in-the-Loop)

由于状态被持久化为 checkpoint，人类可以中断 (interrupt)、审查 (inspect)、编辑，然后恢复执行。

### 2. 记忆 (Memory)

对话、智能体使用场景中，同一个线程 (thread) 会保存所有状态，能够跨多轮对话持续记忆。

如果需要跨线程共享记忆 (比如用户长期资料)，可以结合 `Store` 接口 (memory store) 使用。

### 3. 时间旅行 (Time Travel)

可以回到之前某个 checkpoint，检查历史状态、重放、对比、debug。

还可以 "fork (分支)" — 从某个历史点做新的尝试。

### 4. 容错 (Fault-tolerance)

如果某一步失败 (super-step 中某些节点报错)，可以从最近的成功 checkpoint 恢复，不需要从头再来。

如果一个 super-step 内有多个节点，有些节点完成，有些失败，LangGraph 会记录 "pending writes" (尚未成功写入) 的内容，这样在恢复时不会重复执行已经成功的节点。

## 四、持久化实现细节 (Checkpointer 与 序列化)

### Checkpointer 实现

LangGraph 的 checkpointer 是一个抽象接口 (`BaseCheckpointSaver`)。

LangGraph 提供了多种实现：

- **InMemorySaver**：内存保存 (适合实验 /调试)
- **SQLite Saver** (`SqliteSaver`)：使用 SQLite 存储 (本地简单持久化)
- **Postgres Saver** (`PostgresSaver`)：使用 Postgres 数据库 (适合生产)

### 序列化 (Serializer)

checkpointer 保存状态时，需要把状态 (state channels) 序列化成可存储/恢复的格式。LangGraph 使用 `SerializerProtocol`，默认是 `JsonPlusSerializer`。

- `JsonPlusSerializer` 支持多种类型 (日期、枚举、LLM 类型等)。
- 如果有更复杂对象 (如 Pandas DataFrame)，可以开启 `pickle_fallback=True` → 回退到 pickle 序列化。

### 加密 (Encryption)

如果你对持久化数据安全敏感 (例如对话内容)，可以使用加密 Serializer。LangGraph 支持 `EncryptedSerializer` (例如 AES 加密)，并且与 Postgres / SQLite Saver 组合。

`EncryptedSerializer.from_pycryptodome_aes()` 可以从环境变量 `LANGGRAPH_AES_KEY` 读取密钥。

## 五、使用示例

下面是一个简化版示例，展示如何使用 checkpointer 实现持久化：

```python
from langgraph.graph import StateGraph, START, END
from langgraph.checkpoint.memory import InMemorySaver
from typing_extensions import TypedDict
from typing import Annotated
from operator import add

class State(TypedDict):
    foo: str
    bar: Annotated[list[str], add]

def node_a(state: State):
    return {"foo": "a", "bar": ["a"]}

def node_b(state: State):
    return {"foo": "b", "bar": ["b"]}

# 定义图
workflow = StateGraph(State)
workflow.add_node(node_a)
workflow.add_node(node_b)
workflow.add_edge(START, "node_a")
workflow.add_edge("node_a", "node_b")
workflow.add_edge("node_b", END)

# 使用 InMemorySaver 作为检查点存储器
checkpointer = InMemorySaver()

# 编译图，传入 checkpointer
graph = workflow.compile(checkpointer=checkpointer)

# 执行图 (run)，指定 thread_id
config = {"configurable": {"thread_id": "thread-1"}}
graph.invoke({"foo": ""}, config)

# 获取最新状态
snapshot = graph.get_state(config)
print("Current state:", snapshot.values)

# 查看历史 checkpoint
history = list(graph.get_state_history(config))
for idx, snap in enumerate(history):
    print(f"Checkpoint {idx}: {snap.values}")
```

## 六、实用建议 & 场景

- **对话应用 (Chatbot)**：使用持久化 + thread_id 你可以让对话具有内存 (记住之前对话内容)，非常适合客服机器人、智能助理。
- **长流程工作流**：长任务 (multi-step) 可能中断 (fail) 或手动干预 (human-in-loop)，持久化确保你可以恢复执行。
- **调试 / 回放**：时间旅行 (time-travel) 能让你检查每一步状态，非常有助于调试复杂图。
- **生产部署**：选择 SQLite / Postgres Saver 实现持久化，结合加密 Serializer，保证数据安全与性能。
- **内存管理**：如果你只想保留最近几次 checkpoint，可以结合应用逻辑清理旧 checkpoint (或使用定制 Saver)。

## 七、小结

LangGraph 的持久化通过 **checkpointer + thread + checkpoint** 三层设计实现：

- **checkpointer** 负责写入 checkpoint
- **线程 (thread)** 把一系列 checkpoint 组织起来
- **checkpoint** 是某一时刻的状态快照 (StateSnapshot)，包括 state 值、下一步任务、元数据等

这一机制让图 (graph) 拥有：

- **记忆 (memory)**：跨多轮对话的状态保持
- **人机协作**：中断、审查、编辑、恢复
- **时间旅行 (回放 / fork)**：回到历史状态、分支探索
- **容错恢复**：失败后从最近成功点恢复