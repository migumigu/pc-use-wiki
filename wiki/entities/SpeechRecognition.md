---
tags: [SpeechRecognition, 语音识别, Python库, 多引擎支持]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-speech-recognition-github-readme.md, wiki/sources/2026-06-28-speech-recognition-pypi.md]
---

# SpeechRecognition

> 多引擎语音识别 Python 库，支持 14+ 引擎（离线和在线）

## 基本信息

- **GitHub**: https://github.com/Uberi/speech_recognition
- **PyPI**: https://pypi.org/project/SpeechRecognition/
- **Stars**: 8,969
- **Forks**: 2,421
- **License**: BSD-3-Clause
- **Author**: Anthony Zhang (Uberi)
- **Python**: 3.9+

## 类型定位

- **控制对象**: 硬件接口控制（音频捕获）
- **技术层级**: 工具实现层
- **项目状态**: Production/Stable

## 核心能力

### 多引擎支持

| 引擎类型 | 代表引擎 | 特点 |
|----------|----------|------|
| **离线引擎** | CMU Sphinx, Vosk, Whisper | 无需网络，隐私保护 |
| **在线 API** | Google, Azure, IBM Watson | 高精度，需 API Key |
| **现代引擎** | OpenAI Whisper API, Groq, Cohere | 最新模型，速度快 |

### 关键特性

1. **统一接口**：提供 Recognizer API，简化多引擎调用
2. **麦克风输入**：通过 PyAudio 支持实时录音
3. **音频文件转写**：支持 WAV/FLAC/AIFF 格式
4. **后台监听**：支持后台监听语音指令
5. **噪声校准**：自动适应环境噪声能量阈值

## AI Agent 应用场景

- **语音指令识别**：Agent 接收语音指令并执行
- **多模态输入**：语音 + 文本联合理解
- **会议转写**：实时转写会议录音
- **嵌入式设备**：使用 Vosk 离线引擎控制设备

## 依赖关系

- **必需依赖**: Python 3.9+
- **可选依赖**: PyAudio（麦克风）、PocketSphinx（Sphinx）、Vosk、Whisper、openai、groq、cohere

## 相关素材

- [[SpeechRecognition GitHub README]]
- [[SpeechRecognition PyPI Package]]

## 相关实体

- [[语音识别]]
- [[PyAudio]]
- [[Whisper]]
- [[Vosk]]

## 相关页面

- [[硬件接口控制]]