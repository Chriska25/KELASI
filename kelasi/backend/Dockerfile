FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci || npm install

COPY ./src ./src
COPY .env ./.env

EXPOSE 4000

CMD ["npm", "start"]
