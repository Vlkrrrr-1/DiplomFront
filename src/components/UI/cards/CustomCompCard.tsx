import React from "react";
import CustomCard from "./CustomCard";
import { CardProps } from "@mui/material";

const CustomCompCard = (props: CardProps) => {
  return (
    <CustomCard
      {...props}
      sx={{
        height: 350,
        scrollSnapAlign: "center",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c3e)",
        transition: "all 0.3s ease-in-out",
        borderRadius: "16px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.35)",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.5)",
        },
        ...props.sx,
      }}
    >
      {props.children}
    </CustomCard>
  );
};

export default CustomCompCard;
