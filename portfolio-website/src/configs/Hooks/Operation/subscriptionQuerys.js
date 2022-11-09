import { useSubscription } from "@apollo/client";
import { GetSubscriptionSkills } from "../../GraphQL/Subscription";

export default function UseSubscriptionSkills() {
  const {
    data: skillSubscription,
    loading: skillLoading,
    error: skillError,
  } = useSubscription(GetSubscriptionSkills);

  return { skillSubscription, skillLoading, skillError };
}
