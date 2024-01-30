"use client";
import React from "react";
import { useGlobalContext } from "@/provider/useContext";
import Toast from "./components/servers/toast";
import Popular from "./components/clients/popular";

export default function Home() {
  const { openToast, setOpenToast, toastType } = useGlobalContext();
  console.log("toastType2", toastType);
  return (
    <>
      <Popular />
      <Toast
        openToast={openToast}
        setOpenToast={setOpenToast}
        toastType={toastType}
      />
    </>
  );
}
