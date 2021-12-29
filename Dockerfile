FROM node:16

ARG API_URL
ENV API_URL=$API_URL

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
