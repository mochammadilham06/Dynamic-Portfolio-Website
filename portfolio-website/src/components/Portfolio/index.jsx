import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../../assets/images/sk3.png";
import Project2 from "../../assets/images/sk6.png";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" className="pt-11 pb-11 bg-fifth">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="uppercase font-bold text-xl text-third mb-2 lg:text-3xl">
                Portfolio
              </h4>
              <h2 className="font-bold text-primary text-xl mb-2 sm:text-4xl lg:text-3xl">
                THIS IS A PROJECT WHAT I HAVE DONE
              </h2>
              <p className="font-medium text-md text-slate-600 md:text-lg">
                Here is a simple view to see the part of the project that I have
                completed, press let's journey to see more details
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <Link
              to={"/portfolio"}
              className="relative mb-14 p-4 md:w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <div className="rounded-md shadow-dark overflow-hidden">
                <img src={Project1} alt="gambar" className="w-full blur-sm" />
                <div
                  className="absolute top-[48%] left-[32%] text-white scale-150 sm:left-[40%] sm:top-[50%] md:left-[30%] md:top-[42%] lg:left-[38%] lg:top-[48%] uppercase font-bold tracking-wider text-sm
                   bg-third py-2 px-5 rounded-full hover:bg-white
                  hover:text-third"
                >
                  Lets Journey
                </div>
              </div>
            </Link>
            <Link
              to={"portfolio"}
              className="relative mb-14 p-4 md:w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="rounded-md shadow-dark overflow-hidden">
                <img src={Project2} alt="gambar" className="w-full blur-sm" />
                <div
                  className="absolute top-[40%] left-[32%] text-white scale-150 sm:left-[38%] sm:top-[44%] md:left-[30%] md:top-[30%] lg:left-[37%] lg:top-[32%]   uppercase font-bold tracking-wider text-sm
                   bg-third py-2 px-5 rounded-full hover:bg-white
                  hover:text-third"
                >
                  Lets Journey
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
