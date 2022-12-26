import { useQuery, gql } from "@apollo/client";

export const GetItemsQuery = gql`
  query getItems($page: Int, $count: Int) {
    getItems(page: $page, count: $count) {
      items {
        _id
        uuid
        name
        description
      }
      pagination {
        currentPage
        maxPages
      }
    }
  }
`;

// export function GetItems() {
//   const { loading, error, data } = useQuery(GetItemsQuery);

//   if (loading) {
//     return null;
//   }

//   if (error) {
//     return error?.message;
//   }
//   // if (
//   //   error &&
//   //   error?.message === "Response not successful: Received status code 400"
//   // ) {
//   //   localStorage.removeItem("user");
//   // }
//   if (data) {
//     return data;
//   }
// }
