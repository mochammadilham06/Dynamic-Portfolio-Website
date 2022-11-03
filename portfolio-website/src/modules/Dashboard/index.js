import React from "react";
import { DashboardSidebar } from "../../components";
import UseSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionQuerys";
import UseSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptonQuery";

const DashboardPage = () => {
  const { data } = UseSubscriptionPortfolio();
  const { skillSubscription } = UseSubscriptionSkills();

  const countPortfolio = data?.myportfolio_portfolio.length;
  const countSkill = skillSubscription?.myportfolio_skills.length;
  return (
    <>
      <DashboardSidebar
        countPortfolio={countPortfolio}
        countSkill={countSkill}
      />
    </>
  );
};

export default DashboardPage;
