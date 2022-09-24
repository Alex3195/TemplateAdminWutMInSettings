import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
