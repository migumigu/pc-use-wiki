---
source_id: auto-20260702-cognee-readme
title: Cognee GitHub README
url: https://github.com/topoteretes/cognee
source_type: github_readme
tier: 1
control_object: agent_integration
tech_layer: agent_integration
collected_date: 2026-07-02
collected_by: auto_research
confidence: high
---

# Cognee - Build AI memory with a Knowledge Engine that learns

**项目地址**: https://github.com/topoteretes/cognee
**Stars**: 24K+
**开源协议**: Apache-2.0
**最新版本**: v1.0.4 (2026-05-03)

## 项目定位

Cognee是一个开源的知识引擎,将原始数据转化为AI代理的持久动态记忆。它结合向量搜索、图数据库和认知科学方法,使文档既可按意义搜索又可按关系连接,并随着数据变化和演进持续学习。

### 核心价值

- **知识基础设施**: 统一的数据摄取、图/向量搜索、本地运行、本体论基础、多模态支持
- **持久学习型代理**: 从反馈中学习、上下文管理、跨代理知识共享
- **可靠可信代理**: 代理级用户/租户隔离、可追溯性、OTEL收集器、审计特征

### 为什么使用Cognee

相比传统RAG(检索增强生成):
- **添加本体论**: 提供领域知识基础
- **持续改进**: 随时间自动调优
- **创造新知识**: 通过关系推理生成新洞察

传统RAG的问题:
- **缺乏理解**: 仅依赖向量相似度
- **准确率下降**: 随数据增长性能衰减
- **召回率暴跌**: 无法处理复杂推理

## 记忆层架构

Cognee采用**三层存储架构**,每种存储扮演不同角色,共同实现可搜索和可连接的数据:

### 1. 关系存储 (Relational Store)
- **功能**: 跟踪文档、分块和数据来源(数据溯源)
- **用途**: 永久记忆摄取阶段最重要,管理文档级元数据和来源信息
- **默认**: 本地文件系统,可切换到生产级后端

### 2. 向量存储 (Vector Store)
- **功能**: 存储语义相似性的嵌入(数值表示)
- **用途**: 检索阶段,支持语义搜索找到概念相关内容
- **特点**: 即使措辞不同也能找到概念相关文本

### 3. 图存储 (Graph Store)
- **功能**: 捕获知识图谱中的实体和关系(节点和边)
- **用途**: 检索阶段,支持结构搜索使用Cypher直接探索实体关系
- **优势**: 理解结构并在概念间导航连接

### 存储协同工作

**摄取阶段**:
- 关系存储: 跟踪文档、分块和来源
- 向量+图存储: 创建嵌入和提取实体关系

**检索阶段**:
- **语义搜索**(向量): 基于嵌入找到概念相关段落
- **结构搜索**(图): 使用Cypher探索实体关系
- **混合搜索**(向量+图): 结合两种视角,返回上下文丰富且结构精确的结果

## 知识图谱引擎

### 核心操作 (v1.0 API)

Cognee提供四个主要操作:

#### 1. Remember - 存储记忆
```python
await cognee.remember("Cognee turns documents into AI memory.")
```

**两种模式**:
- **永久记忆**: 无`session_id`,运行完整摄取管道(标准化、图谱构建、检索增强)
- **会话记忆**: 带`session_id`,写入会话缓存实现快速短期记忆,后台同步到永久图谱

**支持格式**:
- 文本: `.txt`, `.md`, `.json`, `.xml`, `.yaml`
- 文档: `.pdf`, `.docx`, `.doc`, `.xlsx`, `.pptx`
- 多媒体: `.mp3`, `.wav`, `.png`, `.jpg`(30+格式)
- URL: HTTP/HTTPS自动抓取

#### 2. Recall - 查询记忆
```python
results = await cognee.recall("What does Cognee do?")
```

**智能路由**:
- **自动路由**: 根据查询类型自动选择最佳检索策略
- **会话感知**: 带`session_id`优先搜索会话缓存,回退到永久图谱
- **图谱支撑**: 默认运行图谱检索(非简单嵌入相似度)
- **来源标记**: 结果标记`source`字段(session/graph/trace)

