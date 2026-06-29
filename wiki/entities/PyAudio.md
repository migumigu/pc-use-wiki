---
tags: [PyAudio, PortAudio, 音频捕获, Python库]
created: 2026-06-28
updated: 2026-06-28
sources: [wiki/sources/2026-06-28-speech-recognition-github-readme.md]
---

# PyAudio

> PortAudio 的 Python 绑定，提供跨平台音频录制和播放功能

## 基本信息

- **官方网站**: http://people.csail.mit.edu/hubert/pyaudio/
- **底层库**: PortAudio（跨平台音频 I/O 库）
- **Python版本**: 0.2.11+（SpeechRecognition 要求）
- **平台**: Windows、Linux、macOS

## 类型定位

- **控制对象**: 硬件接口控制（音频捕获）
- **技术层级**: 系统基础层
- **项目状态**: Stable

## 核心能力

### 跨平台音频 I/O

| 平台 | 音频 API | 说明 |
|------|----------|------|
| **Windows** | WASAPI, DirectSound | Windows 音频会话 API |
| **Linux** | ALSA, PulseAudio | Linux 音频系统 |
| **macOS** | CoreAudio | macOS 音频框架 |

### 关键特性

1. **音频录制**：从麦克风录制 PCM 音频
2. **音频播放**：播放 WAV、PCM 音频
3. **流控制**：支持阻塞和非阻塞模式
4. **设备枚举**：枚举音频输入/输出设备

## SpeechRecognition 依赖

SpeechRecognition 需要 PyAudio 0.2.11+ 才能使用麦克风输入（`Microphone` 类）。早期版本存在内存管理 bug。

如果未安装 PyAudio，SpeechRecognition 其他功能正常工作，但尝试创建 `Microphone` 对象会抛出 `AttributeError`。

## 安装方法

```bash
pip install pyaudio
```

Windows 和 macOS 可能需要手动下载 wheel 文件安装。

## AI Agent 应用场景

- **实时语音输入**：Agent 通过麦克风接收语音指令
- **音频录制**：录制会议音频并转写
- **音频播放**：Agent 播放语音回复

## 相关实体

- [[SpeechRecognition]]
- [[语音识别]]

## 相关页面

- [[硬件接口控制]]