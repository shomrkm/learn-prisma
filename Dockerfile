FROM node:14.17-alpine

ENV PROJECT_ROOTDIR /usr/src/app

WORKDIR $PROJECT_ROOTDIR

COPY package.json $PROJECT_ROOTDIR
COPY package.json package-lock.json $PROJECT_ROOTDIR

RUN npm install

COPY . $PROJECT_ROOTDIR

EXPOSE 3000

CMD ["sh"]
