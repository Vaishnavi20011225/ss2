FROM node:alpine
WORKDIR /
COPY package*.json .
RUN npm install
COPY . . 
EXPOSE 2000
CMD ["node", "server.js"]