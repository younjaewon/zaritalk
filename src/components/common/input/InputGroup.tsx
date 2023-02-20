import React from "react";
import styled from "styled-components";
import { gray } from "@lib/styles/palette";

type Props = {
  children: React.ReactNode;
};

const InputGroup = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  height: 46px;
  background-color: white;
  border: 1px solid ${gray[200]};
  border-radius: 4px;
`;

export default InputGroup;
