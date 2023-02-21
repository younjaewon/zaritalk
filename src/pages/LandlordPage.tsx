import React from "react";
import styled from "styled-components";
import { Header, LandlordForm } from "@components/landlord";

const LandlordPage = () => {
  return (
    <Container>
      <Header />
      <LandlordForm />
    </Container>
  );
};

const Container = styled.div``;

export default LandlordPage;
