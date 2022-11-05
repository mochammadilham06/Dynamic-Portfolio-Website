import { useMutation } from "@apollo/client";
import { getPortfolio } from "../../GraphQL/Query";
import { createPortfolio } from "../../GraphQL/Mutation";

export default function UseCreatePortfolio() {
  const [createPortfolioData, { loading: createPortfolioLoading }] =
    useMutation(createPortfolio, {
      refetchQueries: [getPortfolio],
    });

  return {
    createPortfolioData,
    createPortfolioLoading,
  };
}
