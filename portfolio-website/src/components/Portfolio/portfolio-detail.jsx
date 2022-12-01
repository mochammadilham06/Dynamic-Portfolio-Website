import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSvg from "../../assets/svgs";
import { getPortfolio } from "../../configs/GraphQL/Query";
import Footer from "../Footer";
import { MyAvatar } from "../../assets";
const DetailPortfolio = () => {
  const params = useParams();
  const setId = params.id;
  const { data, loading } = useQuery(getPortfolio, {
    variables: { id: setId },
  });
  if (loading) {
    return <LoadingSvg />;
  }
  return (
    <>
      <div className="flex flex-row px-4 py-4">
        <Link to={"/portfolio"}>
          <button
            type="button"
            className="text-white bg-third hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
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
            <span className="sr-only">Icon description</span>
          </button>
        </Link>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            {data?.myportfolio_portfolio_by_pk.title}
          </h1>
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={data?.myportfolio_portfolio_by_pk.image}
              alt="testImage"
            />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
              >
                {data?.myportfolio_portfolio_by_pk.title}
              </a>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {data?.myportfolio_portfolio_by_pk.description}
              </p>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={MyAvatar}
                  alt="My Avatar"
                />
                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {`${data?.myportfolio_portfolio_by_pk.user_portfolio.first_name} 
                    ${data?.myportfolio_portfolio_by_pk.user_portfolio.last_name}`}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPortfolio;
