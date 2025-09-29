#!/usr/bin/with-contenv bashio

# Start GrowFlow
bashio::log.info "Starting GrowFlow Plant Tracker..."

# Read configuration
LOG_LEVEL=$(bashio::config 'log_level')
bashio::log.info "Log level set to: ${LOG_LEVEL}"

# Set environment variables
export LOG_LEVEL="${LOG_LEVEL}"
export NODE_ENV="production"
export DB_PATH="/data/growflow.db"

# Start the application
cd /app
exec node backend/dist/index.js