**检索策略**:
- **GRAPH_COMPLETION**: 图补全回答(默认回退)
- **SUMMARIES**: 概要提取
- **TEMPORAL**: 时间感知检索
- **CHUNKS**: 分块文本检索
- **CODING_RULES**: 代码规则检索
- **CYPHER**: Cypher查询执行

#### 3. Improve - 改进图谱
- 丰富现有记忆
- 桥接会话记忆到永久图谱
- 增强检索结构

#### 4. Forget - 删除记忆
```python
await cognee.forget(dataset="main_dataset")
```
- 支持项目级、数据集级、用户级删除

### 构建模块

#### DataPoints
- 结构化数据单元,成为图谱节点
- 携带内容和元数据用于索引

#### Tasks
- 单个处理单元,转换数据
- 从文本分析到关系提取

#### Pipelines
- 编排Tasks为协调工作流
- 类似数据转换的装配线

### 高级特性

#### Node Sets
- 标记和组织系统
- 分类和过滤知识库内容

#### Ontologies
- 外部知识基础(RDF/XML本体论)
- 连接数据到已验证知识结构
- 支持医学、金融、研究等领域

#### Agent Memory Decorator
- 清洁方式将Cognee记忆检索附加到异步代理函数

## MCP集成

### cognee-mcp模块

Cognee提供独立的MCP(Model Context Protocol)服务器模块:
- **路径**: `cognee-mcp/`
- **功能**: 为AI编码助手提供知识图谱记忆
- **协议**: 支持MCP标准协议连接AI模型与外部数据源

### MCP集成特性

**标准接口**:
- 统一协议规范
- 支持多种数据源
- 简化AI模型与外部系统交互

**核心能力**:
- 持久化知识图谱存储
- 跨会话记忆保持
- 上下文感知检索
- 用户信息记忆

### Claude Code集成

Cognee提供Claude Code插件:
- **仓库**: `cognee-integrations/integrations/claude-code`
- **功能**: 为Claude Code提供跨会话持久记忆

**生命周期钩子**:
- `SessionStart`: 初始化记忆
- `PostToolUse`: 捕获操作
- `UserPromptSubmit`: 注入相关上下文
- `PreCompact`: 上下文重置时保留记忆
- `SessionEnd`: 桥接会话数据到永久图谱

**安装方式**:
```bash
pip install cognee
export LLM_API_KEY="your-openai-key"
claude --plugin-dir ./cognee-integrations/integrations/claude-code
```

### 其他代理集成

#### Hermes Agent
```yaml
# ~/.hermes/config.yaml
memory:
  provider: cognee
```

#### OpenClaw
- NPM包: `@cognee/cognee-openclaw`
- 为OpenClaw提供记忆插件

#### LangGraph框架
- `cognee-integration-langgraph`
- LangGraph框架原生集成

#### Google ADK
- `cognee-integration-google-adk`
- Google Agent Development Kit集成

## 部署选项

| 平台 | 适用场景 | 命令 |
|------|---------|------|
| **Cognee Cloud** | 托管服务,无需维护基础设施 | `await cognee.serve()` |
| **Modal** | 无服务器,自动扩缩容, GPU负载 | `bash distributed/deploy/modal-deploy.sh` |
| **Railway** | 最简PaaS,原生Postgres | `railway init && railway up` |
| **Fly.io** | 边缘部署,持久卷 | `bash distributed/deploy/fly-deploy.sh` |
| **Render** | 简单PaaS with托管Postgres | Deploy to Render按钮 |

## 实际应用案例

### 案例1 - 客户支持代理

**场景**: 解决客户问题,使用跨财务、支持和产品历史的个人数据

**Cognee追踪**:
- 过去交互、失败操作、已解决案例、产品历史

**工作流程**:
- 统一各渠道数据源
- 重构交互时间线并追踪结果
- 检索相似已解决案例
- 映射到最佳解决策略
- 执行后更新记忆,避免重复错误

### 案例2 - 专家知识蒸馏(SQL Copilot)

**场景**: 帮助初级分析师通过复用专家级查询、模式和推理完成任务

