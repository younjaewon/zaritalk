import React, { useState } from "react";
import styled from "styled-components";
import { blue, gray } from "@lib/styles/palette";
import Title from "@components/common/Title";

type Props = {};

type LeaseCategoryType = "monthly" | "charter" | "";

const LeaseCategory = [
  {
    title: "전세",
    value: "monthly",
  },
  {
    title: "월세",
    value: "charter",
  },
];

const LeaseType = (props: Props) => {
  const [active, setActive] = useState<LeaseCategoryType>("");

  const handleChangeActive = (value: LeaseCategoryType) => {
    setActive(value);
  };

  return (
    <Container>
      <Title title="임대 유형" />
      <LeaseTypeContainer>
        {LeaseCategory.map((lease, idx) => (
          <LeaseTypeBox
            key={`${lease.value}_${idx}`}
            active={active === lease.value}
            onClick={() => handleChangeActive(lease.value as LeaseCategoryType)}
          >
            {lease.title}
          </LeaseTypeBox>
        ))}
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

export default LeaseType;
