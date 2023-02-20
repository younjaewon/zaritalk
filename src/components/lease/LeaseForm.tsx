import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ClickIcon } from "@lib/assets/svg/click.svg";
import ExpenseInformation from "./ExpenseInformation";
import InputGroup from "@components/common/input/InputGroup";
import InputWithLabel from "@components/common/input/InputWithLabel";
import CheckBoxWithLabel from "@components/common/CheckBoxWithLabel";
import Button from "@components/common/Button";
import { gray } from "@lib/styles/palette";

type Props = {};

const LeaseForm = (props: Props) => {
  const [deposit, setDeposit] = useState("");
  const [rent, setRent] = useState("");
  const [manageCost, setManageCost] = useState("");
  const [rentDueDate, setRentDueDate] = useState("");

  const [checkManageCost, setCheckManageCost] = useState(false);

  const handleChangeCheckManageCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckManageCost(e.target.checked);
    setManageCost("0");
  };

  const handleChangeManageCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManageCost(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Container>
      <ExpenseInformation />
      <FormContainer>
        <InputFormContainer>
          <InputGroup>
            <InputWithLabel title="보증금" unit="만원" id="deposit" />
            <InputWithLabel title="월 임대료" unit="만원" id="rent" />
          </InputGroup>
          <InputGroup>
            <InputWithLabel title="월 관리비" unit="만원" id="manageCost" checked={checkManageCost} />
            <InputWithLabel title="임대료 납부일" unit="일" id="rentDueDate" />
          </InputGroup>
        </InputFormContainer>
        <CheckboxContainer>
          <CheckBoxWithLabel
            msg="관리비는 관리실에 따로 납부하거나 없습니다."
            name="checkManageCost"
            id="checkManageCost"
          />
        </CheckboxContainer>
        <Button type="submit">
          금액 확인하기 <ClickIcon />
        </Button>
      </FormContainer>
      <BillInformationMsg>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</BillInformationMsg>
    </Container>
  );
};

const Container = styled.div`
  font-size: 14px;
`;

const FormContainer = styled.form``;

const InputFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 17px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 35px;
`;

const BillInformationMsg = styled.p`
  display: flex;
  margin-top: 11px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  line-height: 18px;
  color: ${gray[300]};
`;

export default LeaseForm;
