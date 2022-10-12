FROM node:lts-alpine 
WORKDIR /usr/src/app
COPY apps/producer/src .
COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./
RUN yarn install --immutable
RUN yarn build
CMD node ./dist/main.js

USER node