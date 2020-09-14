import { OptionsWithCode } from 'lib/types';
import { Facebook } from 'lib/api';

export const facebookLogin = async (opts: OptionsWithCode) => {
  try {
    const user = await Facebook.fetchUser(opts.code);
    if (!user) {
      throw new Error('User was not found.');
    }
    return user;
  } catch (error) {
    console.error(error);
  }
};
