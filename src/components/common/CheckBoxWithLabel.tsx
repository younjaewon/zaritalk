import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  msg: string;
  id: string;
}

const CheckBoxWithLabel = ({ msg, id, ...props }: Props) => {
  return (
    <Container>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{msg}</label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export default CheckBoxWithLabel;
