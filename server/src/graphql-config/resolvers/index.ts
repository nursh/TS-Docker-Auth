import merge from 'lodash.merge';
import { bookResolvers } from './book';
import { authResolvers } from './auth';

export const resolvers = merge(bookResolvers, authResolvers);
