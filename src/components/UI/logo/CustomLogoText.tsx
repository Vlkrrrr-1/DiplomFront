import { Box, BoxProps } from "@mui/material";
import React from "react";

const CustomLogoText = (props: BoxProps) => {
  return (
    <Box
      {...props}
      component="img"
      src="/images/logo/3.png"
      alt="Logo"
      sx={{
        height: { md: "100px", xs: "65px" },
        marginLeft: { md: "20px", xs: "5px" },
        ...props.sx,
      }}
    />
  );
};

export default CustomLogoText;
