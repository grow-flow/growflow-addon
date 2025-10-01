# GrowFlow Add-ons Repository

[![GitHub Release](https://img.shields.io/github/release/grow-flow/growflow.svg)](https://github.com/grow-flow/growflow/releases)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Add--on-blue.svg)](https://www.home-assistant.io/addons/)

Home Assistant Add-ons Repository for the GrowFlow Plant Tracking Application.

## About

This repository contains the Home Assistant Add-on configuration for [GrowFlow](https://github.com/grow-flow/growflow), a comprehensive plant tracking system for documenting complete plant lifecycles from germination to harvest.

For detailed features, documentation, and changelog, please visit the main project: **[GrowFlow Repository](https://github.com/grow-flow/growflow)**

## Available Add-ons

### 📱 GrowFlow Plant Tracker

A complete plant tracking system as Home Assistant Add-on.

**Current Version:** v0.2.0  
**Supported Architectures:** amd64, armv7, aarch64

[➡️ View Add-on Documentation](growflow/)

## Installation

### Step 1: Add Repository

1. Open your Home Assistant frontend
2. Navigate to **Supervisor** → **Add-on Store**
3. Click the **⋮** menu (three dots) in the top right
4. Select **Repositories**
5. Add this repository URL:

```
https://github.com/grow-flow/growflow-addon
```

### Step 2: Install Add-on

1. Refresh the Add-on Store page
2. Find "GrowFlow Plant Tracker" in the store
3. Click on the add-on
4. Click **Install**
5. Wait for the installation to complete

### Step 3: Configuration & Start

1. Configure the add-on according to your needs
2. Click **Start**
3. Optionally enable **Auto-start** and **Watchdog**
4. Access via the **GrowFlow** panel in Home Assistant sidebar

## Configuration

The add-on configuration options are documented in the [add-on's README](growflow/README.md).

## Repository Structure

```
growflow-addon/
├── README.md                 # This file
├── repository.yaml          # Repository metadata
└── growflow/               # GrowFlow Add-on
    ├── config.yaml         # Add-on configuration
    ├── Dockerfile          # Container definition
    ├── README.md           # Add-on documentation
    └── run.sh             # Startup script
```

## Supported Architectures

All add-ons in this repository support the following architectures:

- `amd64` (64-bit Intel/AMD)
- `armv7` (32-bit ARM v7)
- `aarch64` (64-bit ARM)

## Development

### Local Build

For local development and testing:

```bash
# Clone repository
git clone https://github.com/grow-flow/growflow-addon.git
cd growflow-addon

# Build add-on locally (example for amd64)
docker build -t local/growflow-addon ./growflow/
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues and Support

### Add-on Specific Issues

For issues with the Home Assistant Add-ons:

- **Bug Reports**: [GitHub Issues](https://github.com/grow-flow/growflow-addon/issues)
- **Feature Requests**: [GitHub Issues](https://github.com/grow-flow/growflow-addon/issues)

### Application Issues

For issues with the underlying GrowFlow application:

- **Main Project**: [GrowFlow Issues](https://github.com/grow-flow/growflow/issues)
- **Documentation**: [GrowFlow Repository](https://github.com/grow-flow/growflow)

### Support Channels

- 📧 **Email**: support@growflow.org
- 💬 **Discussions**: [GitHub Discussions](https://github.com/grow-flow/growflow-addon/discussions)

## License

- **Add-on Repository**: CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial)
- **GrowFlow Application**: CC BY-NC 4.0 (Creative Commons Attribution-NonCommercial)

See [LICENSE](LICENSE) for details.

### License Terms

**Allowed:**

- ✅ Share and distribute the material
- ✅ Adapt, modify and build upon the material
- ✅ Private and non-commercial use
- ✅ Educational purposes and research

**Not Allowed:**

- ❌ Commercial use without explicit permission
- ❌ Selling the software or derivative works
- ❌ Use in commercial products or services

**Requirements:**

- 📄 Attribution required
- 🔗 Link to original license required

## Related Projects

- **[GrowFlow](https://github.com/grow-flow/growflow)**: The main application
- **[GrowFlow Docker](https://hub.docker.com/r/moritz03/growflow)**: Docker Images

## Legal Notice

This software is designed for legal plant cultivation tracking and documentation purposes only. Users are responsible for compliance with local laws and regulations.
