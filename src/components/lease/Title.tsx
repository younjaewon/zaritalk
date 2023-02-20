import React from "react";
import styled from "styled-components";

type Props = {};

const Title = (props: Props) => {
  return (
    <Container>
      <h3>
        전월세 비용을 입력하시면 <br />내 월세 환급금을 알려드려요 👇
      </h3>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export default Title;
