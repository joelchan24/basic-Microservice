FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --quiet

COPY . .

EXPOSE 8000

CMD node app.js
