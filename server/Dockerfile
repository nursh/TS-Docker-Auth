FROM node:stretch AS dev

EXPOSE 8080

WORKDIR /usr/src/app

RUN chown -R node:node .

USER node

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY --chown=node:node . .

CMD [ "npm", "run", "dev" ]



# Test Stage
FROM dev AS test

CMD [ "npm", "test" ]