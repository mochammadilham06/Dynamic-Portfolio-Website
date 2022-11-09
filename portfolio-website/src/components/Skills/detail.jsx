import React from "react";
import { Link } from "react-router-dom";
import LoadingSvg from "../../assets/svgs";
import UseNewestSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionNewestSkills";
import UseSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionQuerys";

const SkillDetail = () => {
  const { newesSkill, newestSkillLoading, newestSkillError } =
    UseNewestSubscriptionSkills();
  const { skillSubscription, skillLoading, skillError } =
    UseSubscriptionSkills();

  if (newestSkillLoading || skillLoading) {
    return <LoadingSvg />;
  }

  if (newestSkillError || skillError) {
    return <p>There's a problem</p>;
  }

  return (
    <>
      <div className="pt-11 pb-11 bg-fifth">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-xl mx-auto text-center mb-16"
              data-aos="zoom-in"
            >
              <h4 className="uppercase font-bold text-xl text-third mb-2 lg:text-3xl">
                SKILL
              </h4>
              <h2 className="font-bold text-primary text-xl mb-4 sm:text-4xl lg:text-3xl">
                LATEST SKILL I HAVE LEARNED
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            {newesSkill.myportfolio_skills.map((items) => (
              <Link
                to={`/skills/${items.id}`}
                className="w-full px-4 lg:w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300"
                key={items.id}
              >
                <div className="bg-white rounded-xl shadow-dark overflow-hidden mb-10">
                  <img src={items.image} alt="programming" className="w-full" />
                  <div className="py-8 px-6">
                    <h3 className="block mb-3 font-bold text-base text-dark hover:text-primary truncate">
                      {items.title}
                    </h3>
                    <p className="font-normal text-primary text-base mb-6 truncate">
                      {items.description}
                    </p>
                    <p className="text-center uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80">
                      Lets Journey
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-11 pb-11 bg-primary">
        <div className="container">
          <div className="w-full px-4">
            <div
              className="max-w-xl mx-auto text-center mb-16"
              data-aos="zoom-in"
            >
              <h4 className="uppercase font-bold text-xl text-third mb-2 lg:text-3xl">
                SKILL
              </h4>
              <h2 className="font-bold text-white text-xl mb-4 sm:text-4xl lg:text-3xl">
                <span>ANOTHER</span> SKILL I HAVE LEARNED
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            {skillSubscription.myportfolio_skills.map((items) => (
              <Link
                to={`/skills/${items.id}`}
                className="w-full px-4 md:w-1/2 lg:w-1/4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300"
                key={items.id}
              >
                <div>
                  <div className="bg-white rounded-xl shadow-dark overflow-hidden mb-10">
                    <img
                      src={items.image}
                      alt="programming"
                      className="w-full"
                    />
                    <div className="py-8 px-6">
                      <div>
                        <h3 className="block mb-3 font-bold text-base text-dark hover:text-primary truncate">
                          {items.title}
                        </h3>
                      </div>
                      <p className="font-normal text-primary text-base mb-6 truncate">
                        {items.description}
                      </p>
                      <div className="text-center">
                        <h4
                          href="#"
                          className="uppercase font-bold tracking-wider text-sm text-white bg-third py-2 px-5 rounded-full hover:opacity-80"
                        >
                          Lets Journey
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillDetail;
