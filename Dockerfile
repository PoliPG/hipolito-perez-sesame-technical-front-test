FROM node:lts as base

# config pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

ARG HOST=0.0.0.0
ENV HOST=$HOST

ARG PORT=80
ENV PORT=$PORT

ARG SESAME_API_TOKEN
ENV VITE_SESAME_API_TOKEN=$SESAME_API_TOKEN

ARG SESAME_API_URL
ENV VITE_SESAME_API_URL=$SESAME_API_URL
 
FROM base AS builder
WORKDIR /app

COPY package*.json .
RUN pnpm config set network-timeout 600000 -g && pnpm install
COPY . .
RUN pnpm run build

FROM nginx:stable-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE $PORT
CMD ["nginx", "-g", "daemon off;"]

