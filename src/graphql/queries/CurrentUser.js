import { useQuery, gql } from "@apollo/client";

export const CurrentUserQuery = gql`
  query getMe {
    getMe {
      _id
      first_name
      last_name
      email
      email_verification_token
      email_verified_at
    }
  }
`;

export function CurrentUser() {
  const { loading, error, data } = useQuery(CurrentUserQuery);

  if (loading) {
    return null;
  }

  if (error) {
    return error?.message;
  }
  // if (
  //   error &&
  //   error?.message === "Response not successful: Received status code 400"
  // ) {
  //   localStorage.removeItem("user");
  // }
  if (data) {
    return data;
  }
}
