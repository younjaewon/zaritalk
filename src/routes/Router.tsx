import React from "react";
import { Route, Routes } from "react-router-dom";
import PATH from "@constants/path";
import Layout from "@routes/Layout";
import LeasePage from "@pages/LeasePage";
import LandlordPage from "@pages/LandlordPage";
import SuccessPage from "@pages/SuccessPage";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.ROOT} element={<LeasePage />} />
        <Route path={PATH.LANDLORD} element={<LandlordPage />} />
        <Route path={PATH.SUCCESS} element={<SuccessPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
