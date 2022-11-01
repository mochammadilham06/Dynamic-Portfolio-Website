import { useSubscription } from "@apollo/client";
import { GetNewSubscriptionSkills } from "../../GraphQL/Subscription";

export default function UseNewestSubscriptionSkills() {
  const {
    data: newesSkill,
    loading: newestSkillLoading,
    error: newestSkillError,
  } = useSubscription(GetNewSubscriptionSkills);

  return {
    newesSkill,
    newestSkillLoading,
    newestSkillError,
  };
}
