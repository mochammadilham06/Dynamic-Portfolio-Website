import React, { useState } from "react";
import { Button, Modal, TextInput, Label, Checkbox } from "flowbite-react";
import Swal from "sweetalert2";
import UseSubscriptionSkills from "../../configs/Hooks/Operation/subscriptionQuerys";
import LoadingSvg from "../../assets/svgs";
const AddSkill = () => {
  const { skillSubscription, skillLoading, skillError } =
    UseSubscriptionSkills();

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
      <div className="flex flex-row-reverse mb-5">
        <React.Fragment>
          <Button onClick={() => {}}>Toggle modal</Button>
          <Modal show={false} size="md" popup={true} onClose={() => {}}>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required={true} />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a
                    href="/modal"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button>Log in to your account</Button>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="/modal"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment>
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

export default AddSkill;
