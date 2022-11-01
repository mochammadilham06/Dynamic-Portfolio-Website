import { gql } from "@apollo/client";

export const createPortfolio = gql`
  mutation createPortfolio(
    $objects: [myportfolio_portfolio_insert_input!] = {}
  ) {
    Portfolio_insert: insert_myportfolio_portfolio(objects: $objects) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
        user_id
      }
    }
  }
`;

export const deletePortfolio = gql`
  mutation deletePortfolio($id: uuid = "") {
    Portfolio_delete: delete_myportfolio_portfolio_by_pk(id: $id) {
      id
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

export const createSkills = gql`
  mutation createSkills($objects: [myportfolio_skills_insert_input!] = {}) {
    insert_myportfolio_skills(objects: $objects) {
      returning {
        id
        title
        image
        description
        created_at
        updated_at
        user_id
      }
    }
  }
`;

export const deleteSkill = gql`
  mutation deleteSkill($id: uuid = "") {
    delete_myportfolio_skills_by_pk(id: $id) {
      id
    }
  }
`;

export const updateSkill = gql`
  mutation updateSkill(
    $id: uuid = ""
    $description: String = ""
    $image: String = ""
    $title: String = ""
  ) {
    update_myportfolio_skills_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, image: $image, description: $description }
    ) {
      id
      title
      image
      description
    }
  }
`;
