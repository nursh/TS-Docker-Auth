import { gql } from "@apollo/client";

export const GITHUB_LOGIN = gql`
  mutation GithubLogin($input: AuthLoginInput) {
    githubLogin(input: $input)
  }
`;
