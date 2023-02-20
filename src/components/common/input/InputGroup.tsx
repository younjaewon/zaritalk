import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const InputGroup = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  height: 46px;
`;

export default InputGroup;
