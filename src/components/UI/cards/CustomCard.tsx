import { Card, CardProps } from "@mui/material";
import React from "react";

const CustomCard = (props: CardProps) => {
  return (
    <Card
      sx={{
        width: 320,
        maxHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "background 0.5s ease-in-out",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Card>
  );
};

export default CustomCard;
