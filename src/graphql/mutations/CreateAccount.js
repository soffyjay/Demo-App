import { gql } from "@apollo/client";

export const CreateAccountMutation = gql`
  mutation signup(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
  ) {
    signup(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
    ) {
      user {
        _id
        first_name
        last_name
        email
        email_verified_at
        email_verification_token
      }
      token
    }
  }
`;
