import { gql } from "@apollo/client";

export const VerifyMeMutation = gql`
  mutation verifyMe($token: String!) {
    verifyMe(token: $token) {
      _id
      first_name
      last_name
      email
      email_verification_token
      email_verified_at
    }
  }
`;
