import React, { useRef } from "react";
import LoadingSvg from "../../assets/svgs";
import { storage } from "../../configs/Firebase/firebase-config";
import {
  deleteObject,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { EditAction } from "../../assets/svgs/action";
import UseUpdatePortfolio from "../../configs/Hooks/Operation/mutationUpdatePortfolio";

const ModalUpdatePortfolio = ({ data }) => {
  const { id, title, image, description } = data;

  const updatePortfolio = {
    id,
    title,
    image,
    description,
  };

  const [toggleEdit, setToggleEdit] = useState(false);
  const [imageUpdate, setImageUpdate] = useState(null);
  const [dataUpdate, setDataUpdate] = useState(updatePortfolio);
  const imageRef = useRef();

  const { updatePortfolioData, updatePortfolioLoadng, updatePortfolioError } =
    UseUpdatePortfolio();

  const handleModalEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleUpload = (imageUpdate) => {
    if (!imageUpdate) {
      updatePortfolioData({
        variables: {
          id: id,
          title: dataUpdate.title,
          description: dataUpdate.description,
          image,
        },
      });
    } else {
      const imageName = ref(storage, `files/${imageUpdate.name}`);
      const uploadTask = uploadBytesResumable(imageName, imageUpdate);

      uploadTask.then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadUrl) => {
          const fileUrl = image;
          const fileRef = ref(storage, fileUrl);
          deleteObject(fileRef).then(() => {
            updatePortfolioData({
              variables: {
                id: id,
                title: dataUpdate.title,
                description: dataUpdate.description,
                image: downloadUrl,
              },
            });
          });
        });
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "image") {
      setImageUpdate(e.target.files[0]);
    } else {
      setDataUpdate({ ...dataUpdate, [name]: value });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    handleUpload(imageUpdate);
    setDataUpdate(dataUpdate);
    setToggleEdit(!toggleEdit);
    setImageUpdate(null);
    imageRef.current.value = "";
  };

  if (updatePortfolioLoadng) {
    return <LoadingSvg />;
  }

  if (updatePortfolioError) {
    return <h1>`${updatePortfolioError.message}`</h1>;
  }
  return (
    <>
      <button
        onClick={handleModalEdit}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        <img src={EditAction} alt="edit" />
      </button>
      {toggleEdit && (
        <div
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className=" flex flex-row overflow-y-auto overflow-x-hidden fixed left-0 top-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full max-w-2xl h-full md:h-auto">
            {/* Modal content */}
            <form
              onSubmit={handleUpdate}
              className="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              {/* Modal header */}
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Portfolio
                </h3>
                <button
                  onClick={handleModalEdit}
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
                      value={dataUpdate.title}
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
                      value={dataUpdate.description}
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
                        ref={imageRef}
                        name="image"
                        onChange={handleChange}
                      />

                      <div className="flex flex-wrap w-max-[200] justify-center mt-3">
                        <img
                          src={image}
                          alt="uploaded file"
                          height={200}
                          width={200}
                        />
                      </div>
                      {/*  {progresspercent}*/}
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
    </>
  );
};

export default ModalUpdatePortfolio;
