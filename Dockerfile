# ----------------------------------------------------
# 1. BUILD STAGE
# ----------------------------------------------------
FROM node:18-alpine AS builder

# Enable better performance & smaller size
WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json* tsconfig.json ./
RUN npm install

# Copy all source files
COPY src ./src

# Build TypeScript
RUN npm run build


# ----------------------------------------------------
# 2. RUNTIME STAGE
# ----------------------------------------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only required runtime files
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy compiled build from builder
COPY --from=builder /app/dist ./dist

# Create workspace directory (Coolify will mount a volume here)
RUN mkdir -p /data/workspaces

# Environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Expose Fastify port
EXPOSE 3001

# Start the engine service
CMD ["node", "dist/server/index.js"]
