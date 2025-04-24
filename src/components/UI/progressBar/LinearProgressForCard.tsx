import { LinearProgress, LinearProgressProps } from "@mui/material";
import React from "react";

const LinearProgressForCard = (props: LinearProgressProps) => {
  return (
    <LinearProgress
      {...props}
      sx={{
        width: "100%",
        marginTop: "15px",
        height: "10px",
        borderRadius: "5px",
        backgroundColor: "#f5f5f5",
        "& .MuiLinearProgress-bar": {
          borderRadius: "5px",
        },
      }}
    />
  );
};

export default LinearProgressForCard;
