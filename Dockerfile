FROM node:lts as base

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

ARG HOST=0.0.0.0
ENV HOST=$HOST

ARG PORT=3000
ENV PORT=$PORT

ARG SESAME_API_TOKEN
ENV VITE_SESAME_API_TOKEN=$SESAME_API_TOKEN

ARG SESAME_API_URL
ENV VITE_SESAME_API_URL=$SESAME_API_URL
 
FROM base AS initializer
WORKDIR /app
RUN npm i -g http-server
COPY . .
 
FROM base AS builder
WORKDIR /app
COPY --from=initializer /app/package.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
RUN npm run build


FROM base AS runner
COPY --from=builder /app/dist ./dist


EXPOSE $PORT
CMD [ "http-server", "dist" ]