import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { gray } from "@lib/styles/palette";

type Props = {};

// header, main, footer
const Layout = (props: Props) => {
  return (
    <Container>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: ${gray[100]};
`;

export default Layout;
