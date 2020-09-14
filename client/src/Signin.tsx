import React, { useEffect, useRef } from 'react';
import {
  useGoogleAuthUrlLazyQuery,
  useGoogleLoginMutation,
  useGithubAuthUrlLazyQuery,
  useGithubLoginMutation,
  useFacebookAuthUrlLazyQuery,
  useFacebookLoginMutation
} from './lib/generated/types';

export const Signin = () => {
  const [getGoogleAuthUrl, { data: googleAuthData }] = useGoogleAuthUrlLazyQuery();
  const [getGithubAuthUrl, { data: githubAuthData }] = useGithubAuthUrlLazyQuery();
  const [getFacebookAuthUrl, { data: facebookAuthData }] = useFacebookAuthUrlLazyQuery();

  const [
    googleLogin,
    { data: googleLoginData, loading: googleLoginLoading }
  ] = useGoogleLoginMutation({
    onCompleted: data => {
      console.log(data);
    }
  });

  const [
    githubLogin,
    { data: githubLoginData, loading: githubLoginLoading }
  ] = useGithubLoginMutation({
    onCompleted: data => {
      console.log(data);
    }
  });

  const [
    facebookLogin,
    { data: facebookLoginData, loading: facebookLoginLoading }
  ] = useFacebookLoginMutation({
    onCompleted: data => {
      console.log(data);
    }
  })

  const googleLoginRef = useRef(googleLogin);
  const githubLoginRef = useRef(githubLogin);
  const facebookLoginRef = useRef(facebookLogin);

  useEffect(() => {
    const currentURL = new URL(window.location.href).searchParams
    const code = currentURL.get('code');
    const loginType = window.localStorage.getItem('loginType');
    if (code) {
      switch (loginType) {
        case "google": {
          googleLoginRef.current({
            variables: { input: { code } }
          });
          break;
        }
        case "github": {
          githubLoginRef.current({
            variables: { input: { code } }
          });
          break;
        }
        case "facebook": {
          facebookLoginRef.current({
            variables: { input: { code } }
          });
          break;
        }

        default:
          break;
      }
    }
  }, []);

  /**
   * 
   * Fetch google-auth-url by manually triggering the query using lazy-query,
   * 
   */
  const handleGoogleAuth = () => {
    try {
      // Store the loginType in localStorage, use Context for real apps
      window.localStorage.setItem('loginType', 'google');
      getGoogleAuthUrl();
    } catch (error) {
      console.log('Failed to fetch error');
    }
  }

  // If the google-auth-url is available, redirect the page to google auth page
  if (googleAuthData && googleAuthData.googleUrl) {
    window.location.href = googleAuthData.googleUrl;
  }

  // When the fetch for google login is loading
  if (googleLoginLoading) {
    return <>Google Loading...</>;
  }

  // Get the user from the backend after authenticating with google
  if (googleLoginData && googleLoginData.googleLogin) {
    console.log('Got back from the server');
  }

  // INFO: Handle Github Login
  const handleGithubAuth = () => {
    try {
      window.localStorage.setItem('loginType', 'github');
      getGithubAuthUrl();
    } catch (error) {
      console.error(error);
    }
  }

  // When the fetch for github login is loading
  if (githubLoginLoading) {
    return <>Github Loading...</>
  }

  // If the github-auth-url is available, redirect the page to github auth page
  if (githubAuthData && githubAuthData.githubUrl) {
    window.location.href = githubAuthData.githubUrl;
  }

  // Get the user from the backend after authenticating with github
  if (githubLoginData && githubLoginData.githubLogin) {
    console.log('Got back from github mutation.')
  }
  // INFO: End of Github Login



  // INFO: Handle Facebook Login

  const handleFacebookAuth = () => {
    try {
      window.localStorage.setItem('loginType', 'facebook');
      getFacebookAuthUrl();
    } catch (error) {
      console.error(error);
    }
  }

  // When the facebook Login is loading
  if (facebookLoginLoading) {
    return <>Facebook Loading...</>
  }

  // If the facebook-auth-url is available, redirect the page to facebook auth page
  if (facebookAuthData && facebookAuthData.facebookUrl) {
    window.location.href = facebookAuthData.facebookUrl;
  }

  // Get the user back from backend after authentication with facebook
  if (facebookLoginData && facebookLoginData.facebookLogin) {
    console.log('Got back from facebook mutation.');
  }

  // INFO: End of Facebook Login

  return (
    <div>
      <button className="btn" onClick={handleGoogleAuth}>
        Sign in With Google
      </button>
      <button className="btn" onClick={handleGithubAuth}>
        Sign in with Github
      </button>
      <button className="btn" onClick={handleFacebookAuth}>
        Sign in with Facebook
      </button>

      <hr />

      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}