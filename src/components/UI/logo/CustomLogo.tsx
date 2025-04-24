import { Box, BoxProps } from "@mui/material";

const CustomLogo = (props: BoxProps) => {
  return (
    <Box
      {...props}
      component="img"
      src="/images/logo/1.png"
      alt="Logo"
      sx={{
        height: { md: "150px", xs: "75px" },
        animation: "spin 1s linear 3",
        "@keyframes spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        ...props.sx,
      }}
    />
  );
};

export default CustomLogo;
