FROM node:16-bullseye AS builder
WORKDIR /app
ENV npm_config_legacy_peer_deps=true
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
