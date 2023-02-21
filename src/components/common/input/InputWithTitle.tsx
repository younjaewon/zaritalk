import React from "react";
import styled from "styled-components";
import InputGroup from "@components/common/input/InputGroup";
import { ReactComponent as LeftArrowIcon } from "@lib/assets/svg/leftArrow.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  suffix?: string;
  arrowIcon?: boolean;
}

const InputWithTitle = ({ title, suffix, arrowIcon, ...input }: Props) => {
  return (
    <Container>
      <span>{title}</span>
      <InputGroup>
        <Wrapper>
          <input {...input} />
          <span>{suffix}</span>
          {arrowIcon && <LeftArrowIcon />}
        </Wrapper>
      </InputGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 12px;
  align-items: center;

  input {
    width: 100%;
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`;
export default InputWithTitle;
