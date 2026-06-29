---
source_id: auto-2026-06-28-psutil-gh
title: psutil GitHub README
url: https://github.com/giampaolo/psutil
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# psutil GitHub README

Process and System Utilities for Python

## About

psutil is a cross-platform library for retrieving information about running **processes** and **system utilization** (CPU, memory, disks, network, sensors) in Python. It is useful mainly for **system monitoring**, **profiling**, **limiting process resources**, and **managing running processes**.

It implements many functionalities offered by UNIX command line tool such as *ps, top, free, iotop, netstat, ifconfig, lsof* and others.

## Platform Support

- **Linux**
- **Windows**
- **macOS**
- **FreeBSD, OpenBSD, NetBSD**
- **Sun Solaris**
- **AIX**

## Adoption Statistics

- Top 100 most-downloaded packages on PyPI
- **340+ million** downloads per month
- **770,000+** GitHub repositories using it
- **16,000+** packages depending on it

## Install

```bash
pip install psutil
```

## Example Usage

**CPU:**
```python
>>> import psutil
>>> psutil.cpu_percent(interval=1, percpu=True)
[4.0, 6.9, 3.7, 9.2]
>>> psutil.cpu_count(logical=False)
2
```

**Memory:**
```python
>>> psutil.virtual_memory()
svmem(total=10367352832, available=6472179712, percent=37.6, used=8186245120, ...)
>>> psutil.swap_memory()
sswap(total=2097147904, used=296128512, free=1801019392, percent=14.1, ...)
```

**Disks:**
```python
>>> psutil.disk_partitions()
[sdiskpart(device='/dev/sda1', mountpoint='/', fstype='ext4', opts='rw,nosuid'), ...]
>>> psutil.disk_usage('/')
sdiskusage(total=21378641920, used=4809781248, free=15482871808, percent=22.5)
```

**Network:**
```python
>>> psutil.net_io_counters(pernic=True)
{'eth0': netio(bytes_sent=485291293, bytes_recv=6004858642, ...), ...}
>>> psutil.net_connections(kind='tcp')
[sconn(fd=115, family=2, type=1, laddr=addr(ip='10.0.0.1', port=48776), ...), ...]
```

**Sensors:**
```python
>>> psutil.sensors_temperatures()
{'coretemp': [shwtemp(label='Physical id 0', current=52.0, high=100.0, critical=100.0), ...]}
>>> psutil.sensors_battery()
sbattery(percent=93, secsleft=16628, power_plugged=False)
```

**Processes:**
```python
>>> p = psutil.Process(7055)
>>> p.name()
'python3'
>>> p.exe()
'/usr/bin/python3'
>>> p.cpu_percent(interval=1.0)
12.1
>>> p.memory_info()
pmem(rss=3164160, vms=4410163, shared=897433, text=302694, data=2422374)
>>> p.open_files()
[popenfile(path='/home/giampaolo/monit.py', fd=3, position=0, mode='r', flags=32768)]
>>> for p in psutil.process_iter(['pid', 'name']):
...     print(p.pid, p.name())
1 systemd
2 kthreadd
3 ksoftirqd/0
```

## License

BSD-3