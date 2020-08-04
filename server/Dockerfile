FROM node:stretch AS base
EXPOSE 8080
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


# Development Stage
FROM base as dev
ENV NODE_ENV=development
RUN npm install --only=development \
    && npm cache clean --force
COPY --chown=node:node . .
CMD [ "npm", "run", "dev" ]


# Test Stage
FROM dev as test
USER root
CMD [ "npm", "run", "test" ]


# Build the project and remove test and node_modules folders
FROM test as pre-prod
RUN npm run build
RUN find . -type d -name '*/__tests__/' -delete


# Production build
FROM base as prod
COPY --from=pre-prod /usr/src/app /usr/src/app
CMD [ "node", "./build/index.js" ]
