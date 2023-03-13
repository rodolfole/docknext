FROM node:18-alpine
RUN npm install -g pnpm

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

COPY ./ ./

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]