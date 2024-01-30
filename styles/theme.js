"use client";
import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#047857",
      light: "#fff",
      dark: "#047656",
      contrastText: "#000",
    },
    secondary: {
      main: "#212121",
    },
  },
  typography: {
    fontFamily: "Outfit, sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    htmlFontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#047857",
          color: "#fff",
          textTransform: "none",
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#000",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
