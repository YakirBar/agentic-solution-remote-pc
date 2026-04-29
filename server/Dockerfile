# filepath: server/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3001

CMD ["sh", "-c", "npm run init-db && npm run index-schema && npm start"]