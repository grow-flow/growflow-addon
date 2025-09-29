# Changelog

All notable changes to the GrowFlow Home Assistant Add-on will be documented in this file.

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