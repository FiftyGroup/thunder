FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install && npx tsc

CMD npx prisma db push && node build/index.js

EXPOSE 3000