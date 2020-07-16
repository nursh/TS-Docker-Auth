import { shield } from 'graphql-shield';
import { isAuthenticated } from './middleware/auth';

export const permissions = shield({
  Query: {
    books: isAuthenticated
  }
});
