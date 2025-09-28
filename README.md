# GrowFlow Add-ons Repository

Home Assistant add-on repository containing GrowFlow plant tracking add-ons.

![GrowFlow Screenshot](https://raw.githubusercontent.com/grow-flow/growflow/main/assets/dashboard_view.png)

## Add-ons in this Repository

### GrowFlow Plant Tracker

A comprehensive plant tracking system for documenting the complete grow process from germination to harvest.

GrowFlow is a standalone plant tracking application designed for documenting complete plant lifecycles. This Home Assistant add-on provides easy integration with your smart home setup while maintaining all the powerful features of the standalone application.

## Features

- 🌱 **Complete Plant Lifecycle**: Track plants through 9 growth phases (germination → seedling → vegetation → pre_flower → flowering → flushing → harvest → drying → curing)
- 💧 **Care Event Logging**: Record watering, feeding, training, observations, and harvests with detailed data
- 🧬 **Strain Management**: Track genetics, breeding information, and custom phase templates  
- 📈 **Timeline Analytics**: Complete plant timeline visualization and progress tracking
- 📊 **Dashboard Overview**: Monitor all active plants and their current status
- 🏠 **Home Assistant Integration**: Seamless integration with Ingress support

## Installation

1. Navigate in your Home Assistant frontend to **Supervisor** → **Add-on Store**
2. Click the **⋮** menu in the top right and select **Repositories**
3. Add this repository URL:
   ```
   https://github.com/grow-flow/growflow-addon
   ```
4. Click **Add** and wait for the repository to be added
5. Find "GrowFlow Plant Tracker" in the add-on store and click it
6. Click "Install" and wait for installation to complete
7. Configure the add-on (see configuration section below)
8. Start the add-on
9. Access via the **GrowFlow** panel in Home Assistant sidebar

## Configuration

### Add-on Configuration Options

```yaml
log_level: info          # Logging level (trace, debug, info, warn, error, fatal)
ssl: false              # Enable SSL/TLS encryption
certfile: fullchain.pem # SSL certificate file (if SSL enabled)
keyfile: privkey.pem    # SSL private key file (if SSL enabled)
```

### Example Configuration

```yaml
log_level: info
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

## Usage

Once installed and started, you can access GrowFlow through:

1. **Home Assistant Sidebar**: Click the "GrowFlow" panel
2. **Ingress URL**: The add-on provides seamless integration through HA's ingress system

### Getting Started

1. **Add Strains**: Define genetics with custom phase templates and growing characteristics
2. **Create Plants**: Add plants, assign strains, and track through lifecycle phases  
3. **Log Care Events**: Record detailed watering, feeding, training, and observation events
4. **Monitor Progress**: View complete plant timelines and progress tracking
5. **Analyze Data**: Review historical data and optimize growing processes

## Data Persistence

All plant data is stored in the add-on's persistent data directory (`/data/`), ensuring your grow logs survive add-on updates and restarts.

## Network Access

The add-on runs on port 8080 internally, but no external port configuration is needed thanks to Home Assistant's Ingress feature.

## Support

For support and feature requests:

- **Add-on Issues**: [Create an issue](https://github.com/grow-flow/growflow-addon/issues)
- **Application Issues**: [Main project issues](https://github.com/grow-flow/growflow/issues)
- **Documentation**: [Project Documentation](https://github.com/grow-flow/growflow)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

## License

MIT License - see the [LICENSE](https://github.com/grow-flow/growflow/blob/main/LICENSE) file for details.

## Legal Notice

This software is designed for legal plant cultivation tracking and documentation purposes only. Users are responsible for compliance with local laws and regulations.