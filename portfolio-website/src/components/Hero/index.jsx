import React from "react";
import mainPicture from "../../assets/images/Main.png";
const Hero = ({ title1, title2 }) => {
  return (
    <section id="home" className="pt-20 pb-[100px] bg-primary">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full text-center px-4 lg:w-1/2">
            <h1 className="text-base font-extrabold text-secondary md:text-xl ">
              Hallo Everyone, this is
              <span className="block font-bold text-white text-4xl mt-1 lg:text-4xl">
                Mochammad Ilham Maulana
              </span>
            </h1>
            <h1 className="self-center text-2xl font-extrabold tracking-wide whitespace-nowrap text-white pt-3 pb-5">
              <span className="text-secondary">{`${title1} `}</span>
              {title2}
            </h1>
            <a
              className="px-5 py-2 text-xl tracking-wider font-bold text-white bg-third rounded-full hover:bg-white hover:text-third transition duration-300 ease-in-out"
              href="#"
            >
              Lets Journey
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={mainPicture}
                alt="This is me"
                className="max-w-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
