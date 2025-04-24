import { Button, ButtonProps } from "@mui/material";
import React from "react";

const CardButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        marginTop: "15px",
        backgroundColor: "#ffffff",
        color: "#333",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};

export default CardButton;
