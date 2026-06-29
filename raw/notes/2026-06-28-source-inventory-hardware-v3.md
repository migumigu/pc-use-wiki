# 素材清单 - 硬件接口控制研究

> 生成时间：2026-06-28 17:15
> 工作流：自动研究 - 硬件接口控制补充

---

## 已收集素材（4个）

### SpeechRecognition 系列（2个）

| source_id | 标题 | URL | 类型 | Tier | 控制对象 | 技术层级 | 置信度 |
|-----------|------|-----|------|------|----------|----------|--------|
| auto-2026-0628-sr-gh | SpeechRecognition GitHub README | https://github.com/Uberi/speech_recognition | github_readme | 1 | hardware_interface | tool_implementation | high |
| auto-2026-0628-sr-pypi | SpeechRecognition PyPI Package | https://pypi.org/project/SpeechRecognition/ | official_docs | 1 | hardware_interface | tool_implementation | high |

### pySerial 系列（2个）

| source_id | 标题 | URL | 类型 | Tier | 控制对象 | 技术层级 | 置信度 |
|-----------|------|-----|------|------|----------|----------|--------|
| auto-2026-0628-ps-gh | pySerial GitHub README | https://github.com/pyserial/pyserial | github_readme | 1 | hardware_interface | tool_implementation | high |
| auto-2026-0628-ps-intro | pySerial Short Introduction | https://pyserial.readthedocs.io/en/latest/shortintro.html | official_docs | 1 | hardware_interface | tool_implementation | high |

---

## 素材元数据

### SpeechRecognition GitHub README
- **保存路径**: `raw/articles/2026-06-28-speech-recognition-github-readme.md`
- **Stars**: 8,969
- **Forks**: 2,421
- **License**: BSD-3-Clause
- **支持引擎**: CMU Sphinx, Google, Azure, IBM, Vosk, OpenAI Whisper, Groq, Cohere
- **Python版本**: 3.9+
- **关键特性**: 多引擎支持、离线识别、麦克风输入

### SpeechRecognition PyPI Package
- **保存路径**: `raw/articles/2026-06-28-speech-recognition-pypi.md`
- **Latest release**: Jun 17, 2026
- **Version**: 3.17.0
- **Platform支持**: Windows, macOS, Linux, BSD

### pySerial GitHub README
- **保存路径**: `raw/articles/2026-06-28-pyserial-github-readme.md`
- **Used by**: 103k+ repositories
- **License**: BSD
- **Platform支持**: Windows, OSX, Linux, BSD
- **Python版本**: 2.7 / 3.4+

### pySerial Short Introduction
- **保存路径**: `raw/articles/2026-06-28-pyserial-shortintro.md`
- **API示例**: Serial.open(), read(), write(), readline()
- **配置参数**: baudrate, parity, stopbits, timeout
- **工具**: serial.tools.miniterm, serial.tools.list_ports

---

## 素材质量评估

- **Tier 1 素材**: 4个（100%）
- **官方来源**: 4个（GitHub README + PyPI + readthedocs）
- **元数据完整**: 4个（frontmatter齐全）
- **控制对象标注**: hardware_interface（全部正确）

---

## 下一步

继续收集额外素材以达到目标（建议每方向至少5个素材）：

1. SpeechRecognition examples 目录
2. pySerial API Reference
3. inputs 库（键鼠手柄控制）
4. pygame 输入控制模块