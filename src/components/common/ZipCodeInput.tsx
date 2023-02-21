import React, { useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@lib/assets/svg/search.svg";
import { black, gray } from "@lib/styles/palette";

type Props = {};

const ZipCodeInput = ({}: Props) => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [adress, setAdress] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangeAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdress(e.target.value);
  };

  const handleEnterAdress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setOpenPostcode(true);
    }
  };

  const handleClickOutside = (event: any) => {
    if (wrapperRef && !wrapperRef.current?.contains(event.target)) {
      setOpenPostcode(false);
    }
  };

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(true);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setAdress(data.address);
      setOpenPostcode(false);
    },
  };

  return (
    <Container ref={wrapperRef}>
      <input
        type="text"
        placeholder="살고 계신 건물주소 또는 건물명을 입력하세요."
        value={adress}
        onChange={handleChangeAdress}
        onKeyDown={handleEnterAdress}
      />
      <button type="button" onClick={handle.clickButton} className="openPoseBtn">
        <SearchIcon />
      </button>
      {openPostcode && (
        <ModalContainer>
          <DaumPostcodeEmbed
            onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
            defaultQuery={adress} // 팝업을 열때 기본적으로 입력되는 검색어
          />
        </ModalContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  height: 46px;
  margin: 8px 0;
  padding: 11px 8px 11px 12px;
  border: 1px solid ${gray[200]};
  border-radius: 4px;
  background-color: white;

  input {
    width: 100%;
    color: ${black[100]};
    line-height: 14px;

    &::placeholder {
      font-size: 14;
      color: ${gray[400]};
    }
  }

  .openPoseBtn {
    background: none;
    border: none;
    padding-top: 4px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
`;

export default ZipCodeInput;
