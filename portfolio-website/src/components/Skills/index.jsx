import React from "react";
import CONST from "../../utils/constants";
import { Link } from "react-router-dom";
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
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <Link
                      to={"/skills"}
                      className="block mb-3 font-bold text-base text-dark
                    hover:text-primary truncate"
                    >
                      Belajar programming
                    </Link>
                  </h3>
                  <p className="font-normal text-primary text-base mb-6 truncate">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores, aliquam.
                  </p>
                  <p className="text-center">
                    <Link
                      to={"/skills"}
                      className="uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                    >
                      Lets Journey
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <Link
                      to={"/skills"}
                      className="block mb-3 font-bold text-base text-dark
                    hover:text-primary truncate"
                    >
                      Belajar programming
                    </Link>
                  </h3>
                  <p className="font-normal text-primary text-base mb-6 truncate">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores, aliquam.
                  </p>
                  <p className="text-center">
                    <Link
                      to={"/skills"}
                      className="uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                    >
                      Lets Journey
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?programming"
                  alt="programming"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <Link
                      to={"/skills"}
                      className="block mb-3 font-bold text-base text-dark
                    hover:text-primary truncate"
                    >
                      Belajar programming
                    </Link>
                  </h3>
                  <p className="font-normal text-primary text-base mb-6 truncate">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores, aliquam.
                  </p>
                  <p className="text-center">
                    <Link
                      to={"/skills"}
                      className="uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                    >
                      Lets Journey
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
