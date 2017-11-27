FROM node:latest

ENV SERVICE_PATH /usr/src/todo-service

ADD proto ${SERVICE_PATH}/proto
ADD email-service ${SERVICE_PATH}/email-service

WORKDIR ${SERVICE_PATH}/email-service

RUN npm i
ENTRYPOINT [ "node", "index.js" ]

EXPOSE 3000