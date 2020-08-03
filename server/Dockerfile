FROM node:stretch AS dev
EXPOSE 8080
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
WORKDIR /usr/src/app
RUN chown -R node:node .
USER node
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY --chown=node:node . .
ENTRYPOINT ["/tini", "--"]
CMD [ "npm", "run", "dev" ]



# Test Stage
FROM dev AS test
USER root
RUN printenv
CMD [ "npm", "run", "test" ]