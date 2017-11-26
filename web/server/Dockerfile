FROM node:latest

WORKDIR ./
RUN cd sever && npm i && npm run build

RUN cd client && npm install && npm run build

RUN node dist

EXPOSE 8080