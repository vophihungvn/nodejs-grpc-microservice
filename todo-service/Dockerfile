FROM node:latest

WORKDIR /usr/src/todo-service


RUN npm i && npm run build

RUN node dist

EXPOSE 8080