import { Box, BoxProps } from "@mui/material";
import React from "react";

const NotifPanelBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        padding: "10px",
        backgroundColor: "#2B2B2B",
        borderLeft: "6px solid #50E3C2",
        borderRadius: "14px",
        color: "#E0E0E0",
        boxShadow: "inset 0 0 0 1px #3A3A3A",
        transition: "all 0.25s ease",
        "&:hover": {
          backgroundColor: "#353535",
          transform: "scale(1.01)",
        },
        display: "flex",
        flexDirection: "column",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default NotifPanelBox;
