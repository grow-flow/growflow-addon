ARG BUILD_FROM=ghcr.io/grow-flow/growflow:latest
FROM $BUILD_FROM

# Install bashio for Home Assistant integration
RUN apk add --no-cache bash curl jq

# Install bashio
RUN curl -J -L -o /tmp/bashio.tar.gz \
    "https://github.com/hassio-addons/bashio/archive/v0.16.2.tar.gz" \
    && mkdir /tmp/bashio \
    && tar zxvf /tmp/bashio.tar.gz --strip 1 -C /tmp/bashio \
    && mv /tmp/bashio/lib /usr/lib/bashio \
    && ln -s /usr/lib/bashio/bashio /usr/bin/bashio \
    && rm -rf /tmp/bashio.tar.gz /tmp/bashio

# Create data directory for persistence
RUN mkdir -p /data

# Copy the run script
COPY run.sh /run.sh
RUN chmod a+x /run.sh

# Labels for Home Assistant
LABEL \
    io.hass.name="GrowFlow Plant Tracker" \
    io.hass.description="Comprehensive plant tracking system" \
    io.hass.arch="armhf|aarch64|i386|amd64" \
    io.hass.type="addon" \
    io.hass.version="v0.3.9"

CMD ["/run.sh"]