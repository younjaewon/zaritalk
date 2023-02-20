import React from "react";
import styled from "styled-components";
import { blue, gray } from "@lib/styles/palette";
import Title from "@components/common/Title";
import { useLeaseActions, useLeaseState } from "context/LeaseTypeProvider";

type Props = {};

const LeaseTab = (props: Props) => {
  const { changeLeaseType } = useLeaseActions();
  const { leaseType } = useLeaseState();

  return (
    <Container>
      <Title title="임대 유형" />
      <LeaseTypeContainer>
        <LeaseTypeBox active={leaseType === "monthly"} onClick={() => changeLeaseType("monthly")}>
          월세
        </LeaseTypeBox>
        <LeaseTypeBox active={leaseType === "charter"} onClick={() => changeLeaseType("charter")}>
          전세
        </LeaseTypeBox>
      </LeaseTypeContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 50px;
  font-size: 14px;
`;

const LeaseTypeContainer = styled.div`
  display: flex;
`;

const LeaseTypeBox = styled.button<{ active: boolean }>`
  width: 100%;
  padding: 15px 28.5px;
  border: 1px solid ${gray[200]};
  border-radius: 3px 0px 0px 3px;
  background-color: ${({ active }) => (active ? blue[100] : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  text-align: center;
`;

export default LeaseTab;