**Cognee追踪**:
- 专家SQL查询、工作流模式、模式结构、成功实现

**工作流程**:
- 从专家SQL查询和工作流提取存储模式
- 将当前模式映射到已见结构
- 检索相似任务及成功实现
- 将专家推理适配到当前上下文
- 更新新成功模式,使初级分析师达到近专家水平

## 技术特性

### 多模态支持
- 支持38+数据类型
- PDF图文解析
- OCR集成
- 音频转录

### 安全与隐私
- 代理级用户/租户隔离
- OTEL收集器
- 审计特征
- 可追溯性

### 性能优化
- Kun缓存优化
- Redis锁集成
- 分布式部署支持

## 研究成果

Cognee团队发表了优化知识图谱用于LLM推理的研究论文:

```bibtex
@misc{markovic2025optimizinginterfaceknowledgegraphs,
 title={Optimizing the Interface Between Knowledge Graphs and LLMs for Complex Reasoning},
 author={Vasilije Markovic and Lazar Obradovic and Laszlo Hajdu and Jovan Pavlovic},
 year={2025},
 eprint={2505.24478},
 archivePrefix={arXiv},
 primaryClass={cs.AI},
 url={https://arxiv.org/abs/2505.24478},
}
```

## 生产应用验证

**政策制定者案例**:
- 从数百PDF获取可信答案
- 100% LLM就绪数据

**Knowunity案例**:
- 连接40,000学生
- 100%准确率
- 2天内完成POC

**美国一级银行**:
- 统一分散信用卡数据到知识图谱
- 向量精确引用答案
- 100%准确率

## 快速开始

```python
import cognee
import asyncio

async def main():
    # 永久记忆存储(运行add + cognify + improve)
    await cognee.remember("Cognee turns documents into AI memory.")

    # 会话记忆(快速缓存,后台同步到图谱)
    await cognee.remember("User prefers detailed explanations.", session_id="chat_1")

    # 自动路由查询(自动选择最佳策略)
    results = await cognee.recall("What does Cognee do?")
    for result in results:
        print(result)

    # 会话记忆查询(优先会话缓存,回退到图谱)
    results = await cognee.recall("What does the user prefer?", session_id="chat_1")

    # 完成后删除
    await cognee.forget(dataset="main_dataset")

if __name__ == '__main__':
    asyncio.run(main())
```

## CLI使用

```bash
# 记忆存储
cognee-cli remember "Cognee turns documents into AI memory."

# 记忆查询
cognee-cli recall "What does Cognee do?"

# 删除记忆
cognee-cli forget --all

# 打开本地UI
cognee-cli -ui
```

## 文档与社区

- **官方文档**: https://docs.cognee.ai/
- **官方网站**: https://cognee.ai/
- **Discord社区**: https://discord.gg/NQPKmU5CCg
- **Reddit社区**: https://www.reddit.com/r/AIMemory/
- **社区插件**: https://github.com/topoteretes/cognee-community

## 技术要求

- **Python版本**: 3.10 至 3.14
- **包管理**: Poetry, UV, pip
- **依赖**: 可选扩展(docs, scraping, docling)

## 许可与贡献

- **开源协议**: Apache-2.0
- **贡献指南**: CONTRIBUTING.md
- **行为准则**: CODE_OF_CONDUCT.md
- **安全政策**: SECURITY.md

## 项目活跃度

- **提交数**: 7,130+
- **分支数**: 249
- **标签数**: 108
- **发布版本**: 104
- **被使用**: 101个项目
- **观察者**: 68
- **Fork**: 1.8k

---

**数据来源**:
- GitHub README: https://github.com/topoteretes/cognee
- 官方文档: https://docs.cognee.ai/
- 官方网站: https://cognee.ai/
- 架构文档: https://docs.cognee.ai/core-concepts/architecture
- 操作文档: https://docs.cognee.ai/core-concepts/main-operations/remember
- 检索文档: https://docs.cognee.ai/core-concepts/main-operations/recall

**收集时间**: 2026-07-02
**置信度**: 高(来自官方一手来源)