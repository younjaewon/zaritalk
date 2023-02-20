import React from "react";
import styled from "styled-components";
import { LeaseForm, LeaseTab, Header } from "../components/lease";

const LeasePage = () => {
  return (
    <Container>
      <Header />
      <LeaseTab />
      <LeaseForm />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default LeasePage;
