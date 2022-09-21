FROM node:16

WORKDIR /supportbot

COPY package.json /supportbot/
RUN npm install
COPY . /supportbot/

VOLUME sayosupport

CMD npm run bot



