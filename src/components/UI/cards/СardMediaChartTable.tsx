import { CardMedia, CardMediaProps } from "@mui/material";
import React from "react";

type Props = CardMediaProps<"img">;

const СardMediaChartTable = (props: Props) => {
  return (
    <CardMedia
      {...props}
      sx={{
        width: { md: "40%", xs: "30%" },
        height: { md: "40%", xs: "30%" },
        objectFit: "contain",
        borderRadius: "8px",
        border: "2px solid #ffffff",
        padding: "10px",
        backgroundColor: "#fff",
        ...props.sx,
      }}
    />
  );
};

export default СardMediaChartTable;
