import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "./constants/path";
import Lease from "./pages/Lease";
import Layout from "./routes/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.ROOT} element={<Lease />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
