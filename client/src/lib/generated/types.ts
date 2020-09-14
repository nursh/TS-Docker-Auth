import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  googleUrl: Scalars['String'];
  githubUrl: Scalars['String'];
  facebookUrl: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['String'];
  googleLogin: Scalars['String'];
  githubLogin: Scalars['String'];
  facebookLogin: Scalars['String'];
  logout: Scalars['String'];
  register: Scalars['String'];
};


export type MutationLoginArgs = {
  login: JwtLoginInput;
};


export type MutationGoogleLoginArgs = {
  input?: Maybe<AuthLoginInput>;
};


export type MutationGithubLoginArgs = {
  input?: Maybe<AuthLoginInput>;
};


export type MutationFacebookLoginArgs = {
  input?: Maybe<FacebookLoginInput>;
};


export type MutationRegisterArgs = {
  user: UserInput;
};

export type AuthLoginInput = {
  code: Scalars['String'];
};

export type FacebookLoginInput = {
  code: Scalars['String'];
};

export type UserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Role;
};

export type JwtLoginInput = {
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Basic = 'BASIC'
}

export type Book = {
  __typename?: 'Book';
  name: Scalars['String'];
  title: Scalars['String'];
};

export type FacebookLoginMutationVariables = Exact<{
  input?: Maybe<FacebookLoginInput>;
}>;


export type FacebookLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'facebookLogin'>
);

export type GithubLoginMutationVariables = Exact<{
  input?: Maybe<AuthLoginInput>;
}>;


export type GithubLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'githubLogin'>
);

export type GoogleLoginMutationVariables = Exact<{
  input?: Maybe<AuthLoginInput>;
}>;


export type GoogleLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'googleLogin'>
);

export type FacebookAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type FacebookAuthUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'facebookUrl'>
);

export type GithubAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GithubAuthUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'githubUrl'>
);

export type GoogleAuthUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleAuthUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'googleUrl'>
);


export const FacebookLoginDocument = gql`
    mutation FacebookLogin($input: FacebookLoginInput) {
  facebookLogin(input: $input)
}
    `;
export type FacebookLoginMutationFn = Apollo.MutationFunction<FacebookLoginMutation, FacebookLoginMutationVariables>;

