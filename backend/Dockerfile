FROM ubuntu:latest

RUN apt-get update && apt-get install -y nodejs npm 

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install body-parser mysql2 cors express

COPY . .

EXPOSE 3000

CMD ["node","app.js"]