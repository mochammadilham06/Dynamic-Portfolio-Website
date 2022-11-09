import React from "react";
import { FooterWhite, Hero, NavComponent, SkillDetail } from "../../components";
import { Helmet } from "react-helmet";

const setActive = "skills";
const SkillPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavComponent setActive={setActive} />
      <Hero title1={"LEARNED"} title2={"SKILL"} />
      <SkillDetail />
      <FooterWhite />
    </>
  );
};

export default SkillPage;
