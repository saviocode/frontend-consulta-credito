FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/frontend-consulta-credito /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
