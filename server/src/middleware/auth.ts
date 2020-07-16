import { rule } from 'graphql-shield';
import { Context } from 'types';

export const isAuthenticated = rule()(
  (_: undefined, __: undefined, ctx: Context) => ctx.user !== null
);
