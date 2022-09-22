import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
  typography: {
    h1: {
      fontSize: 25,
    },
    h2: {
      fontSize: 18,
    },
  },
});

export { theme };
