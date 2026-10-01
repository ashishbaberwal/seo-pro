# Stage 1: Build the application
FROM oven/bun:1 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma client (no DB connection needed)
RUN bun x prisma generate

# Build the Next.js application (needs DATABASE_URL + NEXT_PUBLIC_URL)
RUN bun run build

# Stage 2: Run the application
FROM oven/bun:1-slim AS runner

# Set environment variables
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on (next start default)
EXPOSE 3000

# Start the Next.js application
CMD ["bun", "run", "start"]
