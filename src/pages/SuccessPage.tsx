import React, { useMemo } from "react";
import styled from "styled-components";
import { gray } from "@lib/styles/palette";
import { ReactComponent as HomeIcon } from "@lib/assets/svg/home.svg";
import { ReactComponent as MailIcon } from "@lib/assets/svg/mail.svg";
import { ReactComponent as Telcon } from "@lib/assets/svg/tel.svg";
import { useLeaseState } from "@context/LeaseTypeProvider";
import getRefund from "@lib/utils/getRefund";

type Props = {};

const SuccessPage = (props: Props) => {
  const { leaseType, deposit, rent, landlordAdress, manageCost, rentDueDate, startDate, endDate } = useLeaseState();
  const refund = useMemo(() => getRefund({ rent }), [rent]);

  return (
    <Container>
      <Wrapper>
        <Header>
          <HomeIcon />
          <span>{landlordAdress}</span>
        </Header>
        <InfoContainer>
          <div className="infoWrapper">
            <div className="infoGroup">
              <span className="title">임대유형</span>
              <span className="value">{leaseType === "monthly" ? "월세" : "전세"}</span>
            </div>
            <div className="infoGroup">
              <span className="title">월임대료</span>
              <span className="value">{rent}만원</span>
            </div>
          </div>
          <div className="infoWrapper">
            <div className="infoGroup">
              <span className="title">보증금</span>
              <span className="value">{deposit}만원</span>
            </div>
            <div className="infoGroup">
              <span className="title">월관리비</span>
              <span className="value">{manageCost}만원</span>
            </div>
          </div>
          <div className="infoWrapper">
            <div className="infoGroup">
              <span className="title">납부일</span>
              <span className="value">매달 {rentDueDate}일</span>
            </div>
            <div className="infoGroup">
              <span className="title">납부총액</span>
              <span className="value">
                <strong>{refund}만원</strong>
              </span>
            </div>
          </div>
          <Divider />
          <DateContainer>
            <span className="title">계약기간</span>
            <span className="value">
              {startDate} ~ {endDate}
            </span>
          </DateContainer>
        </InfoContainer>
        <LinkContainer>
          <div className="mail">
            <a href="mailto:someone@example.com">
              <MailIcon />
              임대인 문자
            </a>
          </div>
          <div className="tel">
            <a href="tel:02-1234-1234">
              <Telcon />
              임대인 전화
            </a>
          </div>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 16px;
  box-shadow: 0px 0px 7px 2px rgba(180, 180, 180, 0.05);
`;

const Wrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  padding-bottom: 12px;
`;

const Header = styled.h5`
  display: flex;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${gray[200]};
  align-items: center;

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 6px;

  .infoWrapper {
    display: flex;
  }

  .infoGroup {
    display: flex;
    flex: 1;

    .title {
      width: 50%;
      color: ${gray[400]};
    }

    .value {
      width: 50%;
    }
  }
`;

const DateContainer = styled.div`
  display: flex;
  gap: 12px;

  .title {
    width: auto;
    color: ${gray[400]};
    flex-shrink: 0;
  }

  .value {
    width: 100%;
  }
`;

const Divider = styled.div`
  margin: 16px 0;
  border-bottom: 1px solid ${gray[200]};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  text-align: center;

  div {
    width: 144px;
    height: 47px;
    border: 1px solid ${gray[600]};
    border-radius: 8px;

    a {
      display: flex;
      gap: 6px;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      color: ${gray[300]};
      font-weight: 700;
    }
  }
  .mail {
  }

  .tel {
  }
`;

export default SuccessPage;
