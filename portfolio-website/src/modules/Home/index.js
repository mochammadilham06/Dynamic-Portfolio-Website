import React from "react";
import {
  About,
  Footer,
  Hero,
  NavComponent,
  Portfolio,
  Skills,
} from "../../components";
import { Helmet } from "react-helmet";

const setActive = "home";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NavComponent setActive={setActive} />
      <Hero title1={"PORT"} title2={"FOLIO"} />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
