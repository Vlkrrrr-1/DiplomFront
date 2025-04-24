import { CardContent, CardContentProps } from "@mui/material";
import React from "react";

const CustomCardContent = (props: CardContentProps) => {
  return (
    <CardContent
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        ...props.sx,
      }}
    ></CardContent>
  );
};

export default CustomCardContent;
