import React, { createContext, useContext, useMemo, useState } from "react";
import REG_EX from "@constants/regEx";

export type LeaseCategoryType = "monthly" | "charter";

interface LeaseStateContextType {
  leaseType: LeaseCategoryType | "";
  deposit: string;
  rent: string;
  manageCost: string;
  checkManageCost: boolean;
  rentDueDate: string;
  landlordAdress: string;
  landlordRoom: string;
  landlordName: string;
  startDate: string;
  endDate: string;
  landlordPhone: string;
}

interface LeaseActionType {
  changeLeaseType: (type: LeaseCategoryType) => void;
  changeLeaseState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeDueDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeAddress: (address: string) => void;
  toggleManageCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetManageCost: () => void;
  onCheck: () => { code: string; value: string } | undefined;
  onSubmit: () => boolean | undefined;
}

const LeaseStateContext = createContext({} as LeaseStateContextType);
const LeaseActionsContext = createContext<LeaseActionType>({
  changeLeaseType: () => {},
  changeLeaseState: () => {},
  changeDueDate: () => {},
  changeAddress: () => {},
  toggleManageCheck: () => {},
  resetManageCost: () => {},
  onCheck: () => ({ code: "error", value: "" }),
  onSubmit: () => false,
});

const LeaseTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [leaseState, setLeaseState] = useState<LeaseStateContextType>({
    leaseType: "",
    deposit: "",
    rent: "",
    manageCost: "",
    checkManageCost: false,
    rentDueDate: "",
    landlordAdress: "",
    landlordName: "",
    landlordPhone: "",
    landlordRoom: "",
    startDate: "",
    endDate: "",
  });

  const actions: LeaseActionType = useMemo(
    () => ({
      changeLeaseType(type: LeaseCategoryType) {
        setLeaseState((prev) => ({ ...prev, leaseType: type }));
      },
      changeLeaseState(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        const numberStateArray = ["deposit", "rent", "manageCost", "rentDueDate", "landlordPhone"];

        // 작성하다 맨 첫글자 입력시
        if (value === "") {
          setLeaseState((prev) => ({ ...prev, [name]: value }));
          return;
        }

        if (numberStateArray.includes(name) && !REG_EX.number(value)) {
          return;
        }

        setLeaseState((prev) => ({ ...prev, [name]: value }));
      },
      changeDueDate(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        if (value !== "" && !Number(value)) {
          alert("숫자만 입력하세요.");
          return;
        }

        if (Number(value) > 31) {
          alert("1 ~ 31일 까지 입력해 주세요.");
          return;
        }

        setLeaseState((prev) => ({ ...prev, [name]: value }));
      },
      changeAddress: (address: string) => {
        setLeaseState((prev) => ({ ...prev, landlordAdress: address }));
      },
      toggleManageCheck(e: React.ChangeEvent<HTMLInputElement>) {
        setLeaseState((prev) => ({ ...prev, checkManageCost: e.target.checked }));
      },
      resetManageCost() {
        setLeaseState((prev) => ({ ...prev, manageCost: "0" }));
      },
      onCheck: () => {
        const { leaseType, deposit, rent, manageCost, rentDueDate, checkManageCost } = leaseState;

        if (leaseType === "") {
          alert("임대 유형을 선택해주세요");
          //return  {code : 'error' msg: '' };
          return;
        }
        if (deposit === "") {
          alert("보증금을 입력해주세요.");
          return;
        }
        if (leaseType === "monthly" && rent === "") {
          alert("월 임대료를 선택해주세요.");
          return;
        }
        if ((!checkManageCost && manageCost === "0") || manageCost === "") {
          alert("월 관리비를 입력해주세요.");
          return;
        }

        if (rentDueDate === "" || rentDueDate === "0") {
          alert("임대료 납부일을 입력해주세요.");
          return;
        }

        return { code: "success", value: "성공적으로 비용이 저장 되었습니다." };
      },
      onSubmit: () => {
        const { landlordAdress, landlordName, landlordPhone, landlordRoom, startDate, endDate } = leaseState;

        if (landlordAdress === "") {
          alert("주소를 입력해주세요.");
          return;
        }

        if (landlordRoom === "") {
          alert("호실을 입력해주세요.");
          return;
        }

        if (landlordName === "") {
          alert("이름을 입력해주세요.");
          return;
        }

        if (startDate === "" || endDate === "") {
          alert("날자를 선택해주세요.");
          return;
        }

        if (landlordPhone === "") {
          alert("핸드폰 번호를 입력해주세요.");
          return;
        }

        if (!REG_EX.phone(landlordPhone)) {
          alert("핸드폰 형식을 맞춰 주세요. - 제외 10~11자");
          return;
        }

        return true;
      },
    }),
    [leaseState]
  );
  return (
    <LeaseActionsContext.Provider value={actions}>
      <LeaseStateContext.Provider value={leaseState}>{children}</LeaseStateContext.Provider>
    </LeaseActionsContext.Provider>
  );
};

export function useLeaseState() {
  const value = useContext(LeaseStateContext);
  if (value === undefined) {
    throw new Error("useLeaseTypeState should be used within LeaseProvider");
  }

  return value;
}

export function useLeaseActions() {
  const value = useContext(LeaseActionsContext);
  if (value === undefined) {
    throw new Error("useLeaseTypeState should be used within LeaseProvider");
  }

  return value;
}

export default LeaseTypeProvider;
