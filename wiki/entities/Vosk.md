---
tags: [Vosk, 离线语音识别, 轻量级模型, 嵌入式设备]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-speech-recognition-github-readme.md]
---

# Vosk

> 轻量级离线语音识别引擎，适合嵌入式设备和隐私场景

## 基本信息

- **GitHub**: https://github.com/alphacep/vosk-api
- **开发者**: Alpha Cephei Inc
- **模型类型**: Kaldi-based ASR
- **特点**: 轻量级、离线、跨平台

## 类型定位

- **控制对象**: 硬件接口控制（嵌入式语音识别）
- **技术层级**: 工具实现层
- **项目状态**: Production

## 核心能力

### 离线识别

Vosk 是完全离线的语音识别引擎，无需网络连接，适合隐私保护场景。

### 轻量级模型

| 语言 | 模型大小 | 适用场景 |
|------|----------|----------|
| **英语** | 50MB | 快速识别 |
| **中文** | 50MB | 中文识别 |
| **多语言** | 1GB | 多语言识别 |

### SpeechRecognition 集成

SpeechRecognition 支持 Vosk 作为离线引擎：

```python
r.recognize_vosk(audio)
```

需要安装 vosk 包：

```bash
pip install vosk
pip install SpeechRecognition[vosk]
```

## AI Agent 应用场景

- **嵌入式设备控制**：在 Raspberry Pi、Arduino 等设备上运行
- **隐私保护场景**：无需上传语音数据到云端
- **离线语音助手**：无网络环境下的语音交互
- **智能家居控制**：控制灯光、空调等设备

## 特点

- **跨平台**：支持 Windows、Linux、macOS、Android、iOS
- **实时识别**：支持流式识别，实时输出文本
- **多语言**：支持英语、中文、法语、德语、俄语等
- **低资源**：适合 CPU-only 环境

## 相关实体

- [[SpeechRecognition]]
- [[语音识别]]

## 相关页面

- [[硬件接口控制]]