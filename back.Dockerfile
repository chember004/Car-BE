FROM node:19-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /home/app
WORKDIR /home/app

RUN npm install
RUN npm run build

EXPOSE 8060

CMD ["npm", "run", "start"]

