import React from "react";

import Router from "@routes/Router";

import "./reset.css";
import LeaseTypeProvider from "context/LeaseTypeProvider";

function App() {
  return (
    <React.Fragment>
      <LeaseTypeProvider>
        <Router />
      </LeaseTypeProvider>
    </React.Fragment>
  );
}

export default App;
