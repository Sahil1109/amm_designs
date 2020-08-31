import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#10c71c",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    secondary: {
      light: "#c2c1be",
      main: "#adaca6",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    tertiary: {
      main: "#ed930c",
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.05,
  },
});
export default theme;
