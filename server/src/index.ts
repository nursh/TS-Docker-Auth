import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';

import { typeDefs, resolvers } from './graphql-config';
import { permissions } from './permissions';
import { connectDatabase } from './db/mongodb';
import { getUser } from 'lib/utils/auth';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

async function start(app: Application) {
  const db = await connectDatabase();
  const schema = applyMiddleware(
    makeExecutableSchema({ typeDefs, resolvers }),
    permissions
  );

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      db,
      req,
      res,
      user: getUser(req)
    })
  });

  server.applyMiddleware({ app, path: '/api' });
  app.listen(port, () => console.log(`[app]: running on port:${port}`));
}

start(app);
