import React from "react";
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom";
const DetailSkill = () => {
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-row px-4 py-4">
        <Link to={"/skills"}>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
              ></path>
            </svg>
            <span class="sr-only">Icon description</span>
          </button>
        </Link>
      </div>

      <div className="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
        <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border shadow-dark border-slate-300 dark:border-slate-600 rounded-xl">
          <div className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
            <div
              className="rounded-t-xl w-full h-64 shadow-sm bg-cover"
              style={{
                backgroundImage:
                  'url("https://apod.nasa.gov/apod/image/2208/Cartwheel_Webb_960.jpg")',
              }}
            />
            <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
              <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                {id}
              </h1>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="flex mt-4">
                <div className="flex flex-col ml-4 w-full">
                  <h2 className="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                    CREATED AT
                  </h2>
                  <span className="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                    24/08/2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailSkill;
