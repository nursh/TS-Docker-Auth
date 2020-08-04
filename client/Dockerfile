FROM node:14.7-stretch as base 
EXPOSE 3000
ENV NODE_ENV=production
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
WORKDIR /usr/src/app
RUN chown -R node:node .
USER node
COPY package*.json ./
RUN npm config list
RUN npm ci \
    && npm cache clean --force
ENTRYPOINT ["/tini", "--"]


FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=development \
    && npm cache clean --force
COPY --chown=node:node . .
CMD [ "npm", "start" ]


FROM dev as test
USER root
CMD ["npm", "test"]


# Build the project and remove node_modules folder
FROM test as pre-prod
RUN npm run build
RUN rm -rf ./node_modules


# Copy files from pre-prod
# TO-DO Run Nginx server
FROM base as prod
COPY --from=pre-prod /usr/src/app /usr/src/app