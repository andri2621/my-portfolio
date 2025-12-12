# -----------------------------
# STAGE 1 — Install dependencies
# -----------------------------
FROM node:20 AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies)
RUN npm install

# Copy the entire project
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build contentlayer + next
RUN npm run build


# -----------------------------
# STAGE 2 — Production image
# -----------------------------
FROM node:20 AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built project & node_modules from builder
COPY --from=deps /app ./

# Expose Next.js port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
