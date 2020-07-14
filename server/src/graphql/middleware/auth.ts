import jwt from 'jsonwebtoken';
import { rule } from 'graphql-shield';
import { Context, JWTUser } from 'types';

export const authenticateToken = rule({ cache: 'contextual' })(
  async (_: undefined, __: undefined, ctx: Context) => {
    const { req } = ctx;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('No token provided.');
    }
    const token = authHeader.split(' ')[1];

    try {
      const user = await jwt.verify(token, process.env.ACCESS_TOKEN as string);
      ctx.user = user as JWTUser;
      return true;
    } catch (error) {
      throw new Error('Token was not authenticated');
    }
  }
);
