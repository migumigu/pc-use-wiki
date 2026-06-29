---
source_id: auto-2026-0628-sr-gh
title: SpeechRecognition GitHub README
url: https://github.com/Uberi/speech_recognition
source_type: github_readme
tier: 1
control_object: hardware_interface
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# SpeechRecognition

Library for performing speech recognition, with support for several engines and APIs, online and offline.

## Speech recognition engine/API support

- [CMU Sphinx](http://cmusphinx.sourceforge.net/wiki/) (works offline)
- Google Speech Recognition
- [Google Cloud Speech API](https://cloud.google.com/speech/)
- [Wit.ai](https://wit.ai/)
- [Microsoft Azure Speech](https://azure.microsoft.com/en-us/services/cognitive-services/speech/)
- [Houndify API](https://houndify.com/)
- [IBM Speech to Text](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/speech-to-text.html)
- [Snowboy Hotword Detection](https://snowboy.kitt.ai/) (works offline)
- [Tensorflow](https://www.tensorflow.org/)
- [Vosk API](https://github.com/alphacep/vosk-api/) (works offline)
- [OpenAI whisper](https://github.com/openai/whisper) (works offline)
- [OpenAI Whisper API](https://platform.openai.com/docs/guides/speech-to-text)
    - OpenAI compatible self-hosted endpoints (e.g. vLLM, Ollama)
- [Groq Whisper API](https://console.groq.com/docs/speech-to-text)
- [Cohere Transcribe API](https://docs.cohere.com/docs/transcribe)

**Quickstart:** `pip install SpeechRecognition`

To quickly try it out, run `python -m speech_recognition` after installing.

## Examples

See the `examples/` directory in the repository root for usage examples:

- [Recognize speech input from the microphone](https://github.com/Uberi/speech_recognition/blob/master/examples/microphone_recognition.py)
- [Transcribe an audio file](https://github.com/Uberi/speech_recognition/blob/master/examples/audio_transcribe.py)
- [Save audio data to an audio file](https://github.com/Uberi/speech_recognition/blob/master/examples/write_audio.py)
- [Show extended recognition results](https://github.com/Uberi/speech_recognition/blob/master/examples/extended_results.py)
- [Calibrate the recognizer energy threshold for ambient noise levels](https://github.com/Uberi/speech_recognition/blob/master/examples/calibrate_energy_threshold.py)
- [Listening to a microphone in the background](https://github.com/Uberi/speech_recognition/blob/master/examples/background_listening.py)

## Installing

First, make sure you have all the requirements listed in the "Requirements" section.

The easiest way to install this is using `pip install SpeechRecognition`.

## Requirements

To use all of the functionality of the library, you should have:

- **Python** 3.9+ (required)
- **PyAudio** 0.2.11+ (required only if you need to use microphone input, `Microphone`)
- **PocketSphinx** (required only if you need to use the Sphinx recognizer)
- **Google API Client Library for Python** (required only if you need to use the Google Cloud Speech API)
- **FLAC encoder** (required only if the system is not x86-based Windows/Linux/OS X)
- **Vosk** (required only if you need to use Vosk API speech recognition)
- **Whisper** (required only if you need to use Whisper)
- **Faster Whisper** (required only if you need to use Faster Whisper)
- **openai** (required only if you need to use OpenAI Whisper API)
- **groq** (required only if you need to use Groq Whisper API)
- **cohere** (required only if you need to use Cohere Transcribe API)

### PyAudio (for microphone users)

[PyAudio](http://people.csail.mit.edu/hubert/pyaudio/#downloads) is required if and only if you want to use microphone input (`Microphone`). PyAudio version 0.2.11+ is required, as earlier versions have known memory management bugs when recording from microphones in certain situations.

If not installed, everything in the library will still work, except attempting to instantiate a `Microphone` object will raise an `AttributeError`.

---

## Project links

- [PyPI](https://pypi.python.org/pypi/SpeechRecognition/)
- [Source code](https://github.com/Uberi/speech_recognition)
- [Issue tracker](https://github.com/Uberi/speech_recognition/issues)