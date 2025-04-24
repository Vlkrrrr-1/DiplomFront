import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const CustomTypography = (props: TypographyProps) => {
  return (
    <Typography
      variant="body2"
      {...props}
      sx={{
        color: "#ffffff",
        fontSize: "1.2rem",
        fontWeight: "bold",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default CustomTypography;
