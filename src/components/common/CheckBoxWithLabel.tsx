import { blue } from "@lib/styles/palette";
import React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  msg: string;
  id: string;
  isActive: boolean;
}

const CheckBoxWithLabel = ({ msg, id, isActive, ...props }: Props) => {
  return (
    <Container isActive={isActive}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>{msg}</label>
    </Container>
  );
};

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 6px;
  align-items: center;
  color: ${({ isActive }) => (isActive ? blue[100] : "black")};
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
`;

export default CheckBoxWithLabel;
