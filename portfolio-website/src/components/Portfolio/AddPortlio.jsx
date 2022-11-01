import React from "react";
import LoadingSvg from "../../assets/svgs";
import UseSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptonQuery";
import Swal from "sweetalert2";
const AddPortlio = () => {
  const { data, portfolioLoading, portfolioError } = UseSubscriptionPortfolio();

  if (portfolioLoading) {
    return <LoadingSvg />;
  }

  if (portfolioError) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login Failed ",
    });
  }
  return (
    <div>
      <div className="flex flex-row-reverse mb-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Portfolio!
        </button>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Author
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.myportfolio_portfolio.map((items) => (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={items.id}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {items.id}
                </th>
                <td className="py-4 px-6">{items.user_portfolio.last_name}</td>
                <td className="py-4 px-6">{items.title}</td>
                <td className="py-4 px-6">{items.description}</td>
                <td className="py-4 px-6">{items.image}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap justify-between">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddPortlio;
