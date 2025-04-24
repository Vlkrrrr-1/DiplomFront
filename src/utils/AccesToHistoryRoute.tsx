import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "..";
import { toast } from "react-toastify";

const AccessToHistoryRoute = () => {
  const { store } = useContext(Context);
  if (store.selectedPC !== "You have not selected device for analysis.") {
    return <Outlet />;
  } else {
    toast("To see history of your device, you must choose a device");
    return <Navigate to="/cards " />;
  }
};

export default AccessToHistoryRoute;
