import crypto from 'crypto';
import { Facebook } from 'lib/api';
import { Context, AuthLoginArgs } from 'lib/types';
import { facebookLogin } from './login';

export const facebookResolvers = {
  Query: {
    facebookUrl: (): string => {
      return Facebook.authUrl();
    }
  },

  Mutation: {
    facebookLogin: (_: undefined, { input }: AuthLoginArgs, ctx: Context) => {
      try {
        const code = input ? input.code : null;
        const token = crypto.randomBytes(16).toString('hex');
        const user = code
          ? facebookLogin({ code, token, ctx })
          : 'code not found.';
        console.log(user);
        return 'Found user';
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
