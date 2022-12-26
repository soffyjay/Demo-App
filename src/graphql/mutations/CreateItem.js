import { gql } from "@apollo/client";

export const CreateItemMutation = gql`
  mutation createItem($name: String!, $description: String!) {
    createItem(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`;
