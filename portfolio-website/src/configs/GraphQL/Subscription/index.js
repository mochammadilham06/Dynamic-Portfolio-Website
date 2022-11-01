import { gql } from "@apollo/client";

export const GetSubscriptionPortfolio = gql`
  subscription getPortfolioSubscription {
    myportfolio_portfolio {
      id
      title
      image
      description
      created_at
      updated_at
      user_portfolio {
        id
        first_name
        last_name
      }
    }
  }
`;

export const GetNewSubscriptionPortfolio = gql`
  subscription getNewSubscription {
    myportfolio_portfolio(limit: 2, order_by: { created_at: desc }) {
      id
      title
      image
      description
      created_at
      updated_at
      user_id
      user_portfolio {
        id
        first_name
        last_name
      }
    }
  }
`;

export const GetNewSubscriptionSkills = gql`
  subscription getNewSubscription {
    myportfolio_skills(limit: 2, order_by: { created_at: desc }) {
      id
      title
      image
      description
      created_at
      updated_at
      user {
        id
        first_name
        last_name
      }
    }
  }
`;

export const GetSubscriptionSkills = gql`
  subscription getSubscription {
    myportfolio_skills {
      id
      title
      image
      description
      created_at
      updated_at
      user {
        id
        first_name
        last_name
      }
    }
  }
`;