/**
 * __useFacebookLoginMutation__
 *
 * To run a mutation, you first call `useFacebookLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFacebookLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [facebookLoginMutation, { data, loading, error }] = useFacebookLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFacebookLoginMutation(baseOptions?: Apollo.MutationHookOptions<FacebookLoginMutation, FacebookLoginMutationVariables>) {
        return Apollo.useMutation<FacebookLoginMutation, FacebookLoginMutationVariables>(FacebookLoginDocument, baseOptions);
      }
export type FacebookLoginMutationHookResult = ReturnType<typeof useFacebookLoginMutation>;
export type FacebookLoginMutationResult = Apollo.MutationResult<FacebookLoginMutation>;
export type FacebookLoginMutationOptions = Apollo.BaseMutationOptions<FacebookLoginMutation, FacebookLoginMutationVariables>;
export const GithubLoginDocument = gql`
    mutation GithubLogin($input: AuthLoginInput) {
  githubLogin(input: $input)
}
    `;
export type GithubLoginMutationFn = Apollo.MutationFunction<GithubLoginMutation, GithubLoginMutationVariables>;

/**
 * __useGithubLoginMutation__
 *
 * To run a mutation, you first call `useGithubLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGithubLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [githubLoginMutation, { data, loading, error }] = useGithubLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGithubLoginMutation(baseOptions?: Apollo.MutationHookOptions<GithubLoginMutation, GithubLoginMutationVariables>) {
        return Apollo.useMutation<GithubLoginMutation, GithubLoginMutationVariables>(GithubLoginDocument, baseOptions);
      }
export type GithubLoginMutationHookResult = ReturnType<typeof useGithubLoginMutation>;
export type GithubLoginMutationResult = Apollo.MutationResult<GithubLoginMutation>;
export type GithubLoginMutationOptions = Apollo.BaseMutationOptions<GithubLoginMutation, GithubLoginMutationVariables>;
export const GoogleLoginDocument = gql`
    mutation GoogleLogin($input: AuthLoginInput) {
  googleLogin(input: $input)
}
    `;
export type GoogleLoginMutationFn = Apollo.MutationFunction<GoogleLoginMutation, GoogleLoginMutationVariables>;

/**
 * __useGoogleLoginMutation__
 *
 * To run a mutation, you first call `useGoogleLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGoogleLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [googleLoginMutation, { data, loading, error }] = useGoogleLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGoogleLoginMutation(baseOptions?: Apollo.MutationHookOptions<GoogleLoginMutation, GoogleLoginMutationVariables>) {
        return Apollo.useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(GoogleLoginDocument, baseOptions);
      }
export type GoogleLoginMutationHookResult = ReturnType<typeof useGoogleLoginMutation>;
export type GoogleLoginMutationResult = Apollo.MutationResult<GoogleLoginMutation>;
export type GoogleLoginMutationOptions = Apollo.BaseMutationOptions<GoogleLoginMutation, GoogleLoginMutationVariables>;
export const FacebookAuthUrlDocument = gql`
    query FacebookAuthUrl {
  facebookUrl
}
    `;

/**
 * __useFacebookAuthUrlQuery__
 *
 * To run a query within a React component, call `useFacebookAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useFacebookAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFacebookAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useFacebookAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<FacebookAuthUrlQuery, FacebookAuthUrlQueryVariables>) {
        return Apollo.useQuery<FacebookAuthUrlQuery, FacebookAuthUrlQueryVariables>(FacebookAuthUrlDocument, baseOptions);
      }
export function useFacebookAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FacebookAuthUrlQuery, FacebookAuthUrlQueryVariables>) {
          return Apollo.useLazyQuery<FacebookAuthUrlQuery, FacebookAuthUrlQueryVariables>(FacebookAuthUrlDocument, baseOptions);
        }
export type FacebookAuthUrlQueryHookResult = ReturnType<typeof useFacebookAuthUrlQuery>;
export type FacebookAuthUrlLazyQueryHookResult = ReturnType<typeof useFacebookAuthUrlLazyQuery>;
export type FacebookAuthUrlQueryResult = Apollo.QueryResult<FacebookAuthUrlQuery, FacebookAuthUrlQueryVariables>;
export const GithubAuthUrlDocument = gql`
    query GithubAuthUrl {
  githubUrl
}
    `;

/**
 * __useGithubAuthUrlQuery__
 *
 * To run a query within a React component, call `useGithubAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGithubAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGithubAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGithubAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GithubAuthUrlQuery, GithubAuthUrlQueryVariables>) {
        return Apollo.useQuery<GithubAuthUrlQuery, GithubAuthUrlQueryVariables>(GithubAuthUrlDocument, baseOptions);
      }
export function useGithubAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GithubAuthUrlQuery, GithubAuthUrlQueryVariables>) {
          return Apollo.useLazyQuery<GithubAuthUrlQuery, GithubAuthUrlQueryVariables>(GithubAuthUrlDocument, baseOptions);
        }
export type GithubAuthUrlQueryHookResult = ReturnType<typeof useGithubAuthUrlQuery>;
export type GithubAuthUrlLazyQueryHookResult = ReturnType<typeof useGithubAuthUrlLazyQuery>;
export type GithubAuthUrlQueryResult = Apollo.QueryResult<GithubAuthUrlQuery, GithubAuthUrlQueryVariables>;
export const GoogleAuthUrlDocument = gql`
    query GoogleAuthUrl {
  googleUrl
}
    `;

/**
 * __useGoogleAuthUrlQuery__
 *
 * To run a query within a React component, call `useGoogleAuthUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleAuthUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleAuthUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleAuthUrlQuery(baseOptions?: Apollo.QueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
        return Apollo.useQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, baseOptions);
      }
export function useGoogleAuthUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>) {
          return Apollo.useLazyQuery<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>(GoogleAuthUrlDocument, baseOptions);
        }
export type GoogleAuthUrlQueryHookResult = ReturnType<typeof useGoogleAuthUrlQuery>;
export type GoogleAuthUrlLazyQueryHookResult = ReturnType<typeof useGoogleAuthUrlLazyQuery>;
export type GoogleAuthUrlQueryResult = Apollo.QueryResult<GoogleAuthUrlQuery, GoogleAuthUrlQueryVariables>;