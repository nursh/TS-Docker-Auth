import { Context } from 'types';
import jwt from 'jsonwebtoken';

export const authResolvers = {
  Mutation: {
    login: async (_: undefined, args: { name: string }, ctx: Context) => {
      const accessToken = jwt.sign(args, process.env.ACCESS_TOKEN as string, {
        expiresIn: '2 days'
      });
      const refreshToken = jwt.sign(args, process.env.REFRESH_TOKEN as string);
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
    }
  }
};
