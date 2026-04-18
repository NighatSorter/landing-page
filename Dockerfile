# Build stage: install dependencies and compile Vite app
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies based on lockfile for reproducibility
COPY package*.json ./
RUN npm install

# Copy rest of project and build
COPY . .
RUN npm run build

# Runtime stage: serve static files with Nginx
FROM nginx:1.27-alpine AS runtime

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
