FROM node:10.15.2-alpine

# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY . .

RUN yarn
# TODO: add tests

