import { blue, gray } from "@lib/styles/palette";
import React from "react";
import styled, { css } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  unit: string;
  id: string;
  checked?: boolean;
}

const InputWithLabel = ({ title, unit, id, checked = false, ...input }: Props) => {
  return (
    <InputContainer checked={checked}>
      <label htmlFor={id}>{title}</label>
      <div>
        <input id={id} {...input} />
        <span>{unit}</span>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div<{ checked: boolean }>`
  display: flex;
  width: 100%;
  padding: 0 12px;
  background-color: white;
  border: 1px solid ${gray[200]};
  justify-content: space-between;
  align-items: center;

  label {
    color: ${gray[400]};
    flex-shrink: 0;
  }

  div {
    display: flex;

    input {
      width: 100%;
      background-color: none;

      &:focus,
      &:active {
        border: 1px solid ${blue[100]};
        outline: 1px solid ${blue[100]};
      }
    }

    span {
      flex-shrink: 0;
    }
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: ${gray[500]};
      color: ${gray[400]};

      input {
        background-color: inherit;
        color: inherit;
      }
    `}
`;
export default InputWithLabel;
