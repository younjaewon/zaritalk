import React from "react";
import styled from "styled-components";

import Information from "@components/common/Information";
import ZipCodeInput from "@components/common/ZipCodeInput";
import InputWithTitle from "@components/common/input/InputWithTitle";
import Button from "@components/common/Button";
import { gray } from "@lib/styles/palette";

type Props = {};

const LandlordForm = (props: Props) => {
  return (
    <Container>
      <form action="">
        <div>
          <span>거주 건물</span>
          <ZipCodeInput />
        </div>
        <Information title="과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)" />
        <InputContainer>
          <InputBlock>
            <InputWithTitle title="호실" suffix="호" placeholder="예) 101" />
            <InputWithTitle title="세입자(본인) 이름" suffix="" placeholder="예) 홍길동" />
          </InputBlock>
          <InputBlock>
            <InputWithTitle title="계약시작일" type="date" arrowIcon={true} />
            <InputWithTitle title="계약종료일" type="date" arrowIcon={true} />
          </InputBlock>
        </InputContainer>
        <Information title="정확히 모를 경우 임의로 작성 후 수정요청 하세요." />
        <InputContainer>
          <InputBlock>
            <InputWithTitle title="임대인 휴대폰 번호" placeholder="임대인(현재 집주인)휴대폰 번호를 입력해주세요." />
          </InputBlock>
        </InputContainer>
        <Information title="임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수 있습니다." />
        <SageInforMationMsg>세계 최고 AWS 보안으로 모든 정보는 안전하게 보호됩니다.</SageInforMationMsg>
        <Button type="submit">완료</Button>
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
