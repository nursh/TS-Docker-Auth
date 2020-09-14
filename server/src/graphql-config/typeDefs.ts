import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    books: [Book!]!
    googleUrl: String!
    githubUrl: String!
    facebookUrl: String!
  }

  type Mutation {
    login(login: JWTLoginInput!): String!
    googleLogin(input: AuthLoginInput): String!
    githubLogin(input: AuthLoginInput): String!
    facebookLogin(input: FacebookLoginInput): String!
    logout: String!
    register(user: UserInput!): String!
  }

  input AuthLoginInput {
    code: String!
  }

  input FacebookLoginInput {
    code: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    role: Role!
  }

  input JWTLoginInput {
    name: String!
    password: String!
  }

  enum Role {
    ADMIN
    MANAGER
    BASIC
  }

  type Book {
    name: String!
    title: String!
  }
`;
