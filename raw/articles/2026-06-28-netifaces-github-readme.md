---
source_id: auto-2026-06-28-netifaces
title: netifaces GitHub README
url: https://github.com/al45tair/netifaces
source_type: github_readme
tier: 1
control_object: system_service
tech_layer: tool_implementation
collected_date: 2026-06-28
collected_by: auto_research
confidence: high
---

# netifaces 0.10.8

netifaces is a Python package for getting network interface addresses in a portable manner. It handles the system-dependent low-level networking APIs so you can write Python code without concerning yourself with the nitty gritty details.

## Installation

```bash
pip install netifaces
```

Note: netifaces is written in C and requires compilation during installation.

## Usage

```python
import netifaces

# Get list of all network interfaces
interfaces = netifaces.interfaces()
# Example: ['lo0', 'gif0', 'stf0', 'en0', 'en1', 'fw0']

# Get addresses for a specific interface
addrs = netifaces.ifaddresses('en0')
```

## Address Families

netifaces uses standard address family constants:

| Constant | Description |
|----------|-------------|
| `AF_LINK` | Link layer interface (Ethernet, MAC address) |
| `AF_INET` | IPv4 addresses |
| `AF_INET6` | IPv6 addresses |

## Address Information Structure

The `ifaddresses()` method returns a dictionary keyed by address family. Each entry contains a list of address dictionaries:

```python
addrs = netifaces.ifaddresses('en0')

# IPv4 addresses
ipv4_addrs = addrs[netifaces.AF_INET]
# [{'broadcast': '10.15.255.255', 'netmask': '255.240.0.0', 'addr': '10.0.1.4'}]

# MAC address
mac_addrs = addrs[netifaces.AF_LINK]
# [{'addr': '00:12:34:56:78:9a'}]

# IPv6 addresses  
ipv6_addrs = addrs[netifaces.AF_INET6]
```

## Gateway Information

As of version 0.10.0, you can also obtain gateway information:

```python
gws = netifaces.gateways()
# {2: [('10.0.1.1', 'en0', True)], 'default': {2: ('10.0.1.1', 'en0')}}

# Get default IPv4 gateway
default_gw = gws['default'][netifaces.AF_INET]
# ('10.0.1.1', 'en0')
```

The gateways dictionary returns tuples of `(address, interface, is_default)`.

## Platform Support

- ✅ OS X (regularly tested)
- ✅ Linux (regularly tested)
- ✅ Windows (regularly tested)
- ✅ Solaris (reported working)
- ✅ Other UNIX-like systems (expected to work)

## Important Notes

1. **Multiple addresses per interface**: An interface can have multiple addresses of the same type. Always handle addresses as lists.

2. **Numeric values are system-dependent**: Use the provided constants (`AF_LINK`, `AF_INET`, `AF_INET6`) instead of raw numbers.

3. **MAC addresses may vary**: AF_LINK addresses may be Ethernet MAC (6 bytes) or FireWire addresses (8 bytes) on macOS.

4. **No default gateway guarantee**: There may be no default gateway for any given address family, especially IPv6.

## License

MIT-style license

## Repository Statistics

- Version: 0.10.8
- Latest commit: May 31, 2021
- 127 commits
- 32 issues
- 68,411 dependent repositories
- Written in C (76.2%) and Python (21.1%)

## Maintenance Status

⚠️ Warning: netifaces needs a new maintainer. al45tair is no longer able to maintain it or make new releases due to work commitments.