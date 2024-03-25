import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FC760C",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#FC760C",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "#FFFFFF",
          textTransform: "capitalize",
        }),
      },
    },
  },
});

export default theme;
