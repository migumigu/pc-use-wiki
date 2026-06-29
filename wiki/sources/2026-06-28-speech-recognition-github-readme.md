---
tags: [SpeechRecognition, 语音识别, 多引擎支持, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [raw/articles/2026-06-28-speech-recognition-github-readme.md]
---

# SpeechRecognition GitHub README

> 多引擎语音识别 Python 库，支持 14+ 引擎（离线和在线）

## 核心信息

- **GitHub**: https://github.com/Uberi/speech_recognition
- **Stars**: 8,969
- **Forks**: 2,421
- **License**: BSD-3-Clause
- **Python版本**: 3.9+

## 支持的引擎/API

- **离线引擎**: CMU Sphinx, Vosk API, OpenAI Whisper, Snowboy Hotword Detection
- **在线 API**: Google Speech Recognition, Google Cloud Speech API, Microsoft Azure Speech, IBM Speech to Text, Wit.ai, Houndify API
- **现代引擎**: OpenAI Whisper API, Groq Whisper API, Cohere Transcribe API

## 关键特性

1. **多引擎统一接口**：提供统一的 Recognizer API，支持 14+ 语音识别引擎
2. **离线支持**：支持 CMU Sphinx、Vosk、Whisper 等离线引擎，无需网络
3. **麦克风输入**：通过 PyAudio 0.2.11+ 支持实时麦克风录制
4. **音频文件转写**：支持 WAV、FLAC、AIFF 格式音频文件转写
5. **后台监听**：提供 background_listening 示例，支持后台监听语音

## 安装方法

```bash
pip install SpeechRecognition
python -m speech_recognition  # 快速测试
```

## 依赖项

- **必需**: Python 3.9+
- **可选**: PyAudio（麦克风）、PocketSphinx（Sphinx引擎）、Vosk、Whisper、openai、groq、cohere

## 示例代码

```python
import speech_recognition as sr

r = sr.Recognizer()
with sr.Microphone() as source:
    r.adjust_for_ambient_noise(source)
    audio = r.listen(source)
    text = r.recognize_google(audio)
```

## 相关实体

- [[SpeechRecognition]]
- [[语音识别]]
- [[PyAudio]]
- [[Whisper]]
- [[Vosk]]

## 相关页面

- [[硬件接口控制]]
- [[SpeechRecognition PyPI Package]]