import { createMuiTheme } from "@material-ui/core/styles";
import { color } from "./Color";
const theme = createMuiTheme({
  palette: {
    common: {
      black: color.black,
    },
    text: {
      primary: color.primary,
    },
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
    grey: {
      300: color.gray,
    },
  },
});
export default theme;
