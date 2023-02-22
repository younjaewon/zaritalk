import React from "react";
import styled from "styled-components";
import InputGroup from "@components/common/input/InputGroup";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  suffix?: string;
}

const InputWithTitle = ({ title, suffix, ...input }: Props) => {
  return (
    <Container>
      <span className="title">{title}</span>
      <InputGroup>
        <Wrapper>
          <input {...input} />
          <span>{suffix}</span>
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

  .title {
    font-size: 14px;
  }
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
export default React.memo(InputWithTitle);
