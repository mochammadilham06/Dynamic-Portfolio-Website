import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div>
      <div class="flex flex-row gap-3">
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full h-7 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {"Number of Skill"}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Has Mastered
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
              src="/docs/images/blog/image-4.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {"Number of Skill"}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Has Mastered
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
