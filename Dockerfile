FROM node:20.16.0-bullseye-slim
WORKDIR /app

RUN apt-get update && apt-get upgrade -y
RUN apt-get upgrade -y
RUN apt-get install -y git dumb-init
RUN npm install -g pnpm@latest-10
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
RUN chown -R node.node /app/node_modules

COPY . .
USER node
