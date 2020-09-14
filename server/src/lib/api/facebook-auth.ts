import axios from 'axios';
import { FacebookToken, FacebookUser } from 'lib/types';

export const Facebook = {
  authUrl: () => {
    const facebookUrl = 'https://www.facebook.com/v8.0/dialog/oauth?';
    const client_id = `client_id=${process.env.FACEBOOK_CLIENT_ID}`;
    const redirect_uri = `&redirect_uri=${process.env.REDIRECT_URI}`;
    const state = `&state=facebook_state`;

    return `${facebookUrl}${client_id}${redirect_uri}${state}`;
  },

  fetchUser: async (code: string) => {
    try {
      const tokenUrl = 'https://graph.facebook.com/v8.0/oauth/access_token';

      // INFO: Get Access Token.
      const response = await axios.post<FacebookToken>(tokenUrl, {
        code,
        client_id: process.env.FACEBOOK_CLIENT_ID,
        client_secret: process.env.FACEBOOK_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI
      });
      const { access_token } = response.data;

      // INFO: GET the user_info using access_token.
      const userResponse = await axios.get<FacebookUser>(
        'https://graph.facebook.com/me',
        {
          params: {
            fields: 'id,name,email',
            access_token: access_token
          }
        }
      );

      return userResponse.data;
    } catch (error) {
      console.error(error);
    }
  }
};
