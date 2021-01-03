FROM node:14.15.3
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4200 49153
CMD npm start
