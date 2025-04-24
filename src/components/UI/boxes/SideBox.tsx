import { Box, BoxProps } from "@mui/material";
import React from "react";

interface SideBoxProps extends BoxProps {
  toggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideBox: React.FC<SideBoxProps> = ({ toggleDrawer, ...boxProps }) => {
  return (
    <Box
      {...boxProps}
      sx={{
        width: 280,
        height: "100vh",
        background: "linear-gradient(180deg, #1F1F2E 0%, #2C2C3E 100%)",
        paddingY: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...boxProps.sx,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {boxProps.children}
    </Box>
  );
};

export default SideBox;
