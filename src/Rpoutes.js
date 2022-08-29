import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import ProjectsContainer from "./components/TSI/Projects/projectsContainer";
import LandingPage from "./components/Admin/LandingPage";

const Rpoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/main" element={<LandingPage />} />
      <Route path="/tsi/projects" element={<ProjectsContainer />} />
    </Routes>
  );
};
export default Rpoutes;
