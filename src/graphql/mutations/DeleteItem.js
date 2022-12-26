import { gql } from "@apollo/client";

export const DeleteItemMutation = gql`
  mutation deleteItem($uuid: ID!) {
    deleteItem(uuid: $uuid) {
      _id
      uuid
      name
      description
    }
  }
`;
