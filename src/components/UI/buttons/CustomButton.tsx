import { Button, ButtonProps } from "@mui/material";
import React from "react";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "rgb(30, 30, 47)",
        color: "white",
        padding: "12px 24px",
        fontSize: { md: "1.2rem", xs: "0.8rem" },
        "&:hover": {
          backgroundColor: "rgb(74, 74, 110)",
        },
        marginTop: 3,
        ...props.sx,
      }}
      {...props}
    >
      Find out PC data
    </Button>
  );
};

export default CustomButton;
