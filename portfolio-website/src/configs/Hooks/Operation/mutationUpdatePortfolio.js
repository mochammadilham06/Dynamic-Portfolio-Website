import { useMutation } from "@apollo/client";
import { getPortfolio } from "../../GraphQL/Query";
import { UpdatePortfolio } from "../../GraphQL/Mutation";

export default function UseUpdatePortfolio() {
  const [updatePortfolioData, { loading: updatePortfolioLoadng }] = useMutation(
    UpdatePortfolio,
    {
      refetchQueries: [getPortfolio],
    }
  );

  return {
    updatePortfolioData,
    updatePortfolioLoadng,
  };
}
