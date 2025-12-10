# 1. Node image
FROM node:20-alpine

# 2. Working directory
WORKDIR /app

# 3. Copy dependencies first
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Expose NestJS port
EXPOSE 5000

# 7. Dev mode start (NestJS)
CMD sh -c "npx prisma generate && npm run start:dev"
