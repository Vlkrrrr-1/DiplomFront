import React from "react";
import NavigationWrapper from "../components/layout/NavigationWrapper";
import { Box } from "@mui/material";
import CardsComp from "../components/mainComps/CardsComp";

const PageWithCards = () => {
  return (
    <Box>
      <NavigationWrapper />
      <CardsComp />
    </Box>
  );
};

export default PageWithCards;
