import React from "react";
import styled from "styled-components";
import Information from "@components/common/Information";
import InputWithTitle from "@components/common/input/InputWithTitle";
import Button from "@components/common/Button";
import { gray } from "@lib/styles/palette";
import LandlordZipCode from "./LandlordZipCode";
import { useLeaseActions, useLeaseState } from "@context/LeaseTypeProvider";
import { useNavigate } from "react-router-dom";
import PATH from "@constants/path";

type Props = {};

const LandlordForm = (props: Props) => {
  const { landlordAdress, landlordName, landlordPhone, landlordRoom, startDate, endDate } = useLeaseState();
  const { changeLeaseState, changeAddress, onSubmit } = useLeaseActions();
  const navigate = useNavigate();

  const onLandlordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = onSubmit();

    if (!res) return;

    // API 통신
    navigate(PATH.SUCCESS);
  };

  return (
    <Container>
      <form onSubmit={onLandlordSubmit}>
        <LandlordZipCode onChange={changeAddress} />
        <InputContainer>
          <InputBlock>
            <InputWithTitle
              title="호실"
              suffix="호"
              placeholder="예) 101"
              name="landlordRoom"
              value={landlordRoom}
              onChange={(e) => changeLeaseState(e)}
              maxLength={20}
            />
            <InputWithTitle
              title="세입자(본인) 이름"
              suffix=""
              placeholder="예) 홍길동"
              name="landlordName"
              value={landlordName}
              onChange={(e) => changeLeaseState(e)}
              maxLength={20}
            />
          </InputBlock>
          {landlordAdress && landlordRoom && landlordName && (
            <>
              <InputBlock>
                <InputWithTitle
                  title="계약시작일"
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => changeLeaseState(e)}
                />
                <InputWithTitle
                  title="계약종료일"
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={(e) => changeLeaseState(e)}
                />
              </InputBlock>
            </>
          )}
        </InputContainer>
        {landlordAdress && landlordName && landlordRoom && startDate && endDate && (
          <>
            <Information title="정확히 모를 경우 임의로 작성 후 수정요청 하세요." />
            <InputContainer>
              <InputBlock>
                <InputWithTitle
                  title="임대인 휴대폰 번호"
                  placeholder="임대인(현재 집주인)휴대폰 번호를 입력해주세요."
                  name="landlordPhone"
                  value={landlordPhone}
                  onChange={(e) => changeLeaseState(e)}
                />
              </InputBlock>
            </InputContainer>
            <Information title="임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수 있습니다." />
            <SageInforMationMsg>세계 최고 AWS 보안으로 모든 정보는 안전하게 보호됩니다.</SageInforMationMsg>
            <Button type="submit">
              <span>완료</span>
            </Button>
          </>
        )}
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 16px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBlock = styled.div`
  display: flex;
  margin-top: 24px;
`;

const SageInforMationMsg = styled.p`
  display: flex;
  margin-top: 24px;
  margin-bottom: 12px;
  text-align: center;
  justify-content: center;
  font-size: 12px;
  line-height: 18px;
  color: ${gray[300]};
`;

export default LandlordForm;
