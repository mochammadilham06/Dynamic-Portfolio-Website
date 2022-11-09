import React from "react";
import {
  FooterWhite,
  Hero,
  NavComponent,
  PortfolioDetail,
} from "../../components";
import { Helmet } from "react-helmet";
const setActive = "portfolio";
const Portfolio = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavComponent setActive={setActive} />
      <Hero title1={"PORT"} title2={"FOLIO"} />
      <PortfolioDetail />
      <FooterWhite />
    </>
  );
};

export default Portfolio;
