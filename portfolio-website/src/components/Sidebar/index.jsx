import React from "react";
import { PortfolioImage, SkillsImage, WelcomeImage } from "../../assets/";

const DashboardSidebar = ({ countPortfolio, countSkill }) => {
  return (
    <div>
      <div className="flex flex-row justify-center gap-3">
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-7 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={SkillsImage}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {countSkill}
              </h5>
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
                <span className="text-third font-bold">SKILL</span> Has Mastered
              </p>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-7 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={PortfolioImage}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {countPortfolio}
              </h5>
              <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">
                <span className="text-third font-bold">PORTFOLIO</span> Has
                Created
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img src={WelcomeImage} alt="MyAdventure" />
        <h1 className="text-3xl text-center mb-3 font-bold text-gray-700 dark:text-gray-400">
          <span className="text-third font-bold">PORTFOLIO</span> YOU'VE BEEN
          CREATED END HERE
        </h1>
      </div>
    </div>
  );
};

export default DashboardSidebar;
