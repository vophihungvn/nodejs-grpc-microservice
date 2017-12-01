FROM node:latest

ENV SERVICE_PATH /usr/src/todo-service

ADD proto ${SERVICE_PATH}/proto
ADD web/client ${SERVICE_PATH}/web/server/client
ADD web/server ${SERVICE_PATH}/web/server

WORKDIR ${SERVICE_PATH}/web/server

# RUN npm cache clean --force
# RUN node -v
RUN npm i -g babel-cli
RUN npm i

# RUN babel app --out-dir dist

RUN cd client && npm i && npm run build

ENTRYPOINT [ "babel-node", "index.js" ]

EXPOSE 3000