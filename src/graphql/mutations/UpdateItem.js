import { gql } from "@apollo/client";

export const UpdateItemMutation = gql`
  mutation updateItem($uuid: ID!, $name: String!, $description: String!) {
    updateItem(uuid: $uuid, name: $name, description: $description) {
      _id
      uuid
      name
      description
    }
  }
`;
