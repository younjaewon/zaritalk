import React, { createContext, useContext, useMemo, useState } from "react";

export type LeaseCategoryType = "monthly" | "charter";

interface LeaseStateContextType {
  leaseType: LeaseCategoryType | "";
  deposit: string;
  rent: string;
  manageCost: string;
  checkManageCost: boolean;
  rentDueDate: string;
}

interface LeaseActionType {
  changeLeaseType: (type: LeaseCategoryType) => void;
  changeLeasePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeDueDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleManageCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetManageCost: () => void;
  onSubmit: () => { code: string; value: string } | undefined;
}

const LeaseStateContext = createContext({} as LeaseStateContextType);
const LeaseActionsContext = createContext<LeaseActionType>({
  changeLeaseType: () => {},
  changeLeasePrice: () => {},
  changeDueDate: () => {},
  toggleManageCheck: () => {},
  resetManageCost: () => {},
  onSubmit: () => ({ code: "error", value: "" }),
});

const LeaseTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [leasePrice, setLeasePrice] = useState<LeaseStateContextType>({
    leaseType: "",
    deposit: "",
    rent: "",
    manageCost: "",
    checkManageCost: false,
    rentDueDate: "",
  });

  const actions: LeaseActionType = useMemo(
    () => ({
      changeLeaseType(type: LeaseCategoryType) {
        setLeasePrice((prev) => ({ ...prev, leaseType: type }));
      },
      changeLeasePrice(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setLeasePrice((prev) => ({ ...prev, [name]: value }));
      },
      changeDueDate(e: React.ChangeEvent<HTMLInputElement>) {
        const regex = /^[0-9\b]+$/;
        if (e.target.value !== "" && !regex.test(e.target.value)) {
          alert("숫자만 입력하세요.");
          return;
        }

        if (Number(e.target.value) > 31) {
          alert("1 ~ 31일 까지 입력해 주세요.");
          return;
        }

        setLeasePrice((prev) => ({ ...prev, rentDueDate: e.target.value }));
      },
      toggleManageCheck(e: React.ChangeEvent<HTMLInputElement>) {
        setLeasePrice((prev) => ({ ...prev, checkManageCost: e.target.checked }));
      },
      resetManageCost() {
        setLeasePrice((prev) => ({ ...prev, manageCost: "0" }));
      },
      onSubmit: () => {
        const { leaseType, deposit, rent, manageCost, rentDueDate, checkManageCost } = leasePrice;

        if (leaseType === "") {
          alert("임대 유형을 선택해주세요");
          //return  {code : 'error' msg: '' };
          return;
        }
        if (deposit === "" || deposit === "0") {
          alert("보증금을 입력해주세요.");
          return;
        }
        if ((leaseType === "monthly" && rent === "") || rent === "0") {
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
    }),
    [leasePrice]
  );
  return (
    <LeaseActionsContext.Provider value={actions}>
      <LeaseStateContext.Provider value={leasePrice}>{children}</LeaseStateContext.Provider>
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
