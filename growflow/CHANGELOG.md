# Changelog

All notable changes to the GrowFlow Home Assistant Add-on will be documented in this file.

## [v0.3.13] - 2025-12-08

### Changed

- Updated to base image version v0.3.13
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.3.12] - 2025-12-08

### Changed

- Updated to base image version v0.3.12
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.3.10] - 2025-12-08

### Changed

- Updated to base image version v0.3.10
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.3.9] - 2025-12-08

### Changed

- Updated to base image version v0.3.9
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.3.8] - 2025-12-08

### Changed

- Updated to base image version v0.3.8
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.3.6] - 2025-12-08

### Changed

- Updated to base image version v0.3.6
- Using GitHub Container Registry (ghcr.io/grow-flow/growflow)


## [v0.2.0] - 2025-12-08

### Changed

- **Breaking**: Migrated from Docker Hub to GitHub Container Registry (ghcr.io)
- Base image now pulled from `ghcr.io/grow-flow/growflow`
- Added automated version bumping via GitHub Actions
- Automated cross-repo synchronization on releases

### Technical

- New automation workflows for version management
- Repository dispatch integration with main repo

## [v0.1.3 - v0.1.6] - 2025-09-30

- Homeassistant compatibility fixes
- Fix ingress
- Fix cors

## [0.1.2] - 2025-09-30

### Fixed

- Docker image tag resolution for add-on installation

## [0.1.1] - 2025-09-30

### Fixed

- Docker image tag resolution for add-on installation

## [0.1.0] - 2025-09-28

### Added

- Initial release of GrowFlow Home Assistant Add-on
- Complete plant lifecycle tracking (9 phases)
- Care event logging with detailed data
- Strain management system
- Timeline analytics and progress tracking
- Home Assistant Ingress integration
- SSL/TLS support option
- Configurable logging levels
- Data persistence in `/data/` directory
- Multi-architecture support (amd64, armv7, aarch64)

### Features

- **Plant Management**: Create and track plants through complete lifecycles
- **Event Logging**: Record watering, feeding, training, observations, and harvests
- **Strain Database**: Manage genetics with custom phase templates
- **Dashboard**: Monitor all active plants and their status
- **Timeline Visualization**: Complete plant progress tracking
- **Home Assistant Integration**: Seamless sidebar panel integration

### Technical

- Based on Docker Hub image: `moritz03/growflow:latest`
- S6-overlay service management
- Bashio integration for HA Supervisor communication
- SQLite database with automatic initialization
- Express.js backend with React frontend
- Material-UI responsive interface

### Configuration Options

- `log_level`: Control logging verbosity
- `ssl`: Enable/disable SSL encryption
- `certfile`: SSL certificate file path
- `keyfile`: SSL private key file path
