import React from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "../modules/Login";
import { UserAuth } from "../utils/helper";
const PrivateRoutes = () => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to={"/dashboard-admin/home"} />;
  }
  return <LoginPage />;
};

export default PrivateRoutes;
