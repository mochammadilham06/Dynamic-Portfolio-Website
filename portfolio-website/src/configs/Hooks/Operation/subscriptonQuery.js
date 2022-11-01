import { useSubscription } from "@apollo/client";
import { GetSubscriptionPortfolio } from "../../GraphQL/Subscription";

export default function UseSubscriptionPortfolio() {
  const {
    data,
    loading: portfolioLoading,
    error: portfolioError,
  } = useSubscription(GetSubscriptionPortfolio);

  return {
    data,
    portfolioLoading,
    portfolioError,
  };
}
