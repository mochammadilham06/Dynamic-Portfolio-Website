import React from "react";
import {
  FooterWhite,
  Hero,
  NavComponent,
  PortfolioDetail,
} from "../../components";

const setActive = "portfolio";
const Portfolio = () => {
  return (
    <>
      <NavComponent setActive={setActive} />
      <Hero title1={"PORT"} title2={"FOLIO"} />
      <PortfolioDetail />
      <FooterWhite />
    </>
  );
};

export default Portfolio;
