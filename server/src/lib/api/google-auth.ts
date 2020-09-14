import { google } from 'googleapis';

const oauthClient = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
});

export const Google = {
  authorizeUrl: oauthClient.generateAuthUrl({
    access_type: 'online',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }),

  login: async (code: string) => {
    try {
      const { tokens } = await oauthClient.getToken(code);
      oauthClient.setCredentials(tokens);

      const { data } = await google
        .people({ version: 'v1', auth: oauthClient })
        .people.get({
          resourceName: 'people/me',
          personFields: 'emailAddresses,names,photos'
        });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};
