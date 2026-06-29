---
tags: [Whisper, OpenAI, 语音识别, 离线模型]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-speech-recognition-github-readme.md]
---

# Whisper

> OpenAI 开发的多语言语音识别模型，支持离线和在线使用

## 基本信息

- **GitHub**: https://github.com/openai/whisper
- **Stars**: 100K+
- **开发者**: OpenAI
- **模型类型**: Transformer-based ASR
- **发布时间**: 2022

## 类型定位

- **控制对象**: 硬件接口控制（音频转写）
- **技术层级**: 工具实现层
- **项目状态**: Production

## 核心能力

### 多语言支持

Whisper 支持 99+ 语言的多语言语音识别，包括中文、英语、日语、韩语等。

### 模型版本

| 版本 | 参数量 | 精度 | 速度 | 适用场景 |
|------|--------|------|------|----------|
| **tiny** | 39M | 低 | 最快 | 实时转写、嵌入式设备 |
| **base** | 74M | 中 | 快 | 快速转写 |
| **small** | 244M | 中高 | 中 | 平衡精度和速度 |
| **medium** | 769M | 高 | 慢 | 高精度转写 |
| **large** | 1550M | 最高 | 最慢 | 最高精度 |

### SpeechRecognition 集成

SpeechRecognition 支持 Whisper 作为离线引擎：

- **recognize_whisper()** — 本地 Whisper 模型
- **recognize_faster_whisper()** — Faster Whisper 加速版本
- **recognize_openai()** — OpenAI Whisper API（在线）

## AI Agent 应用场景

- **多语言语音识别**：Agent 理解多语言语音指令
- **离线转写**：无需网络的音频转写
- **实时转写**：tiny 模型适合实时语音输入
- **会议录音转写**：large 模型提供最高精度

## 安装方法

```bash
pip install openai-whisper
pip install SpeechRecognition[whisper-local]
```

## 相关实体

- [[SpeechRecognition]]
- [[语音识别]]

## 相关页面

- [[硬件接口控制]]