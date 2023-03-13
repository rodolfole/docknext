FROM node:18-alpine
RUN npm install -g pnpm

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]