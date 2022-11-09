import { useSubscription } from "@apollo/client";
import { GetNewSubscriptionPortfolio } from "../../GraphQL/Subscription";

export default function UseNewestSubscriptionPortfolio() {
  const {
    data: newesPortfolio,
    loading: newestPortfolioLoading,
    error: newestPortfolioError,
  } = useSubscription(GetNewSubscriptionPortfolio);

  return {
    newesPortfolio,
    newestPortfolioLoading,
    newestPortfolioError,
  };
}
