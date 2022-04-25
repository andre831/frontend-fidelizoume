FROM node:16.14.0-alpine3.15

WORKDIR /usr/src/api

COPY ./package.json .

RUN npm install express && npm install cors

COPY . .

USER node

EXPOSE 3001:3001

CMD ["node", "./server.js"]