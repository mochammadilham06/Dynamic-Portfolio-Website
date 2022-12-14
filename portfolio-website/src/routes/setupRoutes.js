import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPortlio from "../components/Portfolio/AddPortlio";
import DashboardPage from "../modules/Dashboard";
import Home from "../modules/Home";
import LoginPage from "../modules/Login";
import NotFound from "../modules/NotFound";
import Portfolio from "../modules/Portfolio";
import SkillPage from "../modules/Skills";
import {
  Layout,
  AddSkill,
  SignUp,
  DetailSkill,
  DetailPortfolio,
} from "../components";
import { AuthContextProvider } from "../utils/helper";
import ProtectedRoutes from "./protectedRoutes";
import PrivateRoutes from "./privateRoutes";

const SetupRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Portfolio/:id" element={<DetailPortfolio />} />
        <Route path="skills" element={<SkillPage />} />
        <Route path="skills/:id" element={<DetailSkill />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/secret-login" element={<LoginPage />} />
          <Route path="/secret-signup" element={<SignUp />} />
        </Route>

        <Route
          path="/dashboard-admin/"
          element={<ProtectedRoutes>{<Layout />}</ProtectedRoutes>}
        >
          <Route path="home" index element={<DashboardPage />} />
          <Route path="portfolios" element={<AddPortlio />} />
          <Route path="skills" element={<AddSkill />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default SetupRoutes;
