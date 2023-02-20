import React, { createContext, useContext, useMemo, useState } from "react";

export type LeaseCategoryType = "monthly" | "charter";

const LeaseTypeStateContext = createContext<LeaseCategoryType | "">("");
const LeaseTypeActionsContext = createContext<{
  changeLeaseType: (type: LeaseCategoryType) => void;
}>({
  changeLeaseType: () => {},
});

const LeaseTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [leaseType, setLeaseType] = useState<LeaseCategoryType | "">("");

  const actions = useMemo(
    () => ({
      changeLeaseType(type: LeaseCategoryType) {
        setLeaseType(type);
      },
    }),
    []
  );
  return (
    <LeaseTypeActionsContext.Provider value={actions}>
      <LeaseTypeStateContext.Provider value={leaseType}>{children}</LeaseTypeStateContext.Provider>
    </LeaseTypeActionsContext.Provider>
  );
};

export function useLeaseTypeState() {
  const value = useContext(LeaseTypeStateContext);
  if (value === undefined) {
    throw new Error("useLeaseTypeState should be used within LeaseProvider");
  }

  return value;
}

export function useLeaseTypeActions() {
  const value = useContext(LeaseTypeActionsContext);
  if (value === undefined) {
    throw new Error("useLeaseTypeState should be used within LeaseProvider");
  }

  return value;
}

export default LeaseTypeProvider;
