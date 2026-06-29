---
tags: [Computer-Use, Anthropic, desktop-control, screenshot]
created: 2026-06-28
updated: 2026-06-28
sources: []
---

# Computer Use

> 一句话摘要：AI通过屏幕截图和输入模拟控制桌面环境的技术模式,Anthropic官方Beta功能。

## 定义

<!-- confidence: EXTRACTED -->

Computer Use是Anthropic推出的Beta功能,允许AI模型(如Claude)通过屏幕截图和输入模拟(mouse/keyboard)控制桌面环境,执行文件操作、应用控制、网页浏览等任务。

## 核心技术架构

<!-- confidence: EXTRACTED -->

### 实现方式
1. **Docker容器化**：X11 + VNC + Streamlit界面
2. **macOS本地**：pyautogui backend + sandbox-exec
3. **Agent Loop**：Claude API循环调用机制

### 核心组件
- **屏幕截图**：视觉信息获取
- **输入模拟**：mouse/keyboard操作
- **Agent Loop**：Claude API的循环调用
- **Streamlit界面**：用户交互

## 支持模型

<!-- confidence: EXTRACTED -->

- Claude Opus 4.8(默认,自适应thinking)
- Claude Opus 4.7/4.6
- Claude Sonnet 4.6/4.5
- Claude Haiku 4.5

## 关键优化

### 点击精度
<!-- confidence: EXTRACTED -->

**API限制**：
- Claude 4.6 family：最大长边1568px, 最大像素1.15MP
- Opus 4.7：最大长边2576px, 最大像素3.75MP

**推荐分辨率**：
- 默认1280x720(安全实用)
- Opus 4.7推荐1080p
- 坐标缩放公式：`screen_x = int(api_x * (screen_w / display_w))`

**模型选择**：
- Sonnet 4.6：点击精度更高
- Opus 4.7：推理更强,点击精度持平

### 性能优化
<!-- confidence: EXTRACTED -->

- **Prompt Caching**：cache_control: ephemeral
- **Image Pruning**：interval/simple/none策略
- **Autocompaction**：150k tokens触发服务器端压缩
- **Batch Tools**：computer_batch/browser_batch降低latency

## 安全风险

<!-- confidence: EXTRACTED -->

### Prompt Injection风险
- Browser Use场景攻击面极广(每个网页)
- 网页内容可嵌入恶意指令
- Claude Opus 4.5攻击成功率约1%(仍代表重大风险)

### 安全措施
- **VM隔离**：强烈建议在VM内运行
- **权限控制**：Screen Recording/Accessibility
- **域名白名单**：限制互联网访问
- **人工确认**：关键操作需用户批准

## 不同素材中的观点

### [[Anthropic Computer Use Demo]]
- Docker + X11 + VNC架构
- Beta功能,存在prompt injection风险
- 推荐XGA(1024x768)分辨率

### [[Computer Use Best Practices GitHub]]
- macOS专用参考实现
- 显式工具定义
- Prompt caching + Image pruning优化
- 强烈不建议在VM外运行

### [[Computer Use Best Practices Blog]]
- 点击精度是Computer Use核心基础
- 分辨率和缩放是最主要影响因素
- 文本指令应在图片之前发送
- 小目标处理：zoom、增大目标、键盘替代

### [[Prompt Injection防御研究]]
- Browser Use风险放大(攻击面广、可执行动作多)
- Claude Opus 4.5攻击成功率约1%
- 防御三大支柱：RL训练、Constitutional classifiers、红队测试

### [[Anthropic Academy — Build with Claude]]
- Computer Use官方文档门户
- Quickstart + API实现 + 最佳实践 + 研究

## 应用场景

<!-- confidence: EXTRACTED -->

- 文件管理(创建、移动、搜索)
- 应用控制(打开TextEdit、操作Office)
- 网页浏览(导航、填写表单、点击按钮)
- 代码编辑(view/create/str_replace/insert)

## 相关页面

- [[Docker]]
- [[Agent Loop]]
- [[Prompt Injection]]
- [[Click Accuracy]]
- [[桌面应用控制]]
- [[Claude Opus 4.8]]