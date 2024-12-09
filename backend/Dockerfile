FROM ubuntu:latest

RUN apt-get update && apt-get install -y nodejs npm 

WORKDIR /app

COPY ./backend/package*.json /app/

RUN ls -la /app

RUN npm install

RUN npm install body-parser mysql2 cors express

COPY ./backend .

EXPOSE 3000

CMD ["node","app.js"]