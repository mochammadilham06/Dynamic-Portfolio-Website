import React from "react";
import { DashboardSidebar } from "../../components";
import UseSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionQuerys";
import UseSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptonQuery";
import { Helmet } from "react-helmet";

const DashboardPage = () => {
  const { data } = UseSubscriptionPortfolio();
  const { skillSubscription } = UseSubscriptionSkills();

  const countPortfolio = data?.myportfolio_portfolio.length;
  const countSkill = skillSubscription?.myportfolio_skills.length;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard Admin</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <DashboardSidebar
        countPortfolio={countPortfolio}
        countSkill={countSkill}
      />
    </>
  );
};

export default DashboardPage;
