import { gql } from "@apollo/client";

export const GOOGLE_LOGIN = gql`
  mutation GoogleLogin($input: AuthLoginInput) {
    googleLogin(input: $input)
  }
`;
