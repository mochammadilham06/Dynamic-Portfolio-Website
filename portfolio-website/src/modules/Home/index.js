import React from "react";
import {
  About,
  Footer,
  Hero,
  NavComponent,
  Portfolio,
  Skills,
} from "../../components";

const setActive = "home";

const Home = () => {
  return (
    <>
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
