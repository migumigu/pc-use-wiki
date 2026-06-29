---
source_id: auto-2026-06-28-psutil-api
title: psutil API Reference
url: https://psutil.readthedocs.io/latest/api.html
source_type: official_docs
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# psutil API Reference

## System Related Functions

### CPU
- `psutil.cpu_times()` - System CPU times as named tuple
- `psutil.cpu_percent(interval=1, percpu=False)` - CPU utilization
- `psutil.cpu_count(logical=True)` - Number of CPU cores
- `psutil.cpu_freq()` - CPU frequency
- `psutil.cpu_stats()` - CPU statistics
- `psutil.cpu_interval(interval)` - CPU times between intervals

### Memory
- `psutil.virtual_memory()` - Virtual memory statistics
- `psutil.swap_memory()` - Swap memory statistics

### Disks
- `psutil.disk_partitions()` - All disk partitions
- `psutil.disk_usage(path)` - Disk usage statistics
- `psutil.disk_io_counters()` - Disk I/O statistics

### Network
- `psutil.net_io_counters(pernic=False)` - Network I/O statistics
- `psutil.net_connections(kind='inet')` - Network connections
- `psutil.net_if_addrs()` - Network interface addresses
- `psutil.net_if_stats()` - Network interface statistics

### Sensors
- `psutil.sensors_temperatures()` - Temperature sensors
- `psutil.sensors_battery()` - Battery status
- `psutil.sensors_fans()` - Fan speeds

## Process Management

### Process Class
```python
p = psutil.Process(pid)
p.name()              # Process name
p.exe()               # Process executable path
p.pid                 # Process PID
p.ppid()              # Parent process PID
p.status()            # Process status
p.create_time()       # Process creation time
p.cpu_percent(interval=1.0)  # CPU utilization
p.memory_info()       # Memory information
p.memory_percent()    # Memory utilization %
p.io_counters()       # I/O statistics
p.connections(kind='inet')    # Connections
p.open_files()        # Open files
p.threads()           # Process threads
p.children(recursive=True)    # Child processes
p.terminate()         # Terminate process
p.kill()              # Kill process
```

### Process Iteration
```python
for p in psutil.process_iter(['pid', 'name']):
    print(p.pid, p.name())
```

## Windows Services
```python
psutil.win_service_iter()      # Iterate services
psutil.win_service_get(name)   # Get service
```

## Shell Equivalents

psutil replaces many UNIX commands:
- ps, top, free, iotop, netstat, ifconfig, lsof, traceroute, etc.

## Migration Note

psutil 8.0 introduces breaking API changes. See migration guide if upgrading from 7.x.