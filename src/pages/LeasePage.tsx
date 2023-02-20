import React from "react";
import styled from "styled-components";
import { LeaseForm, LeaseType, Title } from "../components/lease";

type Props = {};

const LeasePage = (props: Props) => {
  return (
    <Container>
      <Title />
      <LeaseType />
      <LeaseForm />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default LeasePage;
