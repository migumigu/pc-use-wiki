---
tags: [Computer-Use, Claude, Anthropic, Docker, agent-loop, beta]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# Anthropic Computer Use Demo — GitHub 官方仓库

> 一句话摘要：Anthropic官方的Computer Use参考实现,使用Docker容器+X11+VNC运行agent loop,支持Claude Opus 4.8等模型。

## 基本信息

- **来源**：GitHub (https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo)
- **作者**：Anthropic
- **素材类型**：官方仓库 README
- **控制对象**：桌面应用控制
- **技术层级**：Agent集成层
- **状态**：Beta功能

## 核心观点

<!-- confidence: EXTRACTED -->

1. **架构设计**：Docker容器化 + X11 + VNC,agent loop在容器内运行,可被Claude控制。

2. **支持模型**：默认Claude Opus 4.8(自适应thinking),也支持Opus 4.7/4.6、Sonnet 4.6/4.5、Haiku 4.5等。

3. **核心组件**：
   - Docker构建文件(含所有依赖)
   - Computer use agent loop(Claude API/Bedrock/Vertex)
   - Anthropic定义的computer use tools
   - Streamlit交互界面

4. **安全风险**：
   - Beta功能,存在prompt injection风险
   - 需要VM隔离和权限控制
   - 网页内容可能包含恶意指令

## 关键概念

- [[Computer Use]] — AI通过屏幕截图和输入模拟控制桌面
- [[Docker]] — 容器化隔离环境
- [[X11]] — Linux图形系统
- [[VNC]] — 远程桌面协议
- [[Agent Loop]] — Claude API的循环调用机制
- [[Adaptive Thinking]] — 模型自适应推理深度

## 技术架构详解

<!-- confidence: EXTRACTED -->

### 运行方式
- Claude API、AWS Bedrock、Google Vertex三提供商支持
- Docker容器运行,端口映射(5900/8501/6080/8080)
- Streamlit界面 + 桌面视图 + VNC连接

### 分辨率设置
- 支持WIDTH/HEIGHT环境变量自定义
- 推荐XGA(1024x768),避免超过API限制
- 高分辨率需缩放处理,否则影响点击精度

### 访问点
- http://localhost:8080 — 综合界面(agent chat + desktop view)
- http://localhost:8501 — Streamlit界面
- http://localhost:6080/vnc.html — 桌面视图
- vnc://localhost:5900 — VNC直接连接

## 安全警告

<!-- confidence: EXTRACTED -->

**Caution block明确警告**：
1. 使用专用虚拟机/容器(最小权限)
2. 避免模型访问敏感数据
3. 限制互联网访问(域名白名单)
4. 关键操作需人工确认
5. 存在prompt injection风险(网页指令可能覆盖用户指令)

## 与其他素材的关联

- 与 [[Computer Use Best Practices GitHub]] 形成完整参考实现
- 与 [[Computer Use Best Practices Blog]] 对应最佳实践指南
- 与 [[Computer Use安全研究]] 对应安全风险分析
- 与 [[桌面应用控制]] 主题核心内容

## 原文精彩摘录

> "Computer use is a beta feature. Please be aware that computer use poses unique risks that are distinct from standard API features."

> "We do not recommend sending screenshots in resolutions above XGA/WXGA to avoid issues related to image resizing."

> "In some circumstances, Claude will follow commands found in content even if it conflicts with the user's instructions."

## 相关页面

- [[Computer Use]]
- [[Docker]]
- [[Agent Loop]]
- [[桌面应用控制]]
- [[Claude Opus 4.8]]