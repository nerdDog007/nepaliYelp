# Use official Node.js image
FROM node:latest

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 3000


CMD ["node", "server.js"]
