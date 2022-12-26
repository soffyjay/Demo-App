import { gql } from "@apollo/client";

export const LoginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        first_name
        last_name
        email
        email_verification_token
        email_verified_at
      }
      token
    }
  }
`;
