FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./
RUN yarn

COPY . .

CMD [ "yarn", "start:dev" ]