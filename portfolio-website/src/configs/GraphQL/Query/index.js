import { gql } from "@apollo/client";

export const getPortfolio = gql`
  query getById($id: uuid = "") {
    myportfolio_portfolio_by_pk(id: $id) {
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

export const getPortfolioById = gql`
  query getPortfolioById($id: uuid = "") {
    myportfolio_portfolio_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const getSkills = gql`
  query getSkills {
    myportfolio_skills {
      id
      title
      image
      description
      created_at
      updated_at
    }
  }
`;

export const getSkillsById = gql`
  query getSkillsById($id: uuid = "") {
    myportfolio_skills_by_pk(id: $id) {
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
`;
