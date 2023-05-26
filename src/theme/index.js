import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#4D4D4D",
    },
    secondary: {
      main: "#800080",
    },
    customColor1: {
      main: "'linear-gradient(270deg, #800080 0%, #FF864C 100%)'",
    },
    customColor2: {
      main: "#000000",
    },
    customColor3: {
      main: "#EEAEAE",
    },
  },
  typography: {
    t1: {
      fontSize: "32px",
      fontWeight: "500",
      fontFamily: "Poppins",
      lineHeight: "48px",
    },
    h1: {
      fontSize: "32px",
      fontWeight: "700",
      fontFamily: "Poppins",
      lineHeight: "36px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      fontFamily: "Poppins",
      lineHeight: "36px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "500",
      fontFamily: "Poppins",
      lineHeight: "24px",
    },
    h4: {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Poppins",
      lineHeight: "24px",
    },
    h5: {
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Poppins",
      lineHeight: "21px",
    },
    v1: {
      fontSize: "20px",
      fontWeight: "500",
      fontFamily: "Poppins",
      lineHeight: "30px",
    },
    v2: {
      fontFamily: "Poppins",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "123.5%",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});
export default theme;
