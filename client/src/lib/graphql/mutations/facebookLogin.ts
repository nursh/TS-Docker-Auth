import { gql } from "@apollo/client";

export const FACEBOOK_LOGIN = gql`
  mutation FacebookLogin($input: FacebookLoginInput) {
    facebookLogin(input: $input)
  }
`;