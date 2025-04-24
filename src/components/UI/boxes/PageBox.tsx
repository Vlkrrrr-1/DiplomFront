import { Box, BoxProps } from "@mui/material";
import React from "react";

const PageBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
        padding: "40px 0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default PageBox;
