import React from "react";
import styled from "styled-components";
import { LeaseForm, LeaseTab, Title } from "../components/lease";

type Props = {};

const LeasePage = (props: Props) => {
  return (
    <Container>
      <Title />
      <LeaseTab />
      <LeaseForm />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default LeasePage;
