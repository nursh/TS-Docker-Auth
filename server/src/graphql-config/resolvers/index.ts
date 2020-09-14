import merge from 'lodash.merge';
import { bookResolvers } from './Book';
import { authResolvers } from './auth';
import { googleResolvers } from './Google';
import { githubResolvers } from './Github';
import { facebookResolvers } from './Facebook';

export const resolvers = merge(
  bookResolvers,
  authResolvers,
  googleResolvers,
  githubResolvers,
  facebookResolvers
);
