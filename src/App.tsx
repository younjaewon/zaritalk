import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "@constants/path";
import Layout from "@routes/Layout";
import LeasePage from "@pages/LeasePage";

import "./reset.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.ROOT} element={<LeasePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
