import { useUIStore } from "@/store/useUIStore";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const AccessToHistoryRoute = () => {
  const selectedPC = useUIStore((state) => state.selectedPC);
  if (selectedPC !== "You have not selected device for analysis.") {
    return <Outlet />;
  } else {
    toast("To see history of your device, you must choose a device");
    return <Navigate to="/cards " />;
  }
};

export default AccessToHistoryRoute;
