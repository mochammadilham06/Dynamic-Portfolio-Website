import { gql } from "@apollo/client";

export const createPortfolio = gql`
  mutation CreatePortfolio(
    $objects: [myportfolio_portfolio_insert_input!] = {}
  ) {
    insert_myportfolio_portfolio(objects: $objects) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
        user_portfolio {
          first_name
          last_name
        }
      }
    }
  }
`;

export const deletePortfolio = gql`
  mutation DeletePortfolio($id: uuid = "") {
    delete_myportfolio_portfolio_by_pk(id: $id) {
      id
      title
      image
      description
      created_at
      updated_at
      user_portfolio {
        first_name
        last_name
      }
    }
  }
`;

export const UpdatePortfolio = gql`
  mutation updatePortfolio(
    $id: uuid = ""
    $title: String = ""
    $image: String = ""
    $description: String = ""
  ) {
    Portfolio_update: update_myportfolio_portfolio_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, image: $image, description: $description }
    ) {
      id
      title
      description
      image
    }
  }
`;

export const UpdatePortfolio2 = gql`
  mutation UpdatePortfolio(
    $id: uuid
    $description: String = ""
    $title: String = ""
  ) {
    update_myportfolio_portfolio(
      where: { id: { _eq: $id } }
      _set: { title: $title, description: $description }
    ) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
        user_portfolio {
          first_name
          last_name
        }
      }
    }
  }
`;

export const createSkills = gql`
  mutation CreateSkills($objects: [myportfolio_skills_insert_input!] = {}) {
    insert_myportfolio_skills(objects: $objects) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
        user {
          first_name
          last_name
        }
      }
    }
  }
`;

export const deleteSkill = gql`
  mutation DeleteSkill($id: uuid = "") {
    delete_myportfolio_skills_by_pk(id: $id) {
      id
      title
      image
      description
      created_at
      updated_at
    }
  }
`;

export const updateSkill = gql`
  mutation UpdateSkills(
    $id: uuid
    $title: String = ""
    $description: String = ""
  ) {
    update_myportfolio_skills(
      where: { id: { _eq: $id } }
      _set: { title: $title, description: $description }
    ) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
      }
    }
  }
`;
