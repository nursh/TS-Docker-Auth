import crypto from 'crypto';
import { AuthLoginArgs, Context } from 'lib/types';
import { Github } from 'lib/api';
import { githubLogin } from './login';

export const githubResolvers = {
  Query: {
    githubUrl: (): string => {
      return Github.authUrl();
    }
  },

  Mutation: {
    githubLogin: (_: undefined, { input }: AuthLoginArgs, ctx: Context) => {
      try {
        const code = input ? input.code : null;
        const token = crypto.randomBytes(16).toString('hex');
        const user = code
          ? githubLogin({ code, token, ctx })
          : 'code not found.';
        console.log(user);
        return 'Found user';
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
