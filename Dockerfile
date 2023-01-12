FROM node:14.17-alpine

ENV PROJECT_ROOTDIR /usr/src/app

WORKDIR $PROJECT_ROOTDIR

COPY package.json $PROJECT_ROOTDIR
COPY package.json package-lock.json $PROJECT_ROOTDIR

COPY . $PROJECT_ROOTDIR

RUN npm install

# This command reads the Prisma schema and automatically creates the Prisma Client code
RUN npm prisma generate

EXPOSE 3000

CMD ["sh"]
