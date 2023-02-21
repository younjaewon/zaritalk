import React from "react";
import styled from "styled-components";

import { ReactComponent as InforIcon } from "@lib/assets/svg/infor.svg";
import { gray } from "@lib/styles/palette";

type Props = {
  title: string;
};

const Information = ({ title }: Props) => {
  return (
    <Container>
      <InforIcon /> <span className="msg">{title}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 4px;
  font-size: 12px;
  color: ${gray[300]};

  .msg {
    line-height: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
`;

export default Information;
