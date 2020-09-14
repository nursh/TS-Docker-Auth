import { OptionsWithCode, GithubUser } from 'lib/types';
import { Github } from 'lib/api';

export const githubLogin = async (opts: OptionsWithCode) => {
  const user: GithubUser = await Github.fetchUser(opts.code);
  return user;
};
