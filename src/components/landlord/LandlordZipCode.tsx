import React from "react";
import ZipCodeInput from "@components/common/ZipCodeInput";
import Information from "@components/common/Information";

type Props = {};

const LandlordZipCode = (Props: Props) => {
  return (
    <div>
      <div>
        <span>거주 건물</span>
        <ZipCodeInput maxLength={30} />
      </div>
      <Information title="과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)" />
    </div>
  );
};

export default LandlordZipCode;
