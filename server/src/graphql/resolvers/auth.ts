import { Context, UserArgs, LoginArgs } from 'types';
import { generateAccessToken, createPayload } from 'utils/jwt';

export const authResolvers = {
  Mutation: {
    login: async (_: undefined, args: { login: LoginArgs }, ctx: Context) => {
      try {
        const { name, password } = args.login;
        const { db } = ctx;
        const user = await db.users.findOne({ name });
        if (!user) {
          throw new Error(`The user: ${name} does not exist`);
        }

        // Check if passsword matches
        if (password !== user.password)
          throw new Error(`The login details are incorrect.`);

        // Get the userDetails and create a payload
        const userId = user._id.toHexString();
        const payload = createPayload(userId, user.role);

        // Create an accessToken
        const accessToken = generateAccessToken(payload);
        return accessToken;
      } catch (error) {
        throw new Error(error);
      }
    },

    register: async (_: undefined, args: { user: UserArgs }, ctx: Context) => {
      try {
        const { name, password, email, role } = args.user;
        const { db } = ctx;

        // Verify the user does not exist in the db
        const maybeUser = await db.users.findOne({ name });
        if (maybeUser) {
          throw new Error(`User ${name} already exists.`);
        }

        // create a new user
        await db.users.insertOne({
          name,
          password,
          email,
          role
        });

        // Return success
        return 'success';
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
