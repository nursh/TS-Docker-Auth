import crypto from 'crypto';
import { Google } from 'lib/api';
import { Context, AuthLoginArgs } from 'lib/types';
import { googleLogin } from './login';

export const googleResolvers = {
  Query: {
    googleUrl: (): string => {
      try {
        return Google.authorizeUrl;
      } catch (error) {
        throw new Error(`Failed to get Google Auth Url: ${error}.`);
      }
    }
  },

  Mutation: {
    googleLogin: (_: undefined, { input }: AuthLoginArgs, ctx: Context) => {
      try {
        const code = input ? input.code : null;
        const token = crypto.randomBytes(16).toString('hex');
        const user = code
          ? googleLogin({ code, token, ctx })
          : 'code not found.';
        return user;
      } catch (error) {
        throw new Error(`Failed to log in: ${error}.`);
      }
    }
  }
};
