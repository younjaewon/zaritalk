import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PATH from "@constants/path";
import { blue, gray } from "@lib/styles/palette";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <p className="mainTitle">
        내 월세 환급금은 <strong className="colorBlue">최대 360만원</strong>입니다.
        <br /> 자리톡으로 환급 신청하세요 👇
      </p>
      <p className="subTitle">
        해당 금액은 확정된 것이 아니며 세액공제 자격조건,
        <br /> 세금납부 및 공제이력에 따라 변동될 수 있습니다.{" "}
      </p>
      <Link to={PATH.ROOT} className="linkText">
        임대비용 수정하기
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding: 32px 24px;
  align-items: center;
  text-align: center;
  background-color: white;

  .mainTitle {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    .colorBlue {
      color: ${blue[100]};
    }
  }

  .subTitle {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${gray[400]};
  }

  .linkText {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: ${gray[300]};
    text-decoration: underline;
  }
`;

export default Header;
