FROM node:19-alpine

# We use nodemon to restart the server every time there's a change
RUN npm install -g typescript
RUN npm install -g nodemon
# RUN npx tsc --init

WORKDIR /home/app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8060

# Use script specified in package,json
CMD ["npm", "run", "start"]