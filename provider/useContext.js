"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const pathname = usePathname();
  // const [loadingBtn, setLoadingBtn] = useState(false);
  const [openToast, setOpenToast] = useState(null);
  const [toastType, setToastType] = useState("");
  const [activeFab, setActiveFab] = useState(null);

  useEffect(() => {
    if (pathname.includes("italian")) {
      setActiveFab("Italian");
    } else if (pathname.includes("american")) {
      setActiveFab("American");
    } else if (pathname.includes("thai")) {
      setActiveFab("Thai");
    } else if (pathname.includes("japanese")) {
      setActiveFab("Japanese");
    } else setActiveFab("");
  }, [pathname, activeFab]);
  return (
    <AppContext.Provider
      value={{
        openToast,
        setOpenToast,
        toastType,
        setToastType,
        activeFab,
        setActiveFab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export function useGlobalContext() {
  return useContext(AppContext);
}
