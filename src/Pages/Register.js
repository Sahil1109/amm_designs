import React from "react";
import {
  Grid,
  Paper,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import theme from "../Theme/Theme";
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: "#11cb5f",
//     },
//   },
// });
function Register() {
  const [title, setTitle] = React.useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper elevation={1}>
          <Grid container>
            <Grid item xs={12}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={title}
                onChange={handleChange}
              >
                <MenuItem value={"mr"}>Mr.</MenuItem>
                <MenuItem value={"ms"}>Mrs.</MenuItem>
                <MenuItem value={"mrs"}>Mrs.</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid>
              {" "}
              <TextField
                id="outlined-basic"
                label="Date of birth"
                variant="outlined"
              />
            </Grid>
            <Grid>
              {" "}
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid>
              {" "}
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
              />
            </Grid>
            <Grid>
              {" "}
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained">
            Click here
          </Button>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default Register;
