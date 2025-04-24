import React from "react";
import NavigationWrapper from "../components/layout/NavigationWrapper";
import LoginComp from "../components/mainComps/LoginComp";
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Box>
      <NavigationWrapper />
      <LoginComp />
    </Box>
  );
};

export default LoginPage;
