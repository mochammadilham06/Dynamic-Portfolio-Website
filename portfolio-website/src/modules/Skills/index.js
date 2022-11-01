import React from "react";
import { FooterWhite, Hero, NavComponent, SkillDetail } from "../../components";

const setActive = "skills";
const SkillPage = () => {
  return (
    <>
      <NavComponent setActive={setActive} />
      <Hero title1={"LEARNED"} title2={"SKILL"} />
      <SkillDetail />
      <FooterWhite />
    </>
  );
};

export default SkillPage;
