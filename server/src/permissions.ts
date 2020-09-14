import { shield } from 'graphql-shield';
import { isAuthenticated } from './lib/middleware/auth';

export const permissions = shield({
  Query: {
    books: isAuthenticated
  }
});
