---
source_id: auto-2026-0628-ps-gh
title: pySerial GitHub README
url: https://github.com/pyserial/pyserial
source_type: github_readme
tier: 1
control_object: hardware_interface
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# pySerial

## Overview

This module encapsulates the access for the serial port. It provides backends for Python running on Windows, OSX, Linux, and BSD (possibly any POSIX compliant system). The module named "serial" automatically selects the appropriate backend.

It is released under a free software license, see LICENSE for more details.

Copyright (C) 2001-2020 Chris Liechti <cliechti(at)gmx.net>

## Features

- Same class based interface on all supported platforms.
- Access to the port settings through Python properties.
- Support for different byte sizes, stop bits, parity and flow control with RTS/CTS and/or Xon/Xoff.
- Working with or without receive timeout.
- File like API with "read" and "write" ("readline" etc. also supported).
- The files in this package are 100% pure Python.
- The port is set up for binary transmission. No NULL byte stripping, CR-LF translation etc. (which are many times enabled for POSIX.) This makes this module universally useful.
- Compatible with io library
- RFC 2217 client (experimental), server provided in the examples.

## Requirements

- Python 2.7 or Python 3.4 and newer
- If running on Windows: Windows 7 or newer

## Installation

### From PyPI

```bash
python -m pip install pyserial
```

### From Conda

```bash
conda install pyserial
# or
conda install -c conda-forge pyserial
```

### From source

Download the archive from PyPI or GitHub releases. Unpack the archive, enter the `pyserial-x.y` directory and run:

```bash
pip install .
```

## Project links

- Homepage: https://github.com/pyserial/pyserial
- Download Page: https://pypi.org/project/pyserial/
- Documentation: https://pyserial.readthedocs.io/en/latest/

## Releases

- Latest: v3.5 (Nov 20, 2025)
- Total releases: 10

## Used by

**103k+** repositories depend on pySerial.

## Languages

- Python 100.0%