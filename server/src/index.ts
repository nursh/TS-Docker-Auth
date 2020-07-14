import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { applyMiddleware } from 'graphql-middleware';
import dotenv from 'dotenv';

import { typeDefs, resolvers } from './graphql';
import { permissions } from './graphql/permissions';
import { connectDatabase } from './db/mongodb';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

async function start(app: Application) {
  const db = await connectDatabase();
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const schemaWithMiddleware = applyMiddleware(schema, permissions);
  app.use(
    '/api',
    graphqlHTTP((req, res) => ({
      schema: schemaWithMiddleware,
      context: {
        req,
        res,
        db,
        user: null
      },
      graphiql: true
    }))
  );
  app.listen(port, () => console.log(`[app]: running on port:${port}`));
}

start(app);
