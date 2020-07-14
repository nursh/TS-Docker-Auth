import { shield } from 'graphql-shield';
import { authenticateToken } from './middleware/auth';

export const permissions = shield({
  Query: {
    books: authenticateToken
  }
});
