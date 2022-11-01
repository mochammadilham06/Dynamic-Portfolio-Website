import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../utils/helper";

const ProtectedRoutes = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={"/secret-login"} />;
  }
  return children;
};

export default ProtectedRoutes;
