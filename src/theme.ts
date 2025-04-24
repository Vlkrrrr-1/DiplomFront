import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(74, 74, 110)",
      light: "rgb(208, 92, 227)",
      dark: "rgb(30, 30, 47)",
      contrastText: "rgb(0,0,0)",
    },
    secondary: {
      main: "rgb(255, 255, 255)",
    },
    background: {
      default:
        "linear-gradient(135deg, rgb(21, 21, 33) 100%, rgb(74, 74, 110) 0%)",
      paper: "rgb(30, 30, 30)",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(255, 255, 255)",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
