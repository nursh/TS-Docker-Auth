import { gql } from '@apollo/client';

export const FACEBOOK_AUTH_URL = gql`
  query FacebookAuthUrl {
    facebookUrl
  }
`;