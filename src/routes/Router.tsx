import React from "react";
import { Route, Routes } from "react-router-dom";
import PATH from "@constants/path";
import Layout from "@routes/Layout";
import LeasePage from "@pages/LeasePage";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.ROOT} element={<LeasePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
