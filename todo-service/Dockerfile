FROM node:latest

ENV SERVICE_PATH /usr/src/todo-service

ADD proto ${SERVICE_PATH}/proto
ADD todo-service ${SERVICE_PATH}/todo-service

WORKDIR ${SERVICE_PATH}/todo-service

RUN npm i
ENTRYPOINT [ "node", "index.js" ]
EXPOSE 3000