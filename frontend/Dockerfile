FROM node:16.14-alpine3.14

WORKDIR /usr/app

ENV PATH /app/node_modules/ .bin:$PATH

COPY package*.json ./

RUN npm install 

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]