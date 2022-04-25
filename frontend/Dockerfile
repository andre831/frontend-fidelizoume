FROM node:17.9.0-alpine3.14

WORKDIR /usr/app

ENV PATH /app/node_modules/ .bin:$PATH

COPY package*.json ./

RUN npm install 

EXPOSE 3000

CMD ["npm", "run", "start"]