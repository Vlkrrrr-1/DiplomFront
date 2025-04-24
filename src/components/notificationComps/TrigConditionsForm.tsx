import React from "react";
import { Box, Checkbox, Typography, TextField } from "@mui/material";

interface TrigConditionsFormProps {
  name: string;
  value: number;
  isValueOn: boolean;
  setValue: (value: number) => void;
  setIsValueOn: (value: boolean) => void;
}

const TrigConditionsForm: React.FC<TrigConditionsFormProps> = ({
  name,
  value,
  isValueOn,
  setValue,
  setIsValueOn,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#1E1E1E",
        padding: "10px 14px",
        borderRadius: "10px",
        border: "1px solid #3A3A3A",
      }}
    >
      <Checkbox
        checked={isValueOn}
        onChange={() => setIsValueOn(!isValueOn)}
        sx={{
          color: "#9BE24A",
          "&.Mui-checked": {
            color: "#9BE24A",
          },
        }}
      />
      <Typography sx={{ color: "#CCCCCC", fontSize: "15px", flex: 1 }}>
        {name}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        size="small"
        variant="outlined"
        placeholder="> 80%"
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#555",
            },
            "&:hover fieldset": {
              borderColor: "#9BE24A",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9BE24A",
            },
            backgroundColor: "#2B2B2B",
          },
          width: "120px",
        }}
      />
    </Box>
  );
};

export default TrigConditionsForm;
