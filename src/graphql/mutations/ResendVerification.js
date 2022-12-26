import { gql } from "@apollo/client";

export const ResendVerificationMutation = gql`
  mutation resendVerificationEmail {
    resendVerificationEmail {
      message
    }
  }
`;
