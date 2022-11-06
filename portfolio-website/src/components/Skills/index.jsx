import React from "react";
import CONST from "../../utils/constants";
import { Link } from "react-router-dom";
import { JSPicture, ReactPicture, TailwindPicture } from "../../assets";
const Skills = () => {
  console.log(CONST);
  return (
    <div>
      <section id="blog" className="pb-11 pt-11 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-xl text-secondary mb-2 lg:text-3xl">
                SKILL
              </h4>
              <h2 className="uppercase font-semibold text-white text-xl mb-4 lg:text-3xl md:font-bold">
                This is a skill I learned
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <Link
              to={"/skills"}
              className="w-full px-4 lg:w-1/2 xl:w-1/3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img src={ReactPicture} alt="programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3
                    className="block mb-3 font-bold text-xl text-dark
                    hover:text-primary"
                  >
                    <span className="text-third">Javascript</span> Library
                  </h3>
                  <p className="font-normal text-fourth text-lg mb-6">
                    I learned about some javascript libraries, click me to see
                    more
                  </p>
                  <p className="text-center uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80">
                    Lets Journey
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to={"/skills"}
              className="w-full px-4 lg:w-1/2 xl:w-1/3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img
                  src={TailwindPicture}
                  alt="programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3
                    className="block mb-3 font-bold text-xl text-dark
                    hover:text-primary"
                  >
                    <span className="text-third">CSS</span> Framework
                  </h3>
                  <p className="font-normal text-fourth text-lg mb-6">
                    I learned about some CSS Framework, click me to see more
                  </p>
                  <p className="text-center uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80">
                    Lets Journey
                  </p>
                </div>
              </div>
            </Link>
            <Link
              to={"/skills"}
              className="w-full px-4 lg:w-1/2 xl:w-1/3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
            >
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img src={JSPicture} alt="programming" className="w-full" />
                <div className="py-8 px-6">
                  <h3
                    className="block mb-3 font-bold text-xl text-dark
                    hover:text-primary"
                  >
                    <span className="text-third">Programming</span> Languages
                  </h3>
                  <p className="font-normal text-fourth text-lg mb-6">
                    I'm learning several programming languages, let's see more
                  </p>
                  <p className="text-center uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80">
                    Lets Journey
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
