import React from "react";
import LoadingSvg from "../../assets/svgs";
import { Helmet } from "react-helmet";
import { storage } from "../../configs/Firebase/firebase-config";
import {
  deleteObject,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import UseSubscriptionPortfolio from "../../configs/Hooks/Operation/subscriptonQuery";
import Swal from "sweetalert2";
import { useState } from "react";
import UseDeletePortfolio from "../../configs/Hooks/Operation/mutationDeletePortfolio";
import UseCreatePortfolio from "../../configs/Hooks/Operation/mutationInsertPortfolio";
import { TrashAction } from "../../assets/svgs/action";
import ModalUpdatePortfolio from "./modalUpdatePortfolio";

const portfolio = {
  title: "",
  description: "",
  image: "",
};
const AddPortlio = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [dataPortfolio, setDataPortfolio] = useState(portfolio);
  const [toggle, setToggle] = useState(false);

  //Subscription
  const { data, portfolioLoading, portfolioError } = UseSubscriptionPortfolio();

  //Mutation
  const { deletePorto, deleteLoading } = UseDeletePortfolio();
  const { createPortfolioData, createPortfolioLoading } = UseCreatePortfolio();

  //All Handle
  const handleChange = (e) => {
    setDataPortfolio({
      ...dataPortfolio,
      [e.target.name]: e.target.value,
    });
  };
  const HANDLECHANGEFIREBASE = (e) => {
    e.preventDefault();
    const file = e.target?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  const handleModal = () => {
    setToggle(!toggle);
  };

  if (portfolioLoading || deleteLoading || createPortfolioLoading) {
    return <LoadingSvg />;
  }

  if (portfolioError) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Data is not found ",
    });
  }

  const HANDLEDELETE = (id, image) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        cancelButton:
          "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          try {
            const fileUrl = image;
            const fileRef = ref(storage, fileUrl);
            deleteObject(fileRef).then(() => {
              deletePorto({
                variables: {
                  id: id,
                },
                onCompleted: () => {
                  Swal.fire({
                    icon: "success",
                    title: "Deleted Data Completed",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                },
              });
            });
          } catch (error) {
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Delete is Failed ",
            });
          }
        }
      });
  };
  const HANDLECREATE = (e) => {
    e.preventDefault();
    handleModal();
    try {
      createPortfolioData({
        variables: {
          objects: {
            title: dataPortfolio.title,
            description: dataPortfolio.description,
            image: imgUrl,
          },
        },
        onCompleted: () => {
          Swal.fire({
            icon: "success",
            title: "Portfolio Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard-Portfolios</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="flex flex-row-reverse mb-5">
        <button
          onClick={handleModal}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Portfolio!
        </button>
      </div>

      <div className="overflow-x-auto overflow-y-auto relative shadow-md sm:rounded-lg">
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
              <th scope="col" className="py-3 px-6 text-center">
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
                  className="py-4 px-6 font-medium text-gray-900 text-clip"
                >
                  {items.id}
                </th>
                <td className="py-4 px-6">{items.user_portfolio.last_name}</td>
                <td className="py-4 px-6">{items.title}</td>
                <td className="py-4 px-6">{items.description}</td>
                <td className="py-4 px-6">
                  <img src={items.image} alt="Portfolio" />
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-row justify-between gap-4">
                    <ModalUpdatePortfolio data={items} />
                    <button
                      onClick={() => HANDLEDELETE(items.id, items.image)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <img src={TrashAction} alt="delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {toggle && (
          <div
            id="editUserModal"
            tabIndex={-1}
            aria-hidden="true"
            className="flex flex-row overflow-y-auto overflow-x-hidden fixed top-0  left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full max-w-2xl h-full md:h-auto">
              {/* Modal content */}
              <form
                onSubmit={HANDLECREATE}
                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
              >
                {/* Modal header */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add Portfolio
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
                        placeholder="Insert Description"
                        onChange={handleChange}
                        required
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
                        placeholder="Insert Description"
                        onChange={handleChange}
                        required
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
                          name="image"
                          onChange={HANDLECHANGEFIREBASE}
                        />
                        {!imgUrl && (
                          <div className="flex flex-wrap w-max-[200px]">
                            <div
                              className="text-base font-medium text-primary"
                              style={{ width: `${progresspercent}%` }}
                            >
                              {progresspercent}%
                            </div>
                          </div>
                        )}
                        {imgUrl && (
                          <div className="flex flex-wrap w-max-[200] justify-center mt-3">
                            <img
                              src={imgUrl}
                              alt="uploaded file"
                              height={200}
                              width={200}
                            />
                          </div>
                        )}
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
                    Add Portfolio
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

export default AddPortlio;
