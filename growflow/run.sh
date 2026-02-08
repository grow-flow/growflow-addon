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
export DATABASE_URL="file:/data/growflow.db"

# Ensure database schema is up to date
echo "🔵 [DB] Ensuring database schema is up to date..."
npx prisma db push --schema backend/prisma/schema.prisma

# Start the application
cd /app
exec node backend/dist/index.js