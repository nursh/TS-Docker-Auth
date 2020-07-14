import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    books: [Book!]!
  }

  type Mutation {
    addBook(title: String!): String!
    login(name: String!): Tokens!
    logout: String!
    refreshToken(token: String!): String!
    register(user: UserInput!): String!
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Book {
    name: String!
    title: String!
  }

  type Tokens {
    accessToken: String!
    refreshToken: String!
  }
`;
