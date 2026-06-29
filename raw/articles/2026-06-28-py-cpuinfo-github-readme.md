---
source_id: auto-2026-06-28-pycpuinfo
title: py-cpuinfo GitHub README
url: https://github.com/workhorsy/py-cpuinfo
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# py-cpuinfo

Py-cpuinfo gets CPU info with pure Python. It works without any extra programs or libraries, beyond what your OS provides. It does not require any compilation (C/C++, assembly, etc.) to use.

## Installation

```bash
pip install py-cpuinfo
```

## Usage

```python
from cpuinfo import get_cpu_info

# Get CPU info as dictionary
info = get_cpu_info()

# Print all CPU info
for key, value in info.items():
    print(f"{key}: {value}")

# Get CPU info as JSON string
json_str = get_cpu_info_json()
```

## API

### get_cpu_info()
Returns CPU info as a dictionary using the best sources of information for your OS.

### get_cpu_info_json()
Returns CPU info as a JSON string.

## Returned Fields

| Key | Example Value | Format |
|-----|--------------|--------|
| `python_version` | "3.10.4.final.0 (64 bit)" | string |
| `cpuinfo_version` | (8, 0, 0) | tuple |
| `cpuinfo_version_string` | "8.0.0" | string |
| `hz_advertised_friendly` | "2.9300 GHz" | string |
| `hz_actual_friendly` | "1.7330 GHz" | string |
| `hz_advertised` | (2930000000, 0) | tuple |
| `hz_actual` | (1733000000, 0) | tuple |
| `arch` | "X86_64" | string |
| `bits` | 64 | int |
| `count` | 4 | int |
| `l1_data_cache_size` | 32768 | int |
| `l1_instruction_cache_size` | 32768 | int |
| `l2_cache_size` | 262144 | int |
| `l2_cache_line_size` | 256 | int |
| `l2_cache_associativity` | 6 | int |
| `l3_cache_size` | 3145728 | int |
| `stepping` | 5 | int |
| `model` | 30 | int |
| `family` | 6 | int |
| `processor_type` | 0 | int |
| `flags` | ['acpi', 'aperfmperf', 'apic', ...] | list |

## Raw Fields (Unverified)

| Key | Example Value | Format |
|-----|--------------|--------|
| `vendor_id_raw` | "GenuineIntel" | string |
| `hardware_raw` | "BCM2708" | string |
| `brand_raw` | "Intel(R) Core(TM) i7 CPU 870 @ 2.93GHz" | string |
| `arch_string_raw` | "x86_64" | string |

## OS Support

| OS | Status |
|----|--------|
| Linux (Arch, CentOS, Debian, Fedora, etc.) | ✅ Tested |
| Windows (XP, Vista, 7, 8, 10) | ✅ Tested |
| macOS (10.8 - 10.14) | ✅ Tested |
| FreeBSD, PC-BSD, TrueOS | ✅ Tested |
| Cygwin (Windows) | ✅ Tested |
| Oracle Solaris, OpenIndiana | ✅ Tested |
| Haiku Nightly | ✅ Tested |

## CPU Architecture Support

- X86 32bit and 64bit
- ARM (partial)
- LoongArch
- MIPS (partial)
- PPC (partial)
- RISCV (partial)
- SPARC (partial)
- S390X

## Information Sources

py-cpuinfo uses multiple approaches to get CPU information:

1. Windows Registry (Windows)
2. `/proc/cpuinfo` (Linux)
3. `sysctl` (macOS)
4. `dmesg` (Unix/Linux)
5. `/var/run/dmesg.boot` (BSD/Unix)
6. `isainfo` and `kstat` (Solaris)
7. `cpufreq-info` (BeagleBone)
8. `lscpu` (Unix/Linux)
9. `sysinfo` (Haiku)
10. device-tree ibm features flags (Linux PPC)
11. CPUID register query (Intel X86 CPUs)

## Running as Script

```bash
# Run as script
python cpuinfo/cpuinfo.py

# Run as module
python -m cpuinfo

# Get JSON output
python -m cpuinfo --json
```

## PyInstaller Compatibility

```python
if __name__ == '__main__':
    from cpuinfo import get_cpu_info
    from multiprocessing import freeze_support
    
    freeze_support()
    info = get_cpu_info()
```

## License

MIT license

## Repository Statistics

- Latest commit: Nov 20, 2022
- 700 commits
- 41 issues
- 57,309 dependent repositories
- Written in pure Python (99.7%)