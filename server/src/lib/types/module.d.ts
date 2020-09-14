declare namespace NodeJS {
  export interface ProcessEnv {
    ACCESS_TOKEN: string;
    REFRESH_TOKEN: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    REDIRECT_URI: string;
    FACEBOOK_CLIENT_ID: string;
    FACEBOOK_CLIENT_SECRET: string;
  }
}
