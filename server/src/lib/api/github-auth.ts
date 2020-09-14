import axios from 'axios';

export const Github = {
  authUrl: () => {
    const githubOAuthURL = 'https://github.com/login/oauth/authorize?';
    const clientID = `client_id=${process.env.GITHUB_CLIENT_ID}`;
    return `${githubOAuthURL}${clientID}`;
  },

  fetchUser: async (code: string) => {
    try {
      const githubTokenURL = 'https://github.com/login/oauth/access_token?';

      // INFO: Fetch access_token from github
      const response = await axios.post<string>(githubTokenURL, {
        code,
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET
      });
      const accessToken = response.data.split('&')[0].split('=')[1];

      // INFO: Fetch User data after getting access_token
      const res = await axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${accessToken}`
        }
      });
      const user = res.data;
      return user;
    } catch (error) {
      console.error(error);
    }
  }
};
