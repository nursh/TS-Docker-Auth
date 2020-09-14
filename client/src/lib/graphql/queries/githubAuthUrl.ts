import { gql } from "@apollo/client";

export const GITHUB_AUTH_URL = gql`
  query GithubAuthUrl {
    githubUrl
  }
`;
