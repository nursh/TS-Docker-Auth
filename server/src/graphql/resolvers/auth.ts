import { Context, UserArgs, LoginArgs } from 'types';
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  createPayload
} from 'utils/jwt';

export const authResolvers = {
  Mutation: {
    login: async (_: undefined, args: { login: LoginArgs }, ctx: Context) => {
      const { name, password } = args.login;

      try {
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
        const userDetails = await db.userDetails.findOne({ user_id: userId });
        const payload = createPayload(userId, userDetails!.role);

        // Create an accessToken and Refresh token
        const accessToken = generateAccessToken(payload);
        let refreshToken = userDetails!.refreshToken;

        // Check if a refresh token exists, or create one
        if (!refreshToken) {
          refreshToken = generateRefreshToken(payload);

          // Update userDetails with new RefreshToken
          await db.userDetails.updateOne(
            { user_id: userId },
            { $set: { refreshToken } }
          );
        }

        return {
          accessToken,
          refreshToken
        };
      } catch (error) {
        console.error(error);
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
        const user = await db.users.insertOne({
          name,
          password,
          email
        });

        // Create user_details for user
        await db.userDetails.insertOne({
          user_id: user.insertedId.toHexString(),
          role
        });

        // Return success
        return 'success';
      } catch (error) {
        throw new Error(error);
      }
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
