import { Card, CardProps } from "@mui/material";
import React from "react";

const CardChartTable = (props: CardProps) => {
  return (
    <Card
      sx={{
        width: 600,
        height: { md: 200, xs: "90%" },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        },
        background: "rgb(140, 0, 255)",
        padding: "20px",
        ...props.sx,
      }}
    >
      {props.children}
    </Card>
  );
};

export default CardChartTable;
