import { useUserStore } from "@/store/useUserStore";
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const NotActivatedPrivRoute = () => {
  const isActivated = useUserStore((state) => state.user.isActivated);
  if (isActivated) {
    return <Outlet />;
  } else {
    toast("To use website u must confirm ur email");
    return <Navigate to="/login " />;
  }
};

export default NotActivatedPrivRoute;
