import React, { useState } from "react";
import LoginPicture from "../../assets/images/LoginPict.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../utils/helper";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const HANDLESUBMIT = async (e) => {
    e.preventDefault();
    try {
      let timerInterval;
      Swal.fire({
        title: "Checking",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      await signIn(email, password);
      Swal.fire("Success", "You Have been directed to Dashboard!", "success");
      navigate("/dashboard-admin/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Failed ",
      });
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <Link to={"/"}>
              <img src={LoginPicture} className="w-full" alt="Login" />
            </Link>
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="font-bold text-2xl text-primary text-center mb-5 ">
              LOGIN
            </h1>
            <form onSubmit={HANDLESUBMIT}>
              <div className="mb-6">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/*<span className="text-red-600">{errorMsg.username}</span>*/}
              </div>

              <div className="mb-6">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="inline-block px-7 py-3 bg-primary text-white font-medium text-md leading-snug uppercase rounded-lg shadow-md hover:bg-slate-800 hover:text-white focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
            </form>
          </div>
          <div className="pt-6">
            <p className="font-medium text-xs text-slate-500 text-center tracking-wider">
              ©Copyright 2022.
              <a
                href="https://github.com/mochammadilham06/"
                className="hover:text-secondary font-bold text-third"
              >
                Mochammad Ilham Maulana.
              </a>
              All right reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
