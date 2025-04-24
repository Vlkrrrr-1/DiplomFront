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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollbarWidth: "none",
        },
        body: {
          height: "100%",
          margin: 0,
          padding: 0,
          overflowY: "scroll",
          "-ms-overflow-style": "none",
        },
        "body::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
});

export default theme;
