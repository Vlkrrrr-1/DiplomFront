import React, { useEffect, useState } from "react";
import NavigationWrapper from "../components/layout/NavigationWrapper";
import MainComp from "../components/mainComps/MainComp";
import TransitionLogo from "../components/mainComps/TransitionLogo";
import { Box } from "@mui/material";

const MainPage = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogo(false), 4500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {showLogo && <TransitionLogo />}
      {!showLogo && (
        <Box sx={{ minHeight: "100vh" }}>
          <NavigationWrapper />
          <MainComp />
        </Box>
      )}
    </>
  );
};

export default MainPage;
