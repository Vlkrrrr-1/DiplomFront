import { Box, BoxProps } from "@mui/material";
import React from "react";

const CustomGrid = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
        columnGap: "250px",
        rowGap: "50px",
        justifyItems: "center",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default CustomGrid;
