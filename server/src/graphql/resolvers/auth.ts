import { Context } from 'types';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from 'utils/jwt';

export const authResolvers = {
  Mutation: {
    login: async (_: undefined, args: { name: string }, ctx: Context) => {
      const accessToken = generateAccessToken(args);
      const refreshToken = generateRefreshToken(args);
      try {
        const { db } = ctx;
        const user = await db.users.findOne({ name: args.name });
        if (user) {
          await db.users.updateOne(
            { name: args.name },
            { $set: { refreshToken } }
          );
        } else {
          await db.users.insertOne({ ...args, refreshToken });
        }
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }

      return {
        accessToken,
        refreshToken
      };
    },

    register: () => {
      return 'Register';
    },

    refreshToken: async (
      _: undefined,
      args: { token: string },
      ctx: Context
    ) => {
      const { token } = args;
      const { db } = ctx;

      try {
        // Check that the refresh token exists
        const user = await db.users.findOne({ refreshToken: token });

        // If a user does not exist, throw an error
        if (!user) {
          throw new Error('The token provided does not exist.');
        }

        // Verify that this server signed the token
        const tokenUser = verifyRefreshToken(token);

        // Create a new access token to send to user
        const accessToken = generateAccessToken(tokenUser);
        return accessToken;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
