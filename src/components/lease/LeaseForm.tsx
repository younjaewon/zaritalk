import React from "react";
import styled from "styled-components";
import { ReactComponent as ClickIcon } from "@lib/assets/svg/click.svg";
import ExpenseInformation from "./ExpenseInformation";
import InputGroup from "@components/common/input/InputGroup";
import InputWithLabel from "@components/common/input/InputWithLabel";
import CheckBoxWithLabel from "@components/common/CheckBoxWithLabel";
import Button from "@components/common/Button";
import { gray } from "@lib/styles/palette";
import { useLeaseActions, useLeaseState } from "context/LeaseTypeProvider";
import { useNavigate } from "react-router-dom";

type Props = {};

const LeaseForm = (props: Props) => {
  const { leaseType, deposit, manageCost, rent, rentDueDate, checkManageCost } = useLeaseState();
  const { changeLeasePrice, changeDueDate, toggleManageCheck, resetManageCost, onSubmit } = useLeaseActions();
  const navigate = useNavigate();

  const onLeasePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = onSubmit();

    if (res?.code === "success") {
      navigate("");
    }
  };

  return (
    <Container>
      {leaseType && (
        <>
          <ExpenseInformation />
          <FormContainer onSubmit={onLeasePriceSubmit}>
            <InputFormContainer>
              <InputGroup>
                <InputWithLabel
                  title="보증금"
                  unit="만원"
                  id="deposit"
                  name="deposit"
                  value={deposit}
                  onChange={(e) => changeLeasePrice(e)}
                />
                {leaseType === "monthly" ? (
                  <InputWithLabel
                    title="월 임대료"
                    unit="만원"
                    id="rent"
                    name="rent"
                    value={rent}
                    onChange={(e) => changeLeasePrice(e)}
                  />
                ) : null}
              </InputGroup>
              <InputGroup>
                <InputWithLabel
                  title="월 관리비"
                  unit="만원"
                  id="manageCost"
                  name="manageCost"
                  checked={checkManageCost}
                  value={manageCost}
                  onChange={(e) => changeLeasePrice(e)}
                />
                <InputWithLabel
                  title="임대료 납부일"
                  unit="일"
                  id="rentDueDate"
                  name="rentDueDate"
                  value={rentDueDate}
                  onChange={(e) => changeDueDate(e)}
                />
              </InputGroup>
            </InputFormContainer>
            <CheckboxContainer>
              <CheckBoxWithLabel
                msg="관리비는 관리실에 따로 납부하거나 없습니다."
                name="checkManageCost"
                id="checkManageCost"
                isActive={checkManageCost}
                onChange={(e) => {
                  toggleManageCheck(e);
                  resetManageCost();
                }}
              />
            </CheckboxContainer>
            <Button type="submit">
              <span>금액 확인하기</span>
              <ClickIcon />
            </Button>
          </FormContainer>
          <BillInformationMsg>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</BillInformationMsg>
        </>
      )}
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
