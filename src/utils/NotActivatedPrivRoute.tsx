import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "..";
import { toast } from "react-toastify";

const NotActivatedPrivRoute = () => {
  const { store } = useContext(Context);
  if (store.user.isActivated) {
    return <Outlet />;
  } else {
    toast("To use website u must confirm ur email");
    return <Navigate to="/login " />;
  }
};

export default NotActivatedPrivRoute;
