FROM node:latest

ENV SERVICE_PATH /usr/src/todo-service

ADD proto ${SERVICE_PATH}/proto
ADD authenticate-service ${SERVICE_PATH}/authenticate-service

WORKDIR ${SERVICE_PATH}/authenticate-service

RUN npm i
ENTRYPOINT [ "node", "index.js" ]
EXPOSE 3000