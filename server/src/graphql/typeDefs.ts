import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    books: String!
  }

  type Mutation {
    addBook(title: String!): String!
  }
`;
