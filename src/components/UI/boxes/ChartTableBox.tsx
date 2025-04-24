import { Box, BoxProps } from "@mui/material";
import React from "react";

const ChartTableBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "rgb(224, 224, 224)",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: { md: "100%", xs: "50%" },
        overflow: "hidden",
        textAlign: "center",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default ChartTableBox;
