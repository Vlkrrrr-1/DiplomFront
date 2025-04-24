import { Box } from "@mui/material";
import React from "react";

const LoadingLogo = () => {
  return (
    <Box
      component="img"
      src="/images/logo/1.png"
      alt="Logo"
      sx={{
        height: "150px",
        animation: "spin 1s linear 3",
        "@keyframes spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      }}
    />
  );
};

export default LoadingLogo;
