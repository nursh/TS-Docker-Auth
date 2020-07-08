import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs, resolvers } from './graphql';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

async function start(app: Application) {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  server.applyMiddleware({ app, path: '/api' });
  app.listen(port, () => console.log(`[app]: running on port:${port}`));
}

start(app);
