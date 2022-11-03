import React, { useState } from "react";
import Swal from "sweetalert2";
import UseSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionQuerys";
import LoadingSvg from "../../assets/svgs";
const AddSkill = () => {
  const { skillSubscription, skillLoading, skillError } =
    UseSubscriptionSkills();
  const [toggle, setToggle] = useState(false);

  const handleModal = () => {
    setToggle(!toggle);
  };

  if (skillLoading) {
    return <LoadingSvg />;
  }

  if (skillError) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Login Failed ",
    });
  }

  return (
    <div>
      <div className="flex flex-row-reverse mb-3">
        <button
          onClick={handleModal}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Skill
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
            {skillSubscription.myportfolio_skills.map((items) => (
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
                <td className="py-4 px-6">{items.user.first_name}</td>
                <td className="py-4 px-6">{items.title}</td>
                <td className="py-4 px-6">{items.description}</td>
                <td className="py-4 px-6">{items.image}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-wrap justify-between">
                    <button
                      onClick={() => console.log(items.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => console.log(items.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Edit user modal */}
        {toggle && (
          <div
            id="editUserModal"
            tabIndex={-1}
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-0  left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <form
                action="#"
                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
              >
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add Skills
                  </h3>
                  <button
                    onClick={handleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="editUserModal"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="span-2 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Bonnie"
                        required=""
                      />
                    </div>
                    <div className="span-2 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Green"
                        required=""
                      />
                    </div>
                    <div className="span-2 sm:col-span-3">
                      <>
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          htmlFor="file_input"
                        >
                          Upload file
                        </label>
                        <input
                          className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                      </>
                    </div>
                  </div>
                </div>

                {/* Modal footer */}
                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Skill
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddSkill;
