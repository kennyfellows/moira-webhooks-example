FROM node:20-alpine3.19
COPY ./package.json /app/package.json
COPY ./index.js /app/index.js
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD [ "node", "index" ]
