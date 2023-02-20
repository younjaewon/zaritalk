import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

// header, footer
const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Layout;
