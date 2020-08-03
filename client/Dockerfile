FROM node:14.7-stretch as base 
EXPOSE 3000
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
CMD ["npm", "start"]


FROM base as test
USER root
CMD ["npm", "test"]
