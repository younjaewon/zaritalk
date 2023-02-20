import React from "react";
import Information from "@components/common/Information";
import styled from "styled-components";
import Title from "@components/common/Title";

type Props = {};

const ExpenseInformation = (props: Props) => {
  return (
    <Container>
      <Title title="임대비용" />
      <InformationContainer>
        <Information title="천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요." />
        <Information title="비용 입력시 고지서가 무료로 제공됩니다." />
      </InformationContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 12px;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export default ExpenseInformation;
