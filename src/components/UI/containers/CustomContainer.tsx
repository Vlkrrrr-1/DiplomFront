import { Container, ContainerProps } from "@mui/material";
import React from "react";

const CustomContainer = (props: ContainerProps) => {
  return (
    <Container
      maxWidth="lg"
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        height: "100%",
        ...props.sx,
      }}
    >
      {props.children}
    </Container>
  );
};

export default CustomContainer;
