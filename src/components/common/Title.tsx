import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Container>{title}</Container>;
};

const Container = styled.div`
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export default Title;
