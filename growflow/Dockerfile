ARG BUILD_FROM=moritz03/growflow:latest
FROM $BUILD_FROM

# Install bashio for Home Assistant integration
RUN apk add --no-cache bash curl jq

# Copy bashio integration script
COPY rootfs /

# Ensure script is executable
RUN chmod a+x /etc/services.d/growflow/run

# Labels for Home Assistant
LABEL \
    io.hass.name="GrowFlow Plant Tracker" \
    io.hass.description="Comprehensive plant tracking system" \
    io.hass.arch="armhf|aarch64|i386|amd64" \
    io.hass.type="addon" \
    io.hass.version="0.1.0"