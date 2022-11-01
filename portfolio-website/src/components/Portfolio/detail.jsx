import React from "react";
import { Link } from "react-router-dom";
import LoadingSvg from "../../assets/svgs";
import UseNewestSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptionNewestQuery";
import UseSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptonQuery";

const PortfolioDetail = () => {
  const { data, portfolioLoading, portfolioError } = UseSubscriptionPortfolio();
  const { newesPortfolio, newestPortfolioLoading, newestPortfolioError } =
    UseNewestSubscriptionPortfolio();

  if (portfolioLoading || newestPortfolioLoading) {
    return <LoadingSvg />;
  }

  if (portfolioError || newestPortfolioError) {
    return <p>Error: Something Went Wrong</p>;
  }

  return (
    <>
      <div className="pt-11 pb-11 bg-fifth">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="uppercase font-bold text-xl text-third mb-2 lg:text-3xl">
                PORTFOLIO
              </h4>
              <h2 className="font-bold text-primary text-xl mb-4 sm:text-4xl lg:text-3xl">
                LATEST PROJECT I HAVE DONE
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            {newesPortfolio.myportfolio_portfolio.map((items) => (
              <div className="w-full px-4 lg:w-1/2" key={items.id}>
                <div className="bg-white rounded-xl shadow-dark overflow-hidden mb-10">
                  <img src={items.image} alt="programming" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <Link
                        to={"/portfolio"}
                        className="block mb-3 font-bold text-base text-dark hover:text-primary truncate"
                      >
                        {items.title}
                      </Link>
                    </h3>
                    <p className="font-normal text-primary text-base mb-6 truncate">
                      {items.description}
                    </p>
                    <p
                      className="text-center uppercase font-bold tracking-wider text-sm
                  text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                    >
                      Lets Journey
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-11 pb-11 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="uppercase font-bold text-xl text-third mb-2 lg:text-3xl">
                PORTFOLIO
              </h4>
              <h2 className="font-bold text-white text-xl mb-4 sm:text-4xl lg:text-3xl">
                <span>ANOTHER</span> PROJECT
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            {data.myportfolio_portfolio.map((items) => (
              <div className="w-full px-4 lg:w-1/2" key={items.id}>
                <div className="bg-white rounded-xl shadow-light overflow-hidden mb-10">
                  <img src={items.image} alt="programming" className="w-full" />
                  <div className="py-8 px-6">
                    <h3>
                      <a
                        href="#"
                        className="block mb-3 font-bold text-base text-dark hover:text-primary truncate"
                      >
                        {items.title}
                      </a>
                    </h3>
                    <p className="font-normal text-primary text-base mb-6 truncate">
                      {items.description}
                    </p>
                    <p className="text-center">
                      <a
                        href="#"
                        className="uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                      >
                        Lets Journey
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